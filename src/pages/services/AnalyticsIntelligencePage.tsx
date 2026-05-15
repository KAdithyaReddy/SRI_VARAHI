import React from 'react';
import { CheckCircle, BarChart3, TrendingUp, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveButton from '../../components/InteractiveButton';
import TrustedPartners from '../../components/TrustedPartners';

const AnalyticsIntelligencePage: React.FC = () => {
  const benefits = [
    "Data-driven decision making across all business functions",
    "Real-time insights and predictive analytics",
    "Improved operational efficiency and cost optimization",
    "Enhanced customer understanding and segmentation",
    "Risk assessment and mitigation strategies",
    "Competitive advantage through advanced analytics"
  ];

  const services = [
    {
      title: "Business Intelligence Dashboards",
      description: "Interactive dashboards that provide real-time visibility into your business performance.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes using advanced statistical models and machine learning.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Data Visualization",
      description: "Transform complex data into clear, actionable visual insights for better understanding.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Advanced Analytics",
      description: "Deep-dive analytics using AI and machine learning to uncover hidden patterns and opportunities.",
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
                Analytics &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Intelligence
                </span>
              </h1>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                Turn your data into actionable insights with our comprehensive analytics and business intelligence solutions. Make informed decisions that drive growth and competitive advantage.
              </p>
              <Link to="/contact">
                <InteractiveButton size="large">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Unlock Your Data Insights
                </InteractiveButton>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Analytics & Intelligence"
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
              The Power of Analytics & Intelligence
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Transform raw data into strategic insights that drive informed decision-making and business growth.
            </p>
          </div>

          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                In the age of big data, organizations that can effectively analyze and interpret their data gain a significant competitive advantage. Our analytics and business intelligence services help you unlock the hidden value in your data, providing actionable insights that drive strategic decision-making and operational excellence. We combine advanced statistical methods with cutting-edge visualization tools to make complex data accessible and understandable.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Our comprehensive analytics solutions span the entire spectrum from descriptive analytics that help you understand what happened, to predictive analytics that forecast future trends, to prescriptive analytics that recommend optimal actions. We leverage industry-leading platforms like Tableau, Power BI, Qlik, and custom-built solutions to create interactive dashboards and reports that provide real-time visibility into your business performance.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Whether you need customer segmentation analysis, financial forecasting, operational optimization, or market trend analysis, our team of data scientists and analytics experts delivers solutions that are both technically sophisticated and business-relevant. We ensure that our analytics implementations are not just technically sound but also aligned with your strategic objectives and accessible to decision-makers at all levels of your organization.
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
              Our Analytics & Intelligence Services
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Comprehensive analytics solutions that transform your data into competitive advantages.
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
          <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to Harness Your Data's Power?</h2>
          <p className="text-xl font-light mb-10 max-w-2xl mx-auto text-gray-300">
            Let's transform your data into actionable insights that drive strategic decision-making and business growth.
          </p>
          <Link to="/contact">
            <InteractiveButton size="large" variant="light">
              <TrendingUp className="w-5 h-5 mr-2" />
              Start Your Analytics Journey
            </InteractiveButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsIntelligencePage;