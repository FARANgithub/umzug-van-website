import { motion } from 'framer-motion'
import { siteConfig } from '../content/siteConfig'

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="section-title text-center mb-6"
      >
        {siteConfig.about.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-white/70 text-lg max-w-3xl mx-auto text-center mb-16"
      >
        {siteConfig.about.text}
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {siteConfig.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass p-6 text-center transition-all duration-300"
          >
            <div className="font-display text-3xl md:text-4xl font-bold text-neon-cyan mb-2">{stat.value}</div>
            <div className="text-white/60 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
