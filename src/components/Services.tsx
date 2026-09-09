import { motion } from 'framer-motion'
import { siteConfig } from '../content/siteConfig'
import { Home, Sofa, PackageCheck, Truck, Trash2, Box, type LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = { Home, Sofa, PackageCheck, Truck, Trash2, Box }

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="section-title text-center mb-16"
      >
        Leistungen
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.services.map((service, i) => {
          const Icon = iconMap[service.icon] ?? Home
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ rotateX: 4, rotateY: -4, scale: 1.03 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="glass p-8 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 flex items-center justify-center mb-5">
                <Icon className="text-neon-cyan" size={28} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">{service.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
