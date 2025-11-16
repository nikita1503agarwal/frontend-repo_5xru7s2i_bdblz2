import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-white">Experience</h2>
        <p className="text-white/70">Professional work crafted with care.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="mb-2 flex items-center gap-2 text-sky-300">
          <Briefcase className="h-5 w-5" />
          <span className="text-white">Python Developer Intern — Bloomzen</span>
        </div>
        <p className="text-white/70">Built APIs, automated data flows, contributed to team sprints, and delivered performance improvements.</p>
      </motion.div>
    </section>
  )
}
