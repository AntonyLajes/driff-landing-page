import {
  GitCommitHorizontal,
  GitPullRequest,
  LayoutDashboard,
  Tag,
  type LucideIcon,
} from 'lucide-react'

import { IconChip, Section, SectionHead } from './primitives'

const STATS = [
  { label: 'Resumos gerados', value: '49', delta: '+13' },
  { label: 'PRs analisados', value: '18', delta: '+5' },
  { label: 'Pushes resumidos', value: '31', delta: '+8' },
  { label: 'Tempo economizado', value: '12.5h', delta: '+3.2h' },
]

const FEATURES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: GitPullRequest,
    title: 'Resumo de Pull Requests',
    desc: 'Todo PR mergeado vira um resumo profissional, com as estatísticas do diff. Reviewer e PM entendem em segundos.',
  },
  {
    icon: GitCommitHorizontal,
    title: 'Resumo de Pushes diretos',
    desc: 'Hotfix ou time numa branch só? Resume pushes diretos com deduplicação — nunca a mesma coisa duas vezes.',
  },
  {
    icon: Tag,
    title: 'Resumo de Releases',
    desc: 'Bumpou a versão? Gera um changelog automático, pronto pra compartilhar com o time ou com clientes.',
  },
]

export function Features() {
  return (
    <Section id="recursos" tone="canvas">
      <SectionHead eyebrow="RECURSOS" title="Tudo que muda no código vira narrativa." />

      <div className="mt-12 flex flex-col gap-5">
        {/* Featured card */}
        <div className="flex flex-col items-center gap-8 rounded-card border border-line bg-card p-8 lg:flex-row lg:gap-9">
          <div className="flex flex-1 flex-col gap-3.5">
            <IconChip icon={LayoutDashboard} />
            <h3 className="text-[22px] font-bold text-foreground">
              Feed unificado + Métricas de produtividade
            </h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Um único lugar com todo o progresso do time: filtros por tipo, busca e métricas que
              importam — PRs analisados, commits, linhas alteradas e tempo de review economizado.
            </p>
          </div>
          <div className="grid w-full grid-cols-2 gap-3 lg:w-[440px]">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-1.5 rounded-xl border border-line bg-canvas p-4"
              >
                <span className="text-xs font-medium text-muted-foreground">{s.label}</span>
                <span className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-foreground">{s.value}</span>
                  <span className="text-xs font-semibold text-success">{s.delta}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Three feature cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-3.5 rounded-card border border-line bg-card p-7"
            >
              <IconChip icon={f.icon} />
              <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
