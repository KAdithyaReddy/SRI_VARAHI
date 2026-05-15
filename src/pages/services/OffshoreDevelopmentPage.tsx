import React from 'react';
import { CheckCircle, Globe, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveButton from '../../components/InteractiveButton';
import TrustedPartners from '../../components/TrustedPartners';

const OffshoreDevelopmentPage: React.FC = () => {
  const benefits = [
    "Cost-effective development without compromising quality",
    "Access to global talent pool and specialized skills",
    "24/7 development cycles across time zones",
    "Scalable teams that adapt to project requirements",
    "Reduced time-to-market for your products",
    "Focus on core business while we handle development"
  ];

  const services = [
    {
      title: "Dedicated Development Teams",
      description: "Full-time dedicated teams that work exclusively on your projects with complete transparency.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Product Development",
      description: "End-to-end product development from concept to deployment with agile methodologies.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Technology Consulting",
      description: "Strategic technology guidance and architecture design for your offshore development initiatives.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing and QA services to ensure your products meet the highest standards.",
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
                Offshore Development
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Centers (ODC)
                </span>
              </h1>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                Establish your own offshore development center with our expert teams. Get dedicated resources, cost savings, and accelerated development cycles while maintaining full control over your projects.
              </p>
              <Link to="/contact">
                <InteractiveButton size="large">
                  <Globe className="w-5 h-5 mr-2" />
                  Build Your ODC
                </InteractiveButton>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Offshore Development"
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
              Why Choose Offshore Development Centers?
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Leverage global talent and cost advantages while maintaining quality and control over your development projects.
            </p>
          </div>

          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Offshore Development Centers (ODCs) represent a strategic approach to software development that combines cost efficiency with access to global talent pools. Our ODC services help you establish dedicated development teams in cost-effective locations while maintaining full control over your projects, intellectual property, and development processes. This model provides significant cost savings without compromising on quality or communication standards.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                We specialize in setting up and managing ODCs that function as seamless extensions of your in-house teams. Our centers are equipped with state-of-the-art infrastructure, robust security measures, and experienced project managers who ensure smooth collaboration across time zones. We handle all aspects of center operations, from talent acquisition and team management to infrastructure maintenance and compliance, allowing you to focus on your core business objectives.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Our ODC model offers unparalleled flexibility in scaling your development capacity based on project requirements and business cycles. Whether you need a small specialized team for a specific project or a large development center for ongoing product development, we provide the infrastructure, talent, and management expertise necessary to deliver high-quality results while maintaining cost efficiency and operational excellence.
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
              Our ODC Services
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Comprehensive offshore development solutions tailored to your specific business requirements.
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
          <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to Establish Your ODC?</h2>
          <p className="text-xl font-light mb-10 max-w-2xl mx-auto text-gray-300">
            Let's discuss how an offshore development center can accelerate your projects and reduce costs.
          </p>
          <Link to="/contact">
            <InteractiveButton size="large" variant="light">
              <Users className="w-5 h-5 mr-2" />
              Start Your ODC Journey
            </InteractiveButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OffshoreDevelopmentPage;