"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    title: "Crystal Clear Display",
    description: 'Experience stunning visuals on our 2.1" Always-On Retina display with 1000 nits brightness.',
    image: "/placeholder.svg?height=400&width=600&text=Display+Feature",
  },
  {
    id: 2,
    title: "Precision Tracking",
    description: "Advanced sensors provide accurate fitness tracking for over 100 workout types.",
    image: "/placeholder.svg?height=400&width=600&text=Fitness+Tracking",
  },
  {
    id: 3,
    title: "Smart Notifications",
    description: "Stay connected with intelligent notifications that learn your preferences.",
    image: "/placeholder.svg?height=400&width=600&text=Smart+Notifications",
  },
  {
    id: 4,
    title: "Water Resistant",
    description: "Swim, surf, or shower with confidence. Rated for 100m water resistance.",
    image: "/placeholder.svg?height=400&width=600&text=Water+Resistant",
  },
]

export default function FeatureSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-open-sans font-bold mb-4">Innovation in Every Detail</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the features that make TechPro X1 the most advanced smartwatch ever created.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 grid md:grid-cols-2 gap-8 items-center p-8 md:p-12"
              >
                <div className="order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-open-sans font-bold mb-6">{slides[currentSlide].title}</h3>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{slides[currentSlide].description}</p>
                </div>
                <div className="order-1 md:order-2">
                  <Image
                    src={slides[currentSlide].image || "/placeholder.svg"}
                    alt={slides[currentSlide].title}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-80 object-cover rounded-xl"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
