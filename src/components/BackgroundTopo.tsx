import { useEffect, useRef } from 'react'

const LINE_COLOR = 'rgba(180, 188, 200, 0.9)';
const STROKE_WIDTH = 1;
const MAX_INTENSITY = 1.2;
const MIN_INTENSITY = 0.005;
const MIN_NOISE = 0.0001;

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

function smoothstep(t: number) { return t * t * (3 - 2 * t) }

function hash2(x: number, y: number, rand: () => number) {
    const s = (x * 374761393 + y * 668265263) >>> 0
    const rng = mulberry32(s ^ (Math.floor(rand() * 0xffffffff) >>> 0))
    return rng()
}

function noise2D(x: number, y: number, rand: () => number) {
    const x0 = Math.floor(x)
    const y0 = Math.floor(y)
    const xf = x - x0
    const yf = y - y0
    const v00 = hash2(x0, y0, rand)
    const v10 = hash2(x0 + 1, y0, rand)
    const v01 = hash2(x0, y0 + 1, rand)
    const v11 = hash2(x0 + 1, y0 + 1, rand)
    const u = smoothstep(xf)
    const v = smoothstep(yf)
    const i1 = v00 * (1 - u) + v10 * u
    const i2 = v01 * (1 - u) + v11 * u
    return i1 * (1 - v) + i2 * v
}

// Marching squares cases
const MS_TABLE: number[][][] = [
    [],
    [[0, 1]],
    [[1, 2]],
    [[0, 2]],
    [[2, 3]],
    [[0, 3], [1, 2]],
    [[1, 3]],
    [[0, 3]],
    [[3, 0]],
    [[1, 3]],
    [[1, 2], [0, 3]],
    [[2, 3]],
    [[0, 2]],
    [[1, 2]],
    [[0, 1]],
    [],
]

function interpPoint(x: number, y: number, w: number, h: number, edge: number, t: number) {
    switch (edge) {
        case 0: return { x, y: y + t * h }
        case 1: return { x: x + t * w, y }
        case 2: return { x: x + w, y: y + t * h }
        case 3: return { x: x + t * w, y: y + h }
        default: return { x, y }
    }
}

// Elliptical radial peak definition
type Peak = {
    centerX: number
    centerY: number
    amplitude: number
    radiusX: number
    radiusY: number
    rotation: number // radians
}

function generatePeaks(width: number, height: number, rand: () => number): Peak[] {
    const numPeaks = 3 + Math.floor(rand() * 3) // 3-5 peaks
    const peaks: Peak[] = []
    for (let i = 0; i < numPeaks; i++) {
        const margin = 0.15
        const cx = (margin + rand() * (1 - 2 * margin)) * width
        const cy = (margin + rand() * (1 - 2 * margin)) * height
        const amp = 0.7 + rand() * 0.5 // slightly gentler amplitudes
        const rx = (0.28 + rand() * 0.22) * Math.min(width, height) // larger radii for zoomed-out look
        const ry = rx * (0.6 + rand() * 0.8)
        const rot = rand() * Math.PI
        peaks.push({ centerX: cx, centerY: cy, amplitude: amp, radiusX: rx, radiusY: ry, rotation: rot })
    }
    return peaks
}

function fieldFromPeaks(x: number, y: number, peaks: Peak[], rand: () => number, includeNoise: boolean = true, noiseScale: number = 1): number {
    // Sum of elliptical gaussian bumps, plus a tiny noise ripple
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
    if (includeNoise) {
        const n = noise2D(x * 0.1, y * 0.1, rand) * MIN_NOISE * noiseScale
        return value + n
    }
    return value
}

// Polyline building helpers
type Point = { x: number; y: number }
function keyFor(p: Point, q = 100): string { return `${Math.round(p.x * q)},${Math.round(p.y * q)}` }

