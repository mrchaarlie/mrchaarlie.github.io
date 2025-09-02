import React, { useEffect, useMemo, useRef } from 'react'

export type KineticStatus = 'idle' | 'typing' | 'armed' | 'validating' | 'success' | 'failure'

type Props = {
  length: number
  status: KineticStatus
}

// Easing constants
const EASING = {
  easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
  easeOutQuad: 'cubic-bezier(0.5, 1, 0.89, 1)',
  easeInOutQuad: 'cubic-bezier(0.45, 0, 0.55, 1)'
} as const

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
  const lastShimmerNRef = useRef(0)

  // Define route nodes (6 primary nodes)
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

  // Checkmark layout positions for success morph
  const checkNodes = useMemo(() => {
    return [
      { x: 80, y: 70 },
      { x: 120, y: 90 },
      { x: 160, y: 110 },
      { x: 220, y: 70 },
      { x: 280, y: 40 },
      { x: 320, y: 30 },
    ]
  }, [])

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
      const r = active ? 3 : 2
      const fill = active ? (status === 'failure' ? '#ff6b6b' : 'var(--brand)') : 'var(--muted)'
      const opacity = active ? 1 : 0.1
      return (
        <circle
          key={`node-${i}`}
          id={`node-${i}`}
          cx={p.x}
          cy={p.y}
          r={r}
          fill={fill}
          opacity={opacity}
          style={{ transition: 'transform 160ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 200ms ease, fill 120ms ease', transformOrigin: '0px 50px', transformBox: 'fill-box' } as any}
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
      // cancel any running animations on this path (e.g., shimmer)
      path.getAnimations().forEach((a) => a.cancel())

      const len = path.getTotalLength()
      if (reverse) {
        // Retract solid line
        path.style.strokeDasharray = `${len}`
        path.style.strokeDashoffset = '0'
        path.animate(
          [{ strokeDashoffset: 0 }, { strokeDashoffset: len }],
          { duration, easing: EASING.easeOutQuad, fill: 'forwards' }
        )
      } else {
        // Extend solid line
        path.style.strokeDasharray = `${len}`
        path.style.strokeDashoffset = `${len}`
        path.animate(
          [{ strokeDashoffset: len }, { strokeDashoffset: 0 }],
          { duration, easing: EASING.easeOutQuad, fill: 'forwards' }
        )
      }
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
          { duration: 160, easing: EASING.easeOutQuad, fill: 'forwards' }
          
        )
      }
      // Exactly 6: glow
      if (n === 6) {
        const sixth = svg.querySelector('#node-5') as SVGCircleElement | null
        if (sixth) {
          sixth.animate(
            [
              { filter: 'drop-shadow(0 0 0px rgba(100,181,246,0.0))' },
              { filter: 'drop-shadow(0 0 6px rgba(100,181,246,1))' },
              { filter: 'drop-shadow(0 0 0px rgba(100 ,181,246,0.0))' },
            ],
            { duration: 1200, easing: 'ease', fill: 'forwards' }
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
          { duration: 300, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)', fill: 'forwards' }
        )
      }
    }

    prevNRef.current = n
  }, [n, nodes])

  // Armed shimmer while waiting for password
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
          { strokeDashoffset: -55, opacity: 0.2 },
        ],
        { duration: 1400, iterations: Infinity, easing: EASING.easeOutCubic }
      )
      shimmerAnimRefs.current.push(anim)
    }

    const resetSegmentsToSolid = () => {
      // ensure all existing segments are solid (only when coming down from shimmer state)
      for (let i = 1; i <= 6; i++) {
        const seg = svg.querySelector(`#seg-${i}`) as SVGPathElement | null
        if (!seg) continue
        seg.style.strokeDasharray = 'none'
        seg.style.strokeDashoffset = '0'
        seg.style.opacity = '1'
      }
    }

    if ((status === 'armed' || status === 'validating') && n >= 6) {
      for (let i = 1; i < n; i++) {
        const seg = svg.querySelector(`#seg-${i}`) as SVGPathElement | null
        if (seg) addShimmer(seg)
      }
    } else if (lastShimmerNRef.current >= 6 && n < 6) {
      resetSegmentsToSolid()
    }

    // track last n for shimmer transitions
    lastShimmerNRef.current = n
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

  // Success: morph nodes into a checkmark and draw check path
  useEffect(() => {
    if (status !== 'success') return
    const svg = svgRef.current
    if (!svg) return

    // Remove any shimmer
    shimmerAnimRefs.current.forEach((a) => a.cancel())
    shimmerAnimRefs.current = []

    // Fade out existing segments
    for (let i = 1; i < 6; i++) {
      const seg = svg.querySelector(`#seg-${i}`) as SVGPathElement | null
      if (seg) {
        seg.getAnimations().forEach((a) => a.cancel())
        seg.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 160, easing: EASING.easeOutQuad, fill: 'forwards' })
        setTimeout(() => seg.remove(), 170)
      }
    }

    // Animate nodes to checkmark positions
    for (let i = 0; i < 6; i++) {
      const dot = svg.querySelector(`#node-${i}`) as SVGCircleElement | null
      if (!dot) continue
      const from = nodes[i]
      const to = checkNodes[i]
      const dx = to.x - from.x
      const dy = to.y - from.y
      // Ensure transforms are relative to viewBox
      ;(dot.style as any).transformBox = 'view-box'
      ;(dot.style as any).transformOrigin = '0 0'
      dot.animate(
        [
          { transform: 'translate(0px, 0px)' },
          { transform: `translate(${dx}px, ${dy}px)` },
        ],
        { duration: 420, easing: EASING.easeOutCubic, fill: 'forwards' }
      )
    }

    // Draw checkmark connecting path
    let checkPath = svg.querySelector('#check-path') as SVGPathElement | null
    if (!checkPath) {
      checkPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      checkPath.setAttribute('id', 'check-path')
      checkPath.setAttribute('fill', 'none')
      checkPath.setAttribute('stroke', 'var(--brand)')
      checkPath.setAttribute('stroke-width', '2')
      checkPath.setAttribute('stroke-linecap', 'round')
      checkPath.setAttribute('stroke-linejoin', 'round')
      svg.appendChild(checkPath)
    }
    const d = `M ${checkNodes[0].x} ${checkNodes[0].y} L ${checkNodes[1].x} ${checkNodes[1].y} L ${checkNodes[2].x} ${checkNodes[2].y} L ${checkNodes[3].x} ${checkNodes[3].y} L ${checkNodes[4].x} ${checkNodes[4].y} L ${checkNodes[5].x} ${checkNodes[5].y}`
    checkPath.setAttribute('d', d)
    const len = (checkPath as any).getTotalLength?.() ?? 0
    if (len > 0) {
      checkPath.style.strokeDasharray = `${len}`
      checkPath.style.strokeDashoffset = `${len}`
      checkPath.animate(
        [
          { strokeDashoffset: len },
          { strokeDashoffset: 0 },
        ],
        { duration: 500, easing: EASING.easeOutCubic, fill: 'forwards' }
      )
    }
  }, [status, nodes, checkNodes])

  // Failure: shake active nodes only
  useEffect(() => {
    if (status !== 'failure') return
    const svg = svgRef.current
    if (!svg) return

    for (let i = 0; i < n; i++) {
      const dot = svg.querySelector(`#node-${i}`) as SVGCircleElement | null
      if (dot) {
        dot.animate(
          [
            { transform: 'translateX(0)' },
            { transform: 'translateX(-6px)' },
            { transform: 'translateX(6px)' },
            { transform: 'translateX(-4px)' },
            { transform: 'translateX(4px)' },
            { transform: 'translateX(0)' },
          ],
          { duration: 420, easing: 'cubic-bezier(0.36, 0.07, 0.19, 0.97)' }
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
          stroke={'var(--brand)'}
          strokeWidth={1.5}
          strokeLinecap="round"
          style={{ visibility: status === 'failure' ? 'hidden' : 'visible' }}
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
      </svg>
    </div>
  )
} 