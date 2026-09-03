import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote, MessageSquareQuote, GraduationCap, Code2, UtensilsCrossed, CheckCircle2 } from 'lucide-react'

interface TestimonialsProps {
  darkMode: boolean
}

const testimonials = [
  {
    name: 'Sarah Amalia',
    role: 'Mahasiswi',
    icon: GraduationCap,
    rating: 5,
    review: 'MiwaSave membuat saya lebih semangat menabung karena ingin membuat Miwa tetap bahagia. Akhirnya bisa nabung konsisten setiap bulan!',
    highlight: 'Miwa tetap bahagia',
    color: 'from-pink-500/10 to-rose-500/5',
    border: 'border-pink-200/50',
    iconBg: 'bg-pink-500/10 text-[#FF6B52]',
  },
  {
    name: 'Rizky Pratama',
    role: 'Software Engineer',
    icon: Code2,
    rating: 5,
    review: 'Aplikasi yang benar-benar unik! Konsep virtual pet-nya bikin saya nggak bisa berhenti mencatat pengeluaran. Statistiknya juga sangat membantu.',
    highlight: 'nggak bisa berhenti mencatat',
    color: 'from-sky-500/10 to-blue-500/5',
    border: 'border-sky-200/50',
    iconBg: 'bg-sky-500/10 text-sky-500',
  },
  {
    name: 'Dewi Sartika',
    role: 'Ibu Rumah Tangga',
    icon: UtensilsCrossed,
    rating: 5,
    review: 'Sangat mudah digunakan! Saya yang awam teknologi pun bisa pakai dengan lancar. Miwa lucu banget, bikin betah buka aplikasinya setiap hari.',
    highlight: 'Miwa lucu banget',
    color: 'from-emerald-500/10 to-green-500/5',
    border: 'border-emerald-200/50',
    iconBg: 'bg-emerald-500/10 text-emerald-500',
  },
]

export default function Testimonials({ darkMode }: TestimonialsProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="testimonials"
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
            <MessageSquareQuote className="w-4 h-4 text-[#FF6B52]" /> Apa Kata Mereka
          </div>
          <h2 className={`font-jakarta font-extrabold text-4xl lg:text-5xl mb-4 ${darkMode ? 'text-background' : 'text-brown-dark'}`}>
            Ribuan Pengguna{' '}
            <span className="text-gradient">Sudah Merasakan</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-background/60' : 'text-brown-medium'}`}>
            Bergabung bersama pengguna MiwaSave yang sudah merasakan manfaatnya.
          </p>
        </motion.div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className={`flex items-center gap-6 px-8 py-4 rounded-full glass shadow-soft ${darkMode ? 'glass-dark' : ''}`}>
            <div className="text-center">
              <div className="font-extrabold text-3xl text-gradient">4.9</div>
              <div className={`text-xs ${darkMode ? 'text-background/50' : 'text-brown-medium/60'}`}>Rating</div>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <div className="text-center">
              <div className={`font-bold text-sm ${darkMode ? 'text-background' : 'text-brown-dark'}`}>10K+</div>
              <div className={`text-xs ${darkMode ? 'text-background/50' : 'text-brown-medium/60'}`}>Ulasan</div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const AvatarIcon = t.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative rounded-3xl p-7 cursor-default transition-all duration-300 border ${
                  darkMode
                    ? 'bg-dark-card border-white/5'
                    : `bg-gradient-to-br ${t.color} ${t.border}`
                } shadow-soft`}
              >
                {/* Quote icon */}
                <Quote className={`w-8 h-8 mb-4 ${darkMode ? 'text-pink-medium/30' : 'text-[#FF6B52]/40'}`} />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Review */}
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-background/70' : 'text-brown-medium'}`}>
                  "{t.review}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold ${t.iconBg}`}>
                    <AvatarIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${darkMode ? 'text-background' : 'text-brown-dark'}`}>{t.name}</p>
                    <p className={`text-xs ${darkMode ? 'text-background/50' : 'text-brown-medium/60'}`}>{t.role}</p>
                  </div>
                </div>

                {/* Verified badge */}
                <div className={`absolute top-5 right-5 text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1 ${
                  darkMode ? 'bg-dark-surface text-emerald-400' : 'bg-emerald-500/10 text-emerald-600'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
