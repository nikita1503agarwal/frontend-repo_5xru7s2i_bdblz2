import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Mail } from 'lucide-react'

const codeLines = [
  `const developer = {\n  name: "Dinesh Dantal",\n  craft: "Full Stack Developer",\n  traits: ["scalable", "humanCentric", "performant"],\n}`,
  'function build(product) {\n  return product.with(simplicity).with(empathy).with(robustness)\n}',
  'deploy(ci.cd({ region: "global", provider: "cloud" }))',
]

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = codeLines[lineIndex]
    const interval = setInterval(() => {
      if (charIndex < current.length) {
        setTyped((t) => t + current[charIndex])
        setCharIndex((c) => c + 1)
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setTyped('')
          setCharIndex(0)
          setLineIndex((i) => (i + 1) % codeLines.length)
        }, 1200)
      }
    }, 24)
    return () => clearInterval(interval)
  }, [lineIndex, charIndex])

  const handleConnect = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1025]/40 via-[#0b1025]/60 to-[#0b1025]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-28 pb-20 text-white md:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          CDAC-certified Full Stack Developer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl font-semibold leading-tight sm:text-6xl md:text-7xl">
          Hi, I’m Dinesh —
          <br />
          <span className="bg-gradient-to-r from-sky-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">I Build Scalable, Human-Centric Software.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-2xl text-balance text-white/80">
          A cinematic, interactive portfolio that guides you through my journey across Java, .NET, React, cloud and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex items-center gap-3">
          <button onClick={handleConnect} className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110">
            <Mail className="h-4 w-4" /> Let’s Connect
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <a href="#projects" className="text-white/70 hover:text-white">View Work</a>
        </motion.div>

        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-black/30 p-4 text-xs text-emerald-200 backdrop-blur">
{typed}
          <span className="animate-pulse text-emerald-400">▍</span>
        </motion.pre>
      </div>

      <div className="pointer-events-none absolute -inset-x-10 bottom-0 h-64 bg-gradient-to-t from-[#0b1025] to-transparent" />
    </section>
  )
}
