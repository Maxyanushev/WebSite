import React, { useState } from 'react'
import { ShoppingBag, Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Utility Bar */}
      <div className="bg-primary-100 py-2">
        <div className="container-custom">
          <p className="text-center text-sm text-neutral-700 font-medium">
            Czas realizacji zamówień niestandardowych: do 60 dni
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center mr-3">
                <span className="font-logo text-xl font-bold text-neutral-800">EPORFINA</span>
              </div>
              <span className="font-logo text-xl font-bold text-neutral-800 hidden sm:block">
                EPORFINA
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#sklep" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200">
                Sklep
              </a>
              <a href="#kontakt" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200">
                Kontakt
              </a>
              <a href="#voucher" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200">
                Voucher
              </a>
            </div>

            {/* Shopping Cart */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-neutral-700 hover:text-primary-600 transition-colors duration-200">
                <ShoppingBag className="w-6 h-6" />
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-neutral-200 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#sklep" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200">
                  Sklep
                </a>
                <a href="#kontakt" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200">
                  Kontakt
                </a>
                <a href="#voucher" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200">
                  Voucher
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
