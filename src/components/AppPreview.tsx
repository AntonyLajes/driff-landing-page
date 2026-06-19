import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  GitBranch,
  GitCommitHorizontal,
  GitPullRequest,
  Lock,
  Search,
  Tag,
  type LucideIcon,
} from 'lucide-react'

import { useCopy } from '@/i18n'
import { BrandIcon, type BrandName } from './BrandIcon'
import { DriffMark } from './DriffMark'

type Kind = 'pr' | 'push' | 'release'

type Row = {
  kind: Kind
  repo: string
  ref: string
  add?: number
  del?: number
  files?: number
  hash: string
  author: string
  dest: BrandName
}

// Demo data — illustrative, not wired to the real app (the LP is a testbed).
const ROWS: Row[] = [
  {
    kind: 'pr',
    repo: 'driff/app',
    ref: 'feat/streak-freeze',
    add: 210,
    del: 18,
    files: 6,
    hash: 'a1b2c3d',
    author: 'AL',
    dest: 'notion',
  },
  {
    kind: 'push',
    repo: 'driff/app',
    ref: 'main',
    add: 12,
    del: 3,
    files: 2,
    hash: 'e4f5a6b',
    author: 'MR',
    dest: 'slack',
  },
  {
    kind: 'release',
    repo: 'driff/app',
    ref: 'v2.4.0',
    files: 9,
    hash: '9c0d1e2',
    author: 'JS',
    dest: 'teams',
  },
]

const KIND: Record<Kind, { label: string; icon: LucideIcon; chip: string }> = {
  pr: { label: 'PR', icon: GitPullRequest, chip: 'bg-primary-soft text-primary' },
  push: { label: 'PUSH', icon: GitCommitHorizontal, chip: 'bg-muted text-muted-foreground' },
  release: { label: 'RELEASE', icon: Tag, chip: 'bg-success-soft text-success' },
}