function buildPolylines(segments: Array<{ a: Point; b: Point }>): Point[][] {
    const adj = new Map<string, Point[]>()
    const add = (p: Point, q: Point) => {
        const k = keyFor(p)
        const arr = adj.get(k)
        if (arr) arr.push(q); else adj.set(k, [q])
        }
    for (const s of segments) { add(s.a, s.b); add(s.b, s.a) }
    
    const visited = new Set<string>()
    const polylines: Point[][] = []
    
    for (const s of segments) {
        const sa = keyFor(s.a)
        const sb = keyFor(s.b)
        const edgeKey = sa < sb ? `${sa}|${sb}` : `${sb}|${sa}`
        if (visited.has(edgeKey)) continue
        
        // grow from both ends
        const left: Point[] = [s.a]
        const right: Point[] = [s.b]
        visited.add(edgeKey)
        
        // extend from left head
        let head = s.a
        while (true) {
            const nexts = adj.get(keyFor(head)) || []
            let extended = false
            for (const n of nexts) {
                const ka = keyFor(head), kb = keyFor(n)
                const ek = ka < kb ? `${ka}|${kb}` : `${kb}|${ka}`
                if (visited.has(ek)) continue
                visited.add(ek)
                left.unshift(n)
                head = n
                extended = true
                break
            }
            if (!extended) break
        }
        
        // extend from right tail
        let tail = s.b
        while (true) {
            const nexts = adj.get(keyFor(tail)) || []
            let extended = false
            for (const n of nexts) {
                const ka = keyFor(tail), kb = keyFor(n)
                const ek = ka < kb ? `${ka}|${kb}` : `${kb}|${ka}`
                if (visited.has(ek)) continue
                visited.add(ek)
                right.push(n)
                tail = n
                extended = true
                break
            }
            if (!extended) break
        }
        
        polylines.push([...left, ...right])
    }
    
    return polylines
}

function chaikin(points: Point[], iterations: number, closed: boolean): Point[] {
    let pts = points.slice()
    for (let it = 0; it < iterations; it++) {
        const out: Point[] = []
        const n = pts.length
        const max = closed ? n : n - 1
        for (let i = 0; i < max; i++) {
            const p0 = pts[i]
            const p1 = pts[(i + 1) % n]
            const q: Point = { x: 0.75 * p0.x + 0.25 * p1.x, y: 0.75 * p0.y + 0.25 * p1.y }
            const r: Point = { x: 0.25 * p0.x + 0.75 * p1.x, y: 0.25 * p0.y + 0.75 * p1.y }
            out.push(q, r)
        }
        if (!closed) { out.unshift(pts[0]); out.push(pts[pts.length - 1]) }
        pts = out
    }
    return pts
}

