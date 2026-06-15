import { GitMerge } from 'lucide-react'

import { useCopy } from '@/i18n'

export function Footer() {
  const { footer } = useCopy()
  return (
    <footer className="w-full bg-ink">
      <div className="mx-auto flex w-full max-w-[1140px] flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary">
            <GitMerge size={16} className="text-on-primary" />
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="text-lg font-bold text-[#FAFAFA]">driff</span>
            <span className="text-[13px] text-[#A1A1AA]">{footer.tagline}</span>
          </div>
        </div>
        <span className="text-[13px] text-[#A1A1AA]">© 2026 Driff</span>
      </div>
    </footer>
  )
}
