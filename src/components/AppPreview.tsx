import {
  CircleCheck,
  GitCommitHorizontal,
  GitPullRequest,
  Lock,
  Tag,
  type LucideIcon,
} from 'lucide-react'

type Row = {
  icon: LucideIcon
  title: string
  meta: string
  time: string
}

const ROWS: Row[] = [
  {
    icon: GitPullRequest,
    title: 'Correção no cálculo de paradas de combustível',
    meta: 'PR #15 · feature/fuel-stops → main  ·  +36 −0 · 2 arquivos',
    time: 'agora',
  },
  {
    icon: GitCommitHorizontal,
    title: 'Guarda contra ETA inválido em rotas longas',
    meta: 'Push · main · 711c745  ·  +4 −0 · 1 arquivo',
    time: '2h',
  },
  {
    icon: Tag,
    title: 'Versão 1.3.2 — melhorias de estabilidade',
    meta: 'Release · main · 55f9054  ·  Changelog gerado',
    time: 'ontem',
  },
]

const SEGMENTS = ['Todos', 'PRs', 'Pushes', 'Versões']

export function AppPreview() {
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
            <h3 className="text-lg font-bold text-foreground">Resumos recentes</h3>
            <span className="inline-flex items-center gap-1.5 rounded-pill bg-success-soft px-2.5 py-1 text-xs font-semibold text-success">
              <span className="size-1.5 rounded-full bg-success" />
              Ao vivo
            </span>
          </div>
          <div className="flex items-center gap-0.5 self-start rounded-[10px] bg-muted p-1">
            {SEGMENTS.map((s, i) => (
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

        {ROWS.map((row) => (
          <div
            key={row.title}
            className="flex items-center gap-3.5 rounded-xl border border-line p-4"
          >
            <span className="flex size-[38px] shrink-0 items-center justify-center rounded-[9px] bg-muted">
              <row.icon size={18} className="text-foreground" />
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
                <CircleCheck size={13} className="text-success" />
                <span className="text-xs font-medium text-muted-foreground">Notion</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
