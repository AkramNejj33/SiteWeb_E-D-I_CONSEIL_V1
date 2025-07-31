import React from 'react';

const ClientLogos: React.FC = () => {
  const companies = ['microsoft', 'amazon', 'google', 'apple', 'facebook', 'netflix'];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Trusted by Leading Companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer text-center">
                <i className={`fab fa-${company} text-4xl`}></i>
                <div className="text-sm mt-2 capitalize">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;