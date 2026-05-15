import React from 'react';
import { CheckCircle, Globe, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveButton from '../../components/InteractiveButton';
import TrustedPartners from '../../components/TrustedPartners';

const GlobalCapabilityPage: React.FC = () => {
  const benefits = [
    "Strategic business functions beyond just development",
    "Access to specialized skills and domain expertise",
    "Innovation hubs that drive business transformation",
    "Cost optimization with enhanced value delivery",
    "24/7 global operations and support capabilities",
    "Scalable centers that grow with your business needs"
  ];

  const services = [
    {
      title: "Innovation Centers",
      description: "Dedicated innovation hubs focused on research, development, and emerging technologies.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Business Process Centers",
      description: "Comprehensive business process management including finance, HR, and operations.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Analytics & Insights Centers",
      description: "Specialized centers focused on data analytics, business intelligence, and strategic insights.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Customer Experience Centers",
      description: "Dedicated centers for customer support, experience design, and relationship management.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
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
                Global Capability
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Centers (GCC)
                </span>
              </h1>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                Establish strategic global capability centers that go beyond traditional outsourcing. Create innovation hubs, business process centers, and specialized capabilities that drive your business forward.
              </p>
              <Link to="/contact">
                <InteractiveButton size="large">
                  <Globe className="w-5 h-5 mr-2" />
                  Build Your GCC
                </InteractiveButton>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Global Capability Centers"
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
              Why Global Capability Centers?
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Transform your global operations with strategic capability centers that deliver innovation, efficiency, and competitive advantage.
            </p>
          </div>

          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Global Capability Centers (GCCs) represent the evolution of traditional offshore models into strategic business units that drive innovation, efficiency, and competitive advantage. Unlike conventional outsourcing arrangements, GCCs function as integral parts of your organization, handling complex business processes, driving innovation initiatives, and contributing to strategic decision-making while leveraging global talent and cost advantages.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Our GCC services help you establish and operate world-class capability centers that go beyond cost arbitrage to deliver strategic value through innovation, process excellence, and specialized expertise. We support the entire GCC lifecycle, from initial strategy and location selection to talent acquisition, infrastructure setup, and ongoing operations management, ensuring that your centers become true drivers of business transformation and growth.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Whether you're looking to establish innovation labs, analytics centers of excellence, customer experience hubs, or comprehensive business process centers, we provide the expertise and infrastructure necessary to create high-performing global operations. Our GCC model enables you to access specialized skills, drive innovation, improve operational efficiency, and achieve significant cost optimization while maintaining the highest standards of quality and governance.
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
              Our GCC Services
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Strategic global capability centers designed to drive innovation and business transformation.
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
          <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to Build Your Global Capabilities?</h2>
          <p className="text-xl font-light mb-10 max-w-2xl mx-auto text-gray-300">
            Let's create strategic capability centers that drive innovation and transform your business operations.
          </p>
          <Link to="/contact">
            <InteractiveButton size="large" variant="light">
              <Target className="w-5 h-5 mr-2" />
              Start Your GCC Journey
            </InteractiveButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GlobalCapabilityPage;