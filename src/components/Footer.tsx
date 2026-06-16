import { SiGithub } from '@icons-pack/react-simple-icons'

import { analytics } from '@/lib/analytics'
import { useCopy } from '@/i18n'
import { DriffMark } from './DriffMark'

const GITHUB_URL = 'https://github.com/AntonyLajes'

export function Footer() {
  const copy = useCopy()
  const { footer, nav } = copy

  const productLinks = [
    { label: nav.howItWorks, href: '#how-it-works' },
    { label: nav.features, href: '#features' },
    { label: nav.integrations, href: '#integrations' },
    { label: nav.faq, href: '#faq' },
  ]
  const legalLinks = [{ label: footer.privacy, href: '/privacy.html' }]

  return (
    <footer className="w-full bg-ink">
      <div className="mx-auto w-full max-w-[1140px] px-6 py-14 sm:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="flex max-w-xs flex-col gap-4">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary">
                <DriffMark size={17} className="text-on-primary" />
              </span>
              <span className="text-lg font-bold text-[#FAFAFA]">driff</span>
            </a>
            <p className="text-[13px] leading-relaxed text-[#A1A1AA]">{footer.tagline}</p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex size-9 items-center justify-center rounded-pill border border-white/10 text-[#A1A1AA] transition-colors hover:border-white/25 hover:text-[#FAFAFA]"
            >
              <SiGithub size={16} />
            </a>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterColumn title={footer.product} links={productLinks} />
            <FooterColumn title={footer.legal} links={legalLinks} />
            <FooterColumn
              title="Beta"
              links={[{ label: nav.cta, href: '#whitelist', accent: true }]}
            />
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <span className="text-[13px] text-[#71717A]">© 2026 Driff · {footer.rights}</span>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string; accent?: boolean }[]
}) {
  return (
    <div className="flex flex-col gap-3.5">
      <span className="text-xs font-bold uppercase tracking-wider text-[#71717A]">{title}</span>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              onClick={l.accent ? () => analytics.ctaClicked('footer') : undefined}
              className={`text-sm transition-colors ${
                l.accent
                  ? 'font-semibold text-primary hover:opacity-80'
                  : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
              }`}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
