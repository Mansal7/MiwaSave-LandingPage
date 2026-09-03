import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Download, ArrowRight, Sparkles, Coins, Heart, Star, Cat } from 'lucide-react'

interface CTABannerProps {
  darkMode: boolean
}

export default function CTABanner({ darkMode }: CTABannerProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="download"
      ref={ref}
      className={`py-24 ${darkMode ? 'bg-dark-bg' : 'bg-background'}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
          className={`relative rounded-4xl overflow-hidden ${
            darkMode ? 'bg-dark-card border border-pink-medium/20' : 'gradient-pink'
          } p-12 md:p-16`}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2 blur-3xl" />

          {/* Floating SVG icons */}
          {[Coins, Sparkles, Heart, Star, Cat].map((IconComp, i) => (
            <motion.div
              key={i}
              className="absolute p-2 rounded-xl bg-white/10 backdrop-blur-md text-white/60 select-none pointer-events-none"
              style={{
                top: `${[15, 70, 20, 75, 40][i]}%`,
                left: `${[5, 8, 88, 85, 95][i]}%`,
              }}
              animate={{
                y: [0, -12, 0],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 4,
                delay: i * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <IconComp className="w-5 h-5 text-white/80" />
            </motion.div>
          ))}

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full mb-6 border border-white/30"
              >
                <Sparkles className="w-4 h-4" /> Mulai Gratis Sekarang
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="font-poppins font-extrabold text-4xl lg:text-5xl text-white leading-tight mb-6"
              >
                Mulai Kelola Keuangan Bersama Miwa Hari Ini
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-white/80 text-lg mb-10 max-w-lg"
              >
                Bergabunglah dengan ribuan pengguna yang sudah merasakan manfaat MiwaSave. Gratis, mudah, dan menyenangkan!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="https://drive.google.com/drive/folders/1b-jqAG6wsfk19aj0lZN0n4_TPVheLcqX"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cta-download-btn"
                  aria-label="Download MiwaSave sekarang"
                  className="flex items-center gap-2 bg-white text-pink-medium font-bold px-8 py-4 rounded-2xl shadow-medium hover:shadow-xl hover:-translate-y-1 transition-all text-base group"
                >
                  <Download className="w-5 h-5" />
                  Download MiwaSave
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#features"
                  className="flex items-center gap-2 bg-white/20 text-white border border-white/30 font-semibold px-8 py-4 rounded-2xl hover:bg-white/30 transition-all text-base"
                >
                  Pelajari Lebih Lanjut
                </a>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-6 mt-8"
              >
                {[
                  { icon: '🔒', text: 'Data Aman' },
                  { icon: '🆓', text: '100% Gratis' },
                  { icon: '📱', text: 'Android Ready' },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/80 text-sm">
                    <span>{badge.icon}</span>
                    <span>{badge.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right - Miwa illustration */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                className="relative"
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl scale-125" />
                <img
                  src="/crop_main.png"
                  alt="Miwa melambai mengundang kamu bergabung"
                  className="relative w-56 h-56 md:w-72 md:h-72 object-contain drop-shadow-2xl"
                />

                {/* Speech bubble */}
                <motion.div
                  className="absolute -top-6 -left-8 bg-white text-pink-medium text-sm font-bold px-4 py-2 rounded-2xl shadow-soft"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Download yuk! 🐱
                  <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
