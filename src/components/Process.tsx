import { motion } from 'framer-motion'
import { siteConfig } from '../content/siteConfig'

export default function Process() {
  return (
    <section id="process" className="relative py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="section-title text-center mb-16"
      >
        Ablauf
      </motion.h2>

      <div className="relative grid md:grid-cols-4 gap-8">
        <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
        {siteConfig.process.map((item, i) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative text-center"
          >
            <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center font-display font-bold text-lg bg-gradient-to-br from-neon-cyan to-neon-violet text-void shadow-glow">
              {item.step}
            </div>
            <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
