import { motion } from 'framer-motion'
import { Download, Play, Star, Sparkles, Coins, Wallet, Heart, TrendingUp, Smile } from 'lucide-react'

interface HeroProps {
  darkMode: boolean
}

const floatingIcons = [
  { icon: Coins, color: 'text-amber-400', x: '8%', y: '18%', delay: 0 },
  { icon: Wallet, color: 'text-pink-400', x: '86%', y: '14%', delay: 0.3 },
  { icon: Sparkles, color: 'text-yellow-300', x: '76%', y: '58%', delay: 0.6 },
  { icon: Coins, color: 'text-amber-500', x: '6%', y: '68%', delay: 0.9 },
  { icon: Heart, color: 'text-rose-400', x: '91%', y: '78%', delay: 1.2 },
  { icon: Star, color: 'text-amber-300', x: '18%', y: '82%', delay: 1.5 },
  { icon: Sparkles, color: 'text-[#FF6B52]', x: '48%', y: '8%', delay: 0.4 },
]

export default function Hero({ darkMode }: HeroProps) {
  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 ${
        darkMode ? 'bg-dark-bg' : 'gradient-hero'
      }`}
    >
      {/* Floating background SVG icons */}
      {floatingIcons.map((el, i) => {
        const IconComp = el.icon
        return (
          <motion.div
            key={i}
            className={`absolute select-none pointer-events-none opacity-70 p-2 rounded-2xl backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 ${el.color}`}
            style={{ left: el.x, top: el.y }}
            animate={{
              y: [0, -18, 0],
              rotate: [0, 12, -12, 0],
            }}
            transition={{
              duration: 4,
              delay: el.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        )
      })}

      {/* Background glow orbs */}
      <div className={`absolute top-20 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-pink-medium' : 'bg-pink-soft'}`} />
      <div className={`absolute bottom-10 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 ${darkMode ? 'bg-gold' : 'bg-gold'}`} />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-6 ${
                darkMode
                  ? 'bg-dark-card border border-pink-medium/30 text-pink-soft'
                  : 'bg-pink-soft/20 border border-pink-soft/60 text-pink-medium'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#FF6B52]" />
              <span>Aplikasi Keuangan #1 dengan Virtual Pet</span>
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`font-jakarta font-extrabold text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 ${
                darkMode ? 'text-background' : 'text-brown-dark'
              }`}
            >
              Kelola Keuangan{' '}
              <span className="text-gradient block">Lebih Mudah</span>
              Bersama Miwa 🐱
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-base sm:text-lg leading-relaxed mb-10 max-w-xl ${
                darkMode ? 'text-background/70' : 'text-brown-medium'
              }`}
            >
              MiwaSave membantu Anda mencatat pemasukan, pengeluaran, membuat anggaran, mencapai target tabungan, dan menjaga kebiasaan finansial yang sehat dengan ditemani{' '}
              <span className={`font-bold ${darkMode ? 'text-pink-soft' : 'text-[#FF6B52]'}`}>Miwa</span>
              , kucing virtual yang akan tumbuh bahagia setiap kali Anda mengelola keuangan dengan baik.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="https://drive.google.com/drive/folders/1b-jqAG6wsfk19aj0lZN0n4_TPVheLcqX"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-download-btn"
                aria-label="Download MiwaSave"
                className="btn-primary flex items-center gap-2 text-white font-bold px-8 py-4 rounded-2xl shadow-medium text-base"
              >
                <Download className="w-5 h-5" />
                Download Sekarang
              </a>
              <a
                href="#dashboard"
                id="hero-demo-btn"
                aria-label="Lihat Demo"
                className={`flex items-center gap-2 font-bold px-8 py-4 rounded-2xl border-2 text-base transition-all hover:scale-105 hover:shadow-soft ${
                  darkMode
                    ? 'border-pink-medium/30 text-background hover:border-pink-medium bg-dark-card'
                    : 'border-pink-soft text-brown-dark hover:bg-pink-soft/10'
                }`}
              >
                <Play className="w-5 h-5 fill-current" />
                Lihat Demo
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full border-2 overflow-hidden flex items-center justify-center bg-gradient-to-tr from-pink-300 to-amber-200 ${
                      darkMode ? 'border-dark-bg' : 'border-background'
                    }`}
                  >
                    <img src="/crop_main.png" alt="User avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                  <span className={`text-sm font-bold ml-1 ${darkMode ? 'text-background' : 'text-brown-dark'}`}>4.9</span>
                </div>
                <p className={`text-xs ${darkMode ? 'text-background/50' : 'text-brown-medium/60'}`}>
                  Dipercaya ribuan pengguna
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — Illustration */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring', bounce: 0.3 }}
              className="relative"
            >
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-full bg-pink-soft/30 blur-3xl scale-110" />

              {/* Hero Image */}
              <motion.img
                src="/crop_main.png"
                alt="Miwa, kucing virtual yang membantu mengelola keuangan"
                className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] object-contain drop-shadow-2xl"
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Floating stat cards with SVG icons */}
              <motion.div
                className={`absolute -left-8 top-1/4 glass rounded-2xl px-4 py-3 shadow-soft flex items-center gap-3 ${darkMode ? 'glass-dark' : ''}`}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className={`text-xs ${darkMode ? 'text-background/50' : 'text-brown-medium/60'}`}>Pemasukan</p>
                  <p className={`text-sm font-bold ${darkMode ? 'text-background' : 'text-brown-dark'}`}>Rp 5.200.000</p>
                </div>
              </motion.div>

              <motion.div
                className={`absolute -right-8 bottom-1/4 glass rounded-2xl px-4 py-3 shadow-soft flex items-center gap-3 ${darkMode ? 'glass-dark' : ''}`}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-500 flex items-center justify-center">
                  <Coins className="w-5 h-5" />
                </div>
                <div>
                  <p className={`text-xs ${darkMode ? 'text-background/50' : 'text-brown-medium/60'}`}>Coin Miwa</p>
                  <p className="text-sm font-bold text-amber-500">+250 Coin</p>
                </div>
              </motion.div>

              <motion.div
                className={`absolute -top-6 right-1/4 glass rounded-2xl px-4 py-3 shadow-soft flex items-center gap-2 ${darkMode ? 'glass-dark' : ''}`}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.8, delay: 0.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Smile className="w-5 h-5 text-amber-500" />
                <p className={`text-sm font-semibold ${darkMode ? 'text-background' : 'text-brown-dark'}`}>Miwa Happy!</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className={`w-6 h-10 rounded-full border-2 flex justify-center pt-2 ${darkMode ? 'border-background/30' : 'border-brown-dark/20'}`}>
          <div className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-background/50' : 'bg-brown-dark/30'}`} />
        </div>
      </motion.div>
    </section>
  )
}
