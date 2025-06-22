import type React from "react"
import type { Metadata } from "next"
import { Inter, Work_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "TechPro X1 - The Future on Your Wrist",
  description:
    "Experience the next generation of smartwatch technology with TechPro X1.",
  keywords: "smartwatch, wearable tech",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${workSans.variable} font-work-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
