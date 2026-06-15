import type { ComponentProps, ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

import { MarkerText } from './MarkerText'

type Tone = 'background' | 'canvas' | 'ink'

const toneClass: Record<Tone, string> = {
  background: 'bg-background',
  canvas: 'bg-canvas',
  ink: 'bg-ink',
}

/** Full-width section with vertical rhythm padding and a centered container. */
export function Section({
  id,
  tone = 'background',
  className = '',
  children,
}: {
  id?: string
  tone?: Tone
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={`w-full ${toneClass[tone]} ${className}`}>
      <div className="mx-auto w-full max-w-[1140px] px-6 py-20 sm:px-8 sm:py-[88px]">
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
    <div className={`mx-auto flex max-w-[760px] flex-col items-center gap-4 text-center ${className}`}>
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

/** Gray rounded square holding a lucide icon (Halo Mono type-chip). */
export function IconChip({
  icon: Icon,
  size = 'md',
}: {
  icon: LucideIcon
  size?: 'sm' | 'md'
}) {
  const box = size === 'sm' ? 'size-[38px] rounded-[9px]' : 'size-11 rounded-chip'
  const glyph = size === 'sm' ? 18 : 21
  return (
    <span
      className={`flex shrink-0 items-center justify-center bg-muted transition-colors duration-200 group-hover:bg-primary-soft ${box}`}
    >
      <Icon
        size={glyph}
        className="text-foreground transition-colors duration-200 group-hover:text-primary"
        strokeWidth={2}
      />
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
    'inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 text-[15px] font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60'
  const styles =
    variant === 'primary'
      ? 'bg-primary text-on-primary hover:opacity-90 hover:shadow-[0_10px_30px_-8px_var(--primary)]'
      : 'border border-line bg-background text-foreground hover:bg-muted'
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  )
}
