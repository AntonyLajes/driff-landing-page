import { Bug, CircleCheck, Sparkles, Tag, Zap, type LucideIcon } from 'lucide-react'

import { useCopy } from '@/i18n'
import { BrandIcon } from './BrandIcon'
import { Section, SectionHead } from './primitives'

const GROUP_ICONS: LucideIcon[] = [Sparkles, Zap, Bug]

export function Changelog() {
  const { changelog } = useCopy()

  return (
    <Section id="changelog" tone="canvas">
      <SectionHead
        eyebrow={changelog.eyebrow}
        eyebrowTone="primary"
        title={changelog.title}
        subtitle={changelog.subtitle}
      />

      <div className="shadow-window mt-12 overflow-hidden rounded-card border border-line bg-card">
        <div className="flex flex-col lg:flex-row">
          {/* Release meta */}
          <div className="flex flex-col gap-4 border-b border-line p-6 sm:p-8 lg:w-[300px] lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-[9px] bg-primary-soft">
                <Tag size={18} className="text-primary" />
              </span>
              <span className="rounded-pill border border-line bg-canvas px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                {changelog.autoTag}
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-xl font-bold text-foreground">{changelog.version}</h3>
              <span className="text-sm text-muted-foreground">{changelog.date}</span>
            </div>
            <div className="mt-auto flex items-center gap-2 pt-2">
              <span className="text-[13px] text-muted-foreground">{changelog.publishedTo}</span>
              <BrandIcon name="notion" size={16} />
              <BrandIcon name="slack" size={16} />
              <CircleCheck size={14} className="text-success" />
            </div>
          </div>

          {/* Grouped changes */}
          <div className="flex flex-1 flex-col gap-6 p-6 sm:p-8">
            {changelog.groups.map((group, i) => {
              const Icon = GROUP_ICONS[i]
              return (
                <div key={group.label} className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <span className="flex size-6 items-center justify-center rounded-md bg-muted">
                      <Icon size={13} className="text-foreground" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {group.label}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5 pl-1">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
