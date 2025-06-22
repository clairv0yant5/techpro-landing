"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

interface HeroProps {
  selectedColor: string
}

const colorImages = {
  midnight: "/placeholder.svg?height=800&width=1200&text=TechPro+X1+Midnight",
  silver: "/placeholder.svg?height=800&width=1200&text=TechPro+X1+Silver",
  gold: "/placeholder.svg?height=800&width=1200&text=TechPro+X1+Gold",
  blue: "/placeholder.svg?height=800&width=1200&text=TechPro+X1+Blue",
}

export default function Hero({ selectedColor }: HeroProps) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="apple-container pt-32 pb-20">
        <motion.div style={{ y, opacity }} className="text-center">
          {/* Product Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-4">TechPro X1</h1>
            <h2 className="apple-heading gradient-text-blue">Speed of lightness.</h2>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative mb-16"
          >
            <Image
              src={colorImages[selectedColor as keyof typeof colorImages] || "/placeholder.svg"}
              alt={`TechPro X1 in ${selectedColor}`}
              width={1200}
              height={800}
              className="w-full max-w-4xl mx-auto"
              priority
            />
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-medium">
                Built for <span className="gradient-text-purple">Apple Intelligence.</span>
              </h3>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-medium">
                Buy
              </button>
              <p className="text-gray-600 text-lg">From $999 or $83.25/mo. for 12 mo.**</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
