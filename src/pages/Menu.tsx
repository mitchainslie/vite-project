export default function Menu() {
  const menuItems = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Bruschetta', description: 'Toasted bread with tomatoes and basil', price: '$8' },
        { name: 'Calamari', description: 'Crispy fried squid with marinara', price: '$12' },
        { name: 'Spring Rolls', description: 'Fresh vegetables wrapped in rice paper', price: '$10' },
      ],
    },
    {
      category: 'Main Courses',
      items: [
        { name: 'Grilled Salmon', description: 'Fresh salmon with seasonal vegetables', price: '$24' },
        { name: 'Beef Tenderloin', description: 'Premium cut with garlic butter', price: '$32' },
        { name: 'Vegetarian Pasta', description: 'Penne with roasted vegetables', price: '$18' },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Chocolate Cake', description: 'Rich chocolate with cream', price: '$9' },
        { name: 'Tiramisu', description: 'Classic Italian dessert', price: '$10' },
        { name: 'Ice Cream', description: 'Vanilla, chocolate, or strawberry', price: '$6' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Menu Header */}
      <section className="pt-16 bg-wood-500 text-white">
        <div className="container mx-auto px-8 tablet:px-6 mobile:px-4 py-20 tablet:py-16 mobile:py-12 text-center">
          <h1 className="text-6xl tablet:text-5xl mobile:text-4xl font-bold mb-6 tablet:mb-4">
            Our Menu
          </h1>
          <p className="text-xl tablet:text-lg mobile:text-base max-w-2xl mx-auto">
            Discover our carefully crafted selection of dishes made with the finest ingredients
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20">
        <div className="container mx-auto px-8 tablet:px-6 mobile:px-4">
          {menuItems.map((section, index) => (
            <div key={index} className="mb-16 mobile:mb-12">
              <h2 className="text-4xl mobile:text-3xl font-bold text-wood-600 mb-8 mobile:mb-6 border-b-2 border-wood-300 pb-4">
                {section.category}
              </h2>
              <div className="grid grid-cols-2 tablet:grid-cols-1 gap-8 tablet:gap-6">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white p-8 tablet:p-6 rounded-xl shadow-md hover:shadow-xl transition"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl mobile:text-xl font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <span className="text-2xl mobile:text-xl font-bold text-wood-500">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-base mobile:text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-wood-900 text-white">
        <div className="container mx-auto px-8 tablet:px-6 mobile:px-4 text-center">
          <h2 className="text-4xl mobile:text-3xl font-bold mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl tablet:text-lg mobile:text-base mb-8 max-w-2xl mx-auto">
            Visit us today or make a reservation to experience our delicious menu
          </p>
          <button className="px-8 tablet:px-6 py-3 bg-white text-wood-900 rounded-lg hover:bg-gray-100 transition shadow-lg text-lg font-semibold">
            Make a Reservation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-wood-950 text-white">
        <div className="container mx-auto px-8 tablet:px-6 mobile:px-4 text-center">
          <p className="text-base mobile:text-sm">&copy; 2026 My Brand. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
