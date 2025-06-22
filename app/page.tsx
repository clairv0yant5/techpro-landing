"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Hero from "@/components/Hero"
import Overview from "@/components/Overview"
import Design from "@/components/Design"
import Performance from "@/components/Performance"
import Features from "@/components/Features"
import ColorSelector from "@/components/ColorSelector"
import Specifications from "@/components/Specifications"
import EmailSubscription from "@/components/EmailSubscription"
import ScrollProgress from "@/components/ScrollProgress"
import BackToTop from "@/components/BackToTop"
import PageLoader from "@/components/PageLoader"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedColor, setSelectedColor] = useState("midnight")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{isLoading && <PageLoader />}</AnimatePresence>

      {!isLoading && (
        <>
          <ScrollProgress />
          <main className="overflow-hidden">
            <Hero selectedColor={selectedColor} />
            <Overview />
            <Design />
            <Performance />
            <Features />
            <ColorSelector selectedColor={selectedColor} onColorChange={setSelectedColor} />
            <Specifications />
            <EmailSubscription />
          </main>
          <BackToTop />
        </>
      )}
    </>
  )
}
