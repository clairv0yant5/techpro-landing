"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function Overview() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} id="overview" className="apple-section bg-white">
      <div className="apple-container">
        <motion.div style={{ y, opacity }} className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="apple-heading text-gray-900 mb-8">
              TechPro X1 is the world's most popular smartwatch for a reason. Actually, for a
              <span className="gradient-text-blue"> lot of reasons.</span>
            </h2>

            <div className="space-y-8 apple-body text-gray-600">
              <p>
                It delivers <strong className="text-gray-900">up to 7 days of battery life.</strong> The
                <strong className="text-gray-900"> S9 chip</strong> unlocks a whole new level of performance for work
                and play.
                <strong className="text-gray-900"> Apple Intelligence</strong> is built in to help you get things done
                effortlessly. And it now comes in a stunning{" "}
                <strong className="gradient-text-blue">Sky Blue color.</strong>
              </p>

              <p>With the perfectly portable TechPro X1, you'll be surprised what you can do in no time at all.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/placeholder.svg?height=600&width=1000&text=TechPro+X1+Overview"
              alt="TechPro X1 Overview"
              width={1000}
              height={600}
              className="w-full rounded-2xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
