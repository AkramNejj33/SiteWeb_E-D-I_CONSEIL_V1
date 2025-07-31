import React from 'react';

interface Service {
  icon: string;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: "fas fa-exchange-alt",
      title: "EDI Integration",
      description: "Seamless integration of EDI systems with your existing business applications and workflows."
    },
    {
      icon: "fas fa-handshake",
      title: "Partner Onboarding",
      description: "Complete trading partner setup, testing, and certification for smooth B2B communications."
    },
    {
      icon: "fas fa-map",
      title: "Data Mapping",
      description: "Expert mapping services for EDIFACT, X12, and custom document formats."
    },
    {
      icon: "fas fa-cloud-upload-alt",
      title: "System Migration",
      description: "Safe and efficient migration from legacy EDI systems to modern cloud-based solutions."
    },
    {
      icon: "fas fa-tools",
      title: "Technical Support",
      description: "24/7 monitoring, troubleshooting, and maintenance of your EDI infrastructure."
    },
    {
      icon: "fas fa-cogs",
      title: "Custom Solutions",
      description: "Tailored EDI solutions designed to meet your specific business requirements."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">EDI Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive EDI solutions tailored to your business needs, from initial setup to ongoing support and optimization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-blue-600 text-3xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                Learn More <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;