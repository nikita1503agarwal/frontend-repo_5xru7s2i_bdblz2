import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin } from 'lucide-react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
      company: form.get('company') || undefined,
    }
    try {
      const res = await fetch(`${BACKEND}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        e.currentTarget.reset()
      } else {
        throw new Error(data?.detail || 'Failed')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-white">Let’s Connect</h2>
        <p className="text-white/70">Final scene — say hello and let’s build something meaningful.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-white/80">
          <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-sky-300" /><span>dantaldinesh123@gmail.com</span></div>
          <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-sky-300" /><span>7620079374</span></div>
          <a className="flex items-center gap-3 hover:text-white" href="https://www.linkedin.com/in/dinesh-dantal" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5 text-sky-300" />
            <span>LinkedIn</span>
          </a>
          <p className="pt-4 text-white/60">I respond within a day. Freelance and full-time opportunities welcome.</p>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-white/70">Name</label>
              <input name="name" required className="w-full rounded-lg border border-white/10 bg-black/30 p-3 text-white outline-none focus:border-sky-400" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Email</label>
              <input name="email" type="email" required className="w-full rounded-lg border border-white/10 bg-black/30 p-3 text-white outline-none focus:border-sky-400" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm text-white/70">Company (optional)</label>
              <input name="company" className="w-full rounded-lg border border-white/10 bg-black/30 p-3 text-white outline-none focus:border-sky-400" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm text-white/70">Message</label>
              <textarea name="message" rows="4" required className="w-full rounded-lg border border-white/10 bg-black/30 p-3 text-white outline-none focus:border-sky-400" />
            </div>
          </div>
          <button disabled={status==='loading'} className="mt-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-fuchsia-500 px-5 py-3 font-semibold text-white disabled:opacity-70">
            {status === 'loading' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'success' && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-emerald-300">Thank you! I’ll get back to you soon.</motion.p>
          )}
          {status === 'error' && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-rose-300">Something went wrong. Please try again.</motion.p>
          )}
        </form>
      </div>
    </section>
  )
}
