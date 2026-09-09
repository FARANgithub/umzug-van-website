import { siteConfig } from '../content/siteConfig'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm">{siteConfig.footer.copyright}</p>
        <div className="flex gap-6 text-sm text-white/50">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-neon-cyan transition-colors">{item.label}</a>
          ))}
          {siteConfig.footer.links.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-neon-cyan transition-colors">{link.label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
