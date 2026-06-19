import type { CSSProperties } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'

import { useCopy } from '@/i18n'
import { BrandIcon, type BrandName } from './BrandIcon'
import { DriffMark } from './DriffMark'
import { Section, SectionHead } from './primitives'

type Node = { name: string; brand?: BrandName; github?: boolean; live?: boolean }

const ORIGINS: Node[] = [
  { name: 'GitHub', github: true, live: true },
  { name: 'GitLab', brand: 'gitlab', live: true },
  { name: 'Bitbucket', brand: 'bitbucket', live: true },
  { name: 'Gitea', brand: 'gitea' },
  { name: 'Azure DevOps', brand: 'azure-devops' },
]

const DESTINATIONS: Node[] = [
  { name: 'Notion', brand: 'notion', live: true },
  { name: 'Slack', brand: 'slack', live: true },
  { name: 'Teams', brand: 'teams', live: true },
  { name: 'WhatsApp', brand: 'whatsapp' },
  { name: 'Discord', brand: 'discord' },
  { name: 'Telegram', brand: 'telegram' },
  { name: 'Linear', brand: 'linear' },
]

function Glyph({ node }: { node: Node }) {
  if (node.github) return <SiGithub size={20} className="text-foreground" />
  return <BrandIcon name={node.brand!} size={20} />
}

function NodeRow({ node }: { node: Node }) {
  const { integrations } = useCopy()
  return (
    <div
      className={`flex items-center gap-2.5 rounded-xl border border-line bg-card px-3.5 py-2.5 ${
        node.live ? '' : 'opacity-70'
      }`}
    >
      <span className="flex size-7 items-center justify-center">
        <Glyph node={node} />
      </span>
      <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">
        {node.name}
      </span>
      {node.live ? (
        <span
          className="size-1.5 shrink-0 rounded-full bg-success"
          title={integrations.available}
        />
      ) : (
        <span className="shrink-0 text-[11px] font-medium text-muted-foreground">
          {integrations.inDevelopment}
        </span>
      )}
    </div>
  )
}

function Cluster({ label, nodes }: { label: string; nodes: Node[] }) {
  return (
    <div className="flex w-full flex-col gap-3 lg:w-[270px]">
      <span className="text-center text-xs font-bold tracking-wider text-muted-foreground">
        {label}
      </span>
      <div className="flex flex-col gap-2.5">
        {nodes.map((n) => (
          <NodeRow key={n.name} node={n} />
        ))}
      </div>
    </div>
  )
}

/** Horizontal flowing line on desktop, chevron-down on mobile. */
function Connector() {
  return (
    <div className="flex w-full items-center justify-center py-1 lg:w-auto lg:flex-1 lg:px-2">
      <div className="hidden flex-1 items-center gap-1.5 lg:flex">
        <span className="flow-line h-0.5 flex-1 rounded-full" />
        <ArrowRight size={16} className="shrink-0 text-primary" />
      </div>
      <ChevronDown size={22} className="text-primary lg:hidden" />
    </div>
  )
}

export function Integrations() {
  const { integrations } = useCopy()
  return (
    <Section id="integrations" tone="background">
      <SectionHead
        eyebrow={integrations.eyebrow}
        eyebrowTone="primary"
        title={integrations.title}
        subtitle={integrations.subtitle}
      />

      <div
        className="assemble mt-14 flex flex-col items-center gap-2 lg:flex-row lg:items-center lg:gap-0"
        style={{ '--seq': 1 } as CSSProperties}
      >
        <Cluster label={integrations.origins} nodes={ORIGINS} />

        <Connector />

        {/* Central Driff node */}
        <div className="flex flex-col items-center gap-3 px-2 py-2">
          <span className="driff-node flex size-16 items-center justify-center rounded-2xl bg-primary">
            <DriffMark size={34} className="text-on-primary" />
          </span>
          <span className="text-sm font-bold text-foreground">Driff</span>
        </div>

        <Connector />

        <Cluster label={integrations.destinations} nodes={DESTINATIONS} />
      </div>

      <p
        className="assemble mt-10 flex items-center justify-center gap-1.5 text-center text-[13px] text-muted-foreground"
        style={{ '--seq': 2 } as CSSProperties}
      >
        <span className="size-1.5 rounded-full bg-success" />
        {integrations.caption}
      </p>
    </Section>
  )
}
