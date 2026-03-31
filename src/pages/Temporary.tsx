import heroImage from '../assets/images/MAG01756.jpg'

export default function Temporary() {  
  return (
    <div className="h-screen bg-gray-50 overflow-y-scroll snap-y snap-proximity scroll-smooth scroll-container">
      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 h-screen bg-cover bg-center flex items-center snap-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="order-1 lg:order-1 text-center lg:text-center p-5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
                Something good is brewing...
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
