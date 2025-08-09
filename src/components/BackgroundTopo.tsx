import { useEffect, useRef } from 'react'

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

function fieldFromPeaks(x: number, y: number, peaks: Peak[], rand: () => number): number {
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
  const n = noise2D(x * 0.01, y * 0.01, rand) * 0.03
  return value + n
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

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return
    ctxRef.current = ctx

    const seed = Math.floor(Math.random() * 0xffffffff)
    const rand = mulberry32(seed)

    let peaks: Peak[] = []

    function resizeAndDraw() {
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
      peaks = generatePeaks(innerWidth, innerHeight, rand)
      draw()
    }

    function draw() {
      const rctx = ctxRef.current
      if (!rctx) return
      const dpr = window.devicePixelRatio || 1
      const width = canvas.width / dpr
      const height = canvas.height / dpr
      rctx.clearRect(0, 0, width, height)

      // Moderate grid with smoothing for performance and quality
      const cell = 4
      const cols = Math.ceil(width / cell)
      const rows = Math.ceil(height / cell)

      const z: number[][] = new Array(rows + 1)
      for (let j = 0; j <= rows; j++) {
        z[j] = new Array(cols + 1)
        for (let i = 0; i <= cols; i++) {
          const x = i * cell
          const y = j * cell
          z[j][i] = fieldFromPeaks(x, y, peaks, rand)
        }
      }

      // Determine dynamic levels (dense) for full look
      let minV = Infinity, maxV = -Infinity
      for (let j = 0; j <= rows; j++) for (let i = 0; i <= cols; i++) { const v = z[j][i]; if (v < minV) minV = v; if (v > maxV) maxV = v }
      const levels: number[] = []
      const numLevels = 30
      const step = (maxV - minV) / (numLevels + 2)
      for (let k = 1; k <= numLevels; k++) levels.push(minV + k * step)

      rctx.lineWidth = 0.3
      rctx.strokeStyle = 'rgba(180, 188, 200, 0.09)'
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
          const smoothed = chaikin(poly, 2, isClosed)
          rctx.beginPath()
          rctx.moveTo(smoothed[0].x, smoothed[0].y)
          for (let k = 1; k < smoothed.length; k++) rctx.lineTo(smoothed[k].x, smoothed[k].y)
          rctx.stroke()
        }
      }
    }

    window.addEventListener('resize', resizeAndDraw)
    resizeAndDraw()
    return () => { window.removeEventListener('resize', resizeAndDraw) }
  }, [])

  return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} aria-hidden />
} 