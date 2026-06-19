import { type CSSProperties } from 'react'

import { useCopy } from '@/i18n'
import { WaitlistForm } from './WaitlistForm'

export function WhitelistCTA() {
  const { whitelist } = useCopy()

  return (
    <section id="whitelist" className="relative w-full overflow-hidden">
      <div
        aria-hidden
        className="glow-soft-orange pointer-events-none absolute -top-28 left-1/2 h-[460px] w-[760px] -translate-x-1/2 opacity-40 blur-3xl"
      />
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 px-6 py-24 sm:px-8">
        <div
          className="assemble flex max-w-[680px] flex-col items-center gap-4 text-center"
          style={{ '--seq': 0 } as CSSProperties}
        >
          <span className="inline-flex items-center gap-2 rounded-pill bg-primary-soft px-3.5 py-1.5 text-[13px] font-semibold text-primary">
            <span className="pulse-dot size-1.5 rounded-full bg-primary" />
            {whitelist.badge}
          </span>
          <h2 className="text-balance text-3xl font-bold leading-[1.08] text-foreground sm:text-[44px]">
            {whitelist.title}
          </h2>
          <p className="max-w-[560px] text-pretty text-lg leading-relaxed text-muted-foreground">
            {whitelist.subtitle}
          </p>
        </div>

        <div className="assemble flex w-full justify-center" style={{ '--seq': 1 } as CSSProperties}>
          <WaitlistForm />
        </div>
      </div>
    </section>
  )
}
