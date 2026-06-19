import { type CSSProperties } from 'react'
import { Clock, EyeOff, History, type LucideIcon } from 'lucide-react'

import { useCopy } from '@/i18n'
import { MarkerText } from './MarkerText'
import { Section } from './primitives'

const ICONS: LucideIcon[] = [Clock, EyeOff, History]

export function Problem() {
  const { problem } = useCopy()
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Intro */}
        <div className="assemble flex flex-col gap-4" style={{ '--seq': 0 } as CSSProperties}>
          <span className="text-[13px] font-bold tracking-wider text-danger">{problem.eyebrow}</span>
          <h2 className="text-balance text-3xl font-bold leading-[1.12] text-foreground sm:text-[40px]">
            <MarkerText>{problem.title}</MarkerText>
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {problem.subtitle}
          </p>
        </div>

        {/* Topics */}
        <div className="flex flex-col lg:pt-1">
          {problem.cards.map((c, i) => {
            const Icon = ICONS[i]
            return (
              <div
                key={c.title}
                className={`assemble flex gap-5 py-6 ${i > 0 ? 'border-t border-line' : 'lg:pt-0'}`}
                style={{ '--seq': i + 1 } as CSSProperties}
              >
                <Icon size={26} strokeWidth={1.75} className="mt-0.5 shrink-0 text-primary/40" />
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-bold text-foreground">{c.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
