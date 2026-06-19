import type { Resources } from './en'

export const zh: Resources = {
  nav: {
    howItWorks: '工作原理',
    features: '功能',
    integrations: '集成',
    faq: '常见问题',
    cta: '抢先体验',
  },
  hero: {
    badge: '抢先体验 · 名额有限',
    titlePre: '团队交付的一切，',
    titleShine: '可搜索',
    titleMid: '的',
    titleMarker: '记忆。',
    titlePost: '',
    subtitle:
      'Driff 自动把每一个 PR、push 和发布变成清晰的摘要，并把全部历史保存在一处。不必再写状态更新，也不必翻找 changelog：直接问什么时候、由谁、交付了什么。',
    ctaPrimary: '获取抢先体验',
    ctaSecondary: '看看如何运作',
    microcopy: '抢先体验免费 · 约 5 分钟配置 · 仅限邀请',
  },
  preview: {
    title: '最近的摘要',
    live: '实时',
    segAll: '全部',
    segPR: 'PR',
    segPush: 'Push',
    segVersion: '版本',
    notion: 'Notion',
    rows: [
      {
        title: 'Streak Freeze：每周可跳过一天而不中断连续记录',
        meta: 'PR #142 · feature/streak-freeze → main  ·  +210 −18 · 6 个文件',
        time: '刚刚',
      },
      {
        title: '修复其他时区下连续记录在午夜被重置的问题',
        meta: 'Push · main · a1b2c3d  ·  +12 −3 · 2 个文件',
        time: '2 小时前',
      },
      {
        title: '版本 2.4.0 — 提醒与洞察',
        meta: 'Release · main · e5f6a7b  ·  已生成 Changelog',
        time: '昨天',
      },
    ],
  },
  problem: {
    eyebrow: '问题所在',
    title: '快速迭代的团队，往往说不清到底交付了什么。',
    subtitle: '团队交付得越多，越难弄清楚发生了什么——而这种成本是看不见的。',
    cards: [
      {
        title: '开发者把时间花在写汇报上',
        desc: '每个周五都是同样的戏码：拼凑“我这周做了什么”，而不是写代码。',
      },
      {
        title: '负责人和 PM 一头雾水',
        desc: 'Commit 和 PR 讲不清真正交付了什么，也讲不清对业务的影响。',
      },
      {
        title: '复盘变成考古',
        desc: '总得有人翻 Git 历史，才能想起上个迭代到底改了什么。',
      },
    ],
  },
  how: {
    eyebrow: '工作原理',
    title: '连接仓库，剩下的全自动。',
    subtitle: '三步，仅需一次。之后 Driff 会在后台自动运行。',
    steps: [
      {
        title: '连接',
        desc: '用 Google 登录，几次点击连接你的代码来源，并选择摘要要发往哪里。',
      },
      {
        title: '让它运行',
        desc: '每次合并 PR、直接 push 或发布新版本，Driff 都会捕捉变更并写成叙述式摘要。',
      },
      {
        title: '获得可见性',
        desc: '一切都会自动出现在你的信息流和所选目的地，并附带团队效率指标。',
      },
    ],
  },
  features: {
    eyebrow: '功能',
    title: '代码里的每一次变化，都变成叙述。',
    featuredTitle: '统一信息流 + 指标',
    featuredDesc: '团队的所有进展集中在一处，附带真正重要的指标。',
    stats: [
      { label: '已生成摘要' },
      { label: '已分析 PR' },
      { label: '已汇总 Push' },
      { label: '节省的时间' },
    ],
    cards: [
      {
        title: 'Ask Driff',
        desc: '用自然语言查询团队历史，获得带出处的答案。',
      },
      {
        title: '自动摘要',
        desc: '每个合并的 PR、push 和发布都变成清晰、专业的摘要。',
      },
      {
        title: '版本 Changelog',
        desc: '提升版本号，立即获得可分享的 changelog。',
      },
    ],
  },
  ask: {
    eyebrow: 'ASK DRIFF',
    title: '关于团队交付了什么，尽管问。',
    subtitle: 'Driff 记得每一个 PR、push 和发布。用自然语言提问，立刻获得答案——附带确切的版本和 PR。',
    inputPlaceholder: '向 Driff 提任何问题…',
    q1: '我们什么时候上线了 Streak Freeze？',
    a1: 'Streak Freeze 在 v2.4.0 上线，来自 PR #142 和 #150，让用户每周可跳过一天而不中断连续记录。',
    a1sources: 'v2.4.0 · PR #142 · PR #150',
    q2: '上个月提醒方面有什么变化？',
    a2: '三处变化：基于习惯历史的更智能提醒时间、修复按时区在午夜重置的问题，以及勿扰时段。没有破坏性变更。',
    suggest1: '总结上周',
    suggest2: 'v2.4.0 发布了什么？',
    q3: '生成一份关于过去 3 个月主要提醒变更的文档。',
    a3: '完成——我已把过去 3 个月所有提醒与通知相关的变更整理成一份文档，可直接下载。',
    reportTitle: '提醒变更 — 近 3 个月.docx',
    reportMeta: '9 项变更 · 5 个 PR · 3 个版本',
    generating: "正在生成文档…",
    demoReply:
      '在产品中，我会根据团队真实的 PR、push 和发布历史来回答。这里只是一个快速演示，试试上面的建议看看完整回答。',
  },
  changelog: {
    eyebrow: '版本 CHANGELOG',
    title: '每次发布都变成一份 changelog。',
    subtitle: '提升版本号，Driff 就会写出一份清晰、分组的 changelog——可直接分享给团队或客户。',
    version: '版本 2.4.0',
    date: '4 月 12 日发布',
    autoTag: '自动生成',
    publishedTo: '已发布到',
    groups: [
      {
        label: '新功能',
        items: [
          'Streak Freeze——每周跳过一天也不会中断连续记录',
          '每周洞察：一眼看清你最稳定的习惯与趋势',
        ],
      },
      {
        label: '改进',
        items: [
          '基于每个习惯的历史，提醒时间更智能',
          '拥有 50+ 习惯的账户主屏加载更快',
        ],
      },
      {
        label: '修复',
        items: [
          '修复了非 UTC 时区下连续记录在午夜被重置的问题',
          '勿扰时段内不再触发提醒',
        ],
      },
    ],
  },
  integrations: {
    eyebrow: '集成',
    title: '连接你的来源，发往团队已经在用的地方。',
    subtitle:
      'Driff 从多个代码来源获取变更，并把摘要发布到多个目的地——无需你切换工具。',
    origins: '来源',
    destinations: '目的地',
    available: '可用',
    inDevelopment: '开发中',
    caption: '抢先体验已提供 6 个集成 · 其余正在积极开发中。',
  },
  beforeAfter: {
    eyebrow: '差异所在',
    title: '从生硬的 commit，到人人都看得懂的摘要。',
    subtitle: '仪表盘只给数字，Driff 讲故事：做了什么、为什么，以及影响。',
    before: '之前',
    commitStat: '+48 −12 · 3 个文件',
    note: '没写这条的人，根本不知道发生了什么。',
    badge: '用了 DRIFF',
    afterTitle: '修复其他时区下连续记录在午夜被重置的问题',
    afterBody:
      '修复了用户的连续记录在 UTC 00:00 而非本地午夜被重置的 bug——这会中断所有非 UTC 用户的连续记录。同时简化了提醒调度器。',
    impact: '影响：非 UTC 时区的用户不再在夜间丢失连续记录。',
    meta: 'PR #148 · fix/tz-streak-reset → main',
  },
  personas: {
    eyebrow: '适合谁',
    title: '为交付太快、来不及写文档的初创团队打造。',
    subtitle:
      '从单人创始人到 30 人开发团队：只要代码跑得比沟通快，Driff 就适合你。',
    cards: [
      {
        title: '创始人 & CTO',
        desc: '清楚团队交付了什么，无需追着谁要汇报。',
      },
      {
        title: '产品经理',
        desc: '了解做了什么以及影响——无需读一行代码。',
      },
      {
        title: '开发者',
        desc: '别再写每周汇报了，你的工作会自己记录下来。',
      },
    ],
  },
  whitelist: {
    badge: '抢先体验 · 8 到 15 个团队',
    title: '抢先体验 Driff。',
    subtitle:
      '抢先体验期间免费使用、与我们直接对接，并真正影响产品。留下你的邮箱，我们会联系你。',
    name: '你的名字',
    namePh: '例如：Antony Lajes',
    email: '邮箱',
    emailPh: 'you@email.com',
    team: '团队 / 公司',
    teamPh: '你的团队名称',
    teamSize: '开发者人数',
    role: '你的角色',
    githubOrg: 'GitHub 组织（可选）',
    githubOrgPh: 'github.com/your-org',
    selectPlaceholder: '请选择…',
    roles: ['创始人 / CTO', '技术负责人', '产品经理', '开发者', '其他'],
    submit: '获取抢先体验',
    submitting: '提交中…',
    successButton: '你已加入！',
    successTitle: '欢迎加入 — 谢谢你！🧡',
    successDesc: '我们会逐一认真评估每个团队，并在 10 天内与你联系。确认邮件已经在路上了——记得查收。',
    error: '暂时无法提交，请重试。',
    microcopy: '不发垃圾邮件。只在名额开放时联系你。',
    consentPre: '加入即表示你同意我们的',
    consentLink: '隐私政策',
  },
  faq: {
    eyebrow: '常见问题',
    title: '加入前你想知道的一切。',
    items: [
      {
        q: '我的数据和代码安全吗？',
        a: 'Driff 仅以最小权限读取生成摘要所需的元数据和 diff，不会存储你的源代码。',
      },
      {
        q: '我需要改变工作流程吗？',
        a: '不需要。你继续使用现有工具——Driff 在后台运行，不会打扰你。',
      },
      {
        q: 'Driff 能和哪些工具集成？',
        a: '我们从多个代码来源获取变更（GitHub 现已可用；GitLab、Bitbucket 等即将推出），并发布到多个目的地（Notion 已可用；Slack、Discord、Teams 等即将到来）。',
      },
      {
        q: '将来收费吗？',
        a: '抢先体验期间完全免费。付费方案稍后推出，基于用量——项目数、目的地和摘要量。',
      },
      {
        q: '摘要用什么语言书写？',
        a: '用你的语言书写流畅、专业的摘要。语气、长度和语言的自定义即将上线。',
      },
    ],
  },
  footer: {
    tagline: '面向开发团队的自动进展追踪。',
    product: '产品',
    legal: '法律',
    privacy: '隐私政策',
    terms: '条款',
    rights: '保留所有权利。',
  },
}
