// =========================================================================
// ZENTRALE INHALTS-DATEI
// Hier kannst du ALLE Texte, Zahlen, Kontaktdaten und Bild-Platzhalter der
// Website anpassen, ohne den restlichen Code zu veraendern.
// =========================================================================

export const siteConfig = {
  companyName: 'NOVA UMZÜGE',
  slogan: 'Ihr Umzug. Neu gedacht.',
  subSlogan:
    'Professioneller Umzugsservice mit eigenem Van – zuverlässig, sorgfältig, fair. Bereit für die Zukunft Ihres Umzugs.',

  nav: [
    { label: 'Über uns', href: '#about' },
    { label: 'Leistungen', href: '#services' },
    { label: 'Ablauf', href: '#process' },
    { label: 'Der Van', href: '#van' },
    { label: 'Bewertungen', href: '#testimonials' },
    { label: 'Preise', href: '#pricing' },
    { label: 'Kontakt', href: '#contact' },
  ],

  cta: {
    primary: 'Jetzt anfragen',
    secondary: 'Termin sichern',
  },

  stats: [
    { value: '100+', label: 'erfolgreiche Umzüge' },
    { value: '5.0★', label: 'Kundenbewertung' },
    { value: '1', label: 'eigener Van, volle Flexibilität' },
    { value: '24h', label: 'schnelle Rückmeldung' },
  ],

  about: {
    title: 'Über den Service',
    text:
      'Ich biete einen persönlichen, zuverlässigen Ein-Personen-Umzugsservice mit meinem eigenen, hochmodernen Van. Jeder Umzug wird mit größter Sorgfalt geplant und durchgeführt – flexibel, transparent und zu fairen Preisen. Kein anonymes Großunternehmen, sondern echter, persönlicher Service auf Augenhöhe.',
  },

  services: [
    { icon: 'Home', title: 'Privatumzüge', desc: 'Komplette Umzüge für Wohnungen und Häuser – von A bis Z geplant und umgesetzt.' },
    { icon: 'Sofa', title: 'Möbeltransport', desc: 'Sicherer Transport von Möbeln, auch sperrige und empfindliche Stücke.' },
    { icon: 'PackageCheck', title: 'Be- und Entladung', desc: 'Professionelles Be- und Entladen, damit nichts beschädigt wird.' },
    { icon: 'Truck', title: 'Kleintransporte', desc: 'Schnelle, unkomplizierte Kleintransporte für spontane Anliegen.' },
    { icon: 'Trash2', title: 'Entrümpelung', desc: 'Schnelle und saubere Entrümpelung von Wohnungen, Kellern und Garagen.' },
    { icon: 'Box', title: 'Verpackungsservice', desc: 'Professionelles Ein- und Auspacken mit hochwertigem Material.' },
  ],

  process: [
    { step: '01', title: 'Anfrage stellen', desc: 'Kurze Nachricht mit Details zu deinem Umzug senden.' },
    { step: '02', title: 'Kostenlose Einschätzung', desc: 'Du erhältst schnell eine unverbindliche Einschätzung.' },
    { step: '03', title: 'Termin vereinbaren', desc: 'Wir legen gemeinsam den passenden Termin fest.' },
    { step: '04', title: 'Umzug durchführen', desc: 'Dein Umzug wird sorgfältig und professionell durchgeführt.' },
  ],

  van: {
    title: 'Der Van',
    subtitle: 'Ihr hochmodernes Transportfahrzeug',
    // Platzhalterbild – bitte durch eigenes Van-Foto ersetzen
    image: 'https://images.unsplash.com/photo-1601987177651-8edfe6a54a9f?q=80&w=1200&auto=format&fit=crop',
    specs: [
      { label: 'Ladevolumen', value: '11 m³' },
      { label: 'Ladefläche', value: '3,2 m' },
      { label: 'Nutzlast', value: '1.000 kg' },
      { label: 'Sicherung', value: 'Möbelgurte & Decken' },
    ],
  },

  testimonials: [
    { name: 'Julia M.', text: 'Extrem zuverlässig und freundlich. Der Umzug lief reibungslos ab!', rating: 5 },
    { name: 'Tom K.', text: 'Faire Preise, super Kommunikation und alles pünktlich erledigt.', rating: 5 },
    { name: 'Sabine R.', text: 'Sehr sorgfältiger Umgang mit meinen Möbeln. Absolute Empfehlung!', rating: 5 },
    { name: 'Markus L.', text: 'Schnelle Rückmeldung und flexibel bei kurzfristigen Terminen.', rating: 5 },
  ],

  pricing: {
    title: 'Transparente Preise',
    text: 'Jeder Umzug ist individuell – deshalb erstelle ich dir ein persönliches, faires Angebot. Kein Kleingedrucktes, keine versteckten Kosten.',
    cta: 'Individuelles Angebot in wenigen Minuten',
  },

  contact: {
    phone: '+49 000 0000000',
    email: 'kontakt@nova-umzuege.de',
    location: 'Einzugsgebiet: Deine Stadt & Umgebung (100 km Radius)',
    social: [
      { label: 'Instagram', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'WhatsApp', href: '#' },
    ],
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} NOVA UMZÜGE – Alle Rechte vorbehalten.`,
    links: [
      { label: 'Impressum', href: '#' },
      { label: 'Datenschutz', href: '#' },
    ],
  },
}
