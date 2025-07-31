import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onServiceHighlight?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onServiceHighlight }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const languageSelector = document.getElementById('language-selector');
      if (languageSelector && !languageSelector.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleServicesClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
      onServiceHighlight?.();
    }
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              <i className="fas fa-network-wired mr-2"></i>
              E-D-I CONSEIL
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">About</a>
            <button onClick={handleServicesClick} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Services</button>
            <a href="#case-studies" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Case Studies</a>
            <a href="#tools" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Tools</a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Blog</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                id="language-selector"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
              >
                {selectedLanguage} <i className={`fas fa-chevron-down ml-1 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <button
                    onClick={() => {
                      setSelectedLanguage('EN');
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      selectedLanguage === 'EN' ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
                    } hover:bg-blue-50 cursor-pointer`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setSelectedLanguage('FR');
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      selectedLanguage === 'FR' ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
                    } hover:bg-blue-50 cursor-pointer`}
                  >
                    Français
                  </button>
                </div>
              )}
            </div>
            
            <a href="https://readdy.ai/home/aec37330-aa43-4a47-8af2-011fbab00f24/a0e01c55-c961-4744-ada0-b75d307e352b" data-readdy="true">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                Schedule Consultation
              </button>
            </a>
            
            <button
              className="md:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="fas fa-bars text-gray-700"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;