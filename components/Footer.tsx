import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-open-sans font-bold gradient-text mb-4">TechPro</h3>
            <p className="text-gray-400">Revolutionizing wearable technology for the modern world.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white underline-animation">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white underline-animation">
                  Specifications
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white underline-animation">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white underline-animation">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white underline-animation">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white underline-animation">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white underline-animation">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white underline-animation">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white underline-animation">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white underline-animation">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white underline-animation">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white underline-animation">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TechPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
# fake commit 5
