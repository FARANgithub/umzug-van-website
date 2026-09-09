import { useState } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '../content/siteConfig'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Umzugsanfrage von ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nE-Mail: ${form.email}\nTelefon: ${form.phone}\n\nNachricht:\n${form.message}`
    )
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="section-title text-center mb-16"
      >
        Kontakt
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.form
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="glass p-8 flex flex-col gap-4"
        >
          <input required name="name" value={form.name} onChange={handleChange} placeholder="Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-cyan transition-colors" />
          <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="E-Mail" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-cyan transition-colors" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Telefon" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-cyan transition-colors" />
          <textarea required name="message" value={form.message} onChange={handleChange} placeholder="Umzugsdetails / Nachricht" rows={5} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-cyan transition-colors resize-none" />
          <button type="submit" className="btn-primary justify-center mt-2">
            Absenden <Send size={18} />
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          <div className="glass p-6 flex items-center gap-4">
            <Phone className="text-neon-cyan" />
            <span>{siteConfig.contact.phone}</span>
          </div>
          <div className="glass p-6 flex items-center gap-4">
            <Mail className="text-neon-cyan" />
            <span>{siteConfig.contact.email}</span>
          </div>
          <div className="glass p-6 flex items-center gap-4">
            <MapPin className="text-neon-cyan" />
            <span>{siteConfig.contact.location}</span>
          </div>
          <div className="flex gap-4 mt-2">
            {siteConfig.contact.social.map((s) => (
              <a key={s.label} href={s.href} className="glass px-4 py-2 text-sm hover:text-neon-cyan transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
