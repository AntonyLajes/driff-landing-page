import { type CSSProperties, useCallback, useEffect, useRef, useState } from 'react'
import { ArrowUp, X } from 'lucide-react'

import { DriffMark } from './DriffMark'

export type DemoQA = { q: string; a: string; src?: string }
type Msg = { role: 'user' | 'driff'; text: string; src?: string }

/**
 * Full-screen "Ask Driff" chat that animates in over a blurred page (the
 * "search opens a new screen" feel). Self-contained and portable: pass the
 * demo Q&A, a fallback answer and suggestions. Simulated responses only.
 */
export function AskChatOverlay({
  open,
  initialPrompt,
  qa,
  placeholder,
  fallback,
  suggestions,
  onClose,
}: {
  open: boolean
  initialPrompt: string | null
  qa: DemoQA[]
  placeholder: string
  fallback: string
  suggestions: string[]
  onClose: () => void
}) {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const timers = useRef<number[]>([])

  const send = useCallback(
    (text: string) => {
      const q = text.trim()
      if (!q) return
      setInput('')
      setMessages((m) => [...m, { role: 'user', text: q }])
      setTyping(true)
      const match = qa.find((x) => x.q.toLowerCase() === q.toLowerCase())
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const t = window.setTimeout(
        () => {
          setTyping(false)
          setMessages((m) => [
            ...m,
            match ? { role: 'driff', text: match.a, src: match.src } : { role: 'driff', text: fallback },
          ])
        },
        reduce ? 0 : 1150,
      )
      timers.current.push(t)
    },
    [qa, fallback],
  )

  // Mount + animate in / out.
  useEffect(() => {
    if (open) {
      setMounted(true)
      const r = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(r)
    }
    setVisible(false)
    const t = window.setTimeout(() => {
      setMounted(false)
      setMessages([])
      setTyping(false)
      setInput('')
    }, 300)
    return () => clearTimeout(t)
  }, [open])

  // Scroll lock + escape + focus while mounted.
  useEffect(() => {
    if (!mounted) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const f = window.setTimeout(() => inputRef.current?.focus(), 340)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
      clearTimeout(f)
    }
  }, [mounted, onClose])

  // Auto-send the prompt the launcher opened with.
  useEffect(() => {
    if (!open || !initialPrompt) return
    const t = window.setTimeout(() => send(initialPrompt), 420)
    return () => clearTimeout(t)
  }, [open, initialPrompt, send])

  // Keep latest message in view.
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-[80] flex justify-center">
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Ask Driff"
        className={`relative z-10 flex h-[100dvh] w-full max-w-[760px] flex-col transition-all duration-300 ease-out ${
          visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-[0.98] opacity-0'
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-5 py-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-pill bg-primary">
              <DriffMark size={18} className="text-on-primary" />
            </span>
            <span className="text-base font-bold text-foreground">Ask Driff</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex size-9 cursor-pointer items-center justify-center rounded-pill border border-line text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X size={18} />
          </button>
        </div>

        <div ref={scrollRef} className="no-scrollbar flex-1 overflow-y-auto overscroll-contain px-5 sm:px-6">
          <div className="mx-auto flex min-h-full max-w-[680px] flex-col gap-4 py-4">
            {messages.length === 0 && !typing ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-6 py-10 text-center">
                <span className="flex size-14 items-center justify-center rounded-3xl bg-primary">
                  <DriffMark size={30} className="text-on-primary" />
                </span>
                <p className="max-w-[440px] text-xl font-semibold text-foreground">{placeholder}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      className="cursor-pointer rounded-pill border border-line bg-card px-3.5 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {messages.map((m, i) => (
                  <Bubble key={i} m={m} />
                ))}
                {typing && <TypingRow />}
              </>
            )}
          </div>
        </div>

        <div className="px-5 pb-6 pt-2 sm:px-6">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
            className="mx-auto flex max-w-[680px] items-center gap-2 rounded-2xl border border-line bg-card p-2 pl-4 shadow-card transition-colors focus-within:border-primary/50"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={placeholder}
              className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              aria-label="Send"
              className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-pill bg-primary text-on-primary transition-opacity hover:opacity-90"
            >
              <ArrowUp size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

function Bubble({ m }: { m: Msg }) {
  if (m.role === 'user') {
    return (
      <div className="msg-in flex justify-end">
        <div className="max-w-[80%] break-words rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm font-medium text-on-primary">
          {m.text}
        </div>
      </div>
    )
  }
  return (
    <div className="msg-in flex items-start gap-2.5">
      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-pill bg-primary">
        <DriffMark size={17} className="text-on-primary" />
      </span>
      <div className="flex max-w-[85%] flex-col gap-2 rounded-2xl rounded-tl-md border border-line bg-card px-4 py-3">
        <p className="text-sm leading-relaxed text-foreground">{m.text}</p>
        {m.src && (
          <span className="w-fit rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
            {m.src}
          </span>
        )}
      </div>
    </div>
  )
}

function TypingRow() {
  return (
    <div className="msg-in flex items-center gap-2.5">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-pill bg-primary">
        <DriffMark size={17} className="text-on-primary" />
      </span>
      <div className="flex items-center gap-1 rounded-2xl rounded-tl-md border border-line bg-card px-4 py-3.5">
        {[0, 1, 2].map((d) => (
          <span
            key={d}
            className="typing-dot size-1.5 rounded-full bg-muted-foreground"
            style={{ animationDelay: `${d * 0.18}s` } as CSSProperties}
          />
        ))}
      </div>
    </div>
  )
}
