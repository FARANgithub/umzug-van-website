# NOVA UMZÜGE – Futuristische Umzugsservice-Website

Eine moderne, futuristische One-Page-Website ("Jahr 2300"-Stil) für einen professionellen Umzugsservice mit eigenem Van. Gebaut mit React, Vite, TypeScript, Tailwind CSS und Framer Motion.

## 🚀 Setup (lokal starten)

Voraussetzung: [Node.js](https://nodejs.org) (Version 18 oder höher) ist installiert.

```bash
npm install
npm run dev
```

Die Seite ist danach unter `http://localhost:5173` erreichbar.

## 📦 Produktions-Build

```bash
npm run build
```

Der fertige Build landet im Ordner `dist/`.

## 🌐 Deployment (automatisch via GitHub Pages)

Bei jedem Push auf den `main`-Branch baut eine GitHub Action (`.github/workflows/deploy.yml`) die Seite automatisch und veröffentlicht sie auf GitHub Pages.

Einmalig aktivieren:
1. Gehe im Repository zu **Settings → Pages**.
2. Wähle bei "Source" die Option **GitHub Actions**.
3. Nach dem nächsten Push ist die Seite unter `https://<dein-username>.github.io/umzug-van-website/` erreichbar.

## ✏️ Inhalte anpassen (ohne Programmierkenntnisse)

Alle Texte, Zahlen und Kontaktdaten befinden sich zentral in dieser Datei:

```
src/content/siteConfig.ts
```

Dort kannst du z.B. anpassen:
- Firmenname & Slogan (`companyName`, `slogan`, `subSlogan`)
- Kennzahlen (`stats`)
- Leistungen (`services`)
- Ablauf-Schritte (`process`)
- Van-Daten & Bild (`van`) – ersetze `van.image` durch die URL deines eigenen Fotos
- Kundenbewertungen (`testimonials`)
- Kontaktdaten (`contact.phone`, `contact.email`, `contact.location`)
- Footer-Links (`footer`)

Speichere die Datei und die Änderungen erscheinen sofort (bei `npm run dev`) bzw. nach dem nächsten Deployment.

## 🖼️ Bilder ersetzen

Das Van-Bild ist aktuell ein Platzhalter von Unsplash. Um dein eigenes Foto zu verwenden:
1. Lade dein Bild z.B. in den Ordner `public/` hoch (z.B. `public/van.jpg`).
2. Ändere in `src/content/siteConfig.ts` den Wert von `van.image` zu `/van.jpg`.

## 🎨 Design

- **Dark Mode** mit Neon-Akzenten (Cyan, Violett)
- **Glasmorphismus**-Karten mit Blur-Effekt
- **Framer Motion**-Animationen (Scroll-Reveal, Hover-Effekte)
- Schriftarten: `Orbitron` (Überschriften), `Inter` (Fließtext)

## 🛠️ Tech-Stack

- [React](https://react.dev) + [Vite](https://vitejs.dev) + TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [lucide-react](https://lucide.dev) (Icons)

---

Viel Erfolg mit deinem Umzugsservice! 🚐✨
