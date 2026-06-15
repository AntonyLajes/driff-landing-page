/** Driff "Converge" mark — three streams merging into one node (many changes
 *  → one summary). Inherits currentColor; place on the orange tile with a
 *  white text color. */
export function DriffMark({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      className={className}
      aria-hidden
    >
      <g
        stroke="currentColor"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 22 C 36 22 38 36 50 36" />
        <path d="M16 36 H50" />
        <path d="M16 50 C 36 50 38 36 50 36" />
      </g>
      <circle cx="52" cy="36" r="5" fill="currentColor" />
    </svg>
  )
}
