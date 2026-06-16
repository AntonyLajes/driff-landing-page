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
      'Every PR, push and release becomes a clear summary — written in plain language and delivered where your team already works.',
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
        title: 'Fix in the fuel-stop calculation',
        meta: 'PR #15 · feature/fuel-stops → main  ·  +36 −0 · 2 files',
        time: 'now',
      },
      {
        title: 'Guard against invalid ETA on long routes',
        meta: 'Push · main · 711c745  ·  +4 −0 · 1 file',
        time: '2h',
      },
      {
        title: 'Version 1.3.2 — stability improvements',
        meta: 'Release · main · 55f9054  ·  Changelog generated',
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
        title: 'Pull Request summaries',
        desc: 'Every merged PR becomes a professional summary, with diff stats. Reviewers and PMs get it in seconds.',
      },
      {
        title: 'Direct push summaries',
        desc: 'Hotfix or single-branch team? Summarizes direct pushes with dedup — never the same thing twice.',
      },
      {
        title: 'Release summaries',
        desc: 'Bumped the version? Generates an automatic changelog, ready to share with the team or customers.',
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
    commitStat: '+36 −0 · 2 files',
    note: "Whoever didn't write it has no idea what happened.",
    badge: 'WITH DRIFF',
    afterTitle: 'Fix in the fuel-stop calculation',
    afterBody:
      'Fixed a bug that broke the arrival estimate (ETA) when a stop had no set time. The pricing logic was simplified, reducing inconsistencies on long routes.',
    impact: 'Impact: users no longer hit error screens when planning trips with stops.',
    meta: 'PR #15 · feature/fuel-stops → main',
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
    successTitle: "You're on the list! 🎉",
    successDesc:
      'We got your details. As soon as your spot opens, we’ll send an invite to your email.',
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
