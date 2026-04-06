import { useState, useCallback, useRef } from 'react'
import img1 from '../assets/images/MAG01755.jpg'
import img2 from '../assets/images/MAG01756.jpg'
import img3 from '../assets/images/MAG01822.jpg'

// Placeholder images — replace with actual dish photos
const ph1 = img1, ph2 = img2, ph3 = img3

interface MenuItem {
  name: string
  description: string
  price: string
  featured?: boolean
  image?: string // Required when featured: true
}

interface MenuSection {
  category: string
  items: MenuItem[]
}

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

  const menuItems: MenuSection[] = [
    {
      category: 'Soups & Salads',
      items: [
        { name: 'Miso Soup', description: 'Japanese soup with soya beans, tofu and wakame', price: '₱110', featured: false },
        { name: 'Pumpkin Soup', description: 'Classic soup made from creamy fresh pumpkin', price: '₱110', featured: true, image: ph1 },
        { name: 'Potato Leek Soup', description: 'Vegetable soup made with fresh potatoes and onion leeks', price: '₱110', featured: false },
        { name: 'Cream of Mushroom Soup', description: 'A classic made with fresh button mushrooms and cream', price: '₱125', featured: true, image: ph2 },
        { name: 'Oriental Salad', description: "Seasonal fruits on a bed of lettuce with Arca's signature dressing", price: '₱300', featured: false },
        { name: "Arca's Greek Salad", description: 'A medley of olives, arugula, feta cheese with alfalfa sprouts', price: '₱320', featured: true, image: ph3 },
      ],
    },
    {
      category: 'Appetizers',
      items: [
        { name: 'Calamares', description: 'Breaded fried squid served with homemade dip', price: '₱265', featured: false, image: ph2 },
        { name: 'Crispy Adobo Flakes', description: 'Deep fried shredded pork adobo', price: '₱250', featured: false, image: ph1 },
        { name: 'Chicharon Bulaklak', description: 'Crispy pork ruffles seasoned and served golden brown', price: '₱265', featured: false, image: ph3 },
        { name: 'Spicy Sambal', description: 'Stir-fried squid with spicy sambal sauce', price: '₱265', featured: true, image: ph1 },
        { name: 'Spicy Fish', description: 'Deep fried fish fillet with sweet and spicy sauce', price: '₱210', featured: true, image: ph1 },
        { name: 'Cheese Burger', description: '1/3 pounder ground beef with honey mustard sauce and french fries', price: '₱285', featured: true, image: ph1 },
        { name: 'French Fries', description: 'Deep-fried potato strips', price: '₱180', featured: false, image: ph1 },
        { name: 'Camote Fries', description: 'Freshly sliced sweet potato fries', price: '₱180', featured: false, image: ph1 },
      ],
    },
    {
      category: 'All-Day Breakfast',
      items: [
        { name: 'Longganisa', description: 'Garlic longganisa served with sunny side up egg and plain or garlic rice', price: '₱250', featured: true, image: ph3 },
        { name: 'Arroz Ala Cubana', description: 'Spanish-inspired dish made of ground meat, fried sweet plantain, sunny side up egg, and plain or garlic rice', price: '₱315', featured: true, image: ph1 },
        { name: 'Bacon and Egg', description: 'Crispy bacon strips served with egg and plain or garlic rice', price: '₱250', featured: false },
        { name: 'Hungarian Sausage', description: 'Pan-grilled sausage served with bacon, egg, and plain or garlic rice', price: '₱320', featured: true, image: ph2 },
        { name: 'French Toast', description: 'Thick-cut bread dipped in egg custard, pan-fried to golden perfection', price: '₱150', featured: false },
      ],
    },
    {
      category: 'Pasta',
      items: [
        { name: 'Carbonara', description: 'Classic linguine pasta in rich cream sauce with bacon, mushroom and parmesan', price: '₱235', featured: true, image: ph1 },
        { name: 'Pesto Carbonara', description: 'Linguine pasta Carbonara with bacon, onions, garlic, and basil pesto, served with garlic bread', price: '₱250', featured: false },
        { name: "Arca's Spicy Tuna", description: "Spaghetti pasta with spicy tuna that's topped with cheddar cheese and served with garlic bread", price: '₱235', featured: true, image: ph2 },
        { name: 'Basil Pesto Tuna', description: 'Spaghetti pasta with tuna, tomatoes, capers, olives, and basil pesto, served with garlic bread', price: '₱255', featured: false },
        { name: 'Chicken Alfredo', description: 'Cream based linguine pasta with chicken and broccoli, served with garlic bread', price: '₱250', featured: false },
        { name: 'Puttanesca', description: 'Italian spaghetti pasta with fresh tomato, capers, and black and green olives, served with garlic bread', price: '₱230', featured: false },
        { name: 'Seafood Marinara', description: 'Tomato based spaghetti pasta with squid, shrimps, and mussels, served with garlic bread', price: '₱295', featured: true, image: ph3 },
        { name: 'Filipino Style Spaghetti', description: 'A filipino favorite pasta with ground beef in sweet tomato sauce, served with garlic bread', price: '₱240', featured: false },
      ],
    },
    {
      category: 'Pizza',
      items: [
        { name: 'Pepperoni Pizza', description: 'Cheese pizza with slices of pepperoni sausage', price: '₱315 (10") / ₱525 (12")', featured: true, image: ph2 },
        { name: '4 Cheese Pizza', description: 'Ricotta, Cheddar, Parmesan and Mozzarella', price: '₱315 (10") / ₱525 (12")', featured: true, image: ph3 },
        { name: 'Cheesy Hawaiian', description: 'Ricotta, Cheddar, Parmesan, Mozzarella, ham, and pineapple', price: '₱315 (10") / ₱525 (12")', featured: false },
        { name: 'Classic Hawaiian', description: 'Cheese pizza topped with ham and pineapple', price: '₱315 (10") / ₱525 (12")', featured: false },
        { name: 'Vegetarian Delight', description: 'Cheese pizza topped with onions, bell peppers, mushrooms, pineapple, and black olives', price: '₱315 (10") / ₱525 (12")', featured: false },
      ],
    },
    {
      category: 'Seafood',
      items: [
        { name: 'Fried Ambuklao Tilapia', description: "Deep-fried St. Peter's fish served with rice", price: '₱220', featured: true, image: ph1 },
        { name: 'Buttered Tiger Prawns', description: 'Pan-seared tiger prawns in butter and garlic served with rice (Seasonal)', price: '₱480', featured: true, image: ph3 },
        { name: 'Brazilian Salmon Stew', description: 'Salmon sautéed in spices and coconut milk, with rice', price: '₱465', featured: false },
        { name: 'Honey Glazed Salmon', description: 'Salmon glazed in orange, herbs, and wild honey, with rice', price: '₱455', featured: true, image: ph2 },
        { name: 'Salmon Teppanyaki', description: 'Pan-fried pink salmon steak drizzled with unagi sauce served with miso soup and rice', price: '₱485', featured: false },
        { name: 'Ebi Tempura', description: 'Deep fried shrimp in tempura batter with tempura sauce (Good for 1-2 persons)', price: '₱395', featured: false },
        { name: 'Kani Tempura', description: 'Deep fried crab sticks in tempura batter with tempura sauce (Good for 1-2 persons)', price: '₱285', featured: false },
        { name: 'Dinengdeng', description: "An Ilocano stew with vegetables, shrimps, and fish sauce that's topped with fried St. Peter's fish or tilapia (Good for 1-2 persons)", price: '₱310', featured: false },
        { name: 'Daing na Bangus', description: 'Pan-fried seasoned boneless bangus (Good for 1-2 persons)', price: '₱295', featured: false },
        { name: "Arca's Bangus Ala Pobre", description: 'Pan-fried boneless Bangus seasoned and glazed in sauce (Good for 1-2 persons)', price: '₱295', featured: false },
      ],
    },
    {
      category: 'Mains',
      items: [
        { name: 'Crispy Adobo Flakes', description: 'Deep fried shredded pork adobo with special vinegar and rice', price: '₱285', featured: true, image: ph2 },
        { name: 'Chicken Pork Adobo', description: 'A classic Filipino dish with chicken, pork, potatoes, and rice', price: '₱285', featured: false },
        { name: 'Bistek Tagalog', description: 'A Filipino Beef dish sauteed in garlic, onions and served with rice', price: '₱310', featured: true, image: ph3 },
        { name: 'Pork Steak', description: 'Pan-seared, marinated tender pork served with rice or mashed potato', price: '₱335', featured: false },
        { name: 'Lechon Kawali', description: 'Scrumptious deep fried pork belly with rice', price: '₱320', featured: true, image: ph1 },
        { name: 'Honey Buttered Chicken', description: 'Deep fried chicken with wild honey butter sauce and rice', price: '₱310', featured: false },
        { name: 'Crispy Lemon Orange Chicken', description: 'Savory chicken drizzled with a sweet and citrus sauce, served with rice', price: '₱290', featured: false },
        { name: 'Fried Chicken', description: 'Golden fried crispy chicken paired with savory gravy, served with rice', price: '₱285', featured: false },
        { name: 'Creamy Grilled Chicken', description: 'Chicken cooked in white wine, peppers, and cream, served with rice', price: '₱290', featured: false },
        { name: 'Beef Patty', description: 'Ground beef patty with spices, gravy, and served with rice', price: '₱235', featured: false },
        { name: 'Beef Teriyaki', description: 'Sauteed beef glazed in teriyaki sauce and served with rice', price: '₱310', featured: false },
        { name: 'Texas Pork Ribs', description: 'Pork ribs with homemade Texas sauce and served with rice', price: '₱395', featured: true, image: ph1 },
        { name: 'Texas Beef Ribs', description: 'Beef ribs with homemade Texas sauce and served with rice', price: '₱415', featured: false },
        { name: 'Lamb Shoulder', description: 'Pan-seared, spice-marinated lamb with mint jelly and rice or mash potato (Priced per gram, please ask our staff for available cuts)', price: 'Per Gram', featured: false },
        { name: 'Rib-Eye Steak', description: 'Pan-seared, spice-marinated rib-eye served with rice or mashed potato (Priced per gram, please ask our staff for available cuts)', price: 'Per Gram', featured: false },
      ],
    },
    {
      category: 'For Sharing',
      items: [
        { name: 'Bulalo', description: 'Beef shank and bone marrow soup with vegetable and sweet corn (Good for 3-4 persons)', price: '₱495', featured: true, image: ph3 },
        { name: 'Pork Humba', description: 'Spiced braised pork with salted black beans and fried sweet potato (Good for 2-3 persons)', price: '₱430', featured: false },
        { name: 'Stir-Fried Vegetables', description: 'Mixed seasonal vegetables with squid and mushroom (Good for 3-4 persons)', price: '₱310', featured: false },
        { name: 'Sinigang Na Salmon', description: 'A Filipino tangy stew with salmon head and belly (Good for 3-4 Persons)', price: '₱490', featured: true, image: ph1 },
        { name: 'Patatim (sliced)', description: 'A Filipino-Chinese braised pork leg dish with steamed bok choy (Good for 2-3 persons)', price: '₱435', featured: false },
        { name: 'Patatim (whole)', description: 'A Filipino-Chinese braised pork leg dish with steamed bok choy (Good for 5-6 persons)', price: '₱995', featured: false },
        { name: 'Crispy Pata', description: 'Savory Filipino dish of deep-fried pork knuckles', price: '₱970', featured: true, image: ph2 },
        { name: 'Pancit Guisado', description: 'With chicken, shrimp, squid balls, vegetables, and mushrooms (Good for 5-6 persons)', price: '₱365', featured: false },
      ],
    },
    {
      category: 'Rice',
      items: [
        { name: 'Mix Chahan', description: 'Flavorful Japanese-style egg fried rice with meat and vegetable', price: '₱255', featured: true, image: ph1 },
        { name: 'Sambal Fried Rice', description: 'Fried rice with shrimp, squid, fish, egg, and sambal sauce', price: '₱255', featured: true, image: ph2 },
        { name: 'Garlic Rice', description: 'Fried garlic rice', price: '₱55', featured: false },
        { name: 'Plain Rice', description: 'Steamed white rice', price: '₱50', featured: false },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { name: "Arca's Docto Pie Ala Mode", description: '', price: '₱135', featured: true, image: ph1 },
        { name: 'Carrot Pie Ala Mode', description: '', price: '₱135', featured: false },
        { name: 'Rhubarb Pie Ala Mode', description: 'Seasonal', price: '₱190', featured: false },
        { name: 'Baked Blueberry Cheesecake', description: '', price: '₱170', featured: true, image: ph2 },
        { name: 'Yogurt with Wild Honey', description: '', price: '₱145', featured: false },
        { name: 'Mais Con Yelo', description: '', price: '₱125', featured: false },
        { name: 'Camote Ice Cream', description: '', price: '₱135', featured: false },
        { name: 'Banana Split', description: '', price: '₱200', featured: true, image: ph3 },
        { name: "Potenciana's Dessert", description: '', price: '₱170', featured: false },
        { name: 'Ginataang Bilo-Bilo', description: '', price: '₱145', featured: false },
      ],
    },
    {
      category: 'Coffee',
      items: [
        { name: 'Benguet Coffee', description: 'Available hot or iced', price: '₱90', featured: true, image: ph3 },
        { name: 'Espresso (Double)', description: 'Available hot or iced', price: '₱120', featured: false },
        { name: 'Americano', description: 'Available hot or iced', price: '₱105', featured: false },
        { name: 'Cappuccino', description: 'Available hot or iced', price: '₱120', featured: true, image: ph1 },
        { name: 'Latte', description: 'Available hot or iced', price: '₱125', featured: false },
      ],
    },
    {
      category: 'Non-Coffee & Tea',
      items: [
        { name: 'Cacao Hot Chocolate', description: '', price: '₱95', featured: true, image: ph2 },
        { name: 'Bottled Water', description: '', price: '₱35', featured: false },
        { name: 'Soda Float', description: '', price: '₱120', featured: false },
        { name: "Arca's Cloud Tea", description: '', price: '₱85', featured: true, image: ph3 },
        { name: 'Tarragon', description: '', price: '₱85', featured: false },
        { name: 'Lemongrass', description: '', price: '₱85', featured: false },
        { name: 'Lemongrass Teapot', description: '', price: '₱150', featured: false },
        { name: 'Iced Tea', description: '', price: '₱80', featured: false },
        { name: 'Iced Tea Pitcher', description: '', price: '₱210', featured: false },
      ],
    },
    {
      category: 'Smoothies & Milkshakes',
      items: [
        { name: 'Strawberry Milkshake', description: '', price: '₱150', featured: true, image: ph1 },
        { name: 'Chocolate Milkshake', description: '', price: '₱150', featured: false },
        { name: 'Vanilla Milkshake', description: '', price: '₱150', featured: false },
        { name: 'Vanilla Oreo Milkshake', description: '', price: '₱155', featured: false },
        { name: 'Mango Smoothie', description: '', price: '₱145', featured: true, image: ph2 },
        { name: 'Strawberry Smoothie', description: '', price: '₱145', featured: false },
        { name: 'Avocado Smoothie', description: 'Seasonal', price: '₱135', featured: false },
        { name: 'Banana Smoothie', description: '', price: '₱120', featured: false },
        { name: 'Pineapple Smoothie', description: 'Seasonal', price: '₱120', featured: false },
        { name: 'Cucumber Smoothie', description: '', price: '₱115', featured: false },
      ],
    },
    {
      category: 'Soft Drinks',
      items: [
        { name: 'Sprite', description: '', price: '₱70', featured: false },
        { name: 'Royal', description: '', price: '₱70', featured: false },
        { name: 'Root Beer', description: '', price: '₱70', featured: false },
        { name: 'Coke (Regular/Zero)', description: '', price: '₱70', featured: false },
      ],
    },
  ]

  const query = search.toLowerCase().trim()
  const filteredMenu = query
    ? menuItems
        .map((section) => {
          // If category matches, show full section
          if (section.category.toLowerCase().includes(query)) return section
          // Otherwise filter items
          const matched = section.items.filter(
            (item) =>
              item.name.toLowerCase().includes(query) ||
              item.description.toLowerCase().includes(query)
          )
          return matched.length > 0 ? { ...section, items: matched } : null
        })
        .filter(Boolean) as MenuSection[]
    : menuItems

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Menu Header */}
      <section className="pt-20 md:pt-16 bg-wood-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 lg:py-16 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            Arca's Yard Menu
          </h1>
          <p className="text-[10px] sm:text-xs md:text-sm mt-1.5 md:mt-2 opacity-80 px-2">
            *Please note 10% service charge additional to help support our team and maintain service quality
          </p>
        </div>
      </section>

      {/* Search */}
      <div className="sticky top-0 z-40 bg-gray-50/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl py-3">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search menu or category..."
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-wood-400 focus:ring-1 focus:ring-wood-400 transition"
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

      {/* Menu Items */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl">
          {filteredMenu.length === 0 && (
            <p className="text-center text-gray-400 py-12 text-sm">No results found for "{search}"</p>
          )}
          {filteredMenu.map((section, index) => (
            <div key={index} className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
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
      <footer className="py-4 sm:py-5 md:py-6 bg-wood-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <p className="text-[10px] sm:text-xs md:text-sm">&copy; 2026 Arca's Yard Cafe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
