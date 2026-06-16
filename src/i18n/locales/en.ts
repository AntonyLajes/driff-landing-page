export const en = {
  nav: {
    howItWorks: 'How it works',
    features: 'Features',
    integrations: 'Integrations',
    faq: 'FAQ',
    cta: 'Join the waitlist',
  },
  hero: {
    badge: 'Closed beta · Limited spots',
    titlePre: "Your team's ",
    titleShine: 'progress,',
    titleMid: ' ',
    titleMarker: 'written on its own.',
    titlePost: '',
    subtitle:
      'Every PR, push and release becomes a clear summary — and you can ask Driff anything about what your team shipped.',
    ctaPrimary: 'Join the beta waitlist',
    ctaSecondary: 'See how it works',
    microcopy: 'Free during beta · ~5-min setup · Invite-only',
  },
  preview: {
    title: 'Recent summaries',
    live: 'Live',
    segAll: 'All',
    segPR: 'PRs',
    segPush: 'Pushes',
    segVersion: 'Versions',
    notion: 'Notion',
    rows: [
      {
        title: 'Streak freeze: keep your streak with one skip a week',
        meta: 'PR #142 · feature/streak-freeze → main  ·  +210 −18 · 6 files',
        time: 'now',
      },
      {
        title: 'Fix streaks resetting at midnight in other timezones',
        meta: 'Push · main · a1b2c3d  ·  +12 −3 · 2 files',
        time: '2h',
      },
      {
        title: 'Version 2.4.0 — reminders & insights',
        meta: 'Release · main · e5f6a7b  ·  Changelog generated',
        time: 'yesterday',
      },
    ],
  },
  problem: {
    eyebrow: 'THE PROBLEM',
    title: 'Fast-moving teams lose track of what was shipped.',
    subtitle:
      "The more your team ships, the harder it gets to know what happened — and the cost is invisible.",
    cards: [
      {
        title: 'Devs waste time writing updates',
        desc: 'Every Friday, the same chore of piecing together "what did I do this week" instead of writing code.',
      },
      {
        title: 'Leads and PMs are left in the dark',
        desc: "Commits and PRs don't tell the story of what was actually delivered, or its business impact.",
      },
      {
        title: 'Retros turn into archaeology',
        desc: 'Someone always has to dig through Git history to remember what changed last sprint.',
      },
    ],
  },
  how: {
    eyebrow: 'HOW IT WORKS',
    title: 'Connect the repo. The rest is automatic.',
    subtitle: 'Three steps, once. After that Driff works on its own in the background.',
    steps: [
      {
        title: 'Connect',
        desc: 'Sign in with Google, hook up your code sources in a few clicks and choose where you want the summaries.',
      },
      {
        title: 'Let it run',
        desc: 'On every merged PR, direct push or new version, Driff captures what changed and writes a narrative summary.',
      },
      {
        title: 'Get visibility',
        desc: 'Everything shows up in your feed and chosen destinations, automatically, with team productivity metrics.',
      },
    ],
  },
  features: {
    eyebrow: 'FEATURES',
    title: 'Everything that changes in the code becomes narrative.',
    featuredTitle: 'Unified feed + productivity metrics',
    featuredDesc:
      'One place for all your team progress: filters by type, search and the metrics that matter — PRs analyzed, commits, lines changed and review time saved.',
    stats: [
      { label: 'Summaries generated' },
      { label: 'PRs analyzed' },
      { label: 'Pushes summarized' },
      { label: 'Time saved' },
    ],
    cards: [
      {
        title: 'Ask Driff',
        desc: 'Query your team\'s entire history in plain language — "when did feature X ship?" — and get a sourced answer.',
      },
      {
        title: 'Automatic summaries',
        desc: 'Every merged PR, direct push and release becomes a clear, professional summary — with diff stats.',
      },
      {
        title: 'Version changelogs',
        desc: 'Bumped the version? Driff generates a ready-to-share changelog for your team or customers.',
      },
    ],
  },
  ask: {
    eyebrow: 'ASK DRIFF',
    title: 'Ask anything about what your team shipped.',
    subtitle:
      'Driff remembers every PR, push and release. Ask in plain language and get an answer — with the exact version and PRs.',
    inputPlaceholder: 'Ask Driff anything…',
    q1: 'When did we ship streak freeze?',
    a1: 'Streak freeze shipped in v2.4.0. It landed across PR #142 and #150 and lets users skip one day a week without losing their streak.',
    a1sources: 'v2.4.0 · PR #142 · PR #150',
    q2: 'What changed in reminders last month?',
    a2: 'Three changes: smarter reminder timing based on habit history, a fix for the midnight timezone reset, and quiet hours. No breaking changes.',
    suggest1: 'Summarize last week',
    suggest2: 'What shipped in v2.4.0?',
    q3: 'Generate a doc on the main reminder changes from the last 3 months.',
    a3: 'Done — I pulled every reminder and notification change from the last 3 months into a document, ready to download.',
    reportTitle: 'Reminder changes — last 3 months.docx',
    reportMeta: '9 changes · 5 PRs · 3 releases',
    generating: "Generating document…",
  },
  changelog: {
    eyebrow: 'VERSION CHANGELOGS',
    title: 'Every release, turned into a changelog.',
    subtitle:
      'Bump the version and Driff writes a clean, grouped changelog — ready to share with your team or your customers.',
    version: 'Version 2.4.0',
    date: 'Released Apr 12',
    autoTag: 'Auto-generated',
    publishedTo: 'Published to',
    groups: [
      {
        label: 'New',
        items: [
          'Streak freeze — skip one day a week without losing your streak',
          'Weekly insights: your best habits and trends at a glance',
        ],
      },
      {
        label: 'Improvements',
        items: [
          "Smarter reminder timing based on each habit's history",
          'Home screen loads faster on accounts with 50+ habits',
        ],
      },
      {
        label: 'Fixes',
        items: [
          'Fixed streaks resetting at midnight in non-UTC timezones',
          'Reminders no longer fire during quiet hours',
        ],
      },
    ],
  },
  integrations: {
    eyebrow: 'INTEGRATIONS',
    title: 'Connect your sources. Deliver where the team already works.',
    subtitle:
      'Driff pulls what changes from many code sources and publishes the summaries to multiple destinations — without you switching tools.',
    origins: 'SOURCES',
    destinations: 'DESTINATIONS',
    available: 'Available',
    inDevelopment: 'in development',
    caption: '6 integrations available in the beta · the rest in active development.',
  },
  beforeAfter: {
    eyebrow: 'THE DIFFERENCE',
    title: 'From a raw commit to a summary anyone understands.',
    subtitle:
      'Dashboards show numbers. Driff tells the story: what was done, why, and the impact.',
    before: 'BEFORE',
    commitStat: '+48 −12 · 3 files',
    note: "Whoever didn't write it has no idea what happened.",
    badge: 'WITH DRIFF',
    afterTitle: 'Fixed streaks resetting at midnight in other timezones',
    afterBody:
      "Resolved a bug where a user's streak reset at 00:00 UTC instead of their local midnight, breaking streaks for everyone outside UTC. The reminder scheduler was also simplified.",
    impact: 'Impact: users outside UTC no longer lose their streaks overnight.',
    meta: 'PR #148 · fix/tz-streak-reset → main',
  },
  personas: {
    eyebrow: 'WHO IT IS FOR',
    title: 'Built for startups shipping too fast to document.',
    subtitle:
      "From the solo founder to a 30-dev team: if code moves faster than communication, Driff is for you.",
    cards: [
      {
        title: 'Founders & CTOs',
        desc: 'Visibility into what the team ships, without chasing anyone for a report.',
      },
      {
        title: 'Product Managers',
        desc: 'Understand what was done and its impact — without reading a single line of code.',
      },
      {
        title: 'Developers',
        desc: 'Stop writing the weekly update. Your work documents itself.',
      },
    ],
  },
  whitelist: {
    badge: 'Limited spots · 8 to 15 teams',
    title: 'Join the Driff closed beta.',
    subtitle:
      'Free access during the beta, direct support from us and real influence on the product. Leave your details and we’ll be in touch.',
    name: 'Your name',
    namePh: 'e.g. Antony Lajes',
    email: 'Email',
    emailPh: 'you@email.com',
    team: 'Team / company',
    teamPh: 'Your team name',
    teamSize: 'Number of devs',
    role: 'Your role',
    githubOrg: 'GitHub organization (optional)',
    githubOrgPh: 'github.com/your-org',
    selectPlaceholder: 'Select…',
    roles: ['Founder / CTO', 'Eng. Lead', 'Product Manager', 'Developer', 'Other'],
    submit: 'I want in on the waitlist',
    submitting: 'Sending…',
    successButton: "You're in!",
    successTitle: 'Welcome aboard — thank you! 🧡',
    successDesc:
      "We review every team by hand and we'll reach out within 10 days. Your confirmation email is already on its way — keep an eye on your inbox.",
    error: "Couldn't send right now. Please try again.",
    microcopy: 'No spam. We only reach out when your spot opens.',
    consentPre: 'By joining, you agree to our',
    consentLink: 'Privacy Policy',
  },
  faq: {
    eyebrow: 'FREQUENTLY ASKED',
    title: 'Everything you want to know before joining.',
    items: [
      {
        q: 'Is my data and my code safe?',
        a: 'Driff only reads the metadata and diffs needed to generate summaries, with minimal permissions. We do not store your source code.',
      },
      {
        q: 'Do I need to change my workflow?',
        a: 'No. You keep using the tools you already use — Driff works in the background, without getting in the way.',
      },
      {
        q: 'Which tools does Driff integrate with?',
        a: 'We pull changes from several code sources (GitHub available today; GitLab, Bitbucket and more coming) and publish to multiple destinations (Notion available; Slack, Discord, Teams and more on the way).',
      },
      {
        q: 'How much will it cost?',
        a: "During the beta it's completely free. Paid plans come later, based on usage — projects, destinations and summary volume.",
      },
      {
        q: 'What language are the summaries written in?',
        a: 'Fluent, professional summaries in your language. Tone, length and language customization is coming.',
      },
    ],
  },
  footer: {
    tagline: 'Automatic progress tracking for dev teams.',
    product: 'Product',
    legal: 'Legal',
    privacy: 'Privacy',
    terms: 'Terms',
    rights: 'All rights reserved.',
  },
}

export type Resources = typeof en
