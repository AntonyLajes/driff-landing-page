import { ArrowRight, Sparkles, Zap } from 'lucide-react'

import { useCopy } from '@/i18n'
import { Section, SectionHead } from './primitives'

export function BeforeAfter() {
  const { beforeAfter } = useCopy()
  return (
    <Section tone="background">
      <SectionHead
        eyebrow={beforeAfter.eyebrow}
        eyebrowTone="primary"
        title={beforeAfter.title}
        subtitle={beforeAfter.subtitle}
      />

      <div className="mt-12 flex flex-col items-stretch gap-6 lg:flex-row lg:items-center">
        {/* Before */}
        <div className="flex flex-1 flex-col gap-4 rounded-card border border-line bg-canvas p-7">
          <span className="text-xs font-bold tracking-wider text-muted-foreground">
            {beforeAfter.before}
          </span>
          <div className="flex flex-col gap-2 rounded-xl bg-[#09090B] p-4">
            <code className="font-mono text-[13px] leading-relaxed text-[#E4E4E7]">
              fix: handle null ETA on fuel stops + refactor pricing calc
            </code>
            <span className="font-mono text-xs text-[#71717A]">{beforeAfter.commitStat}</span>
          </div>
          <p className="text-sm italic text-muted-foreground">{beforeAfter.note}</p>
        </div>

        {/* Arrow */}
        <span className="mx-auto flex size-11 shrink-0 rotate-90 items-center justify-center rounded-pill bg-primary lg:rotate-0">
          <ArrowRight size={20} className="text-on-primary" />
        </span>

        {/* After */}
        <div className="flex flex-1 flex-col gap-3.5 rounded-card border-2 border-primary bg-card p-7">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-pill bg-primary-soft px-2.5 py-1 text-[11px] font-bold tracking-wide text-primary">
            <Sparkles size={13} />
            {beforeAfter.badge}
          </span>
          <h3 className="text-lg font-bold text-foreground">{beforeAfter.afterTitle}</h3>
          <p className="text-sm leading-relaxed text-foreground">{beforeAfter.afterBody}</p>
          <div className="flex items-start gap-2 rounded-[10px] bg-muted p-3">
            <Zap size={15} className="mt-0.5 shrink-0 text-primary" />
            <span className="text-[13px] font-medium leading-relaxed text-foreground">
              {beforeAfter.impact}
            </span>
          </div>
          <span className="text-xs font-medium text-muted-foreground">{beforeAfter.meta}</span>
        </div>
      </div>
    </Section>
  )
}
