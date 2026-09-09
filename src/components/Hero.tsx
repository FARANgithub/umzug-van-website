import { motion } from 'framer-motion'
import { siteConfig } from '../content/siteConfig'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animierter Hintergrund: Glow-Kreise + Partikel-Grid */}
      <div className="absolute inset-0 bg-grid-glow pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-neon-violet/30 rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-neon-cyan/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-neon-cyan text-sm font-semibold mb-6"
        >
          Umzugsservice der Zukunft
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-black leading-tight mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-white to-neon-violet">
            {siteConfig.slogan}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          {siteConfig.subSlogan}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="btn-primary">
            {siteConfig.cta.secondary} <ArrowRight size={18} />
          </a>
          <a href="#services" className="btn-ghost">
            Leistungen entdecken
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs uppercase tracking-widest"
      >
        Scroll
      </motion.div>
    </section>
  )
}
