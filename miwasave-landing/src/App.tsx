import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import VirtualPet from './components/VirtualPet'
import DashboardPreview from './components/DashboardPreview'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  // Persist dark mode
  useEffect(() => {
    const saved = localStorage.getItem('miwasave-dark-mode')
    if (saved === 'true') setDarkMode(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('miwasave-dark-mode', String(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen font-poppins ${darkMode ? 'dark bg-dark-bg' : 'bg-background'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Features darkMode={darkMode} />
        <HowItWorks darkMode={darkMode} />
        <VirtualPet darkMode={darkMode} />
        <DashboardPreview darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <FAQ darkMode={darkMode} />
        <CTABanner darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  )
}
