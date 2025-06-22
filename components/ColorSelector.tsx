"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface ColorSelectorProps {
  selectedColor: string
  onColorChange: (color: string) => void
}

const colors = [
  {
    name: "midnight",
    label: "Midnight",
    color: "bg-gray-900",
    image: "/placeholder.svg?height=300&width=400&text=Midnight+Black",
  },
  {
    name: "silver",
    label: "Silver",
    color: "bg-gray-200",
    image: "/placeholder.svg?height=300&width=400&text=Silver+White",
  },
  {
    name: "gold",
    label: "Gold",
    color: "bg-yellow-300",
    image: "/placeholder.svg?height=300&width=400&text=Rose+Gold",
  },
  {
    name: "blue",
    label: "Ocean Blue",
    color: "bg-blue-600",
    image: "/placeholder.svg?height=300&width=400&text=Ocean+Blue",
  },
]

export default function ColorSelector({ selectedColor, onColorChange }: ColorSelectorProps) {
  return (
    <section className="apple-section bg-gray-50">
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="apple-heading text-gray-900 mb-8">
            Four <span className="gradient-text-purple">stunning finishes.</span>
          </h2>
          <p className="apple-subheading text-gray-600 mb-16 max-w-3xl mx-auto">
            Choose the perfect color to match your style. Each finish is crafted with precision and attention to detail.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {colors.map((color, index) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => onColorChange(color.name)}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl mb-6 ${
                    selectedColor === color.name ? "ring-4 ring-blue-500 ring-offset-4" : ""
                  }`}
                >
                  <Image
                    src={color.image || "/placeholder.svg"}
                    alt={color.label}
                    width={400}
                    height={300}
                    className="w-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-center space-x-3">
                  <div className={`w-6 h-6 rounded-full ${color.color} shadow-lg`} />
                  <span className="text-lg font-medium text-gray-900">{color.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            key={selectedColor}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl font-medium text-gray-800"
          >
            Selected: <span className="gradient-text-blue">{colors.find((c) => c.name === selectedColor)?.label}</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
# fake commit 17
