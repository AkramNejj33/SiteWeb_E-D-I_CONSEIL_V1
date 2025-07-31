import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

const About: React.FC = () => {
  const features: Feature[] = [
    {
      icon: "fas fa-award",
      title: "Proven Expertise",
      description: "Over 10 years of experience in EDI implementation and B2B integration solutions."
    },
    {
      icon: "fas fa-clock",
      title: "Fast Implementation",
      description: "Efficient project delivery with minimal disruption to your business operations."
    },
    {
      icon: "fas fa-headset",
      title: "24/7 Support",
      description: "Continuous monitoring and support to ensure your EDI systems run smoothly."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Security First",
      description: "Industry-standard security protocols and compliance with data protection regulations."
    }
  ];

  const stats: Stat[] = [
    { value: "10+", label: "Years Experience" },
    { value: "200+", label: "Projects Completed" },
    { value: "99%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://readdy.ai/api/search-image?query=professional%20business%20consultant%20working%20with%20digital%20technology%20and%20data%20analytics%20in%20modern%20office%20environment%20with%20clean%20lighting&width=600&height=400&seq=about-img-001&orientation=landscape"
              alt="Professional EDI Expert"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose My EDI Services</h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-blue-600 text-2xl mr-4 mt-1">
                    <i className={feature.icon}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;