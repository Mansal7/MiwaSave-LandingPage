import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileEdit, ShoppingBag, Coins, Utensils, Heart, MapPin } from 'lucide-react'

interface HowItWorksProps {
  darkMode: boolean
}

const steps = [
  {
    step: '01',
    icon: FileEdit,
    title: 'Catat Pemasukan',
    desc: 'Mulai dengan mencatat semua sumber pemasukan kamu hari ini dengan mudah dan cepat.',
    color: 'bg-emerald-500/20 text-emerald-500',
    textColor: 'text-emerald-600',
  },
  {
    step: '02',
    icon: ShoppingBag,
    title: 'Catat Pengeluaran',
    desc: 'Catat setiap pengeluaran agar keuangan kamu selalu terkontrol dengan baik.',
    color: 'bg-pink-500/20 text-[#FF6B52]',
    textColor: 'text-[#FF6B52]',
  },
  {
    step: '03',
    icon: Coins,
    title: 'Kumpulkan Coin',
    desc: 'Setiap transaksi yang kamu catat akan menghasilkan koin untuk digunakan di Pet Shop.',
    color: 'bg-amber-500/20 text-amber-500',
    textColor: 'text-amber-600',
  },
  {
    step: '04',
    icon: Utensils,
    title: 'Beri Makan Miwa',
    desc: 'Gunakan koin untuk membeli makanan, hadiah, dan item spesial untuk Miwa.',
    color: 'bg-orange-500/20 text-orange-500',
    textColor: 'text-orange-600',
  },
  {
    step: '05',
    icon: Heart,
    title: 'Miwa Makin Bahagia!',
    desc: 'Semakin rajin mencatat keuangan, semakin bahagia Miwa — dan semakin sehat keuanganmu!',
    color: 'bg-rose-500/20 text-rose-500',
    textColor: 'text-rose-600',
  },
]

export default function HowItWorks({ darkMode }: HowItWorksProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="how-it-works"
      ref={ref}
      className={`py-24 overflow-hidden ${darkMode ? 'bg-dark-card' : 'bg-background-alt'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 ${
            darkMode ? 'bg-dark-bg text-pink-soft border border-pink-500/20' : 'bg-pink-soft/20 text-[#FF6B52] border border-pink-200'
          }`}>
            <MapPin className="w-4 h-4 text-[#FF6B52]" /> Cara Kerja
          </div>
          <h2 className={`font-jakarta font-extrabold text-4xl lg:text-5xl mb-4 ${darkMode ? 'text-background' : 'text-brown-dark'}`}>
            Mudah & Menyenangkan{' '}
            <span className="text-gradient">Bersama Miwa</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-background/60' : 'text-brown-medium'}`}>
            Hanya 5 langkah sederhana untuk mulai perjalanan finansialmu dengan MiwaSave.
          </p>
        </motion.div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:flex items-start justify-between relative">
          {/* Connector line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 via-pink-400 via-amber-400 to-rose-400 opacity-40 mx-32" />

          {steps.map((step, i) => {
            const IconComp = step.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col items-center text-center max-w-[180px]"
              >
                {/* Step bubble */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-24 h-24 rounded-3xl ${step.color} backdrop-blur-md border border-white/40 flex flex-col items-center justify-center mb-6 shadow-soft relative z-10 cursor-default`}
                >
                  <IconComp className="w-8 h-8 mb-1" />
                  <span className={`text-[10px] font-black ${step.textColor}`}>Step {step.step}</span>
                </motion.div>

                <h3 className={`font-jakarta font-bold text-base mb-2 ${darkMode ? 'text-background' : 'text-brown-dark'}`}>
                  {step.title}
                </h3>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-background/50' : 'text-brown-medium/70'}`}>
                  {step.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, i) => {
            const IconComp = step.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex gap-5 items-start"
              >
                {/* Timeline column */}
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl ${step.color} border border-white/40 flex flex-col items-center justify-center shadow-soft flex-shrink-0`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-0.5 h-12 mt-1 ${darkMode ? 'bg-white/10' : 'bg-brown-dark/10'}`} />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-10 pt-1 ${i < steps.length - 1 ? '' : ''}`}>
                  <div className={`text-xs font-bold mb-1 ${step.textColor}`}>Step {step.step}</div>
                  <h3 className={`font-jakarta font-bold text-base mb-1 ${darkMode ? 'text-background' : 'text-brown-dark'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-background/50' : 'text-brown-medium/70'}`}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
