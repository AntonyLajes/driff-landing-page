import { useEffect, useRef } from 'react'

// rgb of the light-theme tokens (--foreground / --primary).
const LINE = '9, 9, 11'
const ACCENT = '228, 87, 46'

const NODE_DIST = 132
const MOUSE_DIST = 190

/**
 * Interactive "connections" backdrop for the hero: a soft network of drifting
 * nodes that wire themselves to nearby neighbours, and — as you move the mouse —
 * build orange links toward the cursor (the Driff metaphor: things getting
 * connected). Canvas-based, GPU-light, no blur. Static single frame under
 * reduced motion; mouse interaction only on fine pointers.
 */
export function HeroNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(pointer: fine)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let w = 0
    let h = 0
    let nodes: { x: number; y: number; vx: number; vy: number }[] = []
    const mouse = { x: -9999, y: -9999, active: false }

    const seed = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = Math.max(1, Math.round(w * dpr))
      canvas.height = Math.max(1, Math.round(h * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.max(14, Math.min(60, Math.round((w * h) / 17000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }))
    }
    seed()

    const ro = new ResizeObserver(seed)
    ro.observe(canvas)

    const drawFrame = (animate: boolean) => {
      ctx.clearRect(0, 0, w, h)

      if (animate) {
        for (const n of nodes) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > w) n.vx *= -1
          if (n.y < 0 || n.y > h) n.vy *= -1
          // clamp drift
          n.vx = Math.max(-0.5, Math.min(0.5, n.vx))
          n.vy = Math.max(-0.5, Math.min(0.5, n.vy))
        }
      }

      // node ↔ node links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < NODE_DIST) {
            ctx.strokeStyle = `rgba(${LINE}, ${(1 - d / NODE_DIST) * 0.16})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // mouse ↔ node links (the "building connections" effect)
      if (mouse.active) {
        for (const n of nodes) {
          const dx = n.x - mouse.x
          const dy = n.y - mouse.y
          const d = Math.hypot(dx, dy)
          if (d < MOUSE_DIST) {
            ctx.strokeStyle = `rgba(${ACCENT}, ${(1 - d / MOUSE_DIST) * 0.55})`
            ctx.lineWidth = 1.1
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
            if (animate && d > 1) {
              n.vx += (-dx / d) * 0.0025
              n.vy += (-dy / d) * 0.0025
            }
          }
        }
        ctx.fillStyle = `rgba(${ACCENT}, 0.9)`
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2)
        ctx.fill()
      }

      // nodes
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${LINE}, 0.32)`
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    if (reduce) {
      drawFrame(false)
      return () => ro.disconnect()
    }

    let raf = 0
    let running = true
    const loop = () => {
      if (!running) return
      drawFrame(true)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = mouse.y > -40 && mouse.y < h + 40
    }
    const onLeave = () => {
      mouse.active = false
    }
    if (fine) {
      window.addEventListener('mousemove', onMove, { passive: true })
      document.addEventListener('mouseleave', onLeave)
    }

    const onVisibility = () => {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(raf)
      } else if (!running) {
        running = true
        raf = requestAnimationFrame(loop)
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      ro.disconnect()
      if (fine) {
        window.removeEventListener('mousemove', onMove)
        document.removeEventListener('mouseleave', onLeave)
      }
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0 h-full w-full"
    />
  )
}
