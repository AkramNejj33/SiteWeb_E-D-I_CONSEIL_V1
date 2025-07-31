import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', newsletterEmail);
    setNewsletterEmail('');
    // Ici, vous pourriez intégrer avec un service de newsletter
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <i className="fas fa-network-wired mr-2"></i>
              EDI Expert
            </div>
            <p className="text-gray-400 mb-4">
              Professional EDI solutions for modern businesses. Streamline your B2B communications with expert integration services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white cursor-pointer">EDI Integration</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Partner Onboarding</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Data Mapping</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">System Migration</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Technical Support</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white cursor-pointer">Case Studies</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Blog</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Documentation</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">FAQ</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Support</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with EDI insights and industry news.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                required
              />
              <button 
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors ml-2 whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2025 EDI Expert. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white cursor-pointer">Privacy Policy</a>
            <a href="#" className="hover:text-white cursor-pointer">Terms of Service</a>
            <a href="#" className="hover:text-white cursor-pointer">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;