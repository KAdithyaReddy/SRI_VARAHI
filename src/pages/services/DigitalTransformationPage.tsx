import React from 'react';
import { CheckCircle, ArrowRight, Zap, Target, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveButton from '../../components/InteractiveButton';
import TrustedPartners from '../../components/TrustedPartners';

const DigitalTransformationPage: React.FC = () => {
  const benefits = [
    "Accelerated time-to-market for new products and services",
    "Enhanced customer experience through digital touchpoints",
    "Improved operational efficiency and cost reduction",
    "Data-driven decision making capabilities",
    "Scalable and flexible technology infrastructure",
    "Competitive advantage through innovation"
  ];

  const services = [
    {
      title: "Strategy & Roadmap Development",
      description: "Comprehensive digital transformation strategy aligned with your business objectives.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Legacy System Modernization",
      description: "Transform outdated systems into modern, cloud-native solutions.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Process Automation",
      description: "Automate manual processes to improve efficiency and reduce errors.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Digital Customer Experience",
      description: "Create seamless digital experiences across all customer touchpoints.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    }
  ];

  const caseStudy = {
    title: "Manufacturing Company Digital Transformation",
    challenge: "A traditional manufacturing company needed to modernize their operations to compete in the digital marketplace.",
    solution: "We implemented a comprehensive digital transformation strategy including IoT integration, predictive analytics, and automated workflows.",
    results: [
      "40% increase in operational efficiency",
      "60% reduction in manual processes",
      "25% improvement in customer satisfaction",
      "ROI achieved within 18 months"
    ],
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 mt-16 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 leading-tight">
                Digital Transformation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Services
                </span>
              </h1>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                Transform your business with cutting-edge digital solutions that drive growth, improve efficiency, and create competitive advantages in today's digital economy.
              </p>
              <Link to="/contact">
                <InteractiveButton size="large">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Your Transformation
                </InteractiveButton>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Digital Transformation"
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
              Why Digital Transformation Matters
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Digital transformation is not just about technology—it's about reimagining your business for the digital age.
            </p>
          </div>

          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                In today's rapidly evolving business landscape, digital transformation has become a critical imperative for organizations seeking to remain competitive and relevant. Our comprehensive digital transformation services help businesses leverage cutting-edge technologies to streamline operations, enhance customer experiences, and drive sustainable growth.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                We understand that digital transformation is not a one-size-fits-all solution. Each organization has unique challenges, goals, and constraints that require a tailored approach. Our team of experienced consultants works closely with your leadership team to develop a comprehensive digital strategy that aligns with your business objectives and delivers measurable results.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                From legacy system modernization to cloud migration, from process automation to data analytics implementation, we provide end-to-end digital transformation services that transform your organization from the ground up. Our proven methodologies ensure minimal disruption to your operations while maximizing the value of your technology investments.
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
              Our Digital Transformation Services
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to modernize your business operations and technology infrastructure.
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

      {/* Case Study Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
              Success Story
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              See how we helped a manufacturing company achieve remarkable results through digital transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-light text-slate-800 mb-6">{caseStudy.title}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium text-slate-800 mb-3">Challenge</h4>
                  <p className="font-light text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-slate-800 mb-3">Solution</h4>
                  <p className="font-light text-gray-600 leading-relaxed">{caseStudy.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-slate-800 mb-3">Results</h4>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                        <span className="font-light text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={caseStudy.image}
                alt="Case Study"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <TrustedPartners />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-cyan-900"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl font-light mb-10 max-w-2xl mx-auto text-gray-300">
            Let's discuss how our digital transformation services can drive your business forward.
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

export default DigitalTransformationPage;