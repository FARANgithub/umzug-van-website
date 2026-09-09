import { motion } from 'framer-motion'
import { siteConfig } from '../content/siteConfig'

export default function Van() {
  return (
    <section id="van" className="relative py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan/20 to-neon-violet/20 blur-2xl rounded-3xl" />
          {/* Platzhalterbild: bitte durch eigenes Van-Foto ersetzen (siteConfig.van.image) */}
          <img
            src={siteConfig.van.image}
            alt="Der Umzugs-Van"
            className="relative rounded-3xl border border-white/10 shadow-glow w-full object-cover aspect-video"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="uppercase tracking-[0.3em] text-neon-cyan text-xs font-semibold mb-4">{siteConfig.van.title}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">{siteConfig.van.subtitle}</h2>
          <div className="grid grid-cols-2 gap-4">
            {siteConfig.van.specs.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-4"
              >
                <div className="text-xs text-white/50 uppercase tracking-wider mb-1">{spec.label}</div>
                <div className="font-display text-lg font-bold text-neon-cyan">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
