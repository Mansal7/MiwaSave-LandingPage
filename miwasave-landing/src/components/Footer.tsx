import { motion } from 'framer-motion'
import { Cat, Globe, Mail, MessageCircleHeart, Smartphone, Heart } from 'lucide-react'

interface FooterProps {
  darkMode: boolean
}

const navGroups = [
  {
    title: 'Produk',
    links: [
      { label: 'Fitur', href: '#features' },
      { label: 'Cara Kerja', href: '#how-it-works' },
      { label: 'Virtual Pet', href: '#virtual-pet' },
      { label: 'Dashboard', href: '#dashboard' },
    ],
  },
  {
    title: 'Perusahaan',
    links: [
      { label: 'Tentang Kami', href: '#about' },
      { label: 'Testimoni', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Download', href: '#download' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Kebijakan Privasi', href: '#' },
      { label: 'Syarat & Ketentuan', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
]

const socials = [
  { icon: MessageCircleHeart, label: 'Instagram', href: '#' },
  { icon: Globe, label: 'Website', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@miwasave.app' },
]

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`pt-20 pb-8 ${darkMode ? 'bg-dark-card border-t border-white/5' : 'bg-brown-dark'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-pink flex items-center justify-center shadow-soft">
                <Cat className="w-6 h-6 text-white" />
              </div>
              <span className="font-poppins font-bold text-2xl text-white">MiwaSave</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Aplikasi manajemen keuangan yang menyenangkan dengan virtual pet kucing bernama Miwa. Kelola keuanganmu, rawat Miwa, capai impianmu!
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-pink-medium/30 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4 text-white/60 hover:text-white" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-white/90 text-sm mb-4 uppercase tracking-wider">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Download badge */}
        <div className="flex justify-center mb-12">
          <motion.a
            href="https://drive.google.com/drive/folders/1b-jqAG6wsfk19aj0lZN0n4_TPVheLcqX"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-2xl transition-all"
          >
            <Smartphone className="w-6 h-6 text-pink-400" />
            <div className="text-left">
              <p className="text-xs text-white/50">Download di</p>
              <p className="text-sm font-bold">Android APK</p>
            </div>
          </motion.a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              © 2026 MiwaSave. All rights reserved.
            </p>
            <p className="text-white/30 text-sm flex items-center gap-1.5">
              Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500 inline" /> for Miwa <Cat className="w-4 h-4 text-pink-400 inline" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
