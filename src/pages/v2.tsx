import { useState, useEffect, useCallback, useMemo } from 'react'
import heroVideo from '../assets/videos/landing.mp4'
import aboutImage from '../assets/images/MAG01822.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { getDisplayItems } from '../data/menuData'

const featuredImageModules = import.meta.glob<{ default: string }>(
  '../assets/images/featured/*.{jpg,jpeg,png,webp}',
  { eager: true }
)
const carouselImages = Object.values(featuredImageModules).map((mod) => mod.default)

export default function V2() {
  const story = useScrollAnimation()
  const featured = useScrollAnimation()
  const dishes = useScrollAnimation()
  const contact = useScrollAnimation()
  const location = useScrollAnimation()

  const featuredDishes = useMemo(() => getDisplayItems(), [])

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-16 flex items-center overflow-hidden"
        style={{ height: '100dvh' }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container mx-auto flex flex-col items-center justify-between h-full pt-4 pb-6">
          <div className="flex-1 flex items-center">
            <div className="text-center px-5 max-w-2xl animate-[fadeInUp_1s_ease-out]">
              <p className="text-sm md:text-base uppercase tracking-[0.3em] text-wood-300 mb-3 md:mb-4 font-medium">
                Baguio City
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-1 lg:mb-4 leading-tight">
                Welcome to
              </h1>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-wood-300 mb-4 md:mb-6 leading-tight">
                Arca's Yard
              </h1>
              <div className="w-20 h-1 bg-wood-400 mb-4 md:mb-6 mx-auto rounded-full" />
              <p className="text-sm md:text-lg lg:text-xl text-white/80 mb-6 md:mb-10 leading-relaxed max-w-lg mx-auto">
                Nestled along Tiptop Ambuklao Road, enjoy outdoor seating and
                private dining surrounded by the cool Baguio breeze.
              </p>
              <a href="/menu" className="inline-block px-8 md:px-10 py-3 md:py-3.5 bg-wood-500 text-white rounded-lg hover:bg-wood-600 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer font-medium tracking-wide text-sm md:text-base">
                View Menu
              </a>
            </div>
          </div>

          <a href="#story" className="flex flex-col items-center gap-1.5 text-white/60 hover:text-white transition-colors cursor-pointer flex-shrink-0">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em]">Scroll</span>
            <svg className="w-4 h-4 md:w-5 md:h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Story Section - Image Left, Text Right */}
      <section id="story" className="relative py-12 md:py-16 lg:py-24 pb-24 md:pb-28 lg:pb-36 bg-white">
        <div className="flex items-center justify-center gap-4 mb-10 md:mb-14">
          <span className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent to-wood-300/50" />
          <span className="text-xs md:text-sm tracking-[0.3em] text-wood-400/70 font-light">01</span>
          <span className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent to-wood-300/50" />
        </div>
        <div ref={story.ref} className="max-w-6xl mx-auto px-5 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Image with number */}
            <div
              className={`relative mx-4 md:mx-0 transition-all duration-700 ease-out ${story.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-full h-full border-2 border-wood-300 rounded-2xl" style={{ zIndex: 0 }} />
              <img
                src={aboutImage}
                alt="About Arca's Yard"
                className="relative w-full h-[280px] md:h-[400px] lg:h-[520px] object-cover rounded-2xl shadow-2xl bg-wood-50"
                style={{ zIndex: 1 }}
              />
            </div>

            {/* Text */}
            <div
              className={`transition-all duration-700 delay-150 ease-out ${story.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
              <p className="text-sm uppercase tracking-[0.25em] text-wood-400 mb-3 font-medium text-center lg:text-left">About Us</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight text-center lg:text-left">
                Our Story
              </h2>
              <div className="w-16 h-1 bg-wood-400 mb-8 rounded-full mx-auto lg:mx-0" />
              <p className="text-base md:text-lg text-gray-600 mb-5 leading-relaxed">
                Arca's Yard is a cozy retreat tucked away along Tiptop Ambuklao
                Road in Baguio City. We offer outdoor seating and a private dining
                room — the perfect escape from the everyday hustle.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                Every dish and drink is crafted with care, using locally sourced
                ingredients and served in an atmosphere that feels like home.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-wood-400 rounded-full mr-4 flex-shrink-0" />
                  Outdoor seating with mountain views
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-wood-400 rounded-full mr-4 flex-shrink-0" />
                  Private dining room available
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-wood-400 rounded-full mr-4 flex-shrink-0" />
                  Locally sourced ingredients
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-0 w-full leading-[0]">
          <svg className="relative block w-full h-[40px] md:h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,35 C200,30 350,55 600,50 C850,45 1000,30 1200,35 L1200,120 L0,120 Z" className="fill-wood-500" />
          </svg>
        </div>
      </section>

      {/* Featured Photos - Text Left, Image Right */}
      <section id="featured" className="relative py-12 md:py-16 lg:py-24 pb-24 md:pb-28 lg:pb-36 bg-wood-500">
        <div className="flex items-center justify-center gap-4 mb-10 md:mb-14">
          <span className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent to-white/30" />
          <span className="text-xs md:text-sm tracking-[0.3em] text-white/70 font-light">02</span>
          <span className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent to-white/30" />
        </div>
        <div ref={featured.ref} className="max-w-6xl mx-auto px-5 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Text */}
            <div
              className={`order-2 lg:order-1 transition-all duration-700 ease-out ${featured.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
              <p className="text-sm uppercase tracking-[0.25em] text-white/80 mb-3 font-medium text-center lg:text-left">Gallery</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight text-center lg:text-left">
                Featured Photos
              </h2>
              <div className="w-16 h-1 bg-white mb-8 rounded-full mx-auto lg:mx-0" />
              <p className="text-base md:text-lg text-white/80 mb-5 leading-relaxed">
                From golden-hour portraits on our terrace to candid moments over
                freshly brewed coffee — every corner of Arca's Yard is worth capturing.
              </p>
              <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed">
                Our space blends rustic charm with the natural beauty of Baguio,
                making it a favorite spot for creatives and food lovers alike.
              </p>
            </div>

            {/* Carousel with number */}
            <div
              className={`relative order-1 lg:order-2 mx-4 md:mx-0 transition-all duration-700 delay-150 ease-out ${featured.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
              <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-full h-full border-2 border-white/30 rounded-2xl" style={{ zIndex: 0 }} />
              <div className="relative w-full h-[280px] md:h-[400px] lg:h-[520px] rounded-2xl shadow-2xl overflow-hidden bg-wood-50" style={{ zIndex: 1 }}>
                {carouselImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Featured photo ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                  />
                ))}
                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2" style={{ zIndex: 3 }}>
                  {carouselImages.map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-0 w-full leading-[0]">
          <svg className="relative block w-full h-[40px] md:h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,35 C200,30 350,55 600,50 C850,45 1000,30 1200,35 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Featured Dishes - Card Grid */}
      <section id="dishes" className="relative py-12 md:py-16 lg:py-24 pb-24 md:pb-28 lg:pb-36 bg-white">
        <div className="flex items-center justify-center gap-4 mb-10 md:mb-14">
          <span className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent to-wood-300/50" />
          <span className="text-xs md:text-sm tracking-[0.3em] text-wood-400/70 font-light">03</span>
          <span className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent to-wood-300/50" />
        </div>
        <div ref={dishes.ref} className="max-w-6xl mx-auto px-5 md:px-12 lg:px-16">
          <div className="text-center mb-10 md:mb-14">
            <p className={`text-sm uppercase tracking-[0.25em] text-wood-400 mb-3 font-medium transition-all duration-700 ease-out ${dishes.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Our Menu
            </p>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight transition-all duration-700 delay-100 ease-out ${dishes.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Featured Dishes
            </h2>
            <div className={`w-16 h-1 bg-wood-400 mx-auto rounded-full transition-all duration-700 delay-200 ease-out ${dishes.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} />
          </div>
          <div className="overflow-x-auto scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0">
            <div className="flex gap-5 md:gap-6 w-max md:w-full md:justify-center">
              {featuredDishes.map((item, i) => (
                <div
                  key={item.name}
                  className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-out w-[260px] md:w-[300px] flex-shrink-0 ${dishes.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${150 + i * 80}ms` }}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 drop-shadow-md">{item.name}</h3>
                    {item.description && (
                      <p className="text-xs md:text-sm text-white/80 leading-relaxed line-clamp-2 drop-shadow-sm">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8 md:mt-10">
            <a href="/menu" className="inline-block px-8 py-3 bg-wood-500 text-white rounded-lg hover:bg-wood-600 transition-all duration-300 shadow-lg hover:shadow-xl font-medium tracking-wide text-sm md:text-base">
              View Menu
            </a>
          </div>
        </div>
        <div className="absolute -bottom-2 left-0 w-full leading-[0]">
          <svg className="relative block w-full h-[40px] md:h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,35 C200,30 350,55 600,50 C850,45 1000,30 1200,35 L1200,120 L0,120 Z" className="fill-wood-500" />
          </svg>
        </div>
      </section>

      {/* Contact Details - Image Left, Text Right */}
      <section id="contact" className="relative py-8 md:py-10 lg:py-14 pb-20 md:pb-22 lg:pb-28 bg-wood-500">
        <div className="flex items-center justify-center gap-4 mb-10 md:mb-14">
          <span className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent to-white/30" />
          <span className="text-xs md:text-sm tracking-[0.3em] text-white/70 font-light">04</span>
          <span className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent to-white/30" />
        </div>
        <div ref={contact.ref} className="max-w-2xl mx-auto px-5 md:px-12 lg:px-16">
          <div
            className={`text-center transition-all duration-700 ease-out ${contact.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-white/80 mb-3 font-medium">Contact</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-white mb-8 rounded-full mx-auto" />
            <p className="text-base md:text-lg text-white/80 mb-10 leading-relaxed">
              Have questions or want to make a reservation? Reach out to us through any of the channels below.
            </p>
            <div className="flex items-center justify-center gap-8">
              <a href="tel:09293251868" className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/arcasyard/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/arcasyardcafe/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-0 w-full leading-[0]">
          <svg className="relative block w-full h-[40px] md:h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,35 C200,30 350,55 600,50 C850,45 1000,30 1200,35 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Location - Text Left, Google Maps Right */}
      <section id="location" className="relative py-12 md:py-16 lg:py-24 pb-24 md:pb-28 lg:pb-36 bg-white">
        <div className="flex items-center justify-center gap-4 mb-10 md:mb-14">
          <span className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent to-wood-300/50" />
          <span className="text-xs md:text-sm tracking-[0.3em] text-wood-400/70 font-light">05</span>
          <span className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent to-wood-300/50" />
        </div>
        <div ref={location.ref} className="max-w-6xl mx-auto px-5 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Text */}
            <div
              className={`order-2 lg:order-1 transition-all duration-700 ease-out ${location.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
              <p className="text-sm uppercase tracking-[0.25em] text-wood-400 mb-3 font-medium text-center lg:text-left">Find Us</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight text-center lg:text-left">
                Check the Location
              </h2>
              <div className="w-16 h-1 bg-wood-400 mb-8 rounded-full mx-auto lg:mx-0" />
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Address</h3>
                <p className="text-gray-600 leading-relaxed">
                  777 Tiptop Ambuklao Rd<br />
                  Baguio, 2600 Benguet
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Opening Hours</h3>
                <div className="text-gray-600 space-y-2">
                  <p className="flex justify-between max-w-xs">
                    <span className="font-medium">Monday</span>
                    <span>9 AM — 7 PM</span>
                  </p>
                  <p className="flex justify-between max-w-xs">
                    <span className="font-medium">Tuesday</span>
                    <span>9 AM — 7 PM</span>
                  </p>
                  <p className="flex justify-between max-w-xs text-gray-400">
                    <span className="font-medium">Wednesday</span>
                    <span>Closed</span>
                  </p>
                  <p className="flex justify-between max-w-xs">
                    <span className="font-medium">Thursday</span>
                    <span>9 AM — 7 PM</span>
                  </p>
                  <p className="flex justify-between max-w-xs">
                    <span className="font-medium">Friday</span>
                    <span>9 AM — 9 PM</span>
                  </p>
                  <p className="flex justify-between max-w-xs">
                    <span className="font-medium">Saturday</span>
                    <span>9 AM — 9 PM</span>
                  </p>
                  <p className="flex justify-between max-w-xs">
                    <span className="font-medium">Sunday</span>
                    <span>9 AM — 9 PM</span>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">How to Get There</h3>
                <div className="text-gray-600 space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-wood-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <p>
                      <span className="font-medium text-gray-900">By jeepney:</span> From Jollibee Harrison, take a jeep headed to Tiptop. Get off at the turning point, then walk a few meters until you see the Arca's Yard sign.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-wood-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l1.5-5H12m0 0h5.5L19 10M12 5v5m-7 0h14v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7zm2.5 3.5a1 1 0 100 2 1 1 0 000-2zm9 0a1 1 0 100 2 1 1 0 000-2z" />
                    </svg>
                    <p>
                      <span className="font-medium text-gray-900">By car:</span> Parking is available on-site for customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div
              className={`relative order-1 lg:order-2 mx-4 md:mx-0 transition-all duration-700 delay-150 ease-out ${location.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
              <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-full h-full border-2 border-wood-300 rounded-2xl" style={{ zIndex: 0 }} />
              <div className="relative w-full h-[280px] md:h-[400px] lg:h-[520px] rounded-2xl shadow-2xl overflow-hidden" style={{ zIndex: 1 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.920411956615!2d120.62053267591595!3d16.428867984303988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a4062ecad4bb%3A0x9098c8fef4ec762d!2sArca&#39;s%20Yard%20Caf%C3%A9!5e0!3m2!1sen!2sph!4v1776659405046!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Arca's Yard Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-0 w-full leading-[0]">
          <svg className="relative block w-full h-[40px] md:h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,35 C200,30 350,55 600,50 C850,45 1000,30 1200,35 L1200,120 L0,120 Z" className="fill-wood-900" />
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-wood-900 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex gap-6">
              <a href="#home" className="hover:text-wood-300 transition">Home</a>
              <a href="#story" className="hover:text-wood-300 transition">Story</a>
              <a href="#featured" className="hover:text-wood-300 transition">Featured</a>
              <a href="#contact" className="hover:text-wood-300 transition">Contact</a>
              <a href="#location" className="hover:text-wood-300 transition">Location</a>
            </div>
            <p className="text-sm md:text-base">&copy; 2026 Arca's Yard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
