import React, { useEffect, useMemo, useRef } from 'react'

export type KineticStatus = 'idle' | 'typing' | 'armed' | 'validating' | 'success' | 'failure'

type Props = {
  length: number
  status: KineticStatus
}

// Utility helpers
function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

function distance(a: { x: number; y: number }, b: { x: number; y: number }): number {
  const dx = a.x - b.x
  const dy = a.y - b.y
  return Math.hypot(dx, dy)
}

export default function KineticLines({ length, status }: Props) {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const prevNRef = useRef(0)
  const shimmerAnimRefs = useRef<Animation[]>([])

  // Define route nodes (6 primary nodes) and optional target
  const nodes = useMemo(() => {

    return [
      { x: 50, y: 50 },
      { x: 100, y: 70 },
      { x: 150, y: 50 },
      { x: 210, y: 70 },
      { x: 260, y: 50 },
      { x: 310, y: 70 },
    ]
  }, [])

  const target = useMemo(() => ({ x: 310, y: 58 }), [])

  const n = clamp(length, 0, 6)
  const extra = Math.max(length - 6, 0)

  // Draw background grid dots for texture
  const renderBackgroundDots = () => {
    const dots: JSX.Element[] = []
    for (let x = 10; x <= 350; x += 10) {
      for (let y = 20; y <= 100; y += 10) {
        dots.push(
          <circle key={`bg-${x}-${y}`} cx={x} cy={y} r={2} fill="currentColor" opacity={0.18} />
        )
      }
    }
    return dots
  }

  // Render primary nodes
  const renderPrimaryNodes = () => {
    return nodes.map((p, i) => {
      const active = i < n
      const isSixth = i === 5 && n === 6
      const r = active ? 3 : 2
      const fill = active ? 'var(--brand)' : 'var(--muted)'
      const opacity = active ? 1 : 0.4
      return (
        <circle
          key={`node-${i}`}
          id={`node-${i}`}
          cx={p.x}
          cy={p.y}
          r={r}
          fill={fill}
          opacity={opacity}
          style={{ transition: 'transform 160ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 200ms ease' } as React.CSSProperties}
        />
      )
    })
  }

  // Ensure segments exist up to n-1
  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const ensureSegment = (i: number) => {
      const from = nodes[i - 1]
      const to = nodes[i]
      let seg = svg.querySelector(`#seg-${i}`) as SVGPathElement | null
      if (!seg) {
        seg = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        seg.setAttribute('id', `seg-${i}`)
        seg.setAttribute('fill', 'none')
        seg.setAttribute('stroke', 'var(--brand)')
        seg.setAttribute('stroke-width', '1.5')
        seg.setAttribute('stroke-linecap', 'round')
        svg.appendChild(seg)
      }
      seg.setAttribute('d', `M ${from.x} ${from.y} L ${to.x} ${to.y}`)
      return seg
    }

    const animateReveal = (path: SVGPathElement, reverse = false, duration = 160) => {
      const len = path.getTotalLength()
      path.style.strokeDasharray = `${len}`
      path.style.strokeDashoffset = reverse ? '0' : `${len}`
      path.animate(
        [{ strokeDashoffset: reverse ? 0 : len }, { strokeDashoffset: reverse ? len : 0 }],
        { duration, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)', fill: 'forwards' }
      )
    }

    const prevN = prevNRef.current
    if (n > prevN) {
      // Added a character
      const i = n - 1
      if (i >= 1) {
        const seg = ensureSegment(i)
        animateReveal(seg, false, 160)
      }
      // Dot pop
      const dot = svg.querySelector(`#node-${n - 1}`) as SVGCircleElement | null
      if (dot) {
        dot.animate(
          [
            { transform: 'scale(0.9)' },
            { transform: 'scale(1.15)' },
            { transform: 'scale(1)' },
          ],
          { duration: 160, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)', fill: 'forwards' }
        )
      }
      // Exactly 6: glow
      if (n === 6) {
        const sixth = svg.querySelector('#node-5') as SVGCircleElement | null
        if (sixth) {
          sixth.animate(
            [
              { filter: 'drop-shadow(0 0 0px rgba(100,181,246,0.0))' },
              { filter: 'drop-shadow(0 0 6px rgba(100,181,246,0.0))' },
              { filter: 'drop-shadow(0 0 0px rgba(255 ,181,246,1))' },
            ],
            { duration: 600, easing: 'ease', fill: 'forwards' }
          )
        }
      }
    } else if (n < prevN) {
      // Backspace within 0..6
      const i = prevN - 1
      const seg = svg.querySelector(`#seg-${i}`) as SVGPathElement | null
      if (seg) {
        animateReveal(seg, true, 120)
        setTimeout(() => seg.remove(), 130)
      }
      const dot = svg.querySelector(`#node-${i}`) as SVGCircleElement | null
      if (dot) {
        dot.animate(
          [
            { transform: 'scale(1)' },
            { transform: 'scale(0.9)' },
            { transform: 'scale(1)' },
          ],
          { duration: 120, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)', fill: 'forwards' }
        )
      }
    }

    prevNRef.current = n
  }, [n, nodes])

  // Armed shimmer during armed/validating
  useEffect(() => {
    const svg = svgRef.current
    shimmerAnimRefs.current.forEach((a) => a.cancel())
    shimmerAnimRefs.current = []
    if (!svg) return

    const addShimmer = (path: SVGPathElement) => {
      const len = path.getTotalLength()
      path.style.strokeDasharray = `${Math.max(6, Math.min(12, Math.floor(len * 0.15)))}, ${len}`
      const anim = path.animate(
        [
          { strokeDashoffset: 0, opacity: 0.8 },
          { strokeDashoffset: -12, opacity: 0.6 },
        ],
        { duration: 1400, iterations: Infinity, easing: 'linear' }
      )
      shimmerAnimRefs.current.push(anim)
    }

    if (status === 'armed' || status === 'validating') {
      for (let i = 1; i < n; i++) {
        const seg = svg.querySelector(`#seg-${i}`) as SVGPathElement | null
        if (seg) addShimmer(seg)
      }
    }
  }, [status, n])

  // Pulse on extra characters > 6
  useEffect(() => {
    if (extra <= 0) return
    const svg = svgRef.current
    if (!svg) return
    for (let i = 1; i < n; i++) {
      const seg = svg.querySelector(`#seg-${i}`) as SVGPathElement | null
      if (seg) {
        seg.animate(
          [
            { strokeWidth: 1.5 },
            { strokeWidth: 2 },
            { strokeWidth: 1.5 },
          ],
          { duration: 180, easing: 'ease-out' }
        )
      }
    }
  }, [extra, n])

  // Success: extend to target
  useEffect(() => {
    if (status !== 'success') return
    const svg = svgRef.current
    if (!svg) return
    const last = nodes[5]
    const end = target
    let seg = svg.querySelector('#seg-final') as SVGPathElement | null
    if (!seg) {
      seg = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      seg.setAttribute('id', 'seg-final')
      seg.setAttribute('fill', 'none')
      seg.setAttribute('stroke', 'var(--brand)')
      seg.setAttribute('stroke-width', '1.5')
      seg.setAttribute('stroke-linecap', 'round')
      svg.appendChild(seg)
    }
    seg.setAttribute('d', `M ${last.x} ${last.y} L ${end.x} ${end.y}`)
    const len = seg.getTotalLength()
    seg.style.strokeDasharray = `${len}`
    seg.style.strokeDashoffset = `${len}`
    seg.animate(
      [
        { strokeDashoffset: len, opacity: 0.9 },
        { strokeDashoffset: -len * 0.1, opacity: 1 },
        { strokeDashoffset: 0, opacity: 1 },
      ],
      { duration: 300, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)', fill: 'forwards' }
    )
  }, [status, nodes, target])

  // Failure: ripple reset
  useEffect(() => {
    if (status !== 'failure') return
    const svg = svgRef.current
    if (!svg) return
    for (let i = 1; i < n; i++) {
      const seg = svg.querySelector(`#seg-${i}`) as SVGPathElement | null
      if (seg) {
        seg.animate(
          [
            { opacity: 1 },
            { opacity: 0.3 },
            { opacity: 1 },
          ],
          { duration: 220, easing: 'ease-out' }
        )
      }
    }
  }, [status, n])

  // Clean shimmer on unmount
  useEffect(() => {
    return () => {
      shimmerAnimRefs.current.forEach((a) => a.cancel())
      shimmerAnimRefs.current = []
    }
  }, [])

  // Render segments initially (no animation). They will be animated via effects on change
  const renderStaticSegments = () => {
    const segs: JSX.Element[] = []
    for (let i = 1; i < n; i++) {
      const from = nodes[i - 1]
      const to = nodes[i]
      segs.push(
        <path
          key={`seg-${i}`}
          id={`seg-${i}`}
          d={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
          fill="none"
          stroke="var(--brand)"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      )
    }
    return segs
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '0 0' }}>
      <svg ref={svgRef} viewBox="0 0 358 120" width="358" height="120" aria-hidden="true" style={{ overflow: 'visible' }}>
        {/* Background grid */}
        <g fill="var(--border)">{renderBackgroundDots()}</g>
        {/* Segments */}
        <g>{renderStaticSegments()}</g>
        {/* Primary nodes */}
        <g>{renderPrimaryNodes()}</g>
        {/* Target dot for success */}
        {(status === 'success') && (
          <circle cx={target.x} cy={target.y} r={4} fill="var(--brand)" opacity={1} />
        )}
      </svg>
    </div>
  )
} 