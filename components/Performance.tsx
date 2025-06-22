"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function Performance() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} id="performance" className="apple-section bg-black text-white overflow-hidden">
      <div className="apple-container">
        <motion.div style={{ scale, opacity }} className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="apple-heading mb-8">
              <span className="gradient-text-orange">Supercharged</span> by the S9 chip.
            </h2>

            <div className="space-y-8 apple-body text-gray-300 max-w-4xl mx-auto">
              <p>
                The custom-designed <strong className="text-white">S9 System in Package</strong> delivers incredible
                performance while maintaining all-day battery life. With its
                <strong className="gradient-text-blue"> 64-bit dual-core processor</strong> and
                <strong className="gradient-text-purple"> 4-core Neural Engine,</strong> everything feels lightning
                fast.
              </p>

              <p>
                <strong className="gradient-text-green">Machine learning accelerators</strong> power advanced health
                features, while the <strong className="text-white">always-on display</strong>
                keeps you connected without draining your battery.
              </p>

              <p>
                Experience <strong className="gradient-text-orange">up to 7 days of battery life</strong>— the longest
                ever in a TechPro smartwatch.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/placeholder.svg?height=600&width=1200&text=S9+Chip+Performance"
              alt="S9 Chip Performance"
              width={1200}
              height={600}
              className="w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
# fake commit 9
