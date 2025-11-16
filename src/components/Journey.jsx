import React from 'react'
import { motion } from 'framer-motion'

const entries = [
  { year: '2024', title: 'BE – Electronics & Telecommunication', desc: 'Graduated with strong foundations in systems thinking and problem solving.' },
  { year: '2025', title: 'CDAC PG-DAC', desc: 'Specialized in full stack development with modern frameworks and tooling.' },
  { year: '2025', title: 'Python Developer Internship — Bloomzen', desc: 'Built APIs, optimized code paths, and collaborated on production features.' },
]

export default function Journey() {
  return (
    <section id="journey" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-white">My Journey</h2>
        <p className="text-white/70">From engineering to full stack development — a path shaped by curiosity.</p>
      </div>

      <div className="relative border-l border-white/10 pl-8">
        {entries.map((e, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="mb-10">
            <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400" />
            <div className="text-sm text-white/60">{e.year}</div>
            <h3 className="text-xl font-semibold text-white">{e.title}</h3>
            <p className="text-white/70">{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
