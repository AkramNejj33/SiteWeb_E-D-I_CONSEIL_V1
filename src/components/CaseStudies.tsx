import React from 'react';

interface CaseStudy {
  industry: string;
  challenge: string;
  solution: string;
  result: string;
}

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      industry: "Automotive",
      challenge: "Legacy EDI system modernization",
      solution: "Cloud-based EDI platform migration",
      result: "40% reduction in processing time"
    },
    {
      industry: "Retail",
      challenge: "Multi-partner integration complexity",
      solution: "Centralized EDI hub implementation",
      result: "99.9% transaction accuracy"
    },
    {
      industry: "Healthcare",
      challenge: "HIPAA-compliant EDI requirements",
      solution: "Secure AS2 communication setup",
      result: "100% compliance achieved"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world examples of successful EDI implementations and the measurable results achieved for clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
              <img
                src={`https://readdy.ai/api/search-image?query=modern%20business%20office%20environment%20with%20digital%20technology%20and%20data%20processing%20systems%20professional%20clean%20background&width=400&height=250&seq=case-${index + 1}&orientation=landscape`}
                alt={`${study.industry} Case Study`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-blue-600 text-sm font-medium mb-2">{study.industry}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{study.challenge}</h3>
                <p className="text-gray-600 mb-4">{study.solution}</p>
                <div className="text-green-600 font-semibold">{study.result}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;