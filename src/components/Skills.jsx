import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Code2, Database, Cloud, ShieldCheck, Boxes } from 'lucide-react'

const skills = [
  { title: 'Java', icon: <Code2 /> },
  { title: 'Spring Boot', icon: <Boxes /> },
  { title: 'React.js', icon: <Cpu /> },
  { title: '.NET & C#', icon: <ShieldCheck /> },
  { title: 'SQL & AWS', icon: <Cloud /> },
  { title: 'HTML • CSS • JS', icon: <Code2 /> },
  { title: 'API Development', icon: <Database /> },
  { title: 'JWT • Entity Framework', icon: <ShieldCheck /> },
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-white">Skills as Superpowers</h2>
        <p className="text-white/70">Interactive cards — hover to feel the energy.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ scale: 1.03 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/0 via-fuchsia-500/0 to-fuchsia-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="mb-3 text-sky-300">{s.icon}</div>
            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
