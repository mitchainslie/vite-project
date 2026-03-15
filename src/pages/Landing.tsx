import { useState, useEffect } from 'react'
import heroImage from '../assets/images/MAG01755.jpg'
import brandLogo from '../assets/images/brand-logo.png'
import brandVertical from '../assets/images/brand-vertical.png'
import brandVerticalName from '../assets/images/brand-vertical-name.png'
import brand from '../assets/images/brand.png'

export default function Landing() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(true)

  const carouselImages = [
    { src: heroImage, title: 'Hero Image' },
    { src: brandLogo, title: 'Brand Logo' },
    { src: brandVertical, title: 'Brand Vertical' },
    { src: brandVerticalName, title: 'Brand Vertical Name' },
    { src: brand, title: 'Brand' }
  ]

  // Create extended array with clones for infinite effect
  const extendedImages = [
    carouselImages[carouselImages.length - 1], // Clone of last image
    ...carouselImages,
    carouselImages[0] // Clone of first image
  ]

  const nextSlide = () => {
    if (!isTransitioning) return
    setCurrentSlide((prev) => prev + 1)
  }

  const prevSlide = () => {
    if (!isTransitioning) return
    setCurrentSlide((prev) => prev - 1)
  }

  const handleTransitionEnd = () => {
    if (currentSlide === 0) {
      setIsTransitioning(false)
      setCurrentSlide(carouselImages.length)
    } else if (currentSlide === extendedImages.length - 1) {
      setIsTransitioning(false)
      setCurrentSlide(1)
    }
  }

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(true)
      }, 50)
    }
  }, [isTransitioning])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000) // Auto-scroll every 3 seconds

    return () => clearInterval(interval)
  }, [currentSlide, isTransitioning])
  return (
    <div className="h-screen bg-gray-50 overflow-y-scroll snap-y snap-proximity scroll-smooth scroll-container">
      {/* Hero Section */}
      <section 
        id="home" 
        className="pt-16 h-screen bg-cover bg-center flex items-center snap-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-2 tablet:grid-cols-1 gap-12 tablet:gap-8 items-center">
            {/* Text Content */}
            <div className="order-1 tablet:order-2 text-left tablet:text-center p-5">
              <h1 className="text-6xl tablet:text-5xl mobile:text-4xl font-bold text-white mb-6 tablet:mb-4">
                Welcome to
                <span className="text-white block">Cozy Corner Cafe</span>
              </h1>
              <p className="text-xl tablet:text-lg mobile:text-base text-white mb-8 tablet:mb-6">
                Where every cup tells a story. Experience artisanal coffee and
                homemade treats in our warm, welcoming space.
              </p>
              <div className="flex flex-row tablet:flex-col gap-4 justify-start tablet:justify-center">
                <button className="px-8 tablet:px-6 py-3 bg-wood-500 text-white rounded-lg hover:bg-wood-800 transition shadow-lg cursor-pointer">
                  Order Now
                </button>
                <button className="px-8 tablet:px-6 py-3 bg-wood-500 text-white rounded-lg hover:bg-wood-800 transition shadow-lg cursor-pointer">
                  Visit Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Image Left, Text Right */}
      <section id="about" className="h-screen snap-center bg-white">
        <div className="grid grid-cols-2 tablet:grid-cols-1 h-full">
          {/* Image on Left - Full Height */}
          <div className="order-1 h-full">
            <img
              src={brandVertical}
              alt="About our cafe"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text on Right */}
          <div className="order-2 flex items-center justify-center px-12 tablet:px-8 mobile:px-6 py-20 tablet:py-12">
            <div className="flex items-start gap-8">
              {/* Decorative Border - Full Height */}
              <div className="w-1 bg-wood-500 h-96"></div>

              <div className="max-w-xl flex-1">
                <h2 className="text-4xl mobile:text-3xl font-bold mb-6 text-gray-900">
                  Our Story
                </h2>
                <p className="text-lg mobile:text-base text-gray-700 mb-4 leading-relaxed">
                  Founded in 2020, Cozy Corner Cafe has been serving the community
                  with passion and dedication. We believe in creating more than just
                  great coffee – we create experiences.
                </p>
                <p className="text-lg mobile:text-base text-gray-700 mb-6 leading-relaxed">
                  Every bean is carefully selected, every pastry is freshly baked,
                  and every customer is treated like family. Step into our warm
                  atmosphere and discover why we're the neighborhood's favorite spot.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-wood-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Locally sourced ingredients
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-wood-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Artisan roasted coffee
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-wood-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Homemade daily specials
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section - Rounded Cards */}
      <section className="py-20 bg-gray-50 h-screen snap-center flex items-center">
        <div className="container mx-auto px-8 tablet:px-6 mobile:px-4">
          <h2 className="text-4xl mobile:text-3xl font-bold text-center mb-12 text-gray-900">
            What We Offer
          </h2>
          <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-8 tablet:gap-6 max-w-5xl mx-auto">
            {/* Menu Card */}
            <div className="p-8 tablet:p-6 bg-white rounded-2xl hover:shadow-xl transition cursor-pointer group">
              <div className="w-16 h-16 mobile:w-12 mobile:h-12 bg-wood-500 rounded-full mb-6 flex items-center justify-center group-hover:bg-wood-800 transition">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl mobile:text-xl font-semibold mb-3 text-gray-900">View Menu</h3>
              <p className="text-gray-600 text-base mobile:text-sm">
                Explore our full selection of coffee, teas, pastries, and savory delights.
              </p>
            </div>

            {/* Order Online Card */}
            <div className="p-8 tablet:p-6 bg-white rounded-2xl hover:shadow-xl transition cursor-pointer group">
              <div className="w-16 h-16 mobile:w-12 mobile:h-12 bg-wood-500 rounded-full mb-6 flex items-center justify-center group-hover:bg-wood-800 transition">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl mobile:text-xl font-semibold mb-3 text-gray-900">Order Online</h3>
              <p className="text-gray-600 text-base mobile:text-sm">
                Skip the line! Order ahead for pickup or delivery right to your door.
              </p>
            </div>

            {/* Reserve Table Card */}
            <div className="p-8 tablet:p-6 bg-white rounded-2xl hover:shadow-xl transition cursor-pointer group tablet:col-span-2 mobile:col-span-1">
              <div className="w-16 h-16 mobile:w-12 mobile:h-12 bg-wood-500 rounded-full mb-6 flex items-center justify-center group-hover:bg-wood-800 transition">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl mobile:text-xl font-semibold mb-3 text-gray-900">Reserve a Table</h3>
              <p className="text-gray-600 text-base mobile:text-sm">
                Planning a gathering? Book your spot and enjoy our cozy ambiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Carousel Section */}
      <section id="featured" className="py-20 bg-gray-100 h-screen snap-center flex items-center">
        <div className="container mx-auto px-8 tablet:px-6 mobile:px-4">
          <h2 className="text-4xl mobile:text-3xl font-bold text-center mb-12 text-gray-900">
            Featured Highlights
          </h2>
          <div className="max-w-4xl mx-auto relative">
            {/* Carousel Container */}
            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
              {/* Image Display */}
              <div className="relative h-96 tablet:h-72 mobile:h-60 overflow-hidden">
                <div
                  className={`flex h-full ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  onTransitionEnd={handleTransitionEnd}
                >
                  {extendedImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full h-full flex-shrink-0 bg-gray-50"
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition"
              >
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => {
                  const actualIndex = currentSlide === 0 ? carouselImages.length - 1
                    : currentSlide === extendedImages.length - 1 ? 0
                    : currentSlide - 1

                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setIsTransitioning(true)
                        setCurrentSlide(index + 1)
                      }}
                      className={`w-3 h-3 rounded-full transition ${
                        actualIndex === index ? 'bg-wood-500' : 'bg-gray-300'
                      }`}
                    />
                  )
                })}
              </div>
            </div>

            {/* Image Title */}
            <p className="text-center mt-6 text-xl font-semibold text-gray-700">
              {extendedImages[currentSlide].title}
            </p>
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section id="location" className="py-20 bg-white h-screen snap-center flex items-center">
        <div className="container mx-auto px-8 tablet:px-6 mobile:px-4">
          <h2 className="text-4xl mobile:text-3xl font-bold text-center mb-12 text-gray-900">
            Visit Us
          </h2>
          <div className="grid grid-cols-2 tablet:grid-cols-1 gap-12 tablet:gap-8 max-w-5xl mx-auto">
            {/* Map */}
            <div className="order-1">
              <div className="w-full h-96 tablet:h-80 mobile:h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977203346677!2d-122.41941548468208!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cafe Location Map"
                ></iframe>
              </div>
            </div>

            {/* Address & Hours */}
            <div className="order-2 flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
                  <svg className="w-6 h-6 text-wood-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Address
                </h3>
                <p className="text-lg text-gray-700 ml-9">
                  123 Coffee Street<br />
                  Downtown District<br />
                  City, State 12345
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
                  <svg className="w-6 h-6 text-wood-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Opening Hours
                </h3>
                <div className="text-lg text-gray-700 ml-9 space-y-2">
                  <p className="flex justify-between max-w-xs">
                    <span className="font-medium">Monday - Friday</span>
                    <span>7:00 AM - 8:00 PM</span>
                  </p>
                  <p className="flex justify-between max-w-xs">
                    <span className="font-medium">Saturday</span>
                    <span>8:00 AM - 9:00 PM</span>
                  </p>
                  <p className="flex justify-between max-w-xs">
                    <span className="font-medium">Sunday</span>
                    <span>8:00 AM - 7:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 h-screen snap-center flex items-center">
        <div className="container mx-auto px-8 tablet:px-6 mobile:px-4">
          <h2 className="text-4xl mobile:text-3xl font-bold text-center mb-12 text-gray-900">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-2 mobile:grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-wood-500 text-white rounded-lg hover:bg-wood-800 transition shadow-lg text-lg font-semibold"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-3 mobile:grid-cols-1 gap-6 text-center">
              <div>
                <svg className="w-8 h-8 text-wood-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p className="text-gray-700 font-medium">(555) 123-4567</p>
              </div>
              <div>
                <svg className="w-8 h-8 text-wood-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p className="text-gray-700 font-medium">hello@cozycorner.com</p>
              </div>
              <div>
                <svg className="w-8 h-8 text-wood-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700 font-medium">@cozycornercafe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-wood-900 text-white">
        <div className="container mx-auto px-8 tablet:px-6 mobile:px-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex gap-6">
              <a href="#home" className="hover:text-wood-300 transition">Home</a>
              <a href="#about" className="hover:text-wood-300 transition">About</a>
              <a href="#featured" className="hover:text-wood-300 transition">Featured</a>
              <a href="#location" className="hover:text-wood-300 transition">Location</a>
              <a href="#contact" className="hover:text-wood-300 transition">Contact</a>
            </div>
            <p className="text-base mobile:text-sm">&copy; 2026 Cozy Corner Cafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
