import type { ComponentProps, CSSProperties, ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

import { MarkerText } from './MarkerText'

// Tone is kept for call-site compatibility, but in the dark-tech redesign every
// section is transparent so the fixed grid + glow backdrop shows through.
type Tone = 'background' | 'canvas' | 'ink'

/** Full-width section with vertical rhythm padding and a centered container. */
export function Section({
  id,
  className = '',
  children,
}: {
  id?: string
  tone?: Tone
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-8 sm:py-20">
        {children}
      </div>
    </section>
  )
}

/** Centered section header: eyebrow + title + optional subtitle. */
export function SectionHead({
  eyebrow,
  eyebrowTone = 'muted',
  title,
  subtitle,
  className = '',
}: {
  eyebrow: string
  eyebrowTone?: 'muted' | 'primary'
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <div
      className={`assemble mx-auto flex max-w-[760px] flex-col items-center gap-4 text-center ${className}`}
      style={{ '--seq': 0 } as CSSProperties}
    >
      <span
        className={`text-[13px] font-bold tracking-wider ${
          eyebrowTone === 'primary' ? 'text-primary' : 'text-muted-foreground'
        }`}
      >
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-bold leading-[1.1] text-foreground sm:text-[40px]">
        <MarkerText>{title}</MarkerText>
      </h2>
      {subtitle ? (
        <p className="max-w-[620px] text-pretty text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

/** Rounded tile holding a lucide icon (Halo Mono type-chip), tech-styled with
 *  an inset ring. `danger` tone makes it a red alert glyph. */
export function IconChip({
  icon: Icon,
  size = 'md',
  tone = 'default',
}: {
  icon: LucideIcon
  size?: 'sm' | 'md'
  tone?: 'default' | 'danger'
}) {
  const box = size === 'sm' ? 'size-[38px] rounded-[9px]' : 'size-11 rounded-chip'
  const glyph = size === 'sm' ? 18 : 21
  const tint =
    tone === 'danger'
      ? 'bg-danger-soft text-danger ring-1 ring-inset ring-danger/25'
      : 'bg-muted text-foreground ring-1 ring-inset ring-line/70 group-hover:bg-primary-soft group-hover:text-primary group-hover:ring-primary/30'
  return (
    <span
      className={`flex shrink-0 items-center justify-center transition-all duration-200 ${box} ${tint}`}
    >
      <Icon size={glyph} strokeWidth={2} className="transition-colors duration-200" />
    </span>
  )
}

/** Pill CTA button. */
export function PillButton({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ComponentProps<'button'> & { variant?: 'primary' | 'outline' }) {
  const base =
    'inline-flex cursor-pointer items-center justify-center gap-2 rounded-pill px-6 py-3 text-[15px] font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60'
  const styles =
    variant === 'primary'
      ? 'bg-primary text-on-primary shadow-[0_10px_28px_-8px_var(--primary)] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-8px_var(--primary)] active:translate-y-0'
      : 'border border-line bg-background text-foreground hover:border-primary/40 hover:bg-muted'
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  )
}
