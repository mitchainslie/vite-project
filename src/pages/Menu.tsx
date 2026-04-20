import { useState, useCallback, useRef, useEffect } from 'react'
import { menuItems, type MenuItem, type MenuSection } from '../data/menuData'

function SectionCarousel({ items }: { items: MenuItem[] }) {
  const featured = items.filter((item) => item.featured && item.image)
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(0)
  const touchDeltaX = useRef(0)

  // Unbounded — always increments/decrements, never wraps
  const goNext = useCallback(() => setCurrent((c) => c + 1), [])
  const goPrev = useCallback(() => setCurrent((c) => c - 1), [])

  // Map any index to actual item via modulo
  const getItem = useCallback(
    (i: number) => featured[((i % featured.length) + featured.length) % featured.length],
    [featured]
  )

  // Swipe handlers
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }, [])

  const onTouchEnd = useCallback(() => {
    const threshold = 50
    if (touchDeltaX.current < -threshold) goNext()
    else if (touchDeltaX.current > threshold) goPrev()
  }, [goNext, goPrev])

  if (featured.length === 0) return null

  // Virtual slots: render enough cards around current to fill the view
  const SPREAD = 4 // cards on each side of center
  const slots = Array.from({ length: SPREAD * 2 + 1 }, (_, i) => current - SPREAD + i)

  // Active dot index (wrapped)
  const activeDot = ((current % featured.length) + featured.length) % featured.length

  return (
    <div className="mb-6 md:mb-8 select-none">
      {/* ─── Mobile: single image slider with swipe ─── */}
      <div
        className="md:hidden relative overflow-hidden rounded-xl mx-auto max-w-[280px]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative aspect-[2/3]">
          {slots.map((vIndex) => {
            const item = getItem(vIndex)
            const offset = vIndex - current
            return (
              <div
                key={vIndex}
                className="absolute inset-0"
                style={{
                  transform: `translateX(${offset * 100}%)`,
                  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-base font-semibold drop-shadow-lg">{item.name}</p>
                  <p className="text-white/70 text-xs mt-0.5">{item.price}</p>
                </div>
              </div>
            )
          })}
        </div>
        {/* Mobile dots */}
        {featured.length > 1 && (
          <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5">
            {featured.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === activeDot ? 'w-4 bg-white' : 'w-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ─── Desktop: multi-card sliding carousel ─── */}
      <div className="hidden md:block relative overflow-hidden" style={{ height: 330 }}>
        <div
          className="absolute inset-0"
          style={{
            transform: `translateX(calc(50% - 110px - ${current * 236}px))`,
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {slots.map((vIndex) => {
            const item = getItem(vIndex)
            return (
              <div
                key={vIndex}
                className="absolute top-0 w-[220px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setCurrent(vIndex)}
                style={{
                  left: vIndex * 236,
                  aspectRatio: '2/3',
                }}
              >
                <img src={item.image} alt={item.name} className="w-full h-full object-cover pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-base font-semibold drop-shadow-lg">{item.name}</p>
                  <p className="text-white/70 text-xs mt-0.5">{item.price}</p>
                </div>
              </div>
            )
          })}
        </div>
        {/* Nav arrows */}
        {featured.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center z-10"
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center z-10"
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default function Menu() {
  const [search, setSearch] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(menuItems[0]?.category ?? '')
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const categoryBarRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const isScrollingTo = useRef(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const filteredCatsRef = useRef<string[]>(menuItems.map((s) => s.category))
  const isDragging = useRef(false)
  const hasDragged = useRef(false)
  const dragStartX = useRef(0)
  const dragScrollLeft = useRef(0)

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const slider = sliderRef.current
    if (!slider) return
    isDragging.current = true
    hasDragged.current = false
    dragStartX.current = e.pageX - slider.offsetLeft
    dragScrollLeft.current = slider.scrollLeft
    slider.style.cursor = 'grabbing'
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return
    const slider = sliderRef.current
    if (!slider) return
    e.preventDefault()
    const x = e.pageX - slider.offsetLeft
    const delta = x - dragStartX.current
    if (Math.abs(delta) > 3) hasDragged.current = true
    slider.scrollLeft = dragScrollLeft.current - delta
  }, [])

  const onMouseUp = useCallback(() => {
    isDragging.current = false
    if (sliderRef.current) sliderRef.current.style.cursor = 'grab'
  }, [])

  const scrollToSection = useCallback((category: string) => {
    const el = sectionRefs.current[category]
    if (!el) return
    isScrollingTo.current = true
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
    setActiveCategory(category)
    setTimeout(() => { isScrollingTo.current = false }, 800)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (isScrollingTo.current) return
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 50
      if (atBottom) {
        const cats = filteredCatsRef.current
        setActiveCategory(cats[cats.length - 1] ?? '')
        return
      }
      let closest: string | null = null
      let closestDist = Infinity
      for (const [category, el] of Object.entries(sectionRefs.current)) {
        if (!el) continue
        const top = el.getBoundingClientRect().top - 100
        if (top <= 0 && Math.abs(top) < closestDist) {
          closestDist = Math.abs(top)
          closest = category
        }
      }
      if (closest) setActiveCategory(closest)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const tab = tabRefs.current[activeCategory]
    if (tab) {
      tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [activeCategory])

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
    if (!searchOpen) setSearch('')
  }, [searchOpen])

  const query = search.toLowerCase().trim()
  const filteredMenu = query
    ? menuItems
        .map((section) => {
          if (section.category.toLowerCase().includes(query)) return section
          const matched = section.items.filter(
            (item) =>
              item.name.toLowerCase().includes(query) ||
              item.description.toLowerCase().includes(query)
          )
          return matched.length > 0 ? { ...section, items: matched } : null
        })
        .filter(Boolean) as MenuSection[]
    : menuItems
  filteredCatsRef.current = filteredMenu.map((s) => s.category)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Menu Header */}
      <section className="pt-24 md:pt-16 bg-wood-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-6 pb-6 sm:pt-8 sm:pb-8 md:pt-12 md:pb-10 lg:pt-16 lg:pb-12 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            Arca's Yard Menu
          </h1>
          <p className="text-[10px] sm:text-xs md:text-sm mt-1.5 md:mt-2 opacity-80 px-2">
            *Please note 10% service charge additional to help support our team and maintain service quality
          </p>
        </div>
      </section>

      {/* Category slider bar + search — fixed bottom */}
      <div ref={categoryBarRef} className="fixed bottom-0 left-0 right-0 z-40 pb-[env(safe-area-inset-bottom)] bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl">
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: searchOpen ? 60 : 0, opacity: searchOpen ? 1 : 0 }}
          >
            <div className="pt-2.5">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search menu or category..."
                  className="w-full pl-10 pr-9 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-wood-400 focus:ring-1 focus:ring-wood-400 transition"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
          <p className="text-[10px] text-gray-400 text-center mb-1 tracking-wide">
            <span className="inline-block">&larr;</span> swipe to explore <span className="inline-block">&rarr;</span>
          </p>
          <div className="flex items-center gap-2 pb-3">
            <div
              ref={sliderRef}
              className="flex-1 overflow-x-auto scrollbar-hide select-none bg-wood-500 rounded-xl"
              style={{ cursor: 'grab' }}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
            >
              <div className="flex items-center">
                {filteredMenu.map((section) => (
                  <button
                    key={section.category}
                    ref={(el) => { tabRefs.current[section.category] = el }}
                    onClick={() => { if (!hasDragged.current) scrollToSection(section.category) }}
                    className={`whitespace-nowrap px-4 py-3 font-medium transition-all duration-200 flex-shrink-0 origin-center ${
                      activeCategory === section.category
                        ? 'text-white text-sm sm:text-base font-semibold scale-105'
                        : 'text-white/40 text-xs sm:text-sm scale-100 hover:text-white/70'
                    }`}
                  >
                    {section.category}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => setSearchOpen((o) => !o)}
              className={`flex-shrink-0 w-10 self-stretch flex items-center justify-center rounded-xl bg-wood-500 transition-colors ${
                searchOpen ? 'bg-wood-600 text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl">
          {filteredMenu.length === 0 && (
            <p className="text-center text-gray-400 py-12 text-sm">No results found for "{search}"</p>
          )}
          {filteredMenu.map((section, index) => (
            <div
              key={index}
              ref={(el) => { sectionRefs.current[section.category] = el }}
              data-category={section.category}
              className="mb-10 sm:mb-12 md:mb-14 lg:mb-16"
            >
              {/* Category title */}
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-wood-300/50" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-wood-600 whitespace-nowrap">
                  {section.category}
                </h2>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-wood-300/50" />
              </div>

              {/* Featured dishes carousel */}
              <SectionCarousel items={section.items} />

              {/* Menu items grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white p-3.5 sm:p-4 md:p-5 rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start gap-2 mb-1 sm:mb-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 flex-1 flex items-center gap-1.5">
                        {item.name}
                        {item.featured && (
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-wood-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 2v9.5c0 .83.67 1.5 1.5 1.5h1v7.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V13h1c.83 0 1.5-.67 1.5-1.5V2h-2v5h-1V2h-2v5h-1V2H7zM17.5 2c-.28 0-.5.22-.5.5V9c0 1.1.9 2 2 2v9.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V2h-4.5z"/>
                          </svg>
                        )}
                      </h3>
                      <span className="text-sm sm:text-base md:text-lg font-bold text-wood-500 whitespace-nowrap ml-2">
                        {item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-gray-500 text-[11px] sm:text-xs md:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 sm:py-5 md:py-6 pb-20 bg-wood-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <p className="text-[10px] sm:text-xs md:text-sm">&copy; 2026 Arca's Yard Cafe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
