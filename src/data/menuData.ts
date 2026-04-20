import img1 from '../assets/images/MAG01755.jpg'
import img2 from '../assets/images/MAG01756.jpg'
import img3 from '../assets/images/MAG01822.jpg'

const ph1 = img1, ph2 = img2, ph3 = img3

export interface MenuItem {
  name: string
  description: string
  price: string
  featured?: boolean
  image?: string
  toDisplay?: boolean
}

export interface MenuSection {
  category: string
  items: MenuItem[]
}

export const menuItems: MenuSection[] = [
  {
    category: 'Soups & Salads',
    items: [
      { name: 'Miso Soup', description: 'Japanese soup with soya beans, tofu and wakame', price: '₱110', featured: false, toDisplay: false },
      { name: 'Pumpkin Soup', description: 'Classic soup made from creamy fresh pumpkin', price: '₱110', featured: true, image: ph1, toDisplay: false },
      { name: 'Potato Leek Soup', description: 'Vegetable soup made with fresh potatoes and onion leeks', price: '₱110', featured: false, toDisplay: false },
      { name: 'Cream of Mushroom Soup', description: 'A classic made with fresh button mushrooms and cream', price: '₱125', featured: true, image: ph2, toDisplay: false },
      { name: 'Oriental Salad', description: "Seasonal fruits on a bed of lettuce with Arca's signature dressing", price: '₱300', featured: false, toDisplay: false },
      { name: "Arca's Greek Salad", description: 'A medley of olives, arugula, feta cheese with alfalfa sprouts', price: '₱320', featured: true, image: ph3, toDisplay: false },
    ],
  },
  {
    category: 'Appetizers',
    items: [
      { name: 'Calamares', description: 'Breaded fried squid served with homemade dip', price: '₱265', featured: false, image: ph2, toDisplay: false },
      { name: 'Crispy Adobo Flakes', description: 'Deep fried shredded pork adobo', price: '₱250', featured: false, image: ph1, toDisplay: false },
      { name: 'Chicharon Bulaklak', description: 'Crispy pork ruffles seasoned and served golden brown', price: '₱265', featured: false, image: ph3, toDisplay: false },
      { name: 'Spicy Sambal', description: 'Stir-fried squid with spicy sambal sauce', price: '₱265', featured: true, image: ph1, toDisplay: false },
      { name: 'Spicy Fish', description: 'Deep fried fish fillet with sweet and spicy sauce', price: '₱210', featured: true, image: ph1, toDisplay: false },
      { name: 'Cheese Burger', description: '1/3 pounder ground beef with honey mustard sauce and french fries', price: '₱285', featured: true, image: ph1, toDisplay: false },
      { name: 'French Fries', description: 'Deep-fried potato strips', price: '₱180', featured: false, image: ph1, toDisplay: false },
      { name: 'Camote Fries', description: 'Freshly sliced sweet potato fries', price: '₱180', featured: false, image: ph1, toDisplay: false },
    ],
  },
  {
    category: 'All-Day Breakfast',
    items: [
      { name: 'Longganisa', description: 'Garlic longganisa served with sunny side up egg and plain or garlic rice', price: '₱250', featured: true, image: ph3, toDisplay: false },
      { name: 'Arroz Ala Cubana', description: 'Spanish-inspired dish made of ground meat, fried sweet plantain, sunny side up egg, and plain or garlic rice', price: '₱315', featured: true, image: ph1, toDisplay: false },
      { name: 'Bacon and Egg', description: 'Crispy bacon strips served with egg and plain or garlic rice', price: '₱250', featured: false, toDisplay: false },
      { name: 'Hungarian Sausage', description: 'Pan-grilled sausage served with bacon, egg, and plain or garlic rice', price: '₱320', featured: true, image: ph2, toDisplay: false },
      { name: 'French Toast', description: 'Thick-cut bread dipped in egg custard, pan-fried to golden perfection', price: '₱150', featured: false, toDisplay: false },
    ],
  },
  {
    category: 'Pasta',
    items: [
      { name: 'Carbonara', description: 'Classic linguine pasta in rich cream sauce with bacon, mushroom and parmesan', price: '₱235', featured: true, image: ph1, toDisplay: false },
      { name: 'Pesto Carbonara', description: 'Linguine pasta Carbonara with bacon, onions, garlic, and basil pesto, served with garlic bread', price: '₱250', featured: false, toDisplay: false },
      { name: "Arca's Spicy Tuna", description: "Spaghetti pasta with spicy tuna that's topped with cheddar cheese and served with garlic bread", price: '₱235', featured: true, image: ph2, toDisplay: false },
      { name: 'Basil Pesto Tuna', description: 'Spaghetti pasta with tuna, tomatoes, capers, olives, and basil pesto, served with garlic bread', price: '₱255', featured: false, toDisplay: false },
      { name: 'Chicken Alfredo', description: 'Cream based linguine pasta with chicken and broccoli, served with garlic bread', price: '₱250', featured: false, toDisplay: false },
      { name: 'Puttanesca', description: 'Italian spaghetti pasta with fresh tomato, capers, and black and green olives, served with garlic bread', price: '₱230', featured: false, toDisplay: false },
      { name: 'Seafood Marinara', description: 'Tomato based spaghetti pasta with squid, shrimps, and mussels, served with garlic bread', price: '₱295', featured: true, image: ph3, toDisplay: false },
      { name: 'Filipino Style Spaghetti', description: 'A filipino favorite pasta with ground beef in sweet tomato sauce, served with garlic bread', price: '₱240', featured: false, toDisplay: false },
    ],
  },
  {
    category: 'Pizza',
    items: [
      { name: 'Pepperoni Pizza', description: 'Cheese pizza with slices of pepperoni sausage', price: '₱315 (10") / ₱525 (12")', featured: true, image: ph2, toDisplay: false },
      { name: '4 Cheese Pizza', description: 'Ricotta, Cheddar, Parmesan and Mozzarella', price: '₱315 (10") / ₱525 (12")', featured: true, image: ph3, toDisplay: false },
      { name: 'Cheesy Hawaiian', description: 'Ricotta, Cheddar, Parmesan, Mozzarella, ham, and pineapple', price: '₱315 (10") / ₱525 (12")', featured: false, toDisplay: false },
      { name: 'Classic Hawaiian', description: 'Cheese pizza topped with ham and pineapple', price: '₱315 (10") / ₱525 (12")', featured: false, toDisplay: false },
      { name: 'Vegetarian Delight', description: 'Cheese pizza topped with onions, bell peppers, mushrooms, pineapple, and black olives', price: '₱315 (10") / ₱525 (12")', featured: false, toDisplay: false },
    ],
  },
  {
    category: 'Seafood',
    items: [
      { name: 'Fried Ambuklao Tilapia', description: "Deep-fried St. Peter's fish served with rice", price: '₱220', featured: true, image: ph1, toDisplay: false },
      { name: 'Buttered Tiger Prawns', description: 'Pan-seared tiger prawns in butter and garlic served with rice (Seasonal)', price: '₱480', featured: true, image: ph3, toDisplay: false },
      { name: 'Brazilian Salmon Stew', description: 'Salmon sautéed in spices and coconut milk, with rice', price: '₱465', featured: false, toDisplay: false },
      { name: 'Honey Glazed Salmon', description: 'Salmon glazed in orange, herbs, and wild honey, with rice', price: '₱455', featured: true, image: ph2, toDisplay: true },
      { name: 'Salmon Teppanyaki', description: 'Pan-fried pink salmon steak drizzled with unagi sauce served with miso soup and rice', price: '₱485', featured: false, toDisplay: false },
      { name: 'Ebi Tempura', description: 'Deep fried shrimp in tempura batter with tempura sauce (Good for 1-2 persons)', price: '₱395', featured: false, toDisplay: false },
      { name: 'Kani Tempura', description: 'Deep fried crab sticks in tempura batter with tempura sauce (Good for 1-2 persons)', price: '₱285', featured: false, toDisplay: false },
      { name: 'Dinengdeng', description: "An Ilocano stew with vegetables, shrimps, and fish sauce that's topped with fried St. Peter's fish or tilapia (Good for 1-2 persons)", price: '₱310', featured: false, toDisplay: false },
      { name: 'Daing na Bangus', description: 'Pan-fried seasoned boneless bangus (Good for 1-2 persons)', price: '₱295', featured: false, toDisplay: false },
      { name: "Arca's Bangus Ala Pobre", description: 'Pan-fried boneless Bangus seasoned and glazed in sauce (Good for 1-2 persons)', price: '₱295', featured: false, toDisplay: false },
    ],
  },
  {
    category: 'Mains',
    items: [
      { name: 'Crispy Adobo Flakes', description: 'Deep fried shredded pork adobo with special vinegar and rice', price: '₱285', featured: true, image: ph2, toDisplay: false },
      { name: 'Chicken Pork Adobo', description: 'A classic Filipino dish with chicken, pork, potatoes, and rice', price: '₱285', featured: false, toDisplay: false },
      { name: 'Bistek Tagalog', description: 'A Filipino Beef dish sauteed in garlic, onions and served with rice', price: '₱310', featured: true, image: ph3, toDisplay: true },
      { name: 'Pork Steak', description: 'Pan-seared, marinated tender pork served with rice or mashed potato', price: '₱335', featured: false, toDisplay: false },
      { name: 'Lechon Kawali', description: 'Scrumptious deep fried pork belly with rice', price: '₱320', featured: true, image: ph1, toDisplay: false },
      { name: 'Honey Buttered Chicken', description: 'Deep fried chicken with wild honey butter sauce and rice', price: '₱310', featured: false, toDisplay: false },
      { name: 'Crispy Lemon Orange Chicken', description: 'Savory chicken drizzled with a sweet and citrus sauce, served with rice', price: '₱290', featured: false, toDisplay: false },
      { name: 'Fried Chicken', description: 'Golden fried crispy chicken paired with savory gravy, served with rice', price: '₱285', featured: false, toDisplay: false },
      { name: 'Creamy Grilled Chicken', description: 'Chicken cooked in white wine, peppers, and cream, served with rice', price: '₱290', featured: false, toDisplay: false },
      { name: 'Beef Patty', description: 'Ground beef patty with spices, gravy, and served with rice', price: '₱235', featured: false, toDisplay: false },
      { name: 'Beef Teriyaki', description: 'Sauteed beef glazed in teriyaki sauce and served with rice', price: '₱310', featured: false, toDisplay: false },
      { name: 'Texas Pork Ribs', description: 'Pork ribs with homemade Texas sauce and served with rice', price: '₱395', featured: true, image: ph1, toDisplay: false },
      { name: 'Texas Beef Ribs', description: 'Beef ribs with homemade Texas sauce and served with rice', price: '₱415', featured: false, toDisplay: false },
      { name: 'Lamb Shoulder', description: 'Pan-seared, spice-marinated lamb with mint jelly and rice or mash potato (Priced per gram, please ask our staff for available cuts)', price: 'Per Gram', featured: false, toDisplay: false },
      { name: 'Rib-Eye Steak', description: 'Pan-seared, spice-marinated rib-eye served with rice or mashed potato (Priced per gram, please ask our staff for available cuts)', price: 'Per Gram', featured: false, toDisplay: false },
    ],
  },
  {
    category: 'For Sharing',
    items: [
      { name: 'Bulalo', description: 'Beef shank and bone marrow soup with vegetable and sweet corn (Good for 3-4 persons)', price: '₱495', featured: true, image: ph3, toDisplay: true },
      { name: 'Pork Humba', description: 'Spiced braised pork with salted black beans and fried sweet potato (Good for 2-3 persons)', price: '₱430', featured: false, toDisplay: false },
      { name: 'Stir-Fried Vegetables', description: 'Mixed seasonal vegetables with squid and mushroom (Good for 3-4 persons)', price: '₱310', featured: false, toDisplay: false },
      { name: 'Sinigang Na Salmon', description: 'A Filipino tangy stew with salmon head and belly (Good for 3-4 Persons)', price: '₱490', featured: true, image: ph1, toDisplay: false },
      { name: 'Patatim (sliced)', description: 'A Filipino-Chinese braised pork leg dish with steamed bok choy (Good for 2-3 persons)', price: '₱435', featured: false, toDisplay: false },
      { name: 'Patatim (whole)', description: 'A Filipino-Chinese braised pork leg dish with steamed bok choy (Good for 5-6 persons)', price: '₱995', featured: false, toDisplay: false },
      { name: 'Crispy Pata', description: 'Savory Filipino dish of deep-fried pork knuckles', price: '₱970', featured: true, image: ph2, toDisplay: false },
      { name: 'Pancit Guisado', description: 'With chicken, shrimp, squid balls, vegetables, and mushrooms (Good for 5-6 persons)', price: '₱365', featured: false, toDisplay: false },
    ],
  },
  {
    category: 'Rice',
    items: [
      { name: 'Mix Chahan', description: 'Flavorful Japanese-style egg fried rice with meat and vegetable', price: '₱255', featured: true, image: ph1, toDisplay: false },
      { name: 'Sambal Fried Rice', description: 'Fried rice with shrimp, squid, fish, egg, and sambal sauce', price: '₱255', featured: true, image: ph2, toDisplay: false },
      { name: 'Garlic Rice', description: 'Fried garlic rice', price: '₱55', featured: false, toDisplay: false },
      { name: 'Plain Rice', description: 'Steamed white rice', price: '₱50', featured: false, toDisplay: false },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: "Arca's Docto Pie Ala Mode", description: '', price: '₱135', featured: true, image: ph1, toDisplay: false },
      { name: 'Carrot Pie Ala Mode', description: '', price: '₱135', featured: false, toDisplay: false },
      { name: 'Rhubarb Pie Ala Mode', description: 'Seasonal', price: '₱190', featured: false, toDisplay: false },
      { name: 'Baked Blueberry Cheesecake', description: '', price: '₱170', featured: true, image: ph2, toDisplay: false },
      { name: 'Yogurt with Wild Honey', description: '', price: '₱145', featured: false, toDisplay: false },
      { name: 'Mais Con Yelo', description: '', price: '₱125', featured: false, toDisplay: false },
      { name: 'Camote Ice Cream', description: '', price: '₱135', featured: false, toDisplay: false },
      { name: 'Banana Split', description: '', price: '₱200', featured: true, image: ph3, toDisplay: false },
      { name: "Potenciana's Dessert", description: '', price: '₱170', featured: false, toDisplay: false },
      { name: 'Ginataang Bilo-Bilo', description: '', price: '₱145', featured: false, toDisplay: false },
    ],
  },
  {
    category: 'Coffee',
    items: [
      { name: 'Benguet Coffee', description: 'Available hot or iced', price: '₱90', featured: true, image: ph3, toDisplay: false },
      { name: 'Espresso (Double)', description: 'Available hot or iced', price: '₱120', featured: false, toDisplay: false },
      { name: 'Americano', description: 'Available hot or iced', price: '₱105', featured: false, toDisplay: false },
      { name: 'Cappuccino', description: 'Available hot or iced', price: '₱120', featured: true, image: ph1, toDisplay: false },
      { name: 'Latte', description: 'Available hot or iced', price: '₱125', featured: false, toDisplay: false },
    ],
  },
  {
    category: 'Non-Coffee & Tea',
    items: [
      { name: 'Cacao Hot Chocolate', description: '', price: '₱95', featured: true, image: ph2, toDisplay: false },
      { name: 'Bottled Water', description: '', price: '₱35', featured: false, toDisplay: false },
      { name: 'Soda Float', description: '', price: '₱120', featured: false, toDisplay: false },
      { name: "Arca's Cloud Tea", description: '', price: '₱85', featured: true, image: ph3, toDisplay: false },
      { name: 'Tarragon', description: '', price: '₱85', featured: false, toDisplay: false },
      { name: 'Lemongrass', description: '', price: '₱85', featured: false, toDisplay: false },
      { name: 'Lemongrass Teapot', description: '', price: '₱150', featured: false, toDisplay: false },
      { name: 'Iced Tea', description: '', price: '₱80', featured: false, toDisplay: false },
      { name: 'Iced Tea Pitcher', description: '', price: '₱210', featured: false, toDisplay: false },
    ],
  },
  {
    category: 'Smoothies & Milkshakes',
    items: [
      { name: 'Strawberry Milkshake', description: '', price: '₱150', featured: true, image: ph1, toDisplay: false },
      { name: 'Chocolate Milkshake', description: '', price: '₱150', featured: false, toDisplay: false },
      { name: 'Vanilla Milkshake', description: '', price: '₱150', featured: false, toDisplay: false },
      { name: 'Vanilla Oreo Milkshake', description: '', price: '₱155', featured: false, toDisplay: false },
      { name: 'Mango Smoothie', description: '', price: '₱145', featured: true, image: ph2, toDisplay: false },
      { name: 'Strawberry Smoothie', description: '', price: '₱145', featured: false, toDisplay: false },
      { name: 'Avocado Smoothie', description: 'Seasonal', price: '₱135', featured: false, toDisplay: false },
      { name: 'Banana Smoothie', description: '', price: '₱120', featured: false, toDisplay: false },
      { name: 'Pineapple Smoothie', description: 'Seasonal', price: '₱120', featured: false, toDisplay: false },
      { name: 'Cucumber Smoothie', description: '', price: '₱115', featured: false, toDisplay: false },
    ],
  },
  {
    category: 'Soft Drinks',
    items: [
      { name: 'Sprite', description: '', price: '₱70', featured: false, toDisplay: false },
      { name: 'Royal', description: '', price: '₱70', featured: false, toDisplay: false },
      { name: 'Root Beer', description: '', price: '₱70', featured: false, toDisplay: false },
      { name: 'Coke (Regular/Zero)', description: '', price: '₱70', featured: false, toDisplay: false },
    ],
  },
]

export function getFeaturedItems(): MenuItem[] {
  return menuItems.flatMap((section) =>
    section.items.filter((item) => item.featured && item.image)
  )
}

export function getDisplayItems(): MenuItem[] {
  return menuItems.flatMap((section) =>
    section.items.filter((item) => item.toDisplay && item.image)
  )
}
