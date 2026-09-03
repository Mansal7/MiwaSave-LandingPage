import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { HelpCircle, ChevronDown } from 'lucide-react'

interface FAQProps {
  darkMode: boolean
}

const faqs = [
  {
    q: 'Apa itu MiwaSave?',
    a: 'MiwaSave adalah aplikasi manajemen keuangan personal yang menggabungkan pencatatan keuangan dengan konsep virtual pet. Kamu bisa mencatat pemasukan dan pengeluaran, membuat anggaran, menetapkan target tabungan, dan merawat Miwa — seekor kucing virtual yang lucu — sebagai reward atas kebiasaan finansial yang baik.',
  },
  {
    q: 'Apakah MiwaSave gratis?',
    a: 'Ya! MiwaSave tersedia secara gratis dengan fitur lengkap. Kamu bisa menikmati semua fitur utama tanpa biaya apapun. Kami percaya bahwa mengelola keuangan dengan baik harus bisa diakses oleh semua orang.',
  },
  {
    q: 'Bagaimana cara mendapatkan coin?',
    a: 'Kamu mendapatkan coin setiap kali mencatat transaksi di MiwaSave. Semakin sering kamu mencatat pemasukan dan pengeluaran, semakin banyak coin yang terkumpul. Coin juga bisa didapatkan dari: mencapai target tabungan, login harian, menyelesaikan tantangan finansial, dan membagikan pencapaian.',
  },
  {
    q: 'Bagaimana cara memberi makan Miwa?',
    a: 'Setelah mengumpulkan coin, kamu bisa mengunjungi Food Shop di halaman Virtual Pet. Pilih makanan atau hadiah yang ingin diberikan kepada Miwa, lalu tekan tombol "Beri". Miwa akan menampilkan reaksi lucu dan ekspresi bahagianya!',
  },
  {
    q: 'Apakah data keuangan saya aman?',
    a: 'Keamanan data adalah prioritas utama kami. Semua data disimpan secara terenkripsi di perangkat kamu dan di server kami yang aman. Kami menggunakan enkripsi end-to-end dan tidak pernah membagikan data pribadimu kepada pihak ketiga. Kamu juga bisa mengekspor data kapanpun kamu mau.',
  },
  {
    q: 'Di platform apa MiwaSave tersedia?',
    a: 'MiwaSave saat ini tersedia untuk perangkat Android. Versi iOS sedang dalam pengembangan dan akan segera hadir. Kamu bisa download versi Android melalui link yang tersedia di halaman ini.',
  },
]

export default function FAQ({ darkMode }: FAQProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      ref={ref}
      className={`py-24 ${darkMode ? 'bg-dark-card' : 'bg-background-alt'}`}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 ${
            darkMode ? 'bg-dark-bg text-pink-soft border border-pink-500/20' : 'bg-pink-soft/20 text-[#FF6B52] border border-pink-200'
          }`}>
            <HelpCircle className="w-4 h-4 text-[#FF6B52]" /> FAQ
          </div>
          <h2 className={`font-jakarta font-extrabold text-4xl lg:text-5xl mb-4 ${darkMode ? 'text-background' : 'text-brown-dark'}`}>
            Pertanyaan yang{' '}
            <span className="text-gradient">Sering Ditanyakan</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-background/60' : 'text-brown-medium'}`}>
            Masih ada pertanyaan? Temukan jawabannya di sini.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                openIndex === i
                  ? darkMode
                    ? 'border-pink-medium/40 bg-dark-bg'
                    : 'border-pink-soft shadow-soft bg-white'
                  : darkMode
                  ? 'border-white/5 bg-dark-surface'
                  : 'border-brown-dark/5 bg-white/60 hover:bg-white'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-label={`Toggle FAQ: ${faq.q}`}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className={`font-semibold text-sm md:text-base pr-4 ${
                  openIndex === i
                    ? 'text-gradient'
                    : darkMode ? 'text-background' : 'text-brown-dark'
                }`}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className={`w-5 h-5 ${
                    openIndex === i ? 'text-pink-medium' : darkMode ? 'text-background/40' : 'text-brown-dark/40'
                  }`} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                  >
                    <div className={`px-6 pb-6 text-sm leading-relaxed ${
                      darkMode ? 'text-background/60' : 'text-brown-medium'
                    }`}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
