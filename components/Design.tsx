"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function Design() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5])

  return (
    <section ref={ref} id="design" className="apple-section bg-gray-50">
      <div className="apple-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="apple-heading text-gray-900 mb-8">
              <span className="gradient-text-green">Strikingly thin.</span>
              <br />
              Mobile. Durable.
            </h2>

            <div className="space-y-6 apple-body text-gray-600">
              <p>
                TechPro X1 packs incredible performance into its sleek 11mm design. The{" "}
                <strong className="text-gray-900">titanium construction</strong> makes it both lightweight and
                incredibly durable.
              </p>

              <p>
                Available in four gorgeous finishes:
                <strong className="gradient-text-blue"> Midnight, Silver, Gold, and Ocean Blue.</strong>
                Each one crafted to perfection.
              </p>

              <p>
                The <strong className="text-gray-900">Always-On Retina display</strong> delivers stunning clarity with{" "}
                <strong className="gradient-text-purple">1000 nits of brightness</strong>— perfect for any lighting
                condition.
              </p>
            </div>
          </motion.div>

          <motion.div style={{ x, rotate }} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/placeholder.svg?height=700&width=600&text=TechPro+X1+Design"
                alt="TechPro X1 Design"
                width={600}
                height={700}
                className="w-full hover-lift-subtle"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
# fake commit 8
