/**
 * Fixed, static backdrop: a subtle technical grid that's densest behind the
 * hero and fades down the page, plus one soft warm glow behind the hero.
 * Intentionally minimal (no motion) to keep the clean, light feel.
 */
export function TechBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="tech-grid" />
      <div className="tech-glow absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3" />
    </div>
  )
}
