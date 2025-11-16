import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'PenToPublic',
    stack: 'ASP.NET Core • React • SQL Server',
    story: 'Problem: Creators needed a seamless way to publish and monetize. Solution: a full-stack platform with auth, payments, and admin tools. Impact: faster publishing and real revenue for indie writers.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'TherapyLLM',
    stack: 'Flask • JS • Llama 2',
    story: 'Built an AI therapy assistant that listens, reflects, and offers gentle guidance in real-time, designed with privacy and empathy at the core.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Flutter Notes App',
    stack: 'Flutter • Firebase',
    story: 'Real-time sync, sharing, and a delightful UX. Productivity that feels effortless across devices.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-white">Featured Projects</h2>
        <p className="text-white/70">Stories behind the builds — revealed with motion.</p>
      </div>

      <div className="flex flex-col gap-12">
        {projects.map((p, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group grid items-center gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <motion.img
                src={p.image}
                alt={p.title}
                className="h-64 w-full object-cover md:h-80"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
              <p className="mb-2 text-sm text-white/60">{p.stack}</p>
              <p className="text-white/80">{p.story}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
