import azureDevopsSrc from '@/assets/brand/azure-devops.svg'
import bitbucketSrc from '@/assets/brand/bit-bucket.svg'
import discordSrc from '@/assets/brand/discord.svg'
import giteaSrc from '@/assets/brand/gitea.svg'
import gitlabSrc from '@/assets/brand/gitlab.svg'
import linearSrc from '@/assets/brand/linear.svg'
import teamsSrc from '@/assets/brand/microsoft-teams.svg'
import notionSrc from '@/assets/brand/notion.svg'
import slackSrc from '@/assets/brand/slack.svg'
import telegramSrc from '@/assets/brand/telegram.svg'
import whatsappSrc from '@/assets/brand/whatsapp.svg'
import wordSrc from '@/assets/brand/word.svg'

/** Original full-color brand logos (assets in src/assets/brand/).
 *  GitHub is monochrome and comes from @icons-pack/react-simple-icons. */
const BRAND_SRC = {
  'azure-devops': azureDevopsSrc,
  bitbucket: bitbucketSrc,
  discord: discordSrc,
  gitea: giteaSrc,
  gitlab: gitlabSrc,
  linear: linearSrc,
  teams: teamsSrc,
  notion: notionSrc,
  slack: slackSrc,
  telegram: telegramSrc,
  whatsapp: whatsappSrc,
  word: wordSrc,
} as const

export type BrandName = keyof typeof BRAND_SRC

export function BrandIcon({
  name,
  size = 22,
  className = '',
}: {
  name: BrandName
  size?: number
  className?: string
}) {
  return (
    <img
      src={BRAND_SRC[name]}
      alt=""
      aria-hidden
      width={size}
      height={size}
      className={`shrink-0 object-contain ${className}`}
    />
  )
}
