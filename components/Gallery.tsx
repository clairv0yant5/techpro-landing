"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=800&text=TechPro+X1+Front+View",
    alt: "TechPro X1 Front View",
    title: "Stunning Display",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=600&width=800&text=TechPro+X1+Side+View",
    alt: "TechPro X1 Side View",
    title: "Premium Design",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=800&text=TechPro+X1+Back+View",
    alt: "TechPro X1 Back View",
    title: "Advanced Sensors",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=600&width=800&text=TechPro+X1+Charging",
    alt: "TechPro X1 Charging",
    title: "Wireless Charging",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=800&text=TechPro+X1+Apps",
    alt: "TechPro X1 Apps",
    title: "Smart Features",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=600&width=800&text=TechPro+X1+Fitness",
    alt: "TechPro X1 Fitness",
    title: "Fitness Tracking",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <>
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-open-sans font-bold mb-4">Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore every detail of the TechPro X1 through our comprehensive gallery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover-lift">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-sm font-semibold text-gray-800">View Image</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-open-sans font-semibold text-gray-800">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                width={800}
                height={600}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={24} className="text-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <ChevronRight size={24} className="text-white" />
              </button>

              {/* Image Title */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full">
                <span className="text-white font-open-sans font-semibold">{galleryImages[selectedImage].title}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