export function AppPreview() {
  const { preview, ask } = useCopy()
  const segments = [preview.segAll, preview.segPR, preview.segPush, preview.segVersion]
  const queries = useMemo(
    () => [
      { q: ask.q1, a: ask.a1, src: ask.a1sources },
      { q: ask.q2, a: ask.a2 },
    ],
    [ask.q1, ask.a1, ask.a1sources, ask.q2, ask.a2],
  )

  return (
    <div className="shadow-window overflow-hidden rounded-card border border-line bg-card">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-line px-4 py-3.5 sm:px-5">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-[#FF5F57]" />
          <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="size-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex items-center gap-1.5 rounded-pill bg-muted px-4 py-1.5">
          <Lock size={12} className="text-muted-foreground" />
          <span className="font-mono text-xs text-muted-foreground">app.driff.dev/history</span>
        </div>
        <span className="w-16" />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 p-5 sm:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <h3 className="text-lg font-bold text-foreground">{preview.title}</h3>
            <span className="inline-flex items-center gap-1.5 rounded-pill bg-success-soft px-2.5 py-1 text-xs font-semibold text-success">
              <span className="pulse-dot size-1.5 rounded-full bg-success" />
              {preview.live}
            </span>
          </div>
          <div className="flex items-center gap-0.5 self-start rounded-[10px] bg-muted p-1">
            {segments.map((s, i) => (
              <span
                key={s}
                className={`rounded-[7px] px-3 py-1.5 text-[13px] ${
                  i === 0
                    ? 'bg-card font-semibold text-foreground shadow-card'
                    : 'font-medium text-muted-foreground'
                }`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Ask / search bar — the searchable memory in action (types example
            queries, then Driff "answers"). */}
        <AskDemo queries={queries} />

        {ROWS.map((row, i) => {
          const meta = KIND[row.kind]
          const Icon = meta.icon
          return (
            <div
              key={row.hash}
              className="group flex flex-col gap-2.5 rounded-xl border border-line p-4 transition-colors hover:border-primary/40"
            >
              {/* Line 1 — type + summary + time */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span
                    className={`inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-0.5 font-mono text-[10px] font-bold tracking-wide ${meta.chip}`}
                  >
                    <Icon size={11} />
                    {meta.label}
                  </span>
                  <span className="truncate text-[15px] font-semibold text-foreground">
                    {preview.rows[i].title}
                  </span>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {preview.rows[i].time}
                </span>
              </div>

              {/* Line 2 — technical meta + author + destination */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2 font-mono text-xs text-muted-foreground">
                  <GitBranch size={12} className="shrink-0" />
                  <span className="truncate">
                    {row.repo} · {row.ref}
                  </span>
                  {row.kind === 'release' ? (
                    <span className="shrink-0 text-foreground">{row.files} files</span>
                  ) : (
                    <span className="shrink-0">
                      <span className="text-success">+{row.add}</span>{' '}
                      <span className="text-danger">−{row.del}</span>
                    </span>
                  )}
                  <span className="hidden shrink-0 text-muted-foreground/60 md:inline">
                    {row.hash}
                  </span>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <span className="flex size-6 items-center justify-center rounded-full bg-muted font-mono text-[10px] font-bold text-foreground">
                    {row.author}
                  </span>
                  <ArrowRight size={13} className="text-muted-foreground/60" />
                  <BrandIcon name={row.dest} size={15} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

type Query = { q: string; a: string; src?: string }

/** The "Ask Driff" bar in action: types an example question with a blinking
 *  caret, then Driff "answers" with a little result popover, then cycles.
 *  Static (first Q + its answer) under reduced motion. */
function AskDemo({ queries }: { queries: Query[] }) {
  const [text, setText] = useState('')
  const [active, setActive] = useState(0)
  const [answered, setAnswered] = useState(false)

  useEffect(() => {
    if (!queries.length) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(queries[0].q)
      setActive(0)
      setAnswered(true)
      return
    }
    let p = 0
    let i = 0
    let deleting = false
    let timer = 0
    const step = () => {
      const word = queries[p].q
      if (!deleting) {
        i += 1
        setText(word.slice(0, i))
        if (i >= word.length) {
          // Finished typing → Driff "thinks" briefly, answers, holds, then clears.
          timer = window.setTimeout(() => {
            setAnswered(true)
            timer = window.setTimeout(() => {
              setAnswered(false)
              deleting = true
              timer = window.setTimeout(step, 300)
            }, 2400)
          }, 480)
          return
        }
        timer = window.setTimeout(step, 55)
      } else {
        i -= 1
        setText(word.slice(0, Math.max(0, i)))
        if (i <= 0) {
          deleting = false
          p = (p + 1) % queries.length
          setActive(p)
          timer = window.setTimeout(step, 450)
          return
        }
        timer = window.setTimeout(step, 26)
      }
    }
    timer = window.setTimeout(step, 700)
    return () => window.clearTimeout(timer)
  }, [queries])

  const current = queries[active] ?? queries[0]

  return (
    <div className="relative">
      <div className="flex items-center gap-2.5 rounded-xl border border-line bg-canvas px-3.5 py-2.5">
        <Search size={15} className="shrink-0 text-muted-foreground" />
        <span
          className="flex min-w-0 flex-1 items-center overflow-hidden whitespace-nowrap text-sm text-foreground"
          aria-hidden
        >
          <span className="truncate">{text}</span>
          <span className="caret ml-0.5 shrink-0" />
        </span>
        <kbd className="hidden shrink-0 rounded-md border border-line bg-card px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground sm:inline">
          ⌘K
        </kbd>
      </div>

      {answered && current && (
        <div className="msg-in absolute inset-x-0 top-full z-20 mt-2 flex items-start gap-2.5 rounded-xl border border-line bg-card p-3.5 shadow-window">
          <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-pill bg-primary">
            <DriffMark size={15} className="text-on-primary" />
          </span>
          <div className="flex min-w-0 flex-col gap-1.5">
            <p className="text-[13px] leading-relaxed text-foreground">{current.a}</p>
            {current.src && (
              <span className="w-fit rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                {current.src}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
