import React, { useState } from 'react';

interface Testimonial {
  name: string;
  company: string;
  quote: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      quote: "Outstanding EDI integration expertise. Our B2B transactions are now seamless and error-free.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Global Manufacturing Inc",
      quote: "Professional, reliable, and delivered on time. Highly recommend for complex EDI projects.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      company: "Retail Dynamics",
      quote: "Transformed our supply chain operations. The ROI was evident within the first quarter.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600">What clients say about working with me</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center">
              <div className="text-yellow-400 text-2xl mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="flex items-center justify-center">
                <img
                  src={`/placeholder-avatar.jpg`}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;