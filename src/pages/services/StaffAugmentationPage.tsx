import React from 'react';
import { CheckCircle, Users, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveButton from '../../components/InteractiveButton';
import TrustedPartners from '../../components/TrustedPartners';

const StaffAugmentationPage: React.FC = () => {
  const benefits = [
    "Access to specialized technical expertise on-demand",
    "Faster project delivery and time-to-market",
    "Cost-effective scaling without long-term commitments",
    "Reduced recruitment and training overhead",
    "Flexible team composition based on project needs",
    "Knowledge transfer and skill development for internal teams"
  ];

  const services = [
    {
      title: "Software Development Teams",
      description: "Experienced developers in various technologies to accelerate your software projects.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Data & Analytics Specialists",
      description: "Data scientists, analysts, and engineers to unlock insights from your data.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Cloud & DevOps Engineers",
      description: "Cloud architects and DevOps specialists to modernize your infrastructure.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Project Management",
      description: "Experienced project managers to ensure successful delivery of your initiatives.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
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
                Staff Augmentation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Services
                </span>
              </h1>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                Scale your team with top-tier technical talent. Our staff augmentation services provide you with skilled professionals who integrate seamlessly with your existing team to accelerate project delivery.
              </p>
              <Link to="/contact">
                <InteractiveButton size="large">
                  <Users className="w-5 h-5 mr-2" />
                  Find Your Perfect Team
                </InteractiveButton>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Staff Augmentation"
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
              Why Choose Staff Augmentation?
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Get the right talent at the right time to accelerate your projects and achieve your business objectives.
            </p>
          </div>

          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                In today's competitive technology landscape, finding and retaining top-tier technical talent is one of the biggest challenges facing organizations. Our staff augmentation services provide you with immediate access to skilled professionals who can seamlessly integrate with your existing teams and contribute to your projects from day one. We maintain a carefully curated network of experienced developers, architects, data scientists, and project managers who are ready to support your initiatives.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Our staff augmentation model offers the flexibility to scale your team up or down based on project requirements, market conditions, and business priorities. Whether you need specialized expertise for a short-term project or long-term support for ongoing initiatives, our professionals bring the skills and experience necessary to accelerate your development cycles and improve project outcomes while reducing the overhead associated with traditional hiring processes.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                We take pride in our rigorous vetting process that ensures every professional we place meets the highest standards of technical competency, communication skills, and cultural fit. Our team members are not just skilled technologists—they are collaborative partners who understand your business objectives and work diligently to help you achieve them while maintaining the highest standards of quality and professionalism.
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
              Our Staff Augmentation Services
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Access specialized talent across various technology domains to strengthen your team capabilities.
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
          <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to Scale Your Team?</h2>
          <p className="text-xl font-light mb-10 max-w-2xl mx-auto text-gray-300">
            Let's discuss your staffing needs and find the perfect talent to accelerate your projects.
          </p>
          <Link to="/contact">
            <InteractiveButton size="large" variant="light">
              <Target className="w-5 h-5 mr-2" />
              Get Started Today
            </InteractiveButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StaffAugmentationPage;