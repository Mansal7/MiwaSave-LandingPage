import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Star, ShieldCheck, Target, Coins, Sparkles, CheckCircle2, Cat, Heart } from 'lucide-react'

interface AboutProps {
  darkMode: boolean
}

const stats = [
  { value: '10K+', label: 'Pengguna Aktif', icon: Users, color: 'text-pink-500' },
  { value: '4.9★', label: 'Rating Pengguna', icon: Star, color: 'text-amber-400' },
  { value: '100%', label: 'Data Aman', icon: ShieldCheck, color: 'text-emerald-500' },
  { value: '∞', label: 'Tabungan Target', icon: Target, color: 'text-[#FF6B52]' },
]

export default function About({ darkMode }: AboutProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 overflow-hidden ${darkMode ? 'bg-dark-card' : 'bg-background-alt'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className={`absolute inset-0 rounded-full border-2 border-dashed scale-110 animate-spin-slow ${darkMode ? 'border-pink-medium/20' : 'border-pink-soft/40'}`} />
              <div className={`absolute inset-0 rounded-full border border-dashed scale-125 opacity-50 ${darkMode ? 'border-gold/20' : 'border-gold/30'}`} style={{ animationDuration: '12s', animation: 'spin 12s linear infinite reverse' }} />

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-pink-soft/20 blur-2xl scale-110" />

              <motion.img
                src="/miwa_coin.png"
                alt="Miwa memegang koin emas besar"
                className="relative w-64 h-64 md:w-80 md:h-80 object-contain"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Floating SVG icons around image */}
              {[Coins, Heart, Sparkles, Coins].map((IconComp, i) => (
                <motion.div
                  key={i}
                  className="absolute p-2.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-md border border-white/40 text-amber-500"
                  style={{
                    top: `${[10, 80, 20, 70][i]}%`,
                    left: `${[5, 5, 85, 88][i]}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <IconComp className="w-5 h-5 text-[#FF6B52]" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 ${
              darkMode ? 'bg-dark-surface text-pink-soft border border-pink-500/20' : 'bg-pink-soft/20 text-[#FF6B52] border border-pink-200'
            }`}>
              <Cat className="w-4 h-4 text-[#FF6B52]" /> Tentang MiwaSave
            </div>

            <h2 className={`font-jakarta font-extrabold text-4xl lg:text-5xl leading-tight mb-6 ${
              darkMode ? 'text-background' : 'text-brown-dark'
            }`}>
              Mengapa{' '}
              <span className="text-gradient">MiwaSave?</span>
            </h2>

            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-background/70' : 'text-brown-medium'}`}>
              MiwaSave bukan hanya aplikasi pencatat keuangan biasa.
            </p>

            <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-background/60' : 'text-brown-medium/80'}`}>
              Dengan konsep <strong className={darkMode ? 'text-pink-soft' : 'text-[#FF6B52]'}>Virtual Pet</strong>, setiap transaksi yang Anda catat akan membantu{' '}
              <strong className={darkMode ? 'text-background' : 'text-brown-dark'}>Miwa</strong> tumbuh lebih sehat dan bahagia.
            </p>

            <p className={`text-base leading-relaxed mb-10 ${darkMode ? 'text-background/60' : 'text-brown-medium/80'}`}>
              Semakin disiplin Anda mengatur keuangan, semakin banyak <strong className="text-amber-500">hadiah, makanan,</strong> dan item yang dapat diberikan kepada Miwa.
            </p>

            {/* Feature bullets with SVG icons */}
            <div className="space-y-3 mb-10">
              {[
                'Dapatkan koin setiap kali mencatat transaksi',
                'Miwa tumbuh seiring kebiasaan finansialmu yang makin sehat',
                'Statistik keuangan yang cantik, rapi & informatif',
                'Pengingat harian otomatis agar konsisten mencatat',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all ${
                    darkMode ? 'bg-dark-surface border-white/5' : 'bg-white/80 border-pink-100 shadow-2xs'
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B52] shrink-0" />
                  <span className={`text-sm font-semibold ${darkMode ? 'text-background/90' : 'text-brown-dark'}`}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Row with SVG icons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, i) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`text-center p-6 rounded-3xl glass shadow-soft card-hover ${darkMode ? 'glass-dark' : ''}`}
              >
                <div className={`w-12 h-12 rounded-2xl mx-auto flex items-center justify-center mb-3 bg-pink-500/10 ${stat.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="font-jakarta font-extrabold text-3xl mb-1 text-gradient">{stat.value}</div>
                <div className={`text-xs font-semibold ${darkMode ? 'text-background/60' : 'text-brown-medium/70'}`}>{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
