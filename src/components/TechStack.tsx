import React from 'react';

interface Technology {
  name: string;
  category: string;
}

const TechStack: React.FC = () => {
  const techStack: Technology[] = [
    { name: "EDIFACT", category: "Standards" },
    { name: "X12", category: "Standards" },
    { name: "AS2", category: "Protocols" },
    { name: "SFTP", category: "Protocols" },
    { name: "VAN", category: "Networks" },
    { name: "API", category: "Integration" },
    { name: "XML", category: "Formats" },
    { name: "JSON", category: "Formats" }
  ];

  return (
    <section id="tools" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Working with industry-standard EDI technologies and protocols to ensure seamless integration and reliable data exchange.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors cursor-pointer">
              <div className="text-blue-600 text-3xl mb-3">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
              <p className="text-sm text-gray-600">{tech.category}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
            Learn More About Technologies
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStack;