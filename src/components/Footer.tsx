import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom">
        {/* Top Footer Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 border-b border-neutral-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Media & Contact */}
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:kontakt@eporfina.pl" 
                className="flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">kontakt@eporfina.pl</span>
              </a>
              
              <a 
                href="https://tiktok.com/@md_art_zywica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.7-1.35 3.83-.97 1.26-2.53 2.05-4.15 2.32-1.62.27-3.33.13-4.89-.42-1.56-.55-2.88-1.47-3.83-2.8-.95-1.33-1.45-2.95-1.44-4.6.01-1.65.52-3.25 1.47-4.58.95-1.33 2.28-2.25 3.83-2.8 1.56-.55 3.27-.69 4.89-.42.42.07.83.18 1.23.32.01-1.46-.02-2.92.01-4.37.03-1.45-.54-2.85-1.47-4.04-.93-1.19-2.28-2.01-3.83-2.32-1.55-.31-3.16-.17-4.67.42-1.51.59-2.78 1.51-3.73 2.7-.95 1.19-1.45 2.59-1.44 4.04.01 1.45.52 2.85 1.47 4.04.95 1.19 2.28 2.01 3.83 2.32.42.08.85.12 1.28.13-.01 1.46-.02 2.92.01 4.37.03 1.45.54 2.85 1.47 4.04.93 1.19 2.28 2.01 3.83 2.32 1.55.31 3.16.17 4.67-.42 1.51-.59 2.78-1.51 3.73-2.7.95-1.19 1.45-2.59 1.44-4.04-.01-1.45-.52-2.85-1.47-4.04-.95-1.19-2.28-2.01-3.83-2.32-.42-.08-.85-.12-1.28-.13z"/>
                </svg>
              </a>
              
              <a 
                href="https://instagram.com/md_art_zywica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a 
                href="https://facebook.com/md_art_zywica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            {/* Payment Information */}
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="w-16 h-10 bg-green-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-sm">tpay</span>
                </div>
                <p className="text-xs text-neutral-400">zaufane płatności</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo & Copyright */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-200 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-600" />
              </div>
              <span className="text-sm text-neutral-400">
                2025 Eporfina. Wszelkie prawa zastrzeżone
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <a href="/regulamin" className="hover:text-white transition-colors duration-200">
                Regulamin
              </a>
              <span className="text-neutral-600">|</span>
              <a href="/polityka-prywatnosci" className="hover:text-white transition-colors duration-200">
                Polityka prywatności
              </a>
              <span className="text-neutral-600">|</span>
              <a href="/polityka-zwrotow" className="hover:text-white transition-colors duration-200">
                Polityka zwrotów
              </a>
              <span className="text-neutral-600">|</span>
              <a href="/kontakt" className="hover:text-white transition-colors duration-200">
                Kontakt
              </a>
              <span className="text-neutral-600">|</span>
              <span className="text-neutral-500">
                Realizacja: <a href="https://moonmake.pl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Moonmake</a>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
