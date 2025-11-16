import React from 'react'
import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'

const items = [
  { title: 'IBM – Front-End Development' },
  { title: 'IoT with Arduino & NodeMCU' },
]

export default function Certifications() {
  return (
    <section id="certs" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-white">Certifications</h2>
        <p className="text-white/70">Glowing badges that mark milestones.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((c, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ scale: 1.03 }}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r from-sky-500/10 to-fuchsia-500/10 p-5">
            <div className="mb-2 flex items-center gap-2 text-sky-300">
              <BadgeCheck className="h-5 w-5" />
              <span className="text-white">{c.title}</span>
            </div>
            <div className="text-sm text-white/70">Issued to Dinesh Dantal</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
