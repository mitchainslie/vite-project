import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import brandLogo from '../assets/images/brand.png'

export default function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsMenuVisible(false)
      } else {
        // Scrolling up
        setIsMenuVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white  shadow-lg transition-transform duration-300 ${
        isMenuVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-8 tablet:px-6 mobile:px-4">
        <div className="flex items-center flex-col pt-3 pb-3">
          <Link to="/" className="flex items-center mb-1">
            <img src={brandLogo} alt="Brand Logo" className="h-12 mobile:h-10 w-auto" />
          </Link>
          <div className="flex space-x-8 tablet:hidden">
            <Link to="/" className="text-gray-700 hover:text-wood-500 transition">
              Home
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-wood-500 transition">
              Menu
            </Link>
          </div>
          {/* Mobile menu button */}
          <button className="hidden tablet:block p-2">
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
          </button>
        </div>
      </div>
    </nav>
  )
}
