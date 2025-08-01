import React from 'react';

interface HeroProps {
  onExploreServices?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreServices }) => {
  const handleExploreClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
      const serviceCards = servicesSection.querySelectorAll('.service-card');
      serviceCards.forEach((card) => {
        card.classList.add('highlight-service');
        setTimeout(() => {
          card.classList.remove('highlight-service');
        }, 1500);
      });
    }
    onExploreServices?.();
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1600x600/?technology')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Expert EDI Solutions for Modern Business
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Streamline your B2B communications with professional Electronic Data Interchange services. 
              From integration to support, I deliver reliable EDI solutions that scale with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleExploreClick}
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg whitespace-nowrap cursor-pointer"
              >
                Explore Services
              </button>
              <a href="https://readdy.ai/home/aec37330-aa43-4a47-8af2-011fbab00f24/d15af0bf-3208-40fd-82d2-f274ed7af990" data-readdy="true">
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors text-lg whitespace-nowrap cursor-pointer">
                  View Case Studies
                </button>
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://source.unsplash.com/1600x600/?technology"
              alt="EDI Solutions"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;