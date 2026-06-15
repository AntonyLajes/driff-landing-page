import {
  CircleCheck,
  GitCommitHorizontal,
  GitPullRequest,
  Lock,
  Tag,
  type LucideIcon,
} from 'lucide-react'

import { useCopy } from '@/i18n'
import { BrandIcon, type BrandName } from './BrandIcon'

const ROW_ICONS: LucideIcon[] = [GitPullRequest, GitCommitHorizontal, Tag]

// Destination each summary was delivered to (showcases multi-destination).
const ROW_DESTINATIONS: { brand: BrandName; name: string }[] = [
  { brand: 'notion', name: 'Notion' },
  { brand: 'slack', name: 'Slack' },
  { brand: 'teams', name: 'Teams' },
]

export function AppPreview() {
  const { preview } = useCopy()
  const segments = [preview.segAll, preview.segPR, preview.segPush, preview.segVersion]

  return (
    <div className="shadow-window overflow-hidden rounded-card border border-line bg-card">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-line px-4 py-3.5 sm:px-5">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-[#FF5F57]" />
          <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="size-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex items-center gap-1.5 rounded-pill bg-muted px-4 py-1.5">
          <Lock size={12} className="text-muted-foreground" />
          <span className="text-xs font-medium text-muted-foreground">app.driff.dev/resumos</span>
        </div>
        <span className="w-16" />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 p-5 sm:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <h3 className="text-lg font-bold text-foreground">{preview.title}</h3>
            <span className="inline-flex items-center gap-1.5 rounded-pill bg-success-soft px-2.5 py-1 text-xs font-semibold text-success">
              <span className="size-1.5 rounded-full bg-success" />
              {preview.live}
            </span>
          </div>
          <div className="flex items-center gap-0.5 self-start rounded-[10px] bg-muted p-1">
            {segments.map((s, i) => (
              <span
                key={s}
                className={`rounded-[7px] px-3.5 py-1.5 text-[13px] ${
                  i === 0
                    ? 'bg-card font-semibold text-foreground shadow-card'
                    : 'font-medium text-muted-foreground'
                }`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {preview.rows.map((row, i) => {
          const Icon = ROW_ICONS[i]
          const dest = ROW_DESTINATIONS[i]
          return (
            <div
              key={row.title}
              className="flex items-center gap-3.5 rounded-xl border border-line p-4"
            >
              <span className="flex size-[38px] shrink-0 items-center justify-center rounded-[9px] bg-muted">
                <Icon size={18} className="text-foreground" />
              </span>
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="truncate text-[15px] font-semibold text-foreground">
                  {row.title}
                </span>
                <span className="truncate text-[13px] text-muted-foreground">{row.meta}</span>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1.5">
                <span className="text-xs font-medium text-muted-foreground">{row.time}</span>
                <span className="inline-flex items-center gap-1.5">
                  <CircleCheck size={12} className="text-success" />
                  <BrandIcon name={dest.brand} size={13} />
                  <span className="text-xs font-medium text-muted-foreground">{dest.name}</span>
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
