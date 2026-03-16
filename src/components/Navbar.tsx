import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
// import brandLogo from '../assets/images/brand-logo.png'
import brandVertical from '../assets/images/brand-vertical.png'
// import brandVerticalName from '../assets/images/brand-vertical-name.png'

export default function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const scrollEl = document.querySelector('.scroll-container')
    if (!scrollEl) return

    const handleScroll = () => {
      const currentScrollY = scrollEl.scrollTop

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsMenuVisible(false)
      } else {
        setIsMenuVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    scrollEl.addEventListener('scroll', handleScroll, { passive: true })
    return () => scrollEl.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white  shadow-lg transition-transform duration-300 ${isMenuVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="bg-wood-500 flex justify-around py-1 text-white text-sm mobile:text-xs mobile:py-0.5">
        <div className="mobile:truncate mobile:px-2">777 Tiptop Ambuklao Rd, Baguio, 2600 Benguet</div>
      </div>
      <div className="container mx-auto px-8 tablet:px-6 mobile:px-4">
        <div className="flex items-center justify-between pt-3 pb-3">
          <Link to="/" className="flex items-center mb-1">
            <img src={brandVertical} alt="Brand Logo" className="h-12 mobile:h-10 w-auto" />
          </Link>
          {/* Desktop menu - visible on desktop (>=1024px), hidden on tablet/mobile (<1024px) */}
          <div className="hidden lg:flex space-x-8 font-pt-serif font-bold text-xl">
            <Link to="/" className="text-gray-700 hover:text-wood-500 transition">
              Home
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-wood-500 transition">
              Menu
            </Link>
          </div>
          {/* Mobile menu button - hidden on desktop (>=1024px), visible on tablet/mobile (<1024px) */}
          <button
            className="lg:hidden block p-2 text-gray-700 hover:text-wood-500 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu - only visible on tablet/mobile */}
      <div
        className={`lg:hidden bg-white border-t transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-8 tablet:px-6 mobile:px-4 py-4 flex flex-col space-y-3 font-pt-serif font-bold text-lg">
          <Link
            to="/"
            className="text-gray-700 hover:text-wood-500 transition py-2 border-b border-gray-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="text-gray-700 hover:text-wood-500 transition py-2 border-b border-gray-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Menu
          </Link>
        </div>
      </div>
    </nav>
  )
}
