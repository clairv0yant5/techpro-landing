"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Check } from "lucide-react"

export default function EmailSubscription() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Please enter your email address")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitted(true)
    setEmail("")

    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section className="apple-section bg-gray-900 text-white">
      <div className="apple-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="apple-heading mb-8">
            Be the <span className="gradient-text-blue">first to know.</span>
          </h2>
          <p className="apple-subheading text-gray-300 mb-12">
            Get exclusive updates, early access, and special offers delivered to your inbox.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  Subscribe
                </motion.button>
              </div>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm"
                >
                  {error}
                </motion.p>
              )}
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center space-x-3 text-green-400"
            >
              <Check size={32} />
              <span className="text-2xl font-semibold">Thank you for subscribing!</span>
            </motion.div>
          )}

          <p className="text-sm text-gray-400 mt-8">No spam, ever. Unsubscribe at any time.</p>
        </motion.div>
      </div>
    </section>
  )
}
