import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Fish, Milk, UtensilsCrossed, Cookie, Smile, Frown, Moon, Utensils, Heart, Sparkles, Coins, ShoppingBag, Lightbulb, Cat } from 'lucide-react'

interface VirtualPetProps {
  darkMode: boolean
}

const emotions = [
  { icon: Smile, label: 'Happy', desc: 'Miwa senang karena kamu rajin catat keuangan!', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { icon: Frown, label: 'Hungry', desc: 'Miwa lapar! Saatnya beri dia makan.', color: 'text-sky-500', bg: 'bg-sky-500/10' },
  { icon: Moon, label: 'Sleeping', desc: 'Miwa sedang tidur. Jangan lupa catat pengeluaran hari ini!', color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { icon: Utensils, label: 'Eating', desc: 'Miwa sedang makan. Terima kasih sudah memberinya makan!', color: 'text-orange-500', bg: 'bg-orange-500/10' },
  { icon: Heart, label: 'Excited', desc: 'Miwa sangat senang! Kamu baru mencapai target tabungan!', color: 'text-rose-500', bg: 'bg-rose-500/10' },
]

const foods = [
  { name: 'Fish', icon: Fish, price: 50, desc: 'Makanan favorit Miwa', color: 'from-blue-400/20 to-sky-500/20', iconColor: 'text-sky-500' },
  { name: 'Milk', icon: Milk, price: 30, desc: 'Minuman menyegarkan', color: 'from-slate-200/40 to-slate-300/40', iconColor: 'text-slate-600' },
  { name: 'Premium Food', icon: UtensilsCrossed, price: 150, desc: 'Menu spesial bergizi', color: 'from-amber-400/20 to-yellow-500/20', iconColor: 'text-amber-500' },
  { name: 'Treat', icon: Cookie, price: 80, desc: 'Camilan kesukaan Miwa', color: 'from-orange-400/20 to-pink-500/20', iconColor: 'text-[#FF6B52]' },
]

export default function VirtualPet({ darkMode }: VirtualPetProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedEmotion, setSelectedEmotion] = useState(0)
  const [coins, setCoins] = useState(320)
  const [fedMessage, setFedMessage] = useState<string | null>(null)

  const feedMiwa = (food: typeof foods[0]) => {
    if (coins >= food.price) {
      setCoins(c => c - food.price)
      setSelectedEmotion(3) // eating
      setFedMessage(`Miwa sedang makan ${food.name}! ✨`)
      setTimeout(() => {
        setSelectedEmotion(4) // excited
        setFedMessage(null)
      }, 2000)
      setTimeout(() => setSelectedEmotion(0), 4000)
    }
  }

  const currentEmotion = emotions[selectedEmotion]
  const CurrentEmotionIcon = currentEmotion.icon

  return (
    <section
      id="virtual-pet"
      ref={ref}
      className={`py-24 overflow-hidden ${darkMode ? 'bg-dark-bg' : 'bg-background'}`}
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
            <Cat className="w-4 h-4 text-[#FF6B52]" /> Virtual Pet
          </div>
          <h2 className={`font-jakarta font-extrabold text-4xl lg:text-5xl mb-4 ${darkMode ? 'text-background' : 'text-brown-dark'}`}>
            Temui{' '}
            <span className="text-gradient">Miwa</span>
            , Teman Finansialmu
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-background/60' : 'text-brown-medium'}`}>
            Miwa hadir dalam berbagai ekspresi. Rawat dia dengan baik melalui kebiasaan finansial yang sehat!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Miwa Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: 'spring' }}
            className="flex flex-col items-center"
          >
            {/* Main Pet Card */}
            <div className={`relative w-full max-w-sm rounded-4xl p-8 text-center shadow-medium ${
              darkMode ? 'bg-dark-card border border-white/5' : 'glass'
            }`}>
              {/* Coins display */}
              <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-amber-400/20 text-amber-600 dark:text-amber-300 px-3 py-1.5 rounded-full border border-amber-300/30 text-xs font-bold">
                <Coins className="w-4 h-4 text-amber-500" />
                <span>{coins}</span>
              </div>

              {/* Miwa image with emotion */}
              <motion.div
                key={selectedEmotion}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="relative inline-block"
              >
                <motion.img
                  src={
                    selectedEmotion === 1
                      ? '/crop_hungry.png'
                      : selectedEmotion === 2
                      ? '/crop_sad.png'
                      : selectedEmotion === 3 || selectedEmotion === 4
                      ? '/crop_happy.png'
                      : '/crop_main.png'
                  }
                  alt={`Miwa expression: ${currentEmotion.label}`}
                  className="w-48 h-48 object-contain mx-auto"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className={`absolute -top-2 -right-2 p-2 rounded-full backdrop-blur-md bg-white/80 dark:bg-slate-800/80 shadow-md border border-white/40 ${currentEmotion.color}`}>
                  <CurrentEmotionIcon className="w-6 h-6" />
                </div>
              </motion.div>

              <div className={`mt-4 px-4 py-3 rounded-2xl ${currentEmotion.bg}`}>
                <p className={`text-xs font-bold ${currentEmotion.color}`}>
                  {currentEmotion.desc}
                </p>
              </div>

              {/* AnimatePresence for fed message */}
              <AnimatePresence>
                {fedMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4 text-emerald-500" />
                    {fedMessage}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Emotion Selector */}
            <div className="flex gap-3 mt-6 flex-wrap justify-center">
              {emotions.map((emotion, i) => {
                const EmoIcon = emotion.icon
                return (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedEmotion(i)}
                    aria-label={`Show Miwa ${emotion.label} emotion`}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-soft border ${
                      selectedEmotion === i
                        ? 'bg-[#FF6B52] text-white border-[#FF6B52] scale-110 shadow-medium'
                        : darkMode
                        ? 'bg-dark-card border-white/5 text-slate-400 hover:text-white'
                        : 'bg-white border-slate-100 text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <EmoIcon className="w-5 h-5" />
                  </motion.button>
                )
              })}
            </div>
          </motion.div>

          {/* Right - Food Shop */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className={`font-jakarta font-extrabold text-2xl flex items-center gap-2 ${darkMode ? 'text-background' : 'text-brown-dark'}`}>
                  <ShoppingBag className="w-6 h-6 text-[#FF6B52]" /> Food Shop
                </h3>
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-amber-300/30 ${
                  darkMode ? 'bg-dark-card' : 'bg-amber-400/10'
                }`}>
                  <Coins className="w-4 h-4 text-amber-500" />
                  <span className="font-extrabold text-xs text-amber-500">{coins} Coin</span>
                </div>
              </div>
              <p className={`text-sm ${darkMode ? 'text-background/50' : 'text-brown-medium/70'}`}>
                Gunakan koin untuk membeli makanan Miwa
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {foods.map((food, i) => {
                const FoodIcon = food.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className={`rounded-3xl p-5 cursor-default ${
                      darkMode
                        ? 'bg-dark-card border border-white/5'
                        : `bg-gradient-to-br ${food.color} border border-white/60`
                    } shadow-soft`}
                  >
                    <div className={`w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-md shadow-xs ${food.iconColor}`}>
                      <FoodIcon className="w-6 h-6" />
                    </div>
                    <h4 className={`font-bold text-sm text-center mb-1 ${darkMode ? 'text-background' : 'text-brown-dark'}`}>
                      {food.name}
                    </h4>
                    <p className={`text-xs text-center mb-3 ${darkMode ? 'text-background/50' : 'text-brown-medium/70'}`}>
                      {food.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Coins className="w-3.5 h-3.5 text-amber-500" />
                        <span className="text-xs font-extrabold text-amber-500">{food.price}</span>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => feedMiwa(food)}
                        disabled={coins < food.price}
                        aria-label={`Buy ${food.name} for Miwa`}
                        className={`text-xs font-extrabold px-3 py-1.5 rounded-xl transition-all ${
                          coins >= food.price
                            ? 'bg-[#FF6B52] hover:bg-[#FF5733] text-white shadow-xs cursor-pointer'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        Beri
                      </motion.button>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Earn more coins hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className={`mt-6 p-4 rounded-2xl flex items-center gap-3 border ${
                darkMode ? 'bg-dark-card border-amber-400/20' : 'bg-amber-400/10 border-amber-300/30'
              }`}
            >
              <Lightbulb className="w-5 h-5 text-amber-500 shrink-0" />
              <p className={`text-xs ${darkMode ? 'text-background/70' : 'text-brown-medium'}`}>
                <strong className="text-amber-500">Tip:</strong> Catat lebih banyak transaksi untuk mendapatkan lebih banyak koin!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
