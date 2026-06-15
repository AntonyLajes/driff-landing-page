import { Fragment } from 'react'
import { ArrowRight, BarChart3, ChevronDown, Plug, Zap, type LucideIcon } from 'lucide-react'

import { useCopy } from '@/i18n'
import { IconChip, Section, SectionHead } from './primitives'

const STEP_ICONS: LucideIcon[] = [Plug, Zap, BarChart3]

function Connector() {
  return (
    <div className="flex shrink-0 items-center justify-center py-1 lg:px-1">
      <div className="hidden items-center gap-1.5 lg:flex">
        <span className="flow-line h-0.5 w-10 rounded-full" />
        <ArrowRight size={16} className="text-primary" />
      </div>
      <ChevronDown size={22} className="text-primary lg:hidden" />
    </div>
  )
}

export function HowItWorks() {
  const { how } = useCopy()
  return (
    <Section id="como-funciona" tone="background">
      <SectionHead
        eyebrow={how.eyebrow}
        eyebrowTone="primary"
        title={how.title}
        subtitle={how.subtitle}
      />
      <div className="mt-14 flex flex-col items-stretch gap-2 lg:flex-row lg:items-stretch lg:gap-0">
        {how.steps.map((s, i) => (
          <Fragment key={s.title}>
            <div className="card-hover flex flex-1 flex-col gap-4 rounded-card border border-line bg-card p-7">
              <div className="flex items-start justify-between">
                <IconChip icon={STEP_ICONS[i]} />
                <span className="text-3xl font-bold leading-none text-muted-foreground/25">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
            {i < how.steps.length - 1 && <Connector />}
          </Fragment>
        ))}
      </div>
    </Section>
  )
}
