import heroImage from '../assets/images/MAG01755.jpg'

export default function Landing() {
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
                Welcome to Our
                <span className="text-white block">Amazing Landing Page</span>
              </h1>
              <p className="text-xl tablet:text-lg mobile:text-base text-white mb-8 tablet:mb-6">
                Discover the perfect blend of design and functionality with our
                responsive layout.
              </p>
              <div className="flex flex-row tablet:flex-col gap-4 justify-start tablet:justify-center">
                <button className="px-8 tablet:px-6 py-3 bg-wood-500 text-white rounded-lg hover:bg-wood-800 transition shadow-lg cursor-pointer">
                  Get Started
                </button>
                <button className="px-8 tablet:px-6 py-3 bg-wood-500 text-white rounded-lg hover:bg-wood-800 transition shadow-lg cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white h-screen snap-center">
        <div className="container mx-auto px-8 tablet:px-6 mobile:px-4">
          <h2 className="text-4xl mobile:text-3xl font-bold text-center mb-12 text-gray-900">
            Our Services
          </h2>
          <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-8 tablet:gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="p-8 tablet:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition"
              >
                <div className="w-16 h-16 mobile:w-12 mobile:h-12 bg-wood-500 rounded-lg mb-4"></div>
                <h3 className="text-2xl mobile:text-xl font-semibold mb-3">Service {item}</h3>
                <p className="text-gray-600 text-base mobile:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-wood-900 text-white">
        <div className="container mx-auto px-8 tablet:px-6 mobile:px-4 text-center">
          <p className="text-base mobile:text-sm">&copy; 2026 My Brand. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
