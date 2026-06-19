import type { Resources } from './en'

export const es: Resources = {
  nav: {
    howItWorks: 'Cómo funciona',
    features: 'Funciones',
    integrations: 'Integraciones',
    faq: 'FAQ',
    cta: 'Acceso anticipado',
  },
  hero: {
    badge: 'Acceso anticipado · Plazas limitadas',
    titlePre: 'La ',
    titleShine: 'memoria buscable',
    titleMid: ' de ',
    titleMarker: 'todo lo que tu equipo entrega.',
    titlePost: '',
    subtitle:
      'Driff convierte cada PR, push y release en un resumen claro y automático, y guarda todo el historial en un solo lugar. Deja de escribir actualizaciones y de rebuscar en changelogs: solo pregunta qué se entregó, cuándo y quién.',
    ctaPrimary: 'Quiero acceso anticipado',
    ctaSecondary: 'Ver cómo funciona',
    microcopy: 'Gratis en el acceso anticipado · Configuración en ~5 min · Solo por invitación',
  },
  preview: {
    title: 'Resúmenes recientes',
    live: 'En vivo',
    segAll: 'Todos',
    segPR: 'PRs',
    segPush: 'Pushes',
    segVersion: 'Versiones',
    notion: 'Notion',
    rows: [
      {
        title: 'Streak freeze: mantén tu racha con un día libre por semana',
        meta: 'PR #142 · feature/streak-freeze → main  ·  +210 −18 · 6 archivos',
        time: 'ahora',
      },
      {
        title: 'Corrige rachas que se reinician a medianoche en otras zonas',
        meta: 'Push · main · a1b2c3d  ·  +12 −3 · 2 archivos',
        time: '2h',
      },
      {
        title: 'Versión 2.4.0, recordatorios e insights',
        meta: 'Release · main · e5f6a7b  ·  Changelog generado',
        time: 'ayer',
      },
    ],
  },
  problem: {
    eyebrow: 'EL PROBLEMA',
    title: 'Los equipos que van rápido pierden el control de lo que se entregó.',
    subtitle:
      'Cuanto más entrega el equipo, más difícil es saber qué pasó, y el costo es invisible.',
    cards: [
      {
        title: 'Los devs pierden tiempo escribiendo updates',
        desc: 'Cada viernes, la misma rutina de armar el "qué hice esta semana" en vez de escribir código.',
      },
      {
        title: 'Líderes y PMs quedan a oscuras',
        desc: 'Los commits y PRs no cuentan la historia de lo que realmente se entregó, ni su impacto.',
      },
      {
        title: 'Las retros se vuelven arqueología',
        desc: 'Siempre hay que rastrear el historial de Git para recordar qué cambió el último sprint.',
      },
    ],
  },
  how: {
    eyebrow: 'CÓMO FUNCIONA',
    title: 'Conecta el repo. El resto es automático.',
    subtitle: 'Tres pasos, una sola vez. Después Driff trabaja solo en segundo plano.',
    steps: [
      {
        title: 'Conecta',
        desc: 'Inicia sesión con Google, conecta tus fuentes de código en unos clics y elige dónde quieres los resúmenes.',
      },
      {
        title: 'Déjalo correr',
        desc: 'En cada PR fusionado, push directo o nueva versión, Driff captura lo que cambió y escribe un resumen narrativo.',
      },
      {
        title: 'Gana visibilidad',
        desc: 'Todo aparece en tu feed y en los destinos elegidos, automáticamente, con métricas de productividad del equipo.',
      },
    ],
  },
  features: {
    eyebrow: 'FUNCIONES',
    title: 'Todo lo que cambia en el código se vuelve narrativa.',
    featuredTitle: 'Feed unificado + métricas',
    featuredDesc: 'Todo el progreso del equipo en un solo lugar, con las métricas que importan.',
    stats: [
      { label: 'Resúmenes generados' },
      { label: 'PRs analizados' },
      { label: 'Pushes resumidos' },
      { label: 'Tiempo ahorrado' },
    ],
    cards: [
      {
        title: 'Ask Driff',
        desc: 'Pregunta por el historial de tu equipo en lenguaje natural y recibe una respuesta con fuentes.',
      },
      {
        title: 'Resúmenes automáticos',
        desc: 'Cada PR, push y release se vuelve un resumen claro y profesional.',
      },
      {
        title: 'Changelogs de versiones',
        desc: 'Sube la versión y obtén un changelog listo para compartir.',
      },
    ],
  },
  ask: {
    eyebrow: 'ASK DRIFF',
    title: 'Pregunta lo que sea sobre lo que tu equipo entregó.',
    subtitle:
      'Driff recuerda cada PR, push y release. Pregunta en lenguaje natural y recibe la respuesta, con la versión y los PRs exactos.',
    inputPlaceholder: 'Pregúntale lo que sea a Driff…',
    q1: '¿Cuándo lanzamos el streak freeze?',
    a1: 'El streak freeze salió en la v2.4.0. Llegó en los PR #142 y #150 y deja saltarse un día por semana sin perder la racha.',
    a1sources: 'v2.4.0 · PR #142 · PR #150',
    q2: '¿Qué cambió en recordatorios el último mes?',
    a2: 'Tres cambios: horario de recordatorio más inteligente según el historial del hábito, un arreglo del reinicio por zona horaria a medianoche y modo "no molestar". Sin breaking changes.',
    suggest1: 'Resumir la última semana',
    suggest2: '¿Qué salió en la v2.4.0?',
    q3: 'Genera un doc sobre los principales cambios de recordatorios de los últimos 3 meses.',
    a3: 'Listo, reuní todos los cambios de recordatorios y notificaciones de los últimos 3 meses en un documento, listo para descargar.',
    reportTitle: 'Cambios de recordatorios, últimos 3 meses.docx',
    reportMeta: '9 cambios · 5 PRs · 3 releases',
    generating: "Generando documento…",
    demoReply:
      'En el producto, respondo esto a partir del historial real de PRs, pushes y releases de tu equipo. Esto es una demo rápida, así que prueba una de las sugerencias para ver una respuesta completa.',
  },
  changelog: {
    eyebrow: 'CHANGELOGS DE VERSIONES',
    title: 'Cada release se convierte en un changelog.',
    subtitle:
      'Subes la versión y Driff escribe un changelog limpio y agrupado, listo para compartir con tu equipo o tus clientes.',
    version: 'Versión 2.4.0',
    date: 'Publicada el 12 abr',
    autoTag: 'Generado automáticamente',
    publishedTo: 'Publicado en',
    groups: [
      {
        label: 'Novedades',
        items: [
          'Streak freeze, sáltate un día por semana sin perder la racha',
          'Insights semanales: tus mejores hábitos y tendencias de un vistazo',
        ],
      },
      {
        label: 'Mejoras',
        items: [
          'Horario de recordatorio más inteligente según el historial de cada hábito',
          'Pantalla de inicio más rápida en cuentas con más de 50 hábitos',
        ],
      },
      {
        label: 'Correcciones',
        items: [
          'Corregida la racha que se reiniciaba a medianoche en zonas fuera de UTC',
          'Los recordatorios ya no se disparan durante el modo "no molestar"',
        ],
      },
    ],
  },
  integrations: {
    eyebrow: 'INTEGRACIONES',
    title: 'Conecta tus fuentes. Entrega donde el equipo ya trabaja.',
    subtitle:
      'Driff toma lo que cambia en varias fuentes de código y publica los resúmenes en múltiples destinos, sin que cambies de herramienta.',
    origins: 'FUENTES',
    destinations: 'DESTINOS',
    available: 'Disponible',
    inDevelopment: 'en desarrollo',
    caption: '6 integraciones disponibles en el acceso anticipado · el resto en desarrollo activo.',
  },
  beforeAfter: {
    eyebrow: 'LA DIFERENCIA',
    title: 'Del commit crudo a un resumen que cualquiera entiende.',
    subtitle:
      'Los dashboards muestran números. Driff cuenta la historia: qué se hizo, por qué y el impacto.',
    before: 'ANTES',
    commitStat: '+48 −12 · 3 archivos',
    note: 'Quien no lo escribió no tiene idea de qué pasó.',
    badge: 'CON DRIFF',
    afterTitle: 'Corregida la racha que se reiniciaba a medianoche en otras zonas',
    afterBody:
      'Se corrigió un error en el que la racha del usuario se reiniciaba a las 00:00 UTC en vez de su medianoche local, rompiendo la racha de quienes están fuera de UTC. También se simplificó el agendador de recordatorios.',
    impact: 'Impacto: los usuarios fuera de UTC ya no pierden su racha durante la noche.',
    meta: 'PR #148 · fix/tz-streak-reset → main',
  },
  personas: {
    eyebrow: 'PARA QUIÉN ES',
    title: 'Hecho para startups que entregan demasiado rápido para documentar.',
    subtitle:
      'Del fundador en solitario al equipo de 30 devs: si el código va más rápido que la comunicación, Driff es para ti.',
    cards: [
      {
        title: 'Founders y CTOs',
        desc: 'Visibilidad de lo que entrega el equipo, sin perseguir a nadie por un reporte.',
      },
      {
        title: 'Product Managers',
        desc: 'Entiende qué se hizo y su impacto, sin leer una sola línea de código.',
      },
      {
        title: 'Desarrolladores',
        desc: 'Deja de escribir el update semanal. Tu trabajo se documenta solo.',
      },
    ],
  },
  whitelist: {
    badge: 'Acceso anticipado · 8 a 15 equipos',
    title: 'Consigue acceso anticipado a Driff.',
    subtitle:
      'Gratis durante el acceso anticipado, soporte directo con nosotros e influencia real en el producto. Deja tu email y te contactamos.',
    name: 'Tu nombre',
    namePh: 'Ej: Antony Lajes',
    email: 'Email',
    emailPh: 'tu@email.com',
    team: 'Equipo / empresa',
    teamPh: 'Nombre de tu equipo',
    teamSize: 'Cantidad de devs',
    role: 'Tu rol',
    githubOrg: 'Organización en GitHub (opcional)',
    githubOrgPh: 'github.com/tu-org',
    selectPlaceholder: 'Selecciona…',
    roles: ['Founder / CTO', 'Eng. Lead', 'Product Manager', 'Desarrollador', 'Otro'],
    submit: 'Quiero acceso anticipado',
    submitting: 'Enviando…',
    successButton: '¡Estás dentro!',
    successTitle: 'Bienvenido a bordo, ¡gracias! 🧡',
    successDesc:
      'Revisamos cada equipo a mano y te contactaremos en un plazo de 10 días. Tu correo de confirmación ya va en camino, revisa tu bandeja de entrada.',
    error: 'No se pudo enviar ahora. Inténtalo de nuevo.',
    microcopy: 'Sin spam. Solo te avisamos cuando se abra tu plaza.',
    consentPre: 'Al unirte, aceptas nuestra',
    consentLink: 'Política de Privacidad',
  },
  faq: {
    eyebrow: 'PREGUNTAS FRECUENTES',
    title: 'Todo lo que quieres saber antes de unirte.',
    items: [
      {
        q: '¿Mis datos y mi código están seguros?',
        a: 'Driff solo lee los metadatos y diffs necesarios para generar los resúmenes, con permisos mínimos. No almacenamos tu código fuente.',
      },
      {
        q: '¿Tengo que cambiar mi flujo de trabajo?',
        a: 'No. Sigues usando las herramientas que ya usas, Driff trabaja en segundo plano, sin estorbar.',
      },
      {
        q: '¿Con qué herramientas se integra Driff?',
        a: 'Tomamos cambios de varias fuentes de código (GitHub disponible hoy; GitLab, Bitbucket y más en camino) y publicamos en múltiples destinos (Notion disponible; Slack, Discord, Teams y más por venir).',
      },
      {
        q: '¿Cuánto costará?',
        a: 'Durante el acceso anticipado es totalmente gratis. Los planes de pago llegan después, según el uso, proyectos, destinos y volumen de resúmenes.',
      },
      {
        q: '¿En qué idioma se escriben los resúmenes?',
        a: 'Resúmenes fluidos y profesionales en tu idioma. La personalización de tono, longitud e idioma está por llegar.',
      },
    ],
  },
  footer: {
    tagline: 'Seguimiento automático del progreso para equipos de desarrollo.',
    product: 'Producto',
    legal: 'Legal',
    privacy: 'Privacidad',
    terms: 'Términos',
    rights: 'Todos los derechos reservados.',
  },
}
