import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wallet, Receipt, Target, BarChart3, Bell, Heart, Banknote, ShoppingBag, PieChart, Cat, Sparkles } from 'lucide-react'

interface FeaturesProps {
  darkMode: boolean
}

const features = [
  {
    icon: Wallet,
    title: 'Catat Pemasukan',
    desc: 'Catat semua sumber pemasukan dengan mudah. Kategorikan gaji, freelance, bonus, dan lainnya.',
    color: 'from-emerald-400 to-green-500',
    bg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-500',
    svgDecoration: Banknote,
  },
  {
    icon: Receipt,
    title: 'Catat Pengeluaran',
    desc: 'Lacak pengeluaran harian dengan kategori lengkap. Kenali pola belanja Anda.',
    color: 'from-pink-400 to-[#FF6B52]',
    bg: 'bg-pink-500/10',
    iconColor: 'text-[#FF6B52]',
    svgDecoration: ShoppingBag,
  },
  {
    icon: Target,
    title: 'Target Tabungan',
    desc: 'Pantau progress tabungan dengan visual yang cantik. Capai impian finansial lebih cepat.',
    color: 'from-amber-400 to-yellow-500',
    bg: 'bg-amber-500/10',
    iconColor: 'text-amber-500',
    svgDecoration: Target,
  },
  {
    icon: BarChart3,
    title: 'Statistik Keuangan',
    desc: 'Grafik indah dan laporan bulanan otomatis. Analisis tren keuangan dengan mudah.',
    color: 'from-sky-400 to-blue-500',
    bg: 'bg-sky-500/10',
    iconColor: 'text-sky-500',
    svgDecoration: PieChart,
  },
  {
    icon: Heart,
    title: 'Miwa Virtual Pet',
    desc: 'Beri makan Miwa menggunakan koin dari kebiasaan finansial yang baik. Semakin rajin, Miwa makin bahagia!',
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-rose-500/15',
    iconColor: 'text-rose-500',
    svgDecoration: Cat,
    featured: true,
  },
  {
    icon: Bell,
    title: 'Pengingat Keuangan',
    desc: 'Pengingat harian untuk mencatat keuangan. Bangun kebiasaan finansial yang sehat.',
    color: 'from-purple-400 to-indigo-500',
    bg: 'bg-purple-500/10',
    iconColor: 'text-purple-500',
    svgDecoration: Bell,
  },
]

export default function Features({ darkMode }: FeaturesProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="features"
      ref={ref}
      className={`py-24 ${darkMode ? 'bg-dark-bg' : 'bg-background'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 ${
            darkMode ? 'bg-dark-card text-pink-soft border border-pink-500/20' : 'bg-pink-soft/20 text-[#FF6B52] border border-pink-200'
          }`}>
            <Sparkles className="w-4 h-4 text-[#FF6B52]" /> Fitur Unggulan
          </div>
          <h2 className={`font-jakarta font-extrabold text-4xl lg:text-5xl mb-4 ${darkMode ? 'text-background' : 'text-brown-dark'}`}>
            Semua yang Kamu Butuhkan{' '}
            <span className="text-gradient">Dalam Satu App</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-background/60' : 'text-brown-medium'}`}>
            MiwaSave hadir dengan fitur lengkap untuk membantu kamu mengelola keuangan dengan cara yang menyenangkan.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            const SvgDeco = feature.svgDecoration
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative rounded-3xl p-7 cursor-default transition-all duration-300 ${
                  feature.featured
                    ? 'gradient-pink text-white shadow-medium'
                    : darkMode
                    ? 'bg-dark-card border border-white/5 shadow-dark-soft hover:border-pink-medium/20'
                    : 'glass shadow-soft hover:shadow-medium border border-white/50'
                }`}
              >
                {feature.featured && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 fill-current" /> Favorit
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                  feature.featured ? 'bg-white/20' : feature.bg
                }`}>
                  <Icon className={`w-7 h-7 ${feature.featured ? 'text-white' : feature.iconColor}`} />
                </div>

                {/* SVG decoration */}
                <div className="absolute top-6 right-6 opacity-20 select-none">
                  <SvgDeco className={`w-8 h-8 ${feature.featured ? 'text-white' : feature.iconColor}`} />
                </div>

                <h3 className={`font-poppins font-bold text-xl mb-3 ${
                  feature.featured ? 'text-white' : darkMode ? 'text-background' : 'text-brown-dark'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  feature.featured ? 'text-white/80' : darkMode ? 'text-background/60' : 'text-brown-medium'
                }`}>
                  {feature.desc}
                </p>

                {/* Bottom accent line */}
                {!feature.featured && (
                  <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${feature.color} opacity-50`} />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
