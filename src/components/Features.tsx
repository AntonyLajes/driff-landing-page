import { FileText, LayoutDashboard, Sparkles, Tag, type LucideIcon } from 'lucide-react'

import { useCopy } from '@/i18n'
import { IconChip, Section, SectionHead } from './primitives'
import { Stagger } from './Stagger'

const STAT_VALUES = [
  { value: '49', delta: '+13' },
  { value: '18', delta: '+5' },
  { value: '31', delta: '+8' },
  { value: '12.5h', delta: '+3.2h' },
]

const CARD_ICONS: LucideIcon[] = [Sparkles, FileText, Tag]

export function Features() {
  const { features } = useCopy()
  return (
    <Section id="features" tone="canvas">
      <SectionHead eyebrow={features.eyebrow} title={features.title} />

      <div className="mt-12 flex flex-col gap-5">
        {/* Featured card */}
        <div className="card-hover group flex flex-col items-center gap-8 rounded-card border border-line bg-card p-8 lg:flex-row lg:gap-9">
          <div className="flex flex-1 flex-col gap-3.5">
            <IconChip icon={LayoutDashboard} />
            <h3 className="text-[22px] font-bold text-foreground">{features.featuredTitle}</h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              {features.featuredDesc}
            </p>
          </div>
          <div className="grid w-full grid-cols-2 gap-3 lg:w-[440px]">
            {features.stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col gap-1.5 rounded-xl border border-line bg-canvas p-4"
              >
                <span className="text-xs font-medium text-muted-foreground">{s.label}</span>
                <span className="flex items-center gap-2">
                  <span className="text-2xl font-bold leading-none text-foreground">
                    {STAT_VALUES[i].value}
                  </span>
                  <span className="text-xs font-semibold text-success">{STAT_VALUES[i].delta}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Three feature cards */}
        <Stagger className="grid gap-5 md:grid-cols-3">
          {features.cards.map((f, i) => (
            <div
              key={f.title}
              className="card-hover group flex h-full flex-col gap-3.5 rounded-card border border-line bg-card p-7"
            >
              <IconChip icon={CARD_ICONS[i]} />
              <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </Stagger>
      </div>
    </Section>
  )
}
