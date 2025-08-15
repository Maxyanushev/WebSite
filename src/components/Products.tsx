import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Settings, Eye, X, Palette, Flower, Grip } from 'lucide-react'

interface Product {
  id: number
  name: string
  priceRange: string
  image: string
  description: string
  customizationOptions: string[]
}

const products: Product[] = [
  {
    id: 1,
    name: "Patera z żywicy epoksydowej",
    priceRange: "250,00 zł - 680,00 zł",
    image: "/product-1.jpg",
    description: "Elegancka patera dwupiętrowa z zatopionymi kwiatami i złotymi płatkami",
    customizationOptions: ["Surowe kwiaty", "Ozdoby", "Uchwyt", "Kolor"]
  },
  {
    id: 2,
    name: "Zakładka do Książki",
    priceRange: "69,00 zł - 89,00 zł",
    image: "/product-2.jpg",
    description: "Personalizowane zakładki z żywicy z zatopionymi kwiatami i złotymi frędzlami",
    customizationOptions: ["Kwiaty", "Kolor", "Inicjały", "Wzór"]
  },
  {
    id: 3,
    name: "Breloczek z Żywicy Epoksydowej",
    priceRange: "79,00 zł - 89,00 zł",
    image: "/product-3.jpg",
    description: "Breloki z literami lub wzorami w żywicy z złotymi akcentami",
    customizationOptions: ["Litera", "Kolor", "Kwiaty", "Wzór"]
  },
  {
    id: 4,
    name: "Podstawka Okrągła Pod Świecę / Kubek",
    priceRange: "89,00 zł - 179,00 zł",
    image: "/product-4.jpg",
    description: "Okrągłe podstawki z falistymi krawędziami i zatopionymi kwiatami",
    customizationOptions: ["Kolor", "Kwiaty", "Rozmiar", "Wzór"]
  },
  {
    id: 5,
    name: "Taca Prostokątna z Żywicy Epoksydowej",
    priceRange: "330,00 zł - 400,00 zł",
    image: "/product-5.jpg",
    description: "Elegancka taca prostokątna z uchwytami i zatopionymi kwiatami",
    customizationOptions: ["Kolor", "Kwiaty", "Uchwyty", "Rozmiar"]
  },
  {
    id: 6,
    name: "Taca Okrągła z Żywicy Epoksydowej",
    priceRange: "330,00 zł - 550,00 zł",
    image: "/product-6.jpg",
    description: "Okrągła taca z uchwytami i delikatnymi kwiatami",
    customizationOptions: ["Kolor", "Kwiaty", "Uchwyty", "Rozmiar"]
  },
  {
    id: 7,
    name: "Podstawka Owalna Pod Świecę / Kubek",
    priceRange: "139,00 zł - 189,00 zł",
    image: "/product-7.jpg",
    description: "Owalne podstawki z złotymi akcentami i kwiatami",
    customizationOptions: ["Kolor", "Kwiaty", "Rozmiar", "Wzór"]
  },
  {
    id: 8,
    name: "Podstawka Dekoracyjna Duża",
    priceRange: "240,00 zł - 490,00 zł",
    image: "/product-8.jpg",
    description: "Duża podstawka dekoracyjna z falistymi krawędziami",
    customizationOptions: ["Kolor", "Kwiaty", "Rozmiar", "Wzór"]
  }
]

const Products: React.FC = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <section id="sklep" className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
            Stwórz coś swojego!
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Tu znajdują się produkty na zamówienie, które możesz skonfigurować samodzielnie.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="card overflow-hidden">
                {/* Product Image */}
                <div className="relative aspect-square bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                  {/* Placeholder Image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-primary-600">
                      <div className="w-20 h-20 bg-white rounded-lg mx-auto mb-2 shadow-inner"></div>
                      <div className="text-sm font-medium">{product.name.split(' ')[0]}</div>
                    </div>
                  </div>

                  {/* Customization Overlay */}
                  {hoveredProduct === product.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center"
                    >
                      <div className="text-center text-white p-4">
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {product.customizationOptions.map((option, idx) => (
                            <div key={idx} className="flex items-center space-x-1">
                              <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                              <span>{option}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Top Left Overlay */}
                  <div className="absolute top-2 left-2 bg-white/90 rounded-lg p-2 shadow-lg">
                    <Settings className="w-4 h-4 text-neutral-600" />
                  </div>

                  {/* Bottom Right Overlay */}
                  <div className="absolute bottom-2 right-2 bg-white/90 rounded-lg p-2 shadow-lg">
                    <Eye className="w-4 h-4 text-neutral-600" />
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-neutral-800 mb-2 text-sm">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Settings className="w-4 h-4 text-neutral-400" />
                      <span className="text-xs text-neutral-500">Konfigurowalne</span>
                    </div>
                    <span className="font-bold text-neutral-800 text-sm">
                      {product.priceRange}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-primary">
            Zobacz wszystkie produkty
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
