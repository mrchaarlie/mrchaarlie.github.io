import { useEffect, useRef } from 'react'


const DOT_COLOR = 'rgba(95, 95, 91, 0.12)';
const PASSIVE_SPHERE_RADIUS = 300
const PASSIVE_SPHERE_AMPLITUDE = 3

// Grid and interaction configuration
const GRID_CELL = 15
const CURSOR_INFLUENCE_PX = 150
const MAX_CURSOR_DISPLACEMENT_PX = 10
const SPHERE_SPEED_MULTIPLIER = 1.6
const SPHERE_EDGE_MARGIN_FACTOR = 0.05

// Deterministic pseudo-random generator
function mulberry32(seed: number) {
    let t = seed >>> 0
    return function () {
        t += 0x6D2B79F5
        let r = Math.imul(t ^ (t >>> 15), 1 | t)
        r ^= r + Math.imul(r ^ (r >>> 7), 61 | r)
        return ((r ^ (r >>> 14)) >>> 0) / 4294967295
    }
}

// Elliptical radial peak definition for cartographic dot sizing
type EllipticalPeak = {
    centerX: number
    centerY: number
    amplitude: number
    radiusX: number
    radiusY: number
    rotation: number // radians
}

function generateEllipticalPeaks(width: number, height: number, rand: () => number): EllipticalPeak[] {
    const numPeaks = 3 + Math.floor(rand() * 3)
    const peaks: EllipticalPeak[] = []
    for (let i = 0; i < numPeaks; i++) {
        const margin = 0.15
        const cx = (margin + rand() * (1 - 2 * margin)) * width
        const cy = (margin + rand() * (1 - 2 * margin)) * height
        const amp = 0.7 + rand() * 0.5
        const rx = (0.28 + rand() * 0.22) * Math.min(width, height)
        const ry = rx * (0.6 + rand() * 0.8)
        const rot = rand() * Math.PI
        peaks.push({ centerX: cx, centerY: cy, amplitude: amp, radiusX: rx, radiusY: ry, rotation: rot })
    }
    return peaks
}

function evaluateEllipticalField(x: number, y: number, peaks: EllipticalPeak[]): number {
    // Sum of elliptical gaussian bumps (no procedural noise)
    let value = 0
    for (const p of peaks) {
        const cos = Math.cos(p.rotation)
        const sin = Math.sin(p.rotation)
        const dx = x - p.centerX
        const dy = y - p.centerY
        const rx = (dx * cos + dy * sin) / p.radiusX
        const ry = (-dx * sin + dy * cos) / p.radiusY
        const r2 = rx * rx + ry * ry
        value += p.amplitude * Math.exp(-r2)
    }
    return value
}


