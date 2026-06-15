import { EyeOff, PenLine, Search, type LucideIcon } from 'lucide-react'

import { useCopy } from '@/i18n'
import { IconChip, Section, SectionHead } from './primitives'

const ICONS: LucideIcon[] = [PenLine, EyeOff, Search]

export function Problem() {
  const { problem } = useCopy()
  return (
    <Section tone="canvas">
      <SectionHead eyebrow={problem.eyebrow} title={problem.title} subtitle={problem.subtitle} />
      <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3">
        {problem.cards.map((c, i) => (
          <div
            key={c.title}
            className="card-hover flex flex-col gap-3.5 rounded-card border border-line bg-card p-7"
          >
            <IconChip icon={ICONS[i]} />
            <h3 className="text-lg font-bold text-foreground">{c.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
