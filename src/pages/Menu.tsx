export default function Menu() {
  const menuItems = [
    {
      category: 'Soups & Salads',
      items: [
        { name: 'Miso Soup', description: 'Japanese soup with soya beans, tofu and wakame', price: '₱110' },
        { name: 'Pumpkin Soup', description: 'Classic soup made from creamy fresh pumpkin', price: '₱110' },
        { name: 'Potato Leek Soup', description: 'Vegetable soup made with fresh potatoes and onion leeks', price: '₱110' },
        { name: 'Cream of Mushroom Soup', description: 'A classic made with fresh button mushrooms and cream', price: '₱125' },
        { name: 'Oriental Salad', description: "Seasonal fruits on a bed of lettuce with Arca's signature dressing", price: '₱300' },
        { name: "Arca's Greek Salad", description: 'A medley of olives, arugula, feta cheese with alfalfa sprouts', price: '₱320' },
      ],
    },
    {
      category: 'Appetizers',
      items: [
        { name: 'Calamares', description: 'Breaded fried squid served with homemade dip', price: '₱265' },
        { name: 'Crispy Adobo Flakes', description: 'Deep fried shredded pork adobo', price: '₱250' },
        { name: 'Chicharon Bulaklak', description: 'Crispy pork ruffles seasoned and served golden brown', price: '₱265' },
        { name: 'Spicy Sambal', description: 'Stir-fried squid with spicy sambal sauce', price: '₱265' },
        { name: 'Spicy Fish', description: 'Deep fried fish fillet with sweet and spicy sauce', price: '₱210' },
        { name: 'Cheese Burger', description: '1/3 pounder ground beef with honey mustard sauce and french fries', price: '₱285' },
        { name: 'French Fries', description: 'Deep-fried potato strips', price: '₱180' },
        { name: 'Camote Fries', description: 'Freshly sliced sweet potato fries', price: '₱180' },
      ],
    },
    {
      category: 'All-Day Breakfast',
      items: [
        { name: 'Longganisa', description: 'Garlic longganisa served with sunny side up egg and plain or garlic rice', price: '₱250' },
        { name: 'Arroz Ala Cubana', description: 'Spanish-inspired dish made of ground meat, fried sweet plantain, sunny side up egg, and plain or garlic rice', price: '₱315' },
        { name: 'Bacon and Egg', description: 'Crispy bacon strips served with egg and plain or garlic rice', price: '₱250' },
        { name: 'Hungarian Sausage', description: 'Pan-grilled sausage served with bacon, egg, and plain or garlic rice', price: '₱320' },
        { name: 'French Toast', description: 'Thick-cut bread dipped in egg custard, pan-fried to golden perfection', price: '₱150' },
      ],
    },
    {
      category: 'Pasta',
      items: [
        { name: 'Carbonara', description: 'Classic linguine pasta in rich cream sauce with bacon, mushroom and parmesan', price: '₱235' },
        { name: 'Pesto Carbonara', description: 'Linguine pasta Carbonara with bacon, onions, garlic, and basil pesto, served with garlic bread', price: '₱250' },
        { name: "Arca's Spicy Tuna", description: "Spaghetti pasta with spicy tuna that's topped with cheddar cheese and served with garlic bread", price: '₱235' },
        { name: 'Basil Pesto Tuna', description: 'Spaghetti pasta with tuna, tomatoes, capers, olives, and basil pesto, served with garlic bread', price: '₱255' },
        { name: 'Chicken Alfredo', description: 'Cream based linguine pasta with chicken and broccoli, served with garlic bread', price: '₱250' },
        { name: 'Puttanesca', description: 'Italian spaghetti pasta with fresh tomato, capers, and black and green olives, served with garlic bread', price: '₱230' },
        { name: 'Seafood Marinara', description: 'Tomato based spaghetti pasta with squid, shrimps, and mussels, served with garlic bread', price: '₱295' },
        { name: 'Filipino Style Spaghetti', description: 'A filipino favorite pasta with ground beef in sweet tomato sauce, served with garlic bread', price: '₱240' },
      ],
    },
    {
      category: 'Pizza',
      items: [
        { name: 'Pepperoni Pizza', description: 'Cheese pizza with slices of pepperoni sausage', price: '₱315 (10") / ₱525 (12")' },
        { name: '4 Cheese Pizza', description: 'Ricotta, Cheddar, Parmesan and Mozzarella', price: '₱315 (10") / ₱525 (12")' },
        { name: 'Cheesy Hawaiian', description: 'Ricotta, Cheddar, Parmesan, Mozzarella, ham, and pineapple', price: '₱315 (10") / ₱525 (12")' },
        { name: 'Classic Hawaiian', description: 'Cheese pizza topped with ham and pineapple', price: '₱315 (10") / ₱525 (12")' },
        { name: 'Vegetarian Delight', description: 'Cheese pizza topped with onions, bell peppers, mushrooms, pineapple, and black olives', price: '₱315 (10") / ₱525 (12")' },
      ],
    },
    {
      category: 'Seafood',
      items: [
        { name: 'Fried Ambuklao Tilapia', description: "Deep-fried St. Peter's fish served with rice", price: '₱220' },
        { name: 'Buttered Tiger Prawns', description: 'Pan-seared tiger prawns in butter and garlic served with rice (Seasonal)', price: '₱480' },
        { name: 'Brazilian Salmon Stew', description: 'Salmon sautéed in spices and coconut milk, with rice', price: '₱465' },
        { name: 'Honey Glazed Salmon', description: 'Salmon glazed in orange, herbs, and wild honey, with rice', price: '₱455' },
        { name: 'Salmon Teppanyaki', description: 'Pan-fried pink salmon steak drizzled with unagi sauce served with miso soup and rice', price: '₱485' },
        { name: 'Ebi Tempura', description: 'Deep fried shrimp in tempura batter with tempura sauce (Good for 1-2 persons)', price: '₱395' },
        { name: 'Kani Tempura', description: 'Deep fried crab sticks in tempura batter with tempura sauce (Good for 1-2 persons)', price: '₱285' },
        { name: 'Dinengdeng', description: "An Ilocano stew with vegetables, shrimps, and fish sauce that's topped with fried St. Peter's fish or tilapia (Good for 1-2 persons)", price: '₱310' },
        { name: 'Daing na Bangus', description: 'Pan-fried seasoned boneless bangus (Good for 1-2 persons)', price: '₱295' },
        { name: "Arca's Bangus Ala Pobre", description: 'Pan-fried boneless Bangus seasoned and glazed in sauce (Good for 1-2 persons)', price: '₱295' },
      ],
    },
    {
      category: 'Mains',
      items: [
        { name: 'Crispy Adobo Flakes', description: 'Deep fried shredded pork adobo with special vinegar and rice', price: '₱285' },
        { name: 'Chicken Pork Adobo', description: 'A classic Filipino dish with chicken, pork, potatoes, and rice', price: '₱285' },
        { name: 'Bistek Tagalog', description: 'A Filipino Beef dish sauteed in garlic, onions and served with rice', price: '₱310' },
        { name: 'Pork Steak', description: 'Pan-seared, marinated tender pork served with rice or mashed potato', price: '₱335' },
        { name: 'Lechon Kawali', description: 'Scrumptious deep fried pork belly with rice', price: '₱320' },
        { name: 'Honey Buttered Chicken', description: 'Deep fried chicken with wild honey butter sauce and rice', price: '₱310' },
        { name: 'Crispy Lemon Orange Chicken', description: 'Savory chicken drizzled with a sweet and citrus sauce, served with rice', price: '₱290' },
        { name: 'Fried Chicken', description: 'Golden fried crispy chicken paired with savory gravy, served with rice', price: '₱285' },
        { name: 'Creamy Grilled Chicken', description: 'Chicken cooked in white wine, peppers, and cream, served with rice', price: '₱290' },
        { name: 'Beef Patty', description: 'Ground beef patty with spices, gravy, and served with rice', price: '₱235' },
        { name: 'Beef Teriyaki', description: 'Sauteed beef glazed in teriyaki sauce and served with rice', price: '₱310' },
        { name: 'Texas Pork Ribs', description: 'Pork ribs with homemade Texas sauce and served with rice', price: '₱395' },
        { name: 'Texas Beef Ribs', description: 'Beef ribs with homemade Texas sauce and served with rice', price: '₱415' },
        { name: 'Lamb Shoulder', description: 'Pan-seared, spice-marinated lamb with mint jelly and rice or mash potato (Priced per gram, please ask our staff for available cuts)', price: 'Per Gram' },
        { name: 'Rib-Eye Steak', description: 'Pan-seared, spice-marinated rib-eye served with rice or mashed potato (Priced per gram, please ask our staff for available cuts)', price: 'Per Gram' },
      ],
    },
    {
      category: 'For Sharing',
      items: [
        { name: 'Bulalo', description: 'Beef shank and bone marrow soup with vegetable and sweet corn (Good for 3-4 persons)', price: '₱495' },
        { name: 'Pork Humba', description: 'Spiced braised pork with salted black beans and fried sweet potato (Good for 2-3 persons)', price: '₱430' },
        { name: 'Stir-Fried Vegetables', description: 'Mixed seasonal vegetables with squid and mushroom (Good for 3-4 persons)', price: '₱310' },
        { name: 'Sinigang Na Salmon', description: 'A Filipino tangy stew with salmon head and belly (Good for 3-4 Persons)', price: '₱490' },
        { name: 'Patatim (sliced)', description: 'A Filipino-Chinese braised pork leg dish with steamed bok choy (Good for 2-3 persons)', price: '₱435' },
        { name: 'Patatim (whole)', description: 'A Filipino-Chinese braised pork leg dish with steamed bok choy (Good for 5-6 persons)', price: '₱995' },
        { name: 'Crispy Pata', description: 'Savory Filipino dish of deep-fried pork knuckles', price: '₱970' },
        { name: 'Pancit Guisado', description: 'With chicken, shrimp, squid balls, vegetables, and mushrooms (Good for 5-6 persons)', price: '₱365' },
      ],
    },
    {
      category: 'Rice',
      items: [
        { name: 'Mix Chahan', description: 'Flavorful Japanese-style egg fried rice with meat and vegetable', price: '₱255' },
        { name: 'Sambal Fried Rice', description: 'Fried rice with shrimp, squid, fish, egg, and sambal sauce', price: '₱255' },
        { name: 'Garlic Rice', description: 'Fried garlic rice', price: '₱55' },
        { name: 'Plain Rice', description: 'Steamed white rice', price: '₱50' },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { name: "Arca's Docto Pie Ala Mode", description: '', price: '₱135' },
        { name: 'Carrot Pie Ala Mode', description: '', price: '₱135' },
        { name: 'Rhubarb Pie Ala Mode', description: 'Seasonal', price: '₱190' },
        { name: 'Baked Blueberry Cheesecake', description: '', price: '₱170' },
        { name: 'Yogurt with Wild Honey', description: '', price: '₱145' },
        { name: 'Mais Con Yelo', description: '', price: '₱125' },
        { name: 'Camote Ice Cream', description: '', price: '₱135' },
        { name: 'Banana Split', description: '', price: '₱200' },
        { name: "Potenciana's Dessert", description: '', price: '₱170' },
        { name: 'Ginataang Bilo-Bilo', description: '', price: '₱145' },
      ],
    },
    {
      category: 'Coffee',
      items: [
        { name: 'Benguet Coffee', description: 'Available hot or iced', price: '₱90' },
        { name: 'Espresso (Double)', description: 'Available hot or iced', price: '₱120' },
        { name: 'Americano', description: 'Available hot or iced', price: '₱105' },
        { name: 'Cappuccino', description: 'Available hot or iced', price: '₱120' },
        { name: 'Latte', description: 'Available hot or iced', price: '₱125' },
      ],
    },
    {
      category: 'Non-Coffee & Tea',
      items: [
        { name: 'Cacao Hot Chocolate', description: '', price: '₱95' },
        { name: 'Bottled Water', description: '', price: '₱35' },
        { name: 'Soda Float', description: '', price: '₱120' },
        { name: "Arca's Cloud Tea", description: '', price: '₱85' },
        { name: 'Tarragon', description: '', price: '₱85' },
        { name: 'Lemongrass', description: '', price: '₱85' },
        { name: 'Lemongrass Teapot', description: '', price: '₱150' },
        { name: 'Iced Tea', description: '', price: '₱80' },
        { name: 'Iced Tea Pitcher', description: '', price: '₱210' },
      ],
    },
    {
      category: 'Smoothies & Milkshakes',
      items: [
        { name: 'Strawberry Milkshake', description: '', price: '₱150' },
        { name: 'Chocolate Milkshake', description: '', price: '₱150' },
        { name: 'Vanilla Milkshake', description: '', price: '₱150' },
        { name: 'Vanilla Oreo Milkshake', description: '', price: '₱155' },
        { name: 'Mango Smoothie', description: '', price: '₱145' },
        { name: 'Strawberry Smoothie', description: '', price: '₱145' },
        { name: 'Avocado Smoothie', description: 'Seasonal', price: '₱135' },
        { name: 'Banana Smoothie', description: '', price: '₱120' },
        { name: 'Pineapple Smoothie', description: 'Seasonal', price: '₱120' },
        { name: 'Cucumber Smoothie', description: '', price: '₱115' },
      ],
    },
    {
      category: 'Soft Drinks',
      items: [
        { name: 'Sprite', description: '', price: '₱70' },
        { name: 'Royal', description: '', price: '₱70' },
        { name: 'Root Beer', description: '', price: '₱70' },
        { name: 'Coke (Regular/Zero)', description: '', price: '₱70' },
      ],
    },
  ]

  return (
    <div className="h-screen bg-gray-50 overflow-y-scroll scroll-smooth scroll-container">
      {/* Menu Header */}
      <section className="pt-12 md:pt-16 bg-wood-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
            Arca's Yard Menu
          </h1>
          <p className="text-xs sm:text-sm mt-2 md:mt-3 opacity-90 px-2">
            *Please note 10% service charge additional to help support our team and maintain service quality
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          {menuItems.map((section, index) => (
            <div key={index} className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-wood-600 mb-4 sm:mb-6 md:mb-8 border-b-2 border-wood-300 pb-3 md:pb-4">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl shadow-md hover:shadow-xl transition"
                  >
                    <div className="flex justify-between items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 flex-1">
                        {item.name}
                      </h3>
                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-wood-500 whitespace-nowrap ml-2">
                        {item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
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
      <footer className="py-5 sm:py-6 md:py-8 bg-wood-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <p className="text-xs sm:text-sm md:text-base">&copy; 2026 Arca's Yard Café. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
