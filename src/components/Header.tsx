import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Digital Transformation', href: '/services/digital-transformation' },
    { name: 'Data Engineering', href: '/services/data-engineering' },
    { name: 'Analytics & Intelligence', href: '/services/analytics-intelligence' },
    { name: 'AI Solutions', href: '/services/ai-solutions' },
    { name: 'Staff Augmentation', href: '/services/staff-augmentation' },
    { name: 'Managed Services', href: '/services/managed-services' },
    { name: 'Offshore Development Centers (ODC)', href: '/services/offshore-development' },
    { name: 'Global Capability Centers (GCC)', href: '/services/global-capability' }
  ];

  const industries = [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: ' Banking Services', href: '/industries/financial-services' },
    { name: 'Professional Services', href: '/industries/professional-services' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Insurance ', href: '/industries/insurance-services' },
        { name: 'Manufacturing ', href: '/industries/Manufacturing' }

  ];

  const navigation = [
    // moved to the left
    { name: 'Services', href: '/services', dropdown: services },
    { name: 'Industries', href: '/industries', dropdown: industries },
    { name: 'Who We Are', href: '/about' },
    { name: 'Careers', href: '/careers' },
     { name: 'Get in Touch', href: '/contact' }
  ];

  return (
   <header
  className="fixed top-0 left-0 right-0 z-50 shadow-sm"
  style={{ backgroundColor: '#D7D9DD' }} // light grey from your image
>
  <div
    className={`transition-all duration-500 ${
      isScrolled
        ? 'backdrop-blur-xl shadow-lg py-1'
        : 'py-2'
    }`}
    style={{
      backgroundColor: isScrolled
        ? 'rgba(215, 217, 221, 0.95)'
        : '#D7D9DD',
    }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-4 group cursor-pointer">
          <img
            src={`${import.meta.env.BASE_URL}img1.png`}
            alt="Sri Vaarahi Global Solutions"
            className="h-20 w-auto group-hover:scale-105 transition-transform duration-300"
          />

          <div className="flex flex-col">
            <span
              className="text-2xl font-bold transition-colors duration-300"
              style={{ color: '#1E6BC8' }}
            >
              Sri Vaarahi Global Solutions
            </span>

            <span className="text-sm font-light text-cyan-700 uppercase tracking-wide animate-bounce-slow">
              INNOVATION IN TECHNOLOGY. EMPOWERING YOUR VISION.
            </span>
          </div>

            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredMenu(item.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <Link
                    to={item.href}
                    className={`relative font-light text-base transition-all duration-300 group flex items-center ${
                      item.name === 'Get in Touch'
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-500 hover:to-blue-700 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1 font-medium'
                        : ''
                    } ${
                      location.pathname === item.href ||
                      (item.dropdown &&
                        item.dropdown.some(
                          (sub) => location.pathname === sub.href
                        ))
                        ? 'text-cyan-400'
                        : 'text-slate-700 hover:text-cyan-400'
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                    {item.name !== 'Get in Touch' && (
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                          location.pathname === item.href ||
                          (item.dropdown &&
                            item.dropdown.some(
                              (sub) => location.pathname === sub.href
                            ))
                            ? 'w-full'
                            : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-4 z-50 transition-all duration-300 ${
                        hoveredMenu === item.name
                          ? 'opacity-100 visible'
                          : 'opacity-0 invisible'
                      }`}
                      onMouseEnter={() => setHoveredMenu(item.name)}
                      onMouseLeave={() => setHoveredMenu(null)}
                    >
                      <div className="px-4 py-2">
                        <h3 className="text-sm font-medium text-slate-800 mb-3 border-b border-gray-100 pb-2">
                          {item.name}
                        </h3>
                        <div className="space-y-2">
                          {item.dropdown.map((subItem, index) => (
                            <Link
                              key={index}
                              to={subItem.href}
                              className="block px-3 py-2 text-sm font-light text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-md transition-all duration-200"
                              onClick={() => setHoveredMenu(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute top-0 left-0 w-full h-0.5 bg-slate-800 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 top-3' : ''
                  }`}
                ></span>
                <span
                  className={`absolute top-3 left-0 w-full h-0.5 bg-slate-800 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`absolute top-6 left-0 w-full h-0.5 bg-slate-800 transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 top-3' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b transition-all duration-500 ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block font-light text-base py-2 transition-colors duration-300 ${
                      item.name === 'Get in Touch'
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 py-3 rounded-lg text-center font-medium shadow-lg'
                        : ''
                    } ${
                      location.pathname === item.href
                        ? 'text-cyan-400'
                        : 'text-slate-700 hover:text-cyan-400'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem, index) => (
                        <Link
                          key={index}
                          to={subItem.href}
                          className="block text-xs font-light text-slate-600 py-1 hover:text-cyan-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

