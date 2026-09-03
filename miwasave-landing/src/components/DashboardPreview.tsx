import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SmartphoneDemo from './SmartphoneDemo'
import { Sparkles, Layers, RefreshCw, Smartphone } from 'lucide-react'

interface DashboardPreviewProps {
  darkMode: boolean
}

export default function DashboardPreview({ darkMode }: DashboardPreviewProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="dashboard"
      ref={ref}
      className={`py-24 relative overflow-hidden ${darkMode ? 'bg-dark-card' : 'bg-background-alt'}`}
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-pink-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-4 tracking-wide ${
            darkMode ? 'bg-dark-bg text-pink-soft border border-pink-500/20' : 'bg-pink-soft/20 text-pink-medium border border-pink-200'
          }`}>
            <Smartphone className="w-4 h-4" /> Mockup Smartphone Demo Interaktif
          </div>
          <h2 className={`font-jakarta font-extrabold text-4xl lg:text-5xl mb-4 tracking-tight ${darkMode ? 'text-background' : 'text-brown-dark'}`}>
            Pengalaman Demo{' '}
            <span className="text-gradient">Smartphone Modern</span>
          </h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${darkMode ? 'text-background/70' : 'text-brown-medium'}`}>
            Cobalah berpindah tab di dalam HP demo di bawah, lihat animasi progress ring SVG interaktif, dan sapa kucing virtual <b>Miwa 🐱</b>!
          </p>
        </motion.div>

        {/* Feature Pill Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs font-semibold">
          <div className={`px-4 py-2 rounded-2xl glass flex items-center gap-2 ${darkMode ? 'glass-dark text-pink-soft' : 'text-brown-dark'}`}>
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span>Glow Neon Soft Backdrop</span>
          </div>
          <div className={`px-4 py-2 rounded-2xl glass flex items-center gap-2 ${darkMode ? 'glass-dark text-pink-soft' : 'text-brown-dark'}`}>
            <span className="text-base">🐱</span>
            <span>Floating Greeting Badge Miwa</span>
          </div>
          <div className={`px-4 py-2 rounded-2xl glass flex items-center gap-2 ${darkMode ? 'glass-dark text-pink-soft' : 'text-brown-dark'}`}>
            <RefreshCw className="w-4 h-4 text-amber-500" />
            <span>SVG Progress Ring Interaktif</span>
          </div>
          <div className={`px-4 py-2 rounded-2xl glass flex items-center gap-2 ${darkMode ? 'glass-dark text-pink-soft' : 'text-brown-dark'}`}>
            <Layers className="w-4 h-4 text-purple-500" />
            <span>Tab Transition (Fade-In & Slide-Up)</span>
          </div>
        </div>

        {/* Smartphone Demo Render */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <SmartphoneDemo darkMode={darkMode} />
        </motion.div>
      </div>
    </section>
  )
}

