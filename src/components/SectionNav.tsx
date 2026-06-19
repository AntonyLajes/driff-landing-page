/**
 * Right-edge dot pagination, one dot per panel, synced to the active panel.
 * Clicking a dot smooth-scrolls to that panel (native, honoring scroll-smooth).
 * Desktop only — hidden under md where snap is also disabled.
 */
export function SectionNav({
  labels,
  active,
}: {
  labels: string[]
  active: number
}) {
  const go = (i: number) => {
    document.getElementById(`panel-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      aria-label="Sections"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
    >
      {labels.map((label, i) => {
        const isActive = i === active
        return (
          <button
            key={label + i}
            type="button"
            onClick={() => go(i)}
            aria-label={label}
            aria-current={isActive ? 'true' : undefined}
            title={label}
            className="group relative flex h-3 items-center"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? 'h-3 w-3 bg-primary shadow-[0_0_10px_1px_color-mix(in_oklab,var(--primary)_70%,transparent)]'
                  : 'h-1.5 w-1.5 bg-muted-foreground/40 group-hover:bg-muted-foreground'
              }`}
            />
            <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-md border border-line bg-card px-2 py-1 text-xs font-medium text-foreground opacity-0 shadow-card transition-opacity duration-200 group-hover:opacity-100">
              {label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
