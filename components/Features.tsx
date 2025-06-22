"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Heart, Zap, Shield, Smartphone, Activity, Droplets } from "lucide-react"
import Image from "next/image"

const features = [
  {
    id: "health",
    icon: Heart,
    title: "Advanced Health Monitoring",
    description: "Track your heart rate, blood oxygen, sleep patterns, and stress levels with medical-grade precision.",
    gradient: "gradient-text-blue",
    image: "/placeholder.svg?height=400&width=600&text=Health+Monitoring",
  },
  {
    id: "battery",
    icon: Zap,
    title: "7-Day Battery Life",
    description: "Revolutionary power management keeps you connected for a full week on a single charge.",
    gradient: "gradient-text-orange",
    image: "/placeholder.svg?height=400&width=600&text=Battery+Life",
  },
  {
    id: "security",
    icon: Shield,
    title: "Military-Grade Security",
    description: "Your data is protected with end-to-end encryption and biometric authentication.",
    gradient: "gradient-text-green",
    image: "/placeholder.svg?height=400&width=600&text=Security",
  },
  {
    id: "connectivity",
    icon: Smartphone,
    title: "Seamless Connectivity",
    description: "Stay connected with 5G, Wi-Fi 6, and Bluetooth 5.3 for lightning-fast communication.",
    gradient: "gradient-text-purple",
    image: "/placeholder.svg?height=400&width=600&text=Connectivity",
  },
  {
    id: "fitness",
    icon: Activity,
    title: "Precision Fitness Tracking",
    description: "Over 100 workout types with advanced metrics and real-time coaching.",
    gradient: "gradient-text-blue",
    image: "/placeholder.svg?height=400&width=600&text=Fitness+Tracking",
  },
  {
    id: "water",
    icon: Droplets,
    title: "Water Resistant",
    description: "Swim, surf, or shower with confidence. Rated for 100m water resistance.",
    gradient: "gradient-text-green",
    image: "/placeholder.svg?height=400&width=600&text=Water+Resistant",
  },
]

export default function Features() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={ref} id="features" className="apple-section bg-white">
      <div className="apple-container">
        <motion.div style={{ y }} className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="apple-heading text-gray-900 mb-8"
          >
            Engineered for <span className="gradient-text-blue">excellence.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="apple-subheading text-gray-600 max-w-3xl mx-auto"
          >
            Every feature has been carefully crafted to enhance your daily life and push the boundaries of what's
            possible.
          </motion.p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="inline-flex p-4 rounded-full bg-gray-100 mb-6">
                  <feature.icon size={32} className="text-gray-600" />
                </div>
                <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 ${feature.gradient}`}>
                  {feature.title}
                </h3>
                <p className="apple-body text-gray-600 leading-relaxed">{feature.description}</p>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="w-full rounded-2xl shadow-xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
# fake commit 4
