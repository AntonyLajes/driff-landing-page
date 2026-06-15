import { useEffect, useState } from 'react'
import { GitMerge } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'

import { BrandIcon, type BrandName } from './BrandIcon'

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

const TILE_POS = ['left-0 top-1', 'left-[80px] top-[78px]', 'left-[14px] top-[150px]']
const TILE_POS_RIGHT = ['right-0 top-1', 'right-[80px] top-[78px]', 'right-[14px] top-[150px]']

/** Swap one random tile to a brand not currently shown on that side. */
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

function Glyph({ item }: { item: Brand }) {
  if (item.github) return <SiGithub size={26} className="text-foreground" />
  return <BrandIcon name={item.brand!} size={26} />
}

function Tile({
  item,
  swapKey,
  position,
  floatDelay,
}: {
  item: Brand
  swapKey: number
  position: string
  floatDelay: number
}) {
  return (
    <div
      className={`float-tile absolute flex size-[60px] items-center justify-center rounded-2xl border border-line bg-card shadow-card ${position}`}
      style={{ animationDelay: `${floatDelay}s` }}
    >
      <span key={swapKey} className="tile-swap flex items-center justify-center">
        <Glyph item={item} />
      </span>
    </div>
  )
}

/** Animated "from → to" constellation: code origins flow into the Driff node
 *  and out to delivery destinations. One random tile cycles at a time. */
export function HeroFlow() {
  const [origins, setOrigins] = useState([0, 1, 2])
  const [dests, setDests] = useState([0, 1, 2])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      if (Math.random() < 0.5) {
        setOrigins((prev) => swapOne(prev, ORIGINS.length))
      } else {
        setDests((prev) => swapOne(prev, DESTINATIONS.length))
      }
    }, 1900)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="hidden items-center justify-center gap-3 md:flex" aria-hidden>
      {/* Origins */}
      <div className="relative h-[210px] w-[170px]">
        {TILE_POS.map((position, i) => (
          <Tile
            key={i}
            item={ORIGINS[origins[i]]}
            swapKey={origins[i]}
            position={position}
            floatDelay={i * 0.7}
          />
        ))}
      </div>

      <div className="dot-line w-16 shrink-0 lg:w-24" />

      {/* Driff node */}
      <div className="driff-node flex size-[76px] shrink-0 items-center justify-center rounded-3xl bg-primary">
        <GitMerge size={34} className="text-on-primary" />
      </div>

      <div className="dot-line w-16 shrink-0 lg:w-24" />

      {/* Destinations */}
      <div className="relative h-[210px] w-[170px]">
        {TILE_POS_RIGHT.map((position, i) => (
          <Tile
            key={i}
            item={DESTINATIONS[dests[i]]}
            swapKey={dests[i]}
            position={position}
            floatDelay={0.4 + i * 0.7}
          />
        ))}
      </div>
    </div>
  )
}
