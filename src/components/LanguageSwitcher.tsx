import { useEffect, useRef, useState } from 'react'
import { Check, Globe } from 'lucide-react'

import {
  changeLanguage,
  SUPPORTED_LANGUAGES,
  useActiveLanguage,
  type LanguageCode,
} from '@/i18n'

export function LanguageSwitcher() {
  const active = useActiveLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const activeLabel =
    SUPPORTED_LANGUAGES.find((l) => l.code === active)?.label ?? 'English'

  const pick = (code: LanguageCode) => {
    changeLanguage(code)
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        className="flex items-center gap-1.5 rounded-pill border border-line px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{activeLabel}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="shadow-card absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-card border border-line bg-card py-1"
        >
          {SUPPORTED_LANGUAGES.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === active}
                onClick={() => pick(l.code)}
                className="flex w-full items-center justify-between px-3.5 py-2 text-sm text-foreground transition-colors hover:bg-muted"
              >
                {l.label}
                {l.code === active && <Check size={15} className="text-primary" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
