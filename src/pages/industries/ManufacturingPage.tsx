import React from 'react';
import { CheckCircle, Cog, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveButton from '../../components/InteractiveButton';
import TrustedPartners from '../../components/TrustedPartners';

const ManufacturingPage: React.FC = () => {
  const benefits = [
    "Industrial IoT and smart factory solutions",
    "Predictive maintenance and quality control",
    "Supply chain optimization and visibility",
    "Operational technology (OT) security",
    "Real-time production monitoring and analytics",
    "Automated workflow and process optimization"
  ];

  const services = [
    {
      title: "Smart Factory Solutions",
      description: "IoT-enabled manufacturing systems that optimize production efficiency and quality control.",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Predictive Maintenance",
      description: "AI-powered predictive maintenance solutions that reduce downtime and optimize equipment performance.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain visibility and optimization solutions for manufacturing operations.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Quality Management Systems",
      description: "Comprehensive quality control and assurance systems for manufacturing processes and products.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 mt-16 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 leading-tight">
                Manufacturing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Technology
                </span>
              </h1>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                Smart manufacturing solutions that optimize production, enhance quality control, and secure operational technology for modern industrial environments.
              </p>
              <Link to="/contact">
                <InteractiveButton size="large">
                  <Cog className="w-5 h-5 mr-2" />
                  Modernize Your Manufacturing
                </InteractiveButton>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Manufacturing Technology"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
              Why Manufacturers Choose Our Solutions
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Advanced manufacturing technology solutions that drive efficiency, quality, and competitive advantage.
            </p>
          </div>

          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                The manufacturing industry is undergoing a profound transformation driven by Industry 4.0 technologies, IoT integration, and the need for greater operational efficiency and quality control. Our manufacturing technology solutions help organizations embrace smart factory concepts, implement predictive maintenance strategies, and optimize supply chain operations while maintaining the highest standards of safety and quality.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                We understand the unique challenges facing modern manufacturers, from the need to integrate legacy systems with cutting-edge technologies to the requirement for real-time visibility into production processes and supply chain operations. Our solutions leverage industrial IoT sensors, advanced analytics, and machine learning algorithms to provide manufacturers with unprecedented insights into their operations and the ability to optimize performance in real-time.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Our comprehensive manufacturing solutions span the entire production lifecycle, from product design and planning to production execution and quality control. We help manufacturers implement smart factory technologies, develop predictive maintenance programs, optimize supply chain operations, and ensure compliance with industry regulations while reducing costs and improving overall equipment effectiveness (OEE).
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="font-light text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
              Our Manufacturing Solutions
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Comprehensive manufacturing technology solutions designed for Industry 4.0 and smart factory operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-light text-slate-800 mb-4">{service.title}</h3>
                  <p className="font-light text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <TrustedPartners />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-cyan-900"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to Build Your Smart Factory?</h2>
          <p className="text-xl font-light mb-10 max-w-2xl mx-auto text-gray-300">
            Let's discuss how our manufacturing solutions can optimize your operations and drive Industry 4.0 transformation.
          </p>
          <Link to="/contact">
            <InteractiveButton size="large" variant="light">
              <Shield className="w-5 h-5 mr-2" />
              Get Started Today
            </InteractiveButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingPage;