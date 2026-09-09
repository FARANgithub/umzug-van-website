import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '../content/siteConfig'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-void/70 backdrop-blur-xl border-b border-white/10 shadow-glowSoft' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">
          {siteConfig.companyName}
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-neon-cyan transition-colors">{item.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex btn-primary !py-2 !px-5 text-sm">
          {siteConfig.cta.primary}
        </a>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menü öffnen">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden glass mx-4 mb-4 p-4 flex flex-col gap-3">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-neon-cyan">
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary justify-center">{siteConfig.cta.primary}</a>
        </div>
      )}
    </motion.header>
  )
}
