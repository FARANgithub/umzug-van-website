import { motion } from 'framer-motion'
import { siteConfig } from '../content/siteConfig'
import { Star } from 'lucide-react'

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="section-title text-center mb-16"
      >
        Bewertungen
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteConfig.testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass p-6 flex flex-col gap-3"
          >
            <div className="flex gap-1">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} size={16} className="fill-neon-cyan text-neon-cyan" />
              ))}
            </div>
            <p className="text-white/70 text-sm leading-relaxed">„{t.text}“</p>
            <p className="font-display text-sm font-bold text-neon-violet mt-auto">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
