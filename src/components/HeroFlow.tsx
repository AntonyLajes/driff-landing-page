import { useEffect, useState } from 'react'
import { SiGithub } from '@icons-pack/react-simple-icons'

import { useCopy } from '@/i18n'
import { BrandIcon, type BrandName } from './BrandIcon'
import { DriffMark } from './DriffMark'

type Brand = { github?: boolean; brand?: BrandName }

const ORIGINS: Brand[] = [
  { github: true },
  { brand: 'gitlab' },
  { brand: 'bitbucket' },
  { brand: 'gitea' },
  { brand: 'azure-devops' },
]

const DESTINATIONS: Brand[] = [
  { brand: 'notion' },
  { brand: 'slack' },
  { brand: 'teams' },
  { brand: 'whatsapp' },
  { brand: 'discord' },
  { brand: 'telegram' },
  { brand: 'linear' },
]

// Diagram geometry (SVG user units == px in the 340×420 box).
const SRC_X = 46
const DST_X = 294
const DRIFF = { x: 170, y: 210 }
const ROWS = [80, 210, 340]

const srcPath = (y: number) => `M${SRC_X} ${y} C 104 ${y} 116 ${DRIFF.y} ${DRIFF.x} ${DRIFF.y}`
const dstPath = (y: number) => `M${DRIFF.x} ${DRIFF.y} C 224 ${DRIFF.y} 236 ${y} ${DST_X} ${y}`

/** Swap one visible tile to a brand not currently shown on that side. */
function swapOne(current: number[], poolLength: number): number[] {
  const tile = Math.floor(Math.random() * current.length)
  const used = new Set(current.filter((_, i) => i !== tile))
  const candidates: number[] = []
  for (let i = 0; i < poolLength; i++) {
    if (!used.has(i) && i !== current[tile]) candidates.push(i)
  }
  if (candidates.length === 0) return current
  const next = candidates[Math.floor(Math.random() * candidates.length)]
  const copy = current.slice()
  copy[tile] = next
  return copy
}

function Glyph({ item, size = 24 }: { item: Brand; size?: number }) {
  if (item.github) return <SiGithub size={size} className="text-foreground" />
  return <BrandIcon name={item.brand!} size={size} />
}

function Tile({ item, swapKey, x, y }: { item: Brand; swapKey: number; x: number; y: number }) {
  return (
    <div
      className="absolute flex size-[54px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-line bg-card shadow-card"
      style={{ left: x, top: y }}
    >
      <span key={swapKey} className="tile-swap flex items-center justify-center">
        <Glyph item={item} />
      </span>
    </div>
  )
}

/** Animated "how it works" diagram: code sources flow through the Driff node and
 *  out to delivery destinations. Pulses travel the wires; one tile cycles its
 *  brand at a time. */
export function HeroFlow() {
  const { integrations } = useCopy()
  const [origins, setOrigins] = useState([0, 1, 2])
  const [dests, setDests] = useState([0, 1, 2])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      if (Math.random() < 0.5) setOrigins((p) => swapOne(p, ORIGINS.length))
      else setDests((p) => swapOne(p, DESTINATIONS.length))
    }, 1900)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative h-[420px] w-[340px] shrink-0 max-[380px]:scale-[0.82]" aria-hidden>
      {/* Wires + traveling pulses */}
      <svg viewBox="0 0 340 420" fill="none" className="absolute inset-0 h-full w-full">
        {ROWS.map((y, i) => (
          <path key={`sp${i}`} id={`src-${i}`} d={srcPath(y)} stroke="var(--line)" strokeWidth={1.5} />
        ))}
        {ROWS.map((y, i) => (
          <path key={`dp${i}`} id={`dst-${i}`} d={dstPath(y)} stroke="var(--line)" strokeWidth={1.5} />
        ))}
        {ROWS.map((_, i) => (
          <circle key={`spulse${i}`} className="hero-pulse" r={3} fill="var(--primary)">
            <animateMotion dur="2.1s" begin={`${i * 0.7}s`} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href={`#src-${i}`} />
            </animateMotion>
          </circle>
        ))}
        {ROWS.map((_, i) => (
          <circle key={`dpulse${i}`} className="hero-pulse" r={3} fill="var(--primary)">
            <animateMotion dur="2.1s" begin={`${i * 0.7 + 0.6}s`} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href={`#dst-${i}`} />
            </animateMotion>
          </circle>
        ))}
      </svg>

      {/* Column captions */}
      <span
        className="absolute -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70"
        style={{ left: SRC_X, top: 16 }}
      >
        {integrations.origins}
      </span>
      <span
        className="absolute -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70"
        style={{ left: DST_X, top: 16 }}
      >
        {integrations.destinations}
      </span>

      {/* Source + destination tiles */}
      {ROWS.map((y, i) => (
        <Tile key={`s${i}`} item={ORIGINS[origins[i]]} swapKey={origins[i]} x={SRC_X} y={y} />
      ))}
      {ROWS.map((y, i) => (
        <Tile key={`d${i}`} item={DESTINATIONS[dests[i]]} swapKey={dests[i]} x={DST_X} y={y} />
      ))}

      {/* Driff node */}
      <div
        className="glow-soft-orange absolute size-[150px] -translate-x-1/2 -translate-y-1/2"
        style={{ left: DRIFF.x, top: DRIFF.y }}
      />
      <div
        className="driff-node absolute flex size-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-primary"
        style={{ left: DRIFF.x, top: DRIFF.y }}
      >
        <DriffMark size={38} className="text-on-primary" />
      </div>
      <span
        className="absolute -translate-x-1/2 text-xs font-bold text-foreground"
        style={{ left: DRIFF.x, top: DRIFF.y + 52 }}
      >
        Driff
      </span>
    </div>
  )
}
