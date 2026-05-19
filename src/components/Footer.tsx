import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <div className="w-40 h-50 bg-white p-2 rounded-lg shadow-lg flex items-center justify-center">
                <img 
                 src={`${import.meta.env.BASE_URL}img1.png`}
                  alt="Sri Vaarahi Global Solutions" 
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Driving growth through digital transformation with innovative IT solutions and strategic partnerships.
            </p>
            <div className="flex space-x-4">
              <a href="" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors duration-300">Digital Transformation</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors duration-300">Data Engineering</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors duration-300">Analytics & Intelligence</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors duration-300">AI Solutions</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors duration-300">Staff Augmentation</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors duration-300">Managed Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors duration-300">Services</Link></li>
              <li><Link to="/industries" className="hover:text-cyan-400 transition-colors duration-300">Industries</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors duration-300">Who We Are</Link></li>
              <li><Link to="/careers" className="hover:text-cyan-400 transition-colors duration-300">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-300">
                <Phone className="w-5 h-5" />
                <span>+91 91542 79226</span>
              </div>
            <div className="flex items-start space-x-3 hover:text-cyan-400 transition-colors duration-300">
  <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
  
  <span className="leading-8">
    hr@srivaarahiglobalsolutions.com
  </span>
</div>
             <div className="flex items-start space-x-3 hover:text-cyan-400 transition-colors duration-300">
  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
  
  <span className="leading-8">
    P.No 33-34, Beta One Palace, Mithila Nagar, Kukatpally,
    Pragatinagar, Hyd, Hyderabad - 500090, Telangana
  </span>
</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              &copy; 2026 Sri Vaarahi Global Solutions. All rights reserved.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
