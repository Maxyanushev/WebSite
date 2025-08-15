import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Czy mogę przesłać własne pamiątkowe materiały do zatopienia w żywicy?",
    answer: "Tak, chętnie przyjmuję własne materiały klientów. Możesz przesłać suszone kwiaty, liście, zdjęcia, tkaniny lub inne drobne przedmioty, które chcesz zatopić w żywicy. Wszystkie materiały powinny być suche i czyste."
  },
  {
    id: 2,
    question: "Jak dbać o produkty z żywicy epoksydowej?",
    answer: "Produkty z żywicy epoksydowej są trwałe i łatwe w pielęgnacji. Wystarczy przecierać je wilgotną szmatką. Unikaj mycia w zmywarce, używania ostrych środków czyszczących i wystawiania na bezpośrednie działanie słońca przez długi czas."
  },
  {
    id: 3,
    question: "Jakie są formy płatności?",
    answer: "Akceptuję płatności online przez bezpieczne systemy płatności, przelewy bankowe oraz płatności za pobraniem. Wszystkie transakcje są bezpieczne i szyfrowane."
  },
  {
    id: 4,
    question: "Czy wysyłasz za granice?",
    answer: "Tak, wysyłam produkty do krajów Unii Europejskiej. Koszty wysyłki i czas dostawy zależą od kraju docelowego. Szczegółowe informacje o wysyłce zagranicznej znajdziesz w regulaminie."
  },
  {
    id: 5,
    question: "Jak pakowane są produkty?",
    answer: "Każdy produkt jest starannie pakowany w kartonowe pudełko z wypełniaczem, aby zapewnić bezpieczeństwo podczas transportu. Delikatne elementy są dodatkowo zabezpieczone folią bąbelkową."
  },
  {
    id: 6,
    question: "Czy wystawiasz Fakturę VAT?",
    answer: "Tak, wystawiam faktury VAT dla wszystkich transakcji. Faktura jest automatycznie generowana i wysyłana na adres email podany podczas zamówienia."
  },
  {
    id: 7,
    question: "Jakie są możliwości wysyłki?",
    answer: "Oferuję wysyłkę kurierską (24-48h), paczkomaty InPost oraz wysyłkę pocztową. Każda opcja ma inne koszty i czas dostawy. Szczegóły znajdziesz w koszyku podczas składania zamówienia."
  },
  {
    id: 8,
    question: "Czy wykonujesz personalizowane zamówienia (np. z dedykacją, inicjałami)?",
    answer: "Tak, specjalizuję się w personalizacji! Mogę dodać inicjały, dedykacje, daty, nazwy lub inne personalne elementy. Wszystko zależy od Twojej wyobraźni i możliwości technicznych."
  },
  {
    id: 9,
    question: "Czy mogę kupić bon podarunkowy?",
    answer: "Tak, oferuję bony podarunkowe o różnych wartościach. Bon można wykorzystać na dowolny produkt w sklepie. Bony są ważne przez 12 miesięcy od daty zakupu."
  },
  {
    id: 10,
    question: "Czy kwiaty, które używasz są prawdziwe czy sztuczne?",
    answer: "Używam wyłącznie prawdziwych, suszonych kwiatów i roślin. Każdy kwiat jest starannie suszony i preparowany, aby zachować naturalne piękno i trwałość w żywicy."
  },
  {
    id: 11,
    question: "Czy możesz zatopić świeżę kwiaty?",
    answer: "Niestety, nie mogę zatapiać świeżych kwiatów, ponieważ zawierają wodę, która powoduje problemy z żywicą. Używam tylko suszonych kwiatów, które są stabilne i trwałe."
  },
  {
    id: 12,
    question: "Czy mogę zrezygnować z zamówienia?",
    answer: "Możesz zrezygnować z zamówienia w ciągu 14 dni od otrzymania produktu, pod warunkiem że produkt jest w nienaruszonym stanie. Szczegółowe informacje o zwrotach znajdziesz w polityce zwrotów."
  }
]

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section id="faq" className="section-padding bg-white">
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
            Często zadawane pytania
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych produktów i usług.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                {/* Question */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-neutral-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <span className="font-medium text-neutral-800 text-sm md:text-base">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    {openItems.includes(item.id) ? (
                      <Minus className="w-5 h-5 text-primary-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary-600" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openItems.includes(item.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
                        <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-600 mb-6">
            Nie znalazłeś odpowiedzi na swoje pytanie?
          </p>
          <button className="btn-primary">
            Skontaktuj się z nami
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