export default function BackgroundTopo() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null)

    type Dot = { baseX: number; baseY: number; radius: number }
    const dotsRef = useRef<Dot[]>([])
    const mouseRef = useRef<{ x: number; y: number } | null>(null)
    const rafRef = useRef<number | null>(null)
    const sphereRef = useRef<{ x: number; y: number; vx: number; vy: number }>({ x: 0, y: 0, vx: 120, vy: 90 })
    const lastFrameTimeRef = useRef<number | null>(null)
    const sphereAnimRef = useRef<number | null>(null)
    const prefersReducedMotion = useRef<boolean>(false)

    useEffect(() => {
        const canvas = canvasRef.current!
        const ctx = canvas.getContext('2d', { alpha: true })
        if (!ctx) return
        ctxRef.current = ctx

        const seed = Math.floor(Math.random() * 0xffffffff)
        const rand = mulberry32(seed)

        let peaks: EllipticalPeak[] = []

        // Check reduced motion
        const media = window.matchMedia('(prefers-reduced-motion: reduce)')
        const updateMotion = () => { prefersReducedMotion.current = media.matches }
        updateMotion()
        const onMediaChange = () => { updateMotion(); requestDraw(); if (prefersReducedMotion.current) stopAnimating(); else startAnimating() }
        media.addEventListener?.('change', onMediaChange)

        function resizeCanvas() {
            const dpr = window.devicePixelRatio || 1
            const { innerWidth, innerHeight } = window
            canvas.width = Math.floor(innerWidth * dpr)
            canvas.height = Math.floor(innerHeight * dpr)
            canvas.style.width = `${innerWidth}px`
            canvas.style.height = `${innerHeight}px`
            const rctx = ctxRef.current
            if (!rctx) return
            rctx.setTransform(1, 0, 0, 1, 0, 0)
            rctx.scale(dpr, dpr)
        }

        function buildDots() {
            const width = window.innerWidth
            const height = window.innerHeight

            // grid size
            const CELL = GRID_CELL
            const dots: Dot[] = []

            // Re-seed peaks for current viewport so the pattern fits nicely
            peaks = generateEllipticalPeaks(width, height, rand)

            // grid dot size
            const mapToRadius = (v: number) => {
                const t = 1 / (1 + Math.exp(-2 * (v - 0.7))) // sigmoid around ~0.7
                return 1 + t * 0.8
            }

            for (let row = 0, y = Math.floor(CELL / 2); y <= height; row++, y += CELL) {
                const xOffset = (row % 2 === 1) ? Math.floor(CELL / 2) : 0
                for (let x = Math.floor(CELL / 2) + xOffset; x <= width; x += CELL) {
                    // Use the peaks field to vary size (no noise so it feels cartographic)
                    const v = evaluateEllipticalField(x, y, peaks)
                    const r = mapToRadius(v)
                    dots.push({ baseX: x, baseY: y, radius: r })
                }
            }
            dotsRef.current = dots
        }

        function draw() {
            const rctx = ctxRef.current
            if (!rctx) return
            const width = window.innerWidth
            const height = window.innerHeight
            rctx.clearRect(0, 0, width, height)

            const stroke = DOT_COLOR
            rctx.fillStyle = stroke

            const mouse = mouseRef.current
            const INFLUENCE = CURSOR_INFLUENCE_PX * 1.4
            const MAX_DISP = MAX_CURSOR_DISPLACEMENT_PX

            const sphere = sphereRef.current
            const R = PASSIVE_SPHERE_RADIUS
            const AMP = PASSIVE_SPHERE_AMPLITUDE

            // Draw in one pass for better performance
            rctx.beginPath()
            for (const d of dotsRef.current) {
                let px = d.baseX
                let py = d.baseY
                if (mouse) {
                    const dx = d.baseX - mouse.x
                    const dy = d.baseY - mouse.y
                    const dist = Math.hypot(dx, dy)
                    if (dist > 0 && dist < INFLUENCE) {
                        const t = 1 - dist / INFLUENCE
                        const force = Math.pow(Math.max(0, t), 1.5) + 0.05 * (t > 0 ? 1 : 0)
                        const ux = dx / dist
                        const uy = dy / dist
                        px += ux * MAX_DISP * force
                        py += uy * MAX_DISP * force
                    }
                }

                // Passive sphere size boost
                const sdx = px - sphere.x
                const sdy = py - sphere.y
                const sdist = Math.hypot(sdx, sdy)
                let extra = prefersReducedMotion.current ? 0 : 0
                if (!prefersReducedMotion.current && sdist < R) {
                    const t = 1 - sdist / R
                    extra = AMP * (t * t)
                }

                rctx.moveTo(px + d.radius, py)
                rctx.arc(px, py, d.radius + extra, 0, Math.PI * 2)
            }
            rctx.fill()
        }

        function animate(time: number) {
            if (prefersReducedMotion.current || document.hidden) {
                // If hidden or reduced motion, draw static and stop loop
                draw()
                sphereAnimRef.current = null
                return
            }
            const prev = lastFrameTimeRef.current ?? time
            const dt = Math.min(0.05, (time - prev) / 1000)
            lastFrameTimeRef.current = time

            const width = window.innerWidth
            const height = window.innerHeight
            const R = PASSIVE_SPHERE_RADIUS
            let { x, y, vx, vy } = sphereRef.current
            const speed = SPHERE_SPEED_MULTIPLIER
            x += vx * dt * speed
            y += vy * dt * speed
            const m = Math.max(2, R * SPHERE_EDGE_MARGIN_FACTOR)
            if (x < m) { x = m; vx *= -1 }
            if (x > width - m) { x = width - m; vx *= -1 }
            if (y < m) { y = m; vy *= -1 }
            if (y > height - m) { y = height - m; vy *= -1 }
            sphereRef.current = { x, y, vx, vy }

            draw()
            sphereAnimRef.current = requestAnimationFrame(animate)
        }

        function startAnimating() {
            if (sphereAnimRef.current == null) {
                sphereAnimRef.current = requestAnimationFrame(animate)
            }
        }
        function stopAnimating() {
            if (sphereAnimRef.current != null) {
                cancelAnimationFrame(sphereAnimRef.current)
                sphereAnimRef.current = null
            }
        }

        function requestDraw() {
            if (rafRef.current != null) return
            rafRef.current = requestAnimationFrame(() => {
                rafRef.current = null
                draw()
            })
        }

        function handleMouseMove(e: MouseEvent) {
            mouseRef.current = { x: e.clientX, y: e.clientY }
            requestDraw()
        }
        function handleMouseLeave() {
            mouseRef.current = null
            requestDraw()
        }

        function onThemeChange() { requestDraw() }
        function onVisibilityChange() {
            if (document.hidden) {
                stopAnimating()
                requestDraw()
            } else if (!prefersReducedMotion.current) {
                startAnimating()
            }
        }

        function handleResize() { resizeCanvas(); buildDots(); requestDraw() }
        window.addEventListener('resize', handleResize)
        window.addEventListener('mousemove', handleMouseMove, { passive: true })
        window.addEventListener('mouseleave', handleMouseLeave)
        window.addEventListener('themechange', onThemeChange)
        document.addEventListener('visibilitychange', onVisibilityChange)

        resizeCanvas()
        buildDots()
        // Seed sphere start away from edges
        {
            const w = window.innerWidth, h = window.innerHeight
            const m = Math.max(2, PASSIVE_SPHERE_RADIUS * SPHERE_EDGE_MARGIN_FACTOR)
            sphereRef.current = {
                x: Math.max(m, Math.min(w - m, w * 0.35)),
                y: Math.max(m, Math.min(h - m, h * 0.4)),
                vx: sphereRef.current.vx,
                vy: sphereRef.current.vy,
            }
        }
        draw()
        if (!prefersReducedMotion.current && !document.hidden) {
            startAnimating()
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseleave', handleMouseLeave)
            window.removeEventListener('themechange', onThemeChange)
            window.removeEventListener('resize', handleResize)
            document.removeEventListener('visibilitychange', onVisibilityChange)
            media.removeEventListener?.('change', onMediaChange)
            stopAnimating()
            if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
        }
    }, [])

    return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }} aria-hidden />
} 