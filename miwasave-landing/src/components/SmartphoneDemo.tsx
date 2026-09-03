import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bell,
  Plus,
  ChevronRight,
  Home,
  Wallet,
  FileText,
  Sparkles,
  User,
  Pencil,
  Clock,
  Shield,
  TrendingUp,
  Flame,
  X,
  Trophy,
  Smile,
} from 'lucide-react'

interface SmartphoneDemoProps {
  darkMode?: boolean
}

type TabType = 'beranda' | 'tabungan' | 'catatan' | 'analisis' | 'profil'

const GREETINGS = [
  "Sedikit lagi nih! Ayo kita nabung biar Miwa makin sehat! ✨",
  "Halo Ahmad! Miwa senang banget kamu rajin mencatat tabungan! 🐱",
  "Target 'beli laptop' kamu baru 0%, yuk beri makan Miwa hari ini! 🐟",
  "Poin streak 1 harimu sangat membanggakan! Pertahankan ya! 🔥",
]

export default function SmartphoneDemo({ darkMode = false }: SmartphoneDemoProps) {
  const [activeTab, setActiveTab] = useState<TabType>('beranda')
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [fedCount, setFedCount] = useState(62)
  const [isFeeding, setIsFeeding] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('Semua')

  // Animate progress on mount & tab change
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(2) // Matches screenshot 2%
    }, 300)
    return () => clearTimeout(timer)
  }, [activeTab])

  const nextGreeting = () => {
    setGreetingIndex((prev) => (prev + 1) % GREETINGS.length)
  }

  const handleFeed = () => {
    setIsFeeding(true)
    setFedCount((prev) => prev + 2)
    setTimeout(() => setIsFeeding(false), 900)
  }

  // SVG Progress Ring calculations around Miwa Cat
  const radius = 64
  const strokeWidth = 6
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto py-6 select-none font-jakarta">
      {/* ------------------------------------------------------------- */}
      {/* GLOW NEON BACKDROP HALUS */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[430px] h-[700px] sm:h-[740px] pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B52]/30 via-[#FF8A65]/20 to-amber-300/25 rounded-full blur-[85px] animate-neon-pulse" />
        <div className="absolute -top-8 -right-8 w-48 h-48 bg-[#FF6B52]/25 rounded-full blur-[60px] animate-pulse" />
        <div className="absolute -bottom-8 -left-8 w-52 h-52 bg-amber-400/20 rounded-full blur-[70px] animate-float-slow" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* FLOATING BADGE MASKOT MIWA 🐱 (GREETING SPEECH BUBBLE) */}
      {/* ------------------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="absolute -top-5 sm:-top-7 -right-2 sm:-right-5 z-30 cursor-pointer max-w-[230px] sm:max-w-[270px]"
        onClick={nextGreeting}
      >
        <div
          className={`relative p-3.5 sm:p-4 rounded-2xl shadow-xl backdrop-blur-xl border transition-all duration-300 hover:scale-105 ${
            darkMode
              ? 'bg-dark-card/90 border-[#FF6B52]/30 text-white shadow-red-500/10'
              : 'bg-white/95 border-pink-200/80 text-brown-dark shadow-red-500/15'
          } animate-float-badge`}
        >
          {/* Speech tail */}
          <div
            className={`absolute -bottom-2 right-8 w-4 h-4 rotate-45 border-r border-b ${
              darkMode ? 'bg-dark-card/90 border-[#FF6B52]/30' : 'bg-white/95 border-pink-200/80'
            }`}
          />

          <div className="flex items-start gap-3">
            <div className="relative shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF6B52] to-amber-300 p-0.5 shadow-md flex items-center justify-center text-xl animate-bounce-slow overflow-hidden">
                <img src="/crop_main.png" alt="Miwa Cat" className="w-full h-full object-cover" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 border-2 border-white rounded-full flex items-center justify-center text-[8px] text-white">
                ✓
              </span>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between gap-1 mb-0.5">
                <span className="text-xs font-bold text-[#FF6B52] dark:text-[#FF8A65] flex items-center gap-1">
                  Miwa 🐱 <Sparkles className="w-3 h-3 text-amber-400 inline" />
                </span>
                <span className="text-[10px] opacity-50 font-medium">Klik Me!</span>
              </div>
              <p className="text-xs leading-snug font-medium opacity-90 line-clamp-2">
                "{GREETINGS[greetingIndex]}"
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ------------------------------------------------------------- */}
      {/* SMARTPHONE FRAME GLASSMORPHISM */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10 mx-auto w-[320px] sm:w-[365px] h-[650px] sm:h-[700px] rounded-[48px] p-3 sm:p-3.5 glass-phone-shell transition-all duration-300">
        {/* Side Hardware Buttons */}
        <div className="absolute top-24 -left-3 w-1 h-10 bg-slate-300/60 dark:bg-slate-700/60 rounded-l-md" />
        <div className="absolute top-38 -left-3 w-1 h-12 bg-slate-300/60 dark:bg-slate-700/60 rounded-l-md" />
        <div className="absolute top-30 -right-3 w-1 h-14 bg-slate-300/60 dark:bg-slate-700/60 rounded-r-md" />

        {/* Inner Phone Display Container */}
        <div
          className={`relative w-full h-full rounded-[40px] overflow-hidden flex flex-col justify-between border ${
            darkMode
              ? 'bg-[#181110] border-white/10 text-white'
              : 'bg-[#FFF9F6] border-white/90 text-slate-800'
          }`}
        >
          {/* Status Bar */}
          <div className="pt-3 px-6 pb-1 flex items-center justify-between text-xs font-semibold shrink-0 z-20">
            <span className="text-xs tracking-tight font-inter font-bold opacity-80">0:21</span>
            
            {/* Camera Hole / Dynamic Notch */}
            <div className="w-22 h-4.5 bg-black rounded-full flex items-center justify-between px-2 shadow-inner">
              <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700" />
              <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700" />
            </div>

            <div className="flex items-center gap-1.5 opacity-80 text-[10px]">
              <span>📶</span>
              <span>🔋 93</span>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* SCREEN CONTENT AREA (ANIMATED TAB TRANSITIONS) */}
          {/* ------------------------------------------------------------- */}
          <div className="flex-1 overflow-y-auto px-3.5 py-1 scrollbar-none">
            <AnimatePresence mode="wait">
              {/* --------------------------------------------------------- */}
              {/* TAB 1: BERANDA (HOME) */}
              {/* --------------------------------------------------------- */}
              {activeTab === 'beranda' && (
                <motion.div
                  key="beranda"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="space-y-3.5"
                >
                  {/* Top Header */}
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Halo, Ahmad! 👋</p>
                      <h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">MiwaSave</h3>
                    </div>
                    <button className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 shadow-xs border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200">
                      <Bell className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                    </button>
                  </div>

                  {/* Top Cat Card (Exact Screenshot Match) */}
                  <div className="relative rounded-3xl p-4 bg-white dark:bg-slate-900/90 border border-pink-100/70 dark:border-slate-800 shadow-sm text-center">
                    {/* Level Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-200/50 mb-3">
                      <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                      <span>Lv.1 • Anak Kucing</span>
                      <span className="opacity-40">→ Lv.2</span>
                    </div>

                    {/* Cat Avatar with SVG Progress Ring around it */}
                    <div className="relative w-36 h-36 mx-auto flex items-center justify-center my-1">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 140 140">
                        <circle
                          cx="70"
                          cy="70"
                          r={radius}
                          stroke={darkMode ? '#332320' : '#F1E9E6'}
                          strokeWidth={strokeWidth}
                          fill="transparent"
                        />
                        <circle
                          cx="70"
                          cy="70"
                          r={radius}
                          stroke="#FF6B52"
                          strokeWidth={strokeWidth}
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          strokeLinecap="round"
                          fill="transparent"
                          className="progress-ring-circle"
                        />
                      </svg>

                      {/* Cat Artwork inside circle */}
                      <div className="w-28 h-28 rounded-full overflow-hidden bg-gradient-to-b from-amber-50 to-pink-50 p-1 flex items-center justify-center shadow-inner">
                        <img
                          src={isFeeding ? '/crop_happy.png' : '/crop_main.png'}
                          alt="Miwa Cat Mascot"
                          className="w-full h-full object-contain hover:scale-105 transition-transform"
                        />
                      </div>
                    </div>

                    {/* Speech Bubble under cat */}
                    <div className="relative mt-2 mb-3 p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-xs text-xs font-medium text-slate-700 dark:text-slate-200 leading-snug">
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-800 border-t border-l border-slate-100 dark:border-slate-700 rotate-45" />
                      "Sedikit lagi nih! Ayo kita nabung biar Miwa makin sehat! ✨"
                    </div>

                    {/* Progress Total Bar */}
                    <div className="space-y-1 text-left">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-slate-600 dark:text-slate-400">Progres Total</span>
                        <span className="font-extrabold text-[#FF6B52]">{progress}%</span>
                      </div>

                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative">
                        <div
                          className="h-full bg-[#FF6B52] rounded-full transition-all duration-1000"
                          style={{ width: `${progress}%` }}
                        />
                      </div>

                      <div className="flex justify-between text-xs pt-1">
                        <span className="font-extrabold text-slate-800 dark:text-white">Rp {fedCount}rb</span>
                        <span className="text-slate-400 font-medium">/ Rp 3.5jt</span>
                      </div>
                    </div>
                  </div>

                  {/* 3 Stat Cards Row (Exact Screenshot Match) */}
                  <div className="grid grid-cols-3 gap-2">
                    {/* Wallet Card */}
                    <div className="p-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-pink-100/60 dark:border-slate-800 shadow-2xs text-center">
                      <div className="w-8 h-8 rounded-xl bg-[#FF6B52] text-white flex items-center justify-center mx-auto mb-1 shadow-xs">
                        <Wallet className="w-4 h-4" />
                      </div>
                      <p className="text-xs font-extrabold text-slate-800 dark:text-white">Rp {fedCount}rb</p>
                      <p className="text-[9px] text-slate-400 font-medium">Total Tabungan</p>
                    </div>

                    {/* Growth Card */}
                    <div className="p-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-pink-100/60 dark:border-slate-800 shadow-2xs text-center">
                      <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center mx-auto mb-1 shadow-xs">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <p className="text-xs font-extrabold text-slate-800 dark:text-white">Rp 56rb</p>
                      <p className="text-[9px] text-slate-400 font-medium">Bulan Ini</p>
                    </div>

                    {/* Streak Card */}
                    <div className="p-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-pink-100/60 dark:border-slate-800 shadow-2xs text-center">
                      <div className="w-8 h-8 rounded-xl bg-purple-500 text-white flex items-center justify-center mx-auto mb-1 shadow-xs">
                        <Flame className="w-4 h-4 fill-current" />
                      </div>
                      <p className="text-xs font-extrabold text-slate-800 dark:text-white">1h</p>
                      <p className="text-[9px] text-slate-400 font-medium">Streak</p>
                    </div>
                  </div>

                  {/* Orange CTA Banner (Beri Makan Miwa!) */}
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={handleFeed}
                    className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-[#FF5733] via-[#FF6B52] to-[#FF8A65] text-white shadow-md shadow-red-500/20 flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-lg">
                        🐟
                      </div>
                      <div className="text-left">
                        <h4 className="text-xs font-extrabold leading-tight">
                          {isFeeding ? 'Yummy! Miwa Senang! 🐟' : 'Beri Makan Miwa!'}
                        </h4>
                        <p className="text-[10px] opacity-90 font-medium">Tambah Tabungan Sekarang</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>

                  {/* Target Tabungan Preview */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-xs font-extrabold text-slate-800 dark:text-white">Target Tabungan</h4>
                      <button
                        onClick={() => setActiveTab('tabungan')}
                        className="text-[11px] font-bold text-[#FF6B52] flex items-center"
                      >
                        Lihat Semua <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Mini Target Item */}
                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xs flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl p-1.5 rounded-xl bg-amber-100/60 dark:bg-amber-500/10">💻</span>
                        <div>
                          <p className="text-xs font-bold text-slate-800 dark:text-white">beli laptop</p>
                          <p className="text-[10px] text-slate-400 font-medium">Rp 10.000 dari Rp 3.000.000</p>
                        </div>
                      </div>
                      <span className="text-xs font-extrabold text-amber-500 font-inter">0%</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* --------------------------------------------------------- */}
              {/* TAB 2: TABUNGAN (SAVINGS GOALS / SCREENSHOT 2) */}
              {/* --------------------------------------------------------- */}
              {activeTab === 'tabungan' && (
                <motion.div
                  key="tabungan"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="space-y-3.5"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between pt-1">
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                      Target Tabungan 💰
                    </h3>
                    <button className="w-8 h-8 rounded-full bg-[#FF6B52] text-white flex items-center justify-center shadow-sm">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Summary Card */}
                  <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-pink-100/70 dark:border-slate-800 shadow-2xs grid grid-cols-3 gap-1 text-center">
                    <div>
                      <p className="text-xs font-black text-[#FF6B52]">Rp 62.000</p>
                      <p className="text-[9px] text-slate-400 font-medium">Total Ditabung</p>
                    </div>
                    <div className="border-x border-slate-100 dark:border-slate-800">
                      <p className="text-xs font-black text-[#FF6B52]">Rp 3.500.000</p>
                      <p className="text-[9px] text-slate-400 font-medium">Total Target</p>
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#FF6B52]">0</p>
                      <p className="text-[9px] text-slate-400 font-medium">Goal Tercapai</p>
                    </div>
                  </div>

                  {/* Goal Card 1: Beli Laptop */}
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xs space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl p-1.5 rounded-xl bg-orange-100/60 dark:bg-orange-500/10">💻</span>
                        <h4 className="text-xs font-bold text-slate-800 dark:text-white">beli laptop</h4>
                      </div>
                      <Pencil className="w-3.5 h-3.5 text-slate-400" />
                    </div>

                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FF6B52] rounded-full" style={{ width: '0%' }} />
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <div>
                        <p className="font-extrabold text-slate-800 dark:text-white text-xs">Rp 10.000</p>
                        <p className="text-[9px] text-slate-400 font-medium">dari Rp 3.000.000</p>
                      </div>
                      <span className="font-extrabold text-amber-500 text-sm">0%</span>
                    </div>

                    <button
                      onClick={handleFeed}
                      className="w-full py-1.5 rounded-xl border border-amber-400/80 text-amber-600 dark:text-amber-400 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-amber-50 dark:hover:bg-amber-500/10"
                    >
                      🐟 Beri Makan
                    </button>
                  </div>

                  {/* Goal Card 2: Liburan */}
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xs space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl p-1.5 rounded-xl bg-sky-100/60 dark:bg-sky-500/10">✈️</span>
                        <div>
                          <h4 className="text-xs font-bold text-slate-800 dark:text-white">liburan</h4>
                          <p className="text-[9px] text-rose-500 font-medium flex items-center gap-1">
                            <Clock className="w-2.5 h-2.5" /> 39 hari lagi
                          </p>
                        </div>
                      </div>
                      <Pencil className="w-3.5 h-3.5 text-slate-400" />
                    </div>

                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '10%' }} />
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <div>
                        <p className="font-extrabold text-slate-800 dark:text-white text-xs">Rp 52.000</p>
                        <p className="text-[9px] text-slate-400 font-medium">dari Rp 500.000</p>
                      </div>
                      <span className="font-extrabold text-amber-500 text-sm">10%</span>
                    </div>

                    <button
                      onClick={handleFeed}
                      className="w-full py-1.5 rounded-xl border border-amber-400/80 text-amber-600 dark:text-amber-400 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-amber-50 dark:hover:bg-amber-500/10"
                    >
                      🐟 Beri Makan
                    </button>
                  </div>
                </motion.div>
              )}

              {/* --------------------------------------------------------- */}
              {/* TAB 3: CATATAN (TRANSACTIONS / SCREENSHOT 3) */}
              {/* --------------------------------------------------------- */}
              {activeTab === 'catatan' && (
                <motion.div
                  key="catatan"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="space-y-3"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <p className="text-[10px] text-slate-400 font-medium leading-none">Catatan</p>
                      <h3 className="text-base font-black text-slate-900 dark:text-white">Keuangan</h3>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-[#FF6B52] text-white flex items-center justify-center shadow-sm">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Main Saldo Card */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FF5733] via-[#FF6B52] to-[#FF8A65] text-white shadow-sm space-y-2">
                    <p className="text-[10px] opacity-90 font-medium">Saldo Bersih Bulan Ini</p>
                    <h2 className="text-xl font-black font-inter tracking-tight">+Rp 856rb</h2>
                    <div className="flex items-center gap-3 text-[10px] pt-1 border-t border-white/20 font-medium opacity-90">
                      <span>📈 Rp 800rb</span>
                      <span>📉 Rp 0</span>
                      <span>🐾 Rp 56rb</span>
                    </div>
                  </div>

                  {/* Months Bar */}
                  <div className="flex items-center justify-between overflow-x-auto text-[10px] font-bold py-1 scrollbar-none gap-1.5">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep'].map((m) => (
                      <button
                        key={m}
                        className={`px-2.5 py-1 rounded-full whitespace-nowrap ${
                          m === 'Agt'
                            ? 'bg-[#FF6B52] text-white shadow-2xs'
                            : 'text-slate-400 hover:text-slate-600'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold overflow-x-auto pb-1 scrollbar-none">
                    {[
                      { label: '≡ Semua' },
                      { label: '🐾 Tabungan' },
                      { label: '📈 Masuk' },
                      { label: '📉 Keluar' },
                    ].map((f) => (
                      <button
                        key={f.label}
                        onClick={() => setSelectedFilter(f.label)}
                        className={`px-3 py-1 rounded-full border whitespace-nowrap ${
                          selectedFilter === f.label
                            ? 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white border-slate-300'
                            : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-500'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>

                  {/* Transactions List */}
                  <div className="space-y-1.5">
                    {[
                      { title: 'Setoran tabungan', time: 'Hari ini', amount: '+Rp 2.000', cat: true },
                      { title: 'Setoran tabungan', time: '3 hari lalu', amount: '+Rp 2.000', cat: true },
                      { title: 'Setoran tabungan', time: '4 hari lalu', amount: '+Rp 50.000', cat: true },
                      { title: 'Pemasukan', time: '4 hari lalu', amount: '+Rp 800.000', money: true },
                      { title: 'Setoran tabungan', time: '4 hari lalu', amount: '+Rp 2.000', cat: true },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-emerald-100/70 dark:bg-emerald-500/10 flex items-center justify-center text-sm">
                            {item.cat ? '🐱' : '💰'}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-800 dark:text-white leading-tight">{item.title}</p>
                            <p className="text-[9px] text-slate-400 font-medium">{item.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-extrabold text-emerald-500 font-inter">{item.amount}</span>
                          <X className="w-3 h-3 text-slate-300" />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* --------------------------------------------------------- */}
              {/* TAB 4: ANALISIS AI (GEMINI AI / SCREENSHOT 4) */}
              {/* --------------------------------------------------------- */}
              {activeTab === 'analisis' && (
                <motion.div
                  key="analisis"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="space-y-3"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between pt-1">
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                      Analisis AI ✨
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-500 text-white shadow-xs">
                      Gemini AI
                    </span>
                  </div>

                  <p className="text-[10px] text-slate-500 leading-snug">
                    Biarkan Miwa AI menganalisis keuanganmu dan memberikan saran personal!
                  </p>

                  {/* Mascot Graphic Display */}
                  <div className="text-center py-2">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-amber-100 to-pink-100 dark:from-slate-800 dark:to-slate-700 p-2 shadow-xs mb-2">
                      <img src="/crop_happy.png" alt="Miwa AI" className="w-full h-full object-contain" />
                    </div>

                    {/* Speech bubble */}
                    <div className="inline-block p-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 shadow-2xs">
                      Analisis siap! Lihat hasilnya di bawah~
                    </div>
                  </div>

                  {/* Sky Blue CTA Button */}
                  <button className="w-full py-2.5 rounded-2xl bg-sky-400 hover:bg-sky-500 text-white font-extrabold text-xs shadow-md shadow-sky-400/30 flex items-center justify-center gap-1.5">
                    ✨ Analisa Sekarang!
                  </button>

                  <p className="text-[9px] text-slate-400 leading-tight text-center flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3 text-slate-400 shrink-0" />
                    Data keuanganmu dirangkum dan dikirim ke Gemini AI secara anonim.
                  </p>

                  {/* Analysis Result Card */}
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xs space-y-2.5 text-left">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-extrabold text-slate-800 dark:text-white flex items-center gap-1">
                        ✨ Analisis Terbaru
                      </span>
                      <span className="text-[9px] text-slate-400">6 Agustus 2026</span>
                    </div>

                    {/* Speech Box */}
                    <div className="p-3 rounded-2xl bg-rose-50/70 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      Halo Ahmad! Miwa telah menganalisis catatan keuanganmu di bulan Agustus 2026. Luar biasa! Kamu sudah berhasil menabung sebesar Rp 56.000 dan menjaga pengeluaran tetap terkontrol. Poin streak 1 harimu sangat membanggakan! 🐾✨
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <p className="font-bold text-slate-800 dark:text-white flex items-center gap-1">
                        💡 Rekomendasi untuk Ahmad:
                      </p>
                      <div className="flex items-start gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                        <span className="w-4 h-4 rounded-full bg-[#FF6B52] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          1
                        </span>
                        <span>
                          Fokus selesaikan target "beli laptop" yang saat ini sudah mencapai 0%. Sisa yang dibutuhkan tinggal Rp 2.990.000.
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* --------------------------------------------------------- */}
              {/* TAB 5: PROFIL (PROFILE / SCREENSHOT MATCH) */}
              {/* --------------------------------------------------------- */}
              {activeTab === 'profil' && (
                <motion.div
                  key="profil"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="space-y-3.5 -mx-3.5 -mt-1 px-3.5 pb-2"
                >
                  {/* Top Coral Header & User Card */}
                  <div className="pt-2 pb-4 px-1 rounded-b-3xl bg-gradient-to-r from-[#FF5733] via-[#FF6B52] to-[#FF8A65] text-white -mx-3.5 px-4 shadow-sm">
                    <h3 className="text-base font-black tracking-tight mb-3">Profil</h3>

                    <div className="flex items-center justify-between">
                      {/* Avatar Paw Prints */}
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-14 h-14 rounded-full bg-rose-200/80 flex items-center justify-center text-xl shadow-inner border-2 border-white/40">
                            🐾🐾
                          </div>
                          <div className="absolute bottom-0 right-0 w-4.5 h-4.5 rounded-full bg-slate-700/80 border-2 border-white flex items-center justify-center text-[8px] text-white">
                            ✎
                          </div>
                        </div>

                        <div className="space-y-0.5 text-left">
                          <h4 className="text-sm font-extrabold leading-tight">Ahmad</h4>
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold">
                            <span>🐱 Lv.1 • Anak Kucing</span>
                          </div>
                          <p className="text-[9px] opacity-85 font-medium flex items-center gap-1 pt-0.5">
                            👛 Rp 80.0jt/bln
                          </p>
                        </div>
                      </div>

                      {/* Miwa Sitting Cat Artwork */}
                      <div className="w-16 h-16 shrink-0">
                        <img
                          src="/crop_main.png"
                          alt="Miwa Sitting Cat"
                          className="w-full h-full object-contain filter drop-shadow-md"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Card 1: Status Miwa */}
                  <div className="p-3.5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xs space-y-3 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black text-slate-900 dark:text-white">Status Miwa</h4>
                      <div className="w-6 h-6 rounded-full overflow-hidden">
                        <img src="/crop_main.png" alt="Miwa Icon" className="w-full h-full object-contain" />
                      </div>
                    </div>

                    {/* 4 Stat Boxes Grid */}
                    <div className="grid grid-cols-2 gap-2 text-center">
                      {/* Level */}
                      <div className="p-2.5 rounded-2xl bg-amber-50/60 dark:bg-amber-500/10 border border-amber-100/80 dark:border-amber-500/20">
                        <div className="w-7 h-7 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-1">
                          <Trophy className="w-3.5 h-3.5 text-amber-500" />
                        </div>
                        <p className="text-xs font-black text-slate-800 dark:text-white">Lv.1</p>
                        <p className="text-[9px] text-slate-400 font-medium">Level</p>
                      </div>

                      {/* Streak */}
                      <div className="p-2.5 rounded-2xl bg-rose-50/60 dark:bg-rose-500/10 border border-rose-100/80 dark:border-rose-500/20">
                        <div className="w-7 h-7 rounded-xl bg-rose-100 dark:bg-rose-500/20 text-rose-500 flex items-center justify-center mx-auto mb-1">
                          <Flame className="w-3.5 h-3.5 fill-current" />
                        </div>
                        <p className="text-xs font-black text-slate-800 dark:text-white">1 hari</p>
                        <p className="text-[9px] text-slate-400 font-medium">Streak</p>
                      </div>

                      {/* Tabungan */}
                      <div className="p-2.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-500/10 border border-emerald-100/80 dark:border-emerald-500/20">
                        <div className="w-7 h-7 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto mb-1">
                          <Wallet className="w-3.5 h-3.5" />
                        </div>
                        <p className="text-xs font-black text-slate-800 dark:text-white">Rp 62rb</p>
                        <p className="text-[9px] text-slate-400 font-medium">Tabungan</p>
                      </div>

                      {/* Mood */}
                      <div className="p-2.5 rounded-2xl bg-amber-50/60 dark:bg-amber-500/10 border border-amber-100/80 dark:border-amber-500/20">
                        <div className="w-7 h-7 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-500 flex items-center justify-center mx-auto mb-1">
                          <Smile className="w-3.5 h-3.5" />
                        </div>
                        <p className="text-xs font-black text-slate-800 dark:text-white">Biasa</p>
                        <p className="text-[9px] text-slate-400 font-medium">Mood</p>
                      </div>
                    </div>

                    {/* Progress Bar Section */}
                    <div className="space-y-1 pt-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-slate-700 dark:text-slate-300">Naik ke Kucing Muda</span>
                        <span className="font-extrabold text-amber-500">12%</span>
                      </div>

                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: '12%' }} />
                      </div>

                      <p className="text-[9px] text-slate-400 font-medium text-right">
                        Rp 62rb / Rp 500rb
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Tentang Miwa */}
                  <div className="p-3.5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xs space-y-2 text-left">
                    <h4 className="text-xs font-black text-slate-900 dark:text-white">Tentang Miwa</h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
                      Miwa adalah seekor kucing Himalaya berbulu putih-krem dengan mata biru cemerlang. Ia lahir di hari yang cerah dan langsung jatuh cinta pada kegiatan merawat tabungan.
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
                      Setiap koin yang kamu tabung membuat bulu Miwa semakin berkilau dan matanya semakin bersinar. Miwa percaya bahwa menabung adalah bentuk cinta untuk masa depan.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* BOTTOM NAVIGATION BAR (5 TABS - EXACT SCREENSHOT MATCH) */}
          {/* ------------------------------------------------------------- */}
          <div className="px-2 py-2 border-t border-slate-100 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shrink-0 z-20">
            <div className="grid grid-cols-5 gap-0.5 text-center">
              {[
                { id: 'beranda', label: 'Beranda', icon: Home },
                { id: 'tabungan', label: 'Tabungan', icon: Wallet },
                { id: 'catatan', label: 'Catatan', icon: FileText },
                { id: 'analisis', label: 'Analisis AI', icon: Sparkles },
                { id: 'profil', label: 'Profil', icon: User },
              ].map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`relative py-1 flex flex-col items-center justify-center rounded-xl transition-all cursor-pointer ${
                      isActive ? 'text-[#FF6B52] font-bold' : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeAppTab"
                        className="absolute inset-0 bg-rose-50 dark:bg-rose-500/10 rounded-xl"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <tab.icon className={`w-4 h-4 relative z-10 ${isActive ? 'text-[#FF6B52]' : 'text-slate-400'}`} />
                    <span className="text-[9px] leading-none mt-1 font-semibold relative z-10">
                      {tab.label}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Smartphone Home Indicator Bar */}
            <div className="w-24 h-1 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mt-2 opacity-80" />
          </div>
        </div>
      </div>
    </div>
  )
}
