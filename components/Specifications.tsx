"use client"

import { motion } from "framer-motion"
import { Monitor, Battery, Cpu, Wifi, Shield, Droplets } from "lucide-react"

const specCategories = [
  {
    title: "Display",
    icon: Monitor,
    gradient: "gradient-text-blue",
    specs: [
      { label: "Screen Size", value: "2.1 inches" },
      { label: "Resolution", value: "484 x 396 pixels" },
      { label: "Brightness", value: "1000 nits" },
      { label: "Type", value: "Always-On Retina LTPO OLED" },
    ],
  },
  {
    title: "Performance",
    icon: Cpu,
    gradient: "gradient-text-orange",
    specs: [
      { label: "Processor", value: "S9 SiP with 64-bit dual-core" },
      { label: "Storage", value: "64GB" },
      { label: "Memory", value: "1GB RAM" },
      { label: "Neural Engine", value: "4-core" },
    ],
  },
  {
    title: "Battery & Charging",
    icon: Battery,
    gradient: "gradient-text-green",
    specs: [
      { label: "Battery Life", value: "Up to 7 days" },
      { label: "Charging", value: "Wireless & USB-C" },
      { label: "Fast Charging", value: "0-80% in 45 minutes" },
      { label: "Power Reserve", value: "Low Power Mode" },
    ],
  },
  {
    title: "Connectivity",
    icon: Wifi,
    gradient: "gradient-text-purple",
    specs: [
      { label: "Cellular", value: "5G and LTE" },
      { label: "Wi-Fi", value: "Wi-Fi 6 (802.11ax)" },
      { label: "Bluetooth", value: "5.3" },
      { label: "GPS", value: "Precision dual-frequency" },
    ],
  },
  {
    title: "Health & Safety",
    icon: Shield,
    gradient: "gradient-text-blue",
    specs: [
      { label: "Heart Rate", value: "Electrical & Optical sensors" },
      { label: "Blood Oxygen", value: "SpO2 sensor" },
      { label: "ECG", value: "Electrical heart sensor" },
      { label: "Temperature", value: "Skin temperature sensor" },
    ],
  },
  {
    title: "Durability",
    icon: Droplets,
    gradient: "gradient-text-green",
    specs: [
      { label: "Water Resistance", value: "100m (WR100)" },
      { label: "Dust Resistance", value: "IP6X certified" },
      { label: "Crystal", value: "Sapphire crystal front" },
      { label: "Case Material", value: "Titanium Grade 5" },
    ],
  },
]

export default function Specifications() {
  return (
    <section id="specs" className="apple-section bg-white">
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="apple-heading text-gray-900 mb-8">
            <span className="gradient-text-blue">Technical</span> specifications.
          </h2>
          <p className="apple-subheading text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technology packed into a sleek, powerful design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 hover-lift-subtle"
            >
              <div className="flex items-center mb-8">
                <div className="inline-flex p-3 rounded-full bg-white shadow-sm mr-4">
                  <category.icon size={24} className="text-gray-600" />
                </div>
                <h3 className={`text-2xl font-semibold ${category.gradient}`}>{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.specs.map((spec, specIndex) => (
                  <div
                    key={specIndex}
                    className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                  >
                    <span className="text-gray-600 font-medium">{spec.label}</span>
                    <span className="text-gray-900 font-semibold text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
