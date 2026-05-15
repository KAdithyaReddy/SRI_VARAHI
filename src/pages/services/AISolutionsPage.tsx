import React from 'react';
import { CheckCircle, Brain, Zap, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveButton from '../../components/InteractiveButton';
import TrustedPartners from '../../components/TrustedPartners';

const AISolutionsPage: React.FC = () => {
  const benefits = [
    "Automated decision-making and process optimization",
    "Enhanced customer experiences through personalization",
    "Predictive maintenance and risk assessment",
    "Intelligent document processing and analysis",
    "Advanced fraud detection and security",
    "Scalable AI solutions that grow with your business"
  ];

  const services = [
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models that learn from your data to provide intelligent insights and automation.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Natural Language Processing",
      description: "Extract insights from text data, automate document processing, and enable conversational AI.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Computer Vision",
      description: "Analyze images and videos to automate quality control, security, and visual inspection processes.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "AI Strategy & Consulting",
      description: "Develop comprehensive AI strategies that align with your business objectives and drive ROI.",
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
                AI Solutions
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  & Machine Learning
                </span>
              </h1>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                Harness the power of artificial intelligence to automate processes, gain deeper insights, and create intelligent solutions that transform your business operations.
              </p>
              <Link to="/contact">
                <InteractiveButton size="large">
                  <Brain className="w-5 h-5 mr-2" />
                  Explore AI Solutions
                </InteractiveButton>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="AI Solutions"
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
              Transform Your Business with AI
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Leverage cutting-edge AI technologies to automate processes, enhance decision-making, and create competitive advantages.
            </p>
          </div>

          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Artificial Intelligence is no longer a futuristic concept—it's a present-day reality that's transforming industries and redefining business possibilities. Our AI solutions help organizations harness the power of machine learning, natural language processing, computer vision, and other AI technologies to automate complex processes, gain deeper insights, and create innovative products and services that delight customers.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                We specialize in developing custom AI solutions that address specific business challenges, from intelligent document processing and automated customer service to predictive maintenance and fraud detection. Our team of AI engineers and data scientists brings expertise in the latest AI frameworks including TensorFlow, PyTorch, and cloud-based AI services from major providers, ensuring that your AI implementations are both cutting-edge and production-ready.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Our approach to AI implementation is pragmatic and results-focused. We begin with a thorough assessment of your business processes to identify high-impact use cases where AI can deliver measurable value. We then develop proof-of-concepts, pilot implementations, and full-scale deployments that integrate seamlessly with your existing systems while providing the scalability and reliability required for enterprise operations.
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
              Our AI & Machine Learning Services
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your specific business needs and objectives.
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
          <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to Embrace AI Innovation?</h2>
          <p className="text-xl font-light mb-10 max-w-2xl mx-auto text-gray-300">
            Let's explore how AI can transform your business processes and create new opportunities for growth.
          </p>
          <Link to="/contact">
            <InteractiveButton size="large" variant="light">
              <Cpu className="w-5 h-5 mr-2" />
              Start Your AI Journey
            </InteractiveButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AISolutionsPage;