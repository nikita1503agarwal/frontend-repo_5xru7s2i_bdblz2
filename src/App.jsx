import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Goals from './components/Goals'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1025] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1025]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="font-semibold tracking-tight">Dinesh Dantal</a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#journey" className="text-white/70 hover:text-white">Journey</a>
            <a href="#skills" className="text-white/70 hover:text-white">Skills</a>
            <a href="#projects" className="text-white/70 hover:text-white">Projects</a>
            <a href="#contact" className="text-white/70 hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15">Let’s Talk</a>
        </div>
      </header>

      <main>
        <Hero />
        <Journey />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Goals />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-white/50">© {new Date().getFullYear()} Dinesh Dantal. Crafted with care.</footer>

      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -inset-40 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_35%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.08),transparent_35%)]" />
      </div>
    </div>
  )
}

export default App
