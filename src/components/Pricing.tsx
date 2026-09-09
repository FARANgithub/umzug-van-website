import { motion } from 'framer-motion'
import { siteConfig } from '../content/siteConfig'
import { ArrowRight } from 'lucide-react'

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass p-10 md:p-14 relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon-violet/20 rounded-full blur-3xl" />
        <h2 className="section-title mb-6">{siteConfig.pricing.title}</h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">{siteConfig.pricing.text}</p>
        <a href="#contact" className="btn-primary">
          {siteConfig.pricing.cta} <ArrowRight size={18} />
        </a>
      </motion.div>
    </section>
  )
}
