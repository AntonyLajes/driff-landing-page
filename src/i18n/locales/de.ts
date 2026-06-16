import type { Resources } from './en'

export const de: Resources = {
  nav: {
    howItWorks: 'So funktioniert es',
    features: 'Funktionen',
    integrations: 'Integrationen',
    faq: 'FAQ',
    cta: 'Auf die Warteliste',
  },
  hero: {
    badge: 'Geschlossene Beta · Begrenzte Plätze',
    titlePre: 'Der ',
    titleShine: 'Fortschritt',
    titleMid: ' deines Teams, ',
    titleMarker: 'von selbst dokumentiert.',
    titlePost: '',
    subtitle:
      'Jeder PR, Push und jedes Release wird zu einer klaren Zusammenfassung — und du kannst Driff alles über das fragen, was dein Team geliefert hat.',
    ctaPrimary: 'Auf die Beta-Warteliste',
    ctaSecondary: 'So funktioniert es',
    microcopy: 'Kostenlos in der Beta · Setup in ~5 Min · Nur auf Einladung',
  },
  preview: {
    title: 'Aktuelle Zusammenfassungen',
    live: 'Live',
    segAll: 'Alle',
    segPR: 'PRs',
    segPush: 'Pushes',
    segVersion: 'Versionen',
    notion: 'Notion',
    rows: [
      {
        title: 'Korrektur bei der Berechnung von Tankstopps',
        meta: 'PR #15 · feature/fuel-stops → main  ·  +36 −0 · 2 Dateien',
        time: 'jetzt',
      },
      {
        title: 'Schutz gegen ungültige ETA bei langen Routen',
        meta: 'Push · main · 711c745  ·  +4 −0 · 1 Datei',
        time: '2 Std.',
      },
      {
        title: 'Version 1.3.2 — Stabilitätsverbesserungen',
        meta: 'Release · main · 55f9054  ·  Changelog erstellt',
        time: 'gestern',
      },
    ],
  },
  problem: {
    eyebrow: 'DAS PROBLEM',
    title: 'Schnelle Teams verlieren den Überblick über das Gelieferte.',
    subtitle:
      'Je mehr das Team liefert, desto schwerer ist nachzuvollziehen, was passiert ist — und die Kosten sind unsichtbar.',
    cards: [
      {
        title: 'Devs verlieren Zeit mit Status-Updates',
        desc: 'Jeden Freitag dasselbe Spiel: „Was habe ich diese Woche gemacht?“ zusammenkratzen, statt Code zu schreiben.',
      },
      {
        title: 'Leads und PMs tappen im Dunkeln',
        desc: 'Commits und PRs erzählen nicht die Geschichte dessen, was wirklich geliefert wurde – oder welchen Impact es hatte.',
      },
      {
        title: 'Retros werden zur Archäologie',
        desc: 'Immer muss jemand die Git-Historie durchwühlen, um sich zu erinnern, was sich im letzten Sprint geändert hat.',
      },
    ],
  },
  how: {
    eyebrow: 'SO FUNKTIONIERT ES',
    title: 'Repo verbinden. Den Rest macht Driff automatisch.',
    subtitle: 'Drei Schritte, einmalig. Danach arbeitet Driff von selbst im Hintergrund.',
    steps: [
      {
        title: 'Verbinden',
        desc: 'Mit Google anmelden, deine Code-Quellen in wenigen Klicks verbinden und wählen, wohin die Zusammenfassungen sollen.',
      },
      {
        title: 'Laufen lassen',
        desc: 'Bei jedem gemergten PR, direkten Push oder neuer Version erfasst Driff die Änderungen und schreibt eine narrative Zusammenfassung.',
      },
      {
        title: 'Überblick gewinnen',
        desc: 'Alles erscheint automatisch in deinem Feed und den gewählten Zielen — mit Produktivitätsmetriken fürs Team.',
      },
    ],
  },
  features: {
    eyebrow: 'FUNKTIONEN',
    title: 'Alles, was sich im Code ändert, wird zur Erzählung.',
    featuredTitle: 'Einheitlicher Feed + Produktivitätsmetriken',
    featuredDesc:
      'Ein Ort für den gesamten Team-Fortschritt: Filter nach Typ, Suche und die Metriken, die zählen — analysierte PRs, Commits, geänderte Zeilen und gesparte Review-Zeit.',
    stats: [
      { label: 'Zusammenfassungen erstellt' },
      { label: 'Analysierte PRs' },
      { label: 'Zusammengefasste Pushes' },
      { label: 'Gesparte Zeit' },
    ],
    cards: [
      {
        title: 'Ask Driff',
        desc: 'Frag die gesamte Historie deines Teams in natürlicher Sprache — „wann wurde Feature X veröffentlicht?“ — und erhalte eine Antwort mit Quellen.',
      },
      {
        title: 'Automatische Zusammenfassungen',
        desc: 'Jeder gemergte PR, direkte Push und jedes Release wird zu einer klaren, professionellen Zusammenfassung — mit Diff-Statistiken.',
      },
      {
        title: 'Versions-Changelogs',
        desc: 'Version erhöht? Driff erzeugt ein teilfertiges Changelog für dein Team oder deine Kunden.',
      },
    ],
  },
  ask: {
    eyebrow: 'ASK DRIFF',
    title: 'Frag alles über das, was dein Team geliefert hat.',
    subtitle:
      'Driff merkt sich jeden PR, Push und jedes Release. Frag in natürlicher Sprache und erhalte eine Antwort — mit der genauen Version und den PRs.',
    inputPlaceholder: 'Frag Driff alles…',
    q1: 'Wann haben wir das neue Onboarding veröffentlicht?',
    a1: 'Das Onboarding-Redesign kam in v1.3.0. Es landete in PR #142 und #147 und entfernte den manuellen Workspace-Schritt.',
    a1sources: 'v1.3.0 · PR #142 · PR #147',
    q2: 'Was hat sich letzten Monat bei Zahlungen geändert?',
    a2: 'Drei Änderungen: ein Fix für die Tankstopp-ETA, ein Pricing-Refactor und ein Webhook-Retry-Guard. Keine Breaking Changes.',
    suggest1: 'Letzte Woche zusammenfassen',
    suggest2: 'Was kam in v1.3.0?',
  },
  integrations: {
    eyebrow: 'INTEGRATIONEN',
    title: 'Verbinde deine Quellen. Liefere, wo das Team schon arbeitet.',
    subtitle:
      'Driff holt Änderungen aus vielen Code-Quellen und veröffentlicht die Zusammenfassungen an mehreren Zielen — ohne dass du das Tool wechselst.',
    origins: 'QUELLEN',
    destinations: 'ZIELE',
    available: 'Verfügbar',
    inDevelopment: 'in Entwicklung',
    caption: '6 Integrationen in der Beta verfügbar · der Rest in aktiver Entwicklung.',
  },
  beforeAfter: {
    eyebrow: 'DER UNTERSCHIED',
    title: 'Vom rohen Commit zur Zusammenfassung, die jeder versteht.',
    subtitle:
      'Dashboards zeigen Zahlen. Driff erzählt die Geschichte: was getan wurde, warum und mit welchem Impact.',
    before: 'VORHER',
    commitStat: '+36 −0 · 2 Dateien',
    note: 'Wer es nicht geschrieben hat, hat keine Ahnung, was passiert ist.',
    badge: 'MIT DRIFF',
    afterTitle: 'Korrektur bei der Berechnung von Tankstopps',
    afterBody:
      'Ein Fehler wurde behoben, der die Ankunftsschätzung (ETA) zerstörte, wenn ein Stopp keine feste Zeit hatte. Die Preislogik wurde vereinfacht und reduziert Inkonsistenzen auf langen Routen.',
    impact: 'Impact: Nutzer sehen keine Fehlerseiten mehr, wenn sie Reisen mit Stopps planen.',
    meta: 'PR #15 · feature/fuel-stops → main',
  },
  personas: {
    eyebrow: 'FÜR WEN',
    title: 'Gemacht für Startups, die zu schnell liefern, um zu dokumentieren.',
    subtitle:
      'Vom Solo-Gründer bis zum 30-köpfigen Dev-Team: Wenn der Code schneller ist als die Kommunikation, ist Driff für dich.',
    cards: [
      {
        title: 'Gründer & CTOs',
        desc: 'Überblick darüber, was das Team liefert — ohne jemandem hinterherzulaufen.',
      },
      {
        title: 'Product Manager',
        desc: 'Verstehe, was getan wurde und welchen Impact es hatte — ohne eine Zeile Code zu lesen.',
      },
      {
        title: 'Entwickler',
        desc: 'Schluss mit dem wöchentlichen Update. Deine Arbeit dokumentiert sich von selbst.',
      },
    ],
  },
  whitelist: {
    badge: 'Begrenzte Plätze · 8 bis 15 Teams',
    title: 'Tritt der geschlossenen Beta von Driff bei.',
    subtitle:
      'Kostenloser Zugang während der Beta, direkter Support von uns und echter Einfluss aufs Produkt. Hinterlasse deine Daten und wir melden uns.',
    name: 'Dein Name',
    namePh: 'z. B. Antony Lajes',
    email: 'E-Mail',
    emailPh: 'du@email.com',
    team: 'Team / Firma',
    teamPh: 'Name deines Teams',
    teamSize: 'Anzahl Devs',
    role: 'Deine Rolle',
    githubOrg: 'GitHub-Organisation (optional)',
    githubOrgPh: 'github.com/deine-org',
    selectPlaceholder: 'Auswählen…',
    roles: ['Gründer / CTO', 'Eng. Lead', 'Product Manager', 'Entwickler', 'Andere'],
    submit: 'Ich will auf die Warteliste',
    submitting: 'Wird gesendet…',
    successButton: 'Du bist dabei!',
    successTitle: 'Willkommen an Bord — danke! 🧡',
    successDesc:
      'Wir prüfen jedes Team persönlich und melden uns innerhalb von 10 Tagen. Deine Bestätigungs-E-Mail ist schon unterwegs — schau in dein Postfach.',
    error: 'Konnte gerade nicht gesendet werden. Bitte versuch es erneut.',
    microcopy: 'Kein Spam. Wir melden uns nur, wenn dein Platz frei wird.',
    consentPre: 'Mit dem Beitritt akzeptierst du unsere',
    consentLink: 'Datenschutzerklärung',
  },
  faq: {
    eyebrow: 'HÄUFIGE FRAGEN',
    title: 'Alles, was du vor dem Beitritt wissen willst.',
    items: [
      {
        q: 'Sind meine Daten und mein Code sicher?',
        a: 'Driff liest nur die Metadaten und Diffs, die für die Zusammenfassungen nötig sind — mit minimalen Berechtigungen. Wir speichern deinen Quellcode nicht.',
      },
      {
        q: 'Muss ich meinen Workflow ändern?',
        a: 'Nein. Du nutzt weiter die Tools, die du schon verwendest — Driff arbeitet im Hintergrund, ohne zu stören.',
      },
      {
        q: 'Mit welchen Tools integriert Driff?',
        a: 'Wir holen Änderungen aus mehreren Code-Quellen (GitHub heute verfügbar; GitLab, Bitbucket und mehr in Arbeit) und veröffentlichen an mehreren Zielen (Notion verfügbar; Slack, Discord, Teams und mehr in Kürze).',
      },
      {
        q: 'Was wird es kosten?',
        a: 'Während der Beta ist es komplett kostenlos. Bezahlpläne kommen später, basierend auf Nutzung — Projekte, Ziele und Volumen der Zusammenfassungen.',
      },
      {
        q: 'In welcher Sprache werden die Zusammenfassungen geschrieben?',
        a: 'Flüssige, professionelle Zusammenfassungen in deiner Sprache. Anpassung von Ton, Länge und Sprache kommt bald.',
      },
    ],
  },
  footer: {
    tagline: 'Automatisches Fortschritts-Tracking für Dev-Teams.',
    product: 'Produkt',
    legal: 'Rechtliches',
    privacy: 'Datenschutz',
    terms: 'AGB',
    rights: 'Alle Rechte vorbehalten.',
  },
}
