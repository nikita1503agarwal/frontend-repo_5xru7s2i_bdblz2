import React from 'react'
import { motion } from 'framer-motion'

const roles = [
  'Java Developer',
  '.NET Developer',
  'Full Stack Developer',
  'Software Engineer',
]

export default function Goals() {
  return (
    <section id="goals" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-white">Career Goals</h2>
        <p className="text-white/70">Actively seeking opportunities.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        {roles.map((r, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            {r}
          </motion.span>
        ))}
      </div>
    </section>
  )
}
