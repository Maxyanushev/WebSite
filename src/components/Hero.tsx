import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-gold-light">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent-gold rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-primary-300 rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Product Mockups */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-white/80 rounded-lg shadow-xl transform rotate-12 animate-float">
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
            <div className="text-center text-blue-800">
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-2"></div>
              <div className="text-xs">Patera</div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/80 rounded-lg shadow-xl transform -rotate-12 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg flex items-center justify-center">
            <div className="text-center text-pink-800">
              <div className="w-12 h-12 bg-white rounded-full mx-auto mb-2"></div>
              <div className="text-xs">Taca</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-white/80 rounded-lg shadow-xl transform rotate-45 animate-float" style={{ animationDelay: '2.5s' }}>
          <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
            <div className="text-center text-green-800">
              <div className="w-8 h-8 bg-white rounded-full mx-auto mb-1"></div>
              <div className="text-xs">Brelok</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Brand Name */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl font-logo text-neutral-600 mb-6"
          >
            EPORFINA
          </motion.h2>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-800 mb-8 leading-tight"
          >
            Ręcznie robione patery, tace i dekoracje z{' '}
            <span className="text-gradient">żywicy epoksydowej</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-neutral-700 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Tworzę personalizowane ozdoby z żywicy - patery na ciasta, podstawki pod kubki, 
            zakładki do książek, breloki oraz pamiątki ślubne z zatopionymi kwiatami. 
            Idealne na prezent lub do dekoracji wnętrz.
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="btn-primary">
              Zobacz produkty
            </button>
            <button className="btn-secondary">
              Skontaktuj się
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-neutral-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
