import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Cat } from 'lucide-react'

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (v: boolean) => void
}

const navLinks = [
  { label: 'Fitur', href: '#features' },
  { label: 'Cara Kerja', href: '#how-it-works' },
  { label: 'Virtual Pet', href: '#virtual-pet' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-soft py-3'
          : 'bg-transparent py-5'
      } ${darkMode ? 'glass-dark' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full gradient-pink flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
            <Cat className="w-5 h-5 text-white" />
          </div>
          <span className="font-poppins font-bold text-xl text-gradient">MiwaSave</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium text-sm transition-colors hover:text-pink-medium ${
                darkMode ? 'text-background/80' : 'text-brown-dark/70'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className={`p-2 rounded-full transition-all hover:scale-110 ${
              darkMode ? 'bg-dark-surface text-gold' : 'bg-pink-soft/20 text-brown-medium'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a
            href="https://drive.google.com/drive/folders/1b-jqAG6wsfk19aj0lZN0n4_TPVheLcqX"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-soft"
          >
            Download
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className={`p-2 rounded-full ${darkMode ? 'text-gold' : 'text-brown-medium'}`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className={`p-2 rounded-full ${darkMode ? 'text-background' : 'text-brown-dark'}`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden px-6 pb-5 ${darkMode ? 'glass-dark' : 'glass'}`}
          >
            <div className="flex flex-col gap-3 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-medium py-2 border-b transition-colors hover:text-pink-medium ${
                    darkMode ? 'text-background/80 border-white/10' : 'text-brown-dark/70 border-brown-dark/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://drive.google.com/drive/folders/1b-jqAG6wsfk19aj0lZN0n4_TPVheLcqX"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-white font-semibold text-sm px-5 py-3 rounded-2xl text-center mt-2"
              >
                Download MiwaSave
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