export default function BackgroundTopo() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
    const scrollPositionRef = useRef(0)
    const animationFrameRef = useRef<number | null>(null)
    const lastUpdateTimeRef = useRef(0)
    
    useEffect(() => {
        const canvas = canvasRef.current!
        const ctx = canvas.getContext('2d', { alpha: true })
        if (!ctx) return
        ctxRef.current = ctx
        
        const seed = Math.floor(Math.random() * 0xffffffff)
        const rand = mulberry32(seed)
        const vibrationRand = mulberry32(seed + 12345) // Separate random generator for vibration
        
        let peaks: Peak[] = []
        
        function currentStroke(): string {
            const cs = getComputedStyle(document.documentElement)
            const v = cs.getPropertyValue('--topo-stroke').trim()
            return v ||  LINE_COLOR
        }
        
        function getVibrationIntensity(): number {
            const scrollY = scrollPositionRef.current
            const documentHeight = document.documentElement.scrollHeight
            const viewportHeight = window.innerHeight
            const rawMaxScroll = documentHeight - viewportHeight
            // Avoid division by zero/Infinity on short pages
            const maxScrollDistance = rawMaxScroll > 0 ? rawMaxScroll : 1
            
            // Calculate scroll progress (0 to 1) based on total page scroll
            const scrollProgress = Math.min(scrollY / maxScrollDistance, 1)
            // Return intensity from MAX_INTENSITY (max vibration) to MIN_INTENSITY (minimal vibration)
            return Math.max(MIN_INTENSITY, MAX_INTENSITY - (scrollProgress * (MAX_INTENSITY - MIN_INTENSITY)))
        }
        
        function applyVibration(point: Point, intensity: number): Point {
            // Always apply vibration, but scale it by intensity
            const maxOffset = 2.5 * intensity // Maximum vibration offset
            const offsetX = (vibrationRand() - 0.5) * 2 * maxOffset
            const offsetY = (vibrationRand() - 0.5) * 2 * maxOffset
            
            return {
                x: point.x + offsetX,
                y: point.y + offsetY
            }
        }
        
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
        
        function draw() {
            const rctx = ctxRef.current
            if (!rctx) return
            const dpr = window.devicePixelRatio || 1
            const width = canvas.width / dpr
            const height = canvas.height / dpr
            rctx.clearRect(0, 0, width, height)
            
            const vibrationIntensity = getVibrationIntensity()
            
            // Dynamic grid resolution based on vibration intensity
            // Higher resolution (smaller cells) for smoother curves at low vibration
            const baseCell = 20
            const cell = vibrationIntensity < 0.1 ? baseCell * 0.5 : baseCell // Higher resolution at low vibration
            const cols = Math.ceil(width / cell)
            const rows = Math.ceil(height / cell)
            
            const z: number[][] = new Array(rows + 1)
            for (let j = 0; j <= rows; j++) {
                z[j] = new Array(cols + 1)
                for (let i = 0; i <= cols; i++) {
                    const x = i * cell
                    const y = j * cell
                    // Scale noise with vibration intensity - much less noise at low intensities
                    const noiseScale = vibrationIntensity / MAX_INTENSITY
                    z[j][i] = fieldFromPeaks(x, y, peaks, rand, vibrationIntensity > 0.005, noiseScale)
                }
            }
            
            // Determine dynamic levels (dense) for full look
            let minV = Infinity, maxV = -Infinity
            for (let j = 0; j <= rows; j++) for (let i = 0; i <= cols; i++) { const v = z[j][i]; if (v < minV) minV = v; if (v > maxV) maxV = v }
            const levels: number[] = []
            const numLevels = 25 // 35 levels for full look
            const step = (maxV - minV) / (numLevels + 2)
            for (let k = 1; k <= numLevels; k++) levels.push(minV + k * step)
                
            rctx.lineWidth = STROKE_WIDTH
            rctx.strokeStyle = currentStroke()
            rctx.lineJoin = 'round'
            rctx.lineCap = 'round'
            
            // Build and draw smoothed polylines per level
            for (const level of levels) {
                const segs: Array<{ a: Point; b: Point }> = []
                for (let j = 0; j < rows; j++) {
                    for (let i = 0; i < cols; i++) {
                        const v00 = z[j][i]
                        const v10 = z[j][i + 1]
                        const v11 = z[j + 1][i + 1]
                        const v01 = z[j + 1][i]
                        let idx = 0
                        if (v00 >= level) idx |= 1
                        if (v10 >= level) idx |= 2
                        if (v11 >= level) idx |= 4
                        if (v01 >= level) idx |= 8
                        const segDefs = MS_TABLE[idx]
                        if (segDefs.length === 0) continue
                        const x = i * cell
                        const y = j * cell
                        const leftT = (level - v00) / (v01 - v00 + 1e-6)
                        const topT = (level - v00) / (v10 - v00 + 1e-6)
                        const rightT = (level - v10) / (v11 - v10 + 1e-6)
                        const bottomT = (level - v01) / (v11 - v01 + 1e-6)
                        for (const [e1, e2] of segDefs) {
                            const p1 = interpPoint(x, y, cell, cell, e1, e1 === 0 ? leftT : e1 === 1 ? topT : e1 === 2 ? rightT : bottomT)
                            const p2 = interpPoint(x, y, cell, cell, e2, e2 === 0 ? leftT : e2 === 1 ? topT : e2 === 2 ? rightT : bottomT)
                            segs.push({ a: p1, b: p2 })
                        }
                    }
                }
                const polylines = buildPolylines(segs)
                for (const poly of polylines) {
                    if (poly.length < 2) continue
                    const isClosed = (Math.hypot(poly[0].x - poly[poly.length - 1].x, poly[0].y - poly[poly.length - 1].y) < 1)
                    
                    // Apply different levels of Chaikin smoothing based on vibration intensity
                    let smoothingIterations
                    if (vibrationIntensity > MAX_INTENSITY * 0.8) {
                        // High vibration: skip smoothing (less visible)
                        smoothingIterations = 1
                    } else {
                        // Medium vibration: standard smoothing
                        smoothingIterations = 2
                    }
                    const smoothed = smoothingIterations > 0 ? chaikin(poly, smoothingIterations, isClosed) : poly
                    
                    // Apply vibration to smoothed points (always apply, but intensity varies)
                    const vibratedPoints = smoothed.map(point => applyVibration(point, vibrationIntensity))
                    
                    rctx.beginPath()
                    rctx.moveTo(vibratedPoints[0].x, vibratedPoints[0].y)
                    for (let k = 1; k < vibratedPoints.length; k++) {
                        rctx.lineTo(vibratedPoints[k].x, vibratedPoints[k].y)
                    }
                    rctx.stroke()
                }
            }
        }
        
        function animate() {
            const now = performance.now()
            const vibrationIntensity = getVibrationIntensity()
            
            // Calculate dynamic refresh rate with easing curve
            // Uses power curve to maintain high FPS longer before dropping off
            const baseRefreshRate = 17 // 17ms for max vibration (58 FPS)
            const maxRefreshRate = 250 // 50ms for no vibration (4 FPS)
            
            // Easing starts at 20% page scroll and ends at 80% page scroll
            const easingStartThreshold = 0.8 * MAX_INTENSITY // Start easing after 20% scroll
            const easingEndThreshold = 0.2 * MAX_INTENSITY // End easing at 80% scroll 
            let easedIntensity
            
            if (vibrationIntensity >= easingStartThreshold) {
                // Before 20% scroll: keep high FPS (no easing)
                easedIntensity = 1.0
            } else if (vibrationIntensity <= easingEndThreshold) {
                // After 80% scroll: minimum FPS
                easedIntensity = 0.0
            } else {
                // Between 20% and 80% scroll: apply easing curve
                const normalizedIntensity = (vibrationIntensity - easingEndThreshold) / (easingStartThreshold - easingEndThreshold) // Normalize to 0-1 range
                easedIntensity = 1 - Math.pow(1 - normalizedIntensity, 2) 
            }
            const dynamicRefreshRate = baseRefreshRate + (maxRefreshRate - baseRefreshRate) * (1 - easedIntensity)
            
            // Always update, but at varying rates
            if (now - lastUpdateTimeRef.current >= dynamicRefreshRate) {
                draw()
                lastUpdateTimeRef.current = now
            }
            
            animationFrameRef.current = requestAnimationFrame(animate)
        }
        
        function handleScroll() {
            scrollPositionRef.current = window.scrollY
        }
        
        		window.addEventListener('resize', resizeCanvas)
		window.addEventListener('scroll', handleScroll, { passive: true })
		const onThemeChange = () => draw()
		window.addEventListener('themechange', onThemeChange)
        
        resizeCanvas()
        peaks = generatePeaks(window.innerWidth, window.innerHeight, rand)
        draw()
        animate() // Start animation loop
        
        return () => { 
            window.removeEventListener('resize', resizeCanvas)
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('themechange', onThemeChange)
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [])
    
    return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} aria-hidden />
} 