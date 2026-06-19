import { useState } from 'react'
import { Sparkles } from 'lucide-react'

import { useCopy } from '@/i18n'
import { AskChatOverlay, type DemoQA } from './AskChatOverlay'

/**
 * Embeddable "Ask Driff" launcher (search box + quick chips) that opens the
 * full-screen chat overlay. Used as the visual for the Ask Driff feature row.
 */
export function AskLauncher() {
  const { ask } = useCopy()
  const [open, setOpen] = useState(false)
  const [prompt, setPrompt] = useState<string | null>(null)

  const qa: DemoQA[] = [
    { q: ask.q1, a: ask.a1, src: ask.a1sources },
    { q: ask.q2, a: ask.a2 },
    { q: ask.q3, a: ask.a3 },
  ]
  const suggestions = [ask.q1, ask.q2, ask.q3]

  const launch = (p: string | null) => {
    setPrompt(p)
    setOpen(true)
  }

  return (
    <div className="w-full">
      <div className="shadow-window rounded-card border border-line bg-card p-4 sm:p-5">
        <button
          type="button"
          onClick={() => launch(null)}
          className="group flex w-full cursor-text items-center gap-3 rounded-2xl border border-line bg-background px-4 py-3.5 text-left transition-colors hover:border-primary/40"
        >
          <Sparkles size={18} className="shrink-0 text-primary" />
          <span className="flex-1 truncate text-[15px] text-muted-foreground">
            {ask.inputPlaceholder}
          </span>
          <span className="hidden shrink-0 rounded-pill bg-primary px-4 py-1.5 text-[13px] font-semibold text-on-primary sm:inline-flex">
            Ask
          </span>
        </button>
        <div className="mt-3 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => launch(s)}
              className="cursor-pointer rounded-pill border border-line bg-background px-3 py-1.5 text-[12px] font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <AskChatOverlay
        open={open}
        initialPrompt={prompt}
        qa={qa}
        placeholder={ask.inputPlaceholder}
        fallback={ask.demoReply}
        suggestions={suggestions}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}
