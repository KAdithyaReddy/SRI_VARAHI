import React from 'react';
import { CheckCircle, ShoppingCart, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveButton from '../../components/InteractiveButton';
import TrustedPartners from '../../components/TrustedPartners';

const RetailPage: React.FC = () => {
  const benefits = [
    "Omnichannel commerce solutions",
    "Customer experience optimization",
    "Inventory management and analytics",
    "PCI-compliant payment processing",
    "Real-time sales and performance tracking",
    "Scalable e-commerce platforms"
  ];

  const services = [
    {
      title: "E-commerce Platforms",
      description: "Scalable, secure e-commerce solutions that provide seamless shopping experiences across all channels.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Point of Sale Systems",
      description: "Modern POS systems that integrate online and offline sales channels for unified retail operations.",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Inventory Management",
      description: "Real-time inventory tracking and management systems that optimize stock levels and reduce costs.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Customer Analytics",
      description: "Advanced customer analytics and personalization engines that drive sales and improve customer loyalty.",
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
                Retail
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Technology
                </span>
              </h1>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                Omnichannel retail technology solutions that enhance customer experience, optimize operations, and drive sales growth in today's competitive retail landscape.
              </p>
              <Link to="/contact">
                <InteractiveButton size="large">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Transform Your Retail Operations
                </InteractiveButton>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Retail Technology"
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
              Why Retailers Choose Our Solutions
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Advanced retail technology solutions that drive customer engagement, optimize operations, and increase profitability.
            </p>
          </div>

          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                The retail industry is experiencing unprecedented transformation driven by changing consumer expectations, omnichannel shopping behaviors, and the need for seamless integration between online and offline experiences. Our retail technology solutions help retailers navigate this complex landscape by providing integrated platforms that unify customer data, inventory management, and sales channels while delivering personalized shopping experiences that drive customer loyalty and revenue growth.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                We understand that modern retail success requires more than just transactional capabilities—it demands deep customer insights, real-time inventory visibility, and the ability to deliver consistent experiences across all touchpoints. Our solutions leverage advanced analytics, artificial intelligence, and cloud technologies to provide retailers with comprehensive visibility into customer behavior, inventory levels, and business performance while enabling rapid adaptation to market changes and consumer trends.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                From e-commerce platforms and point-of-sale systems to inventory management and customer analytics solutions, we provide end-to-end retail technology solutions that support the entire customer journey. Our focus on scalability, performance, and user experience ensures that our solutions can handle peak shopping periods while providing the insights and automation necessary for competitive advantage in today's dynamic retail environment.
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
              Our Retail Technology Solutions
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Comprehensive retail technology solutions designed for modern omnichannel commerce and customer experience.
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
          <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to Revolutionize Your Retail Experience?</h2>
          <p className="text-xl font-light mb-10 max-w-2xl mx-auto text-gray-300">
            Let's discuss how our retail technology solutions can enhance customer experience and drive business growth.
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

export default RetailPage;