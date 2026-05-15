import React, { useState, useEffect } from 'react';
import { Shield, Zap, Cloud, Users, ChevronRight, CheckCircle, TrendingUp, Lock, Server, Brain, ArrowRight, Star, Quote, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/AnimatedCounter';
import InteractiveButton from '../components/InteractiveButton';
import TrustedPartners from '../components/TrustedPartners';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "Driving Growth Through Digital Transformation",
      subtitle: "Empowering businesses with cutting-edge technology solutions that accelerate growth and innovation in the digital age."
    },
    {
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "Inclusive Business Evolution",
      subtitle: "Creating technology ecosystems that foster collaboration, accessibility, and sustainable business transformation."
    },
    {
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "Growth Dynamics: Strategies for Scaling and Thriving",
      subtitle: "Strategic IT solutions designed to scale with your ambitions and drive measurable business results."
    },
    {
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "Industry Insights: Trends and Transformations",
      subtitle: "Stay ahead of the curve with expert insights on emerging technologies and industry best practices."
    }
  ];

  const services = [
    {
      icon: Brain,
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategies that modernize your business operations and drive competitive advantage."
    },
    {
      icon: Server,
      title: "Data Engineering",
      description: "Robust data infrastructure and engineering solutions that turn your data into actionable business intelligence."
    },
    {
      icon: TrendingUp,
      title: "Analytics & Intelligence",
      description: "Advanced analytics and business intelligence solutions that provide deep insights for strategic decision-making."
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence and machine learning solutions that automate processes and enhance productivity."
    },
    {
      icon: Users,
      title: "Staff Augmentation",
      description: "Expert technical talent to augment your team and accelerate project delivery with specialized skills."
    },
    {
      icon: Shield,
      title: "Managed Services",
      description: "Comprehensive managed IT services ensuring optimal performance, security, and reliability of your technology infrastructure."
    }
  ];

  const industries = [
    { name: "Retail", description: "Omnichannel commerce solutions" },
    { name: "Healthcare", description: "HIPAA-compliant digital health" },
  
    { name: "Ecommerce", description: "Scalable online platforms" },
    { name: "Manufacturing", description: "Smart factory solutions" }
  ];

  const testimonials = [
    {
      quote: "Sri Vaarahi Global Solutions transformed our entire technology infrastructure, resulting in 40% improved efficiency and significant cost savings. Their expertise in digital transformation is unmatched.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "TechFlow Industries",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400"
    },
    {
      quote: "The AI solutions implemented by Sri Vaarahi Global Solutions have revolutionized our data processing capabilities. We've seen a 60% reduction in manual tasks and improved accuracy across all operations.",
      author: "Michael Chen",
      position: "VP of Operations",
      company: "DataDrive Corp",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=400"
    },
    {
      quote: "Their managed services team provides exceptional 24/7 support. Since partnering with Sri Vaarahi Global Solutions, we've achieved 99.9% uptime and our team can focus on core business activities.",
      author: "Emily Rodriguez",
      position: "IT Director",
      company: "SecureHealth Systems",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400&h=400"
    }
  ];

  const blogPosts = [
    {
      title: "Global Capability Centers: The Future of Distributed Teams",
      excerpt: "Exploring how Global Capability Centers are reshaping the way organizations scale their technical capabilities across borders.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      date: "December 15, 2024",
      category: "Digital Transformation"
    },
    {
      title: "Data Governance in the Age of AI: Best Practices",
      excerpt: "Essential strategies for implementing robust data governance frameworks that support AI initiatives while ensuring compliance.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      date: "December 10, 2024",
      category: "Data Engineering"
    },
    {
      title: "AI in Recruitment: Transforming Talent Acquisition",
      excerpt: "How artificial intelligence is revolutionizing recruitment processes and helping organizations find the right talent faster.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      date: "December 5, 2024",
      category: "AI Solutions"
    }
  ];

  const partners = [
    { name: 'Microsoft', image: '/image.png' },
    { name: 'Amazon Web Services', image: '/image.png' },
    { name: 'Google Cloud', image: '/image.png' },
    { name: 'IBM', image: '/image.png' },
    { name: 'Oracle', image: '/image.png' },
    { name: 'Salesforce', image: '/image.png' }
  ];

  // Helper function to get service images
  const getServiceImage = (serviceTitle: string) => {
    const imageMap: { [key: string]: string } = {
      'Digital Transformation': 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Data Engineering': 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Analytics & Intelligence': 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'AI Solutions': 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Staff Augmentation': 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Managed Services': 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600'
    };
    return imageMap[serviceTitle] || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600';
  };

  // Helper function to get industry images
  const getIndustryImage = (industryName: string) => {
    const imageMap: { [key: string]: string } = {
      'Retail': 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Oil & Gas': 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Healthcare': 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Banking': 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Insurance': 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Government': 'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Ecommerce': 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Manufacturing': 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600'
    };
    return imageMap[industryName] || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600';
  };

  // Auto-advance hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel */}
      <section className="relative h-screen overflow-hidden mt-16">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40"></div>
            </div>
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    {slide.subtitle}
                  </p>
                  <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <Link to="/contact">
                      <InteractiveButton size="large" variant="light">
                        Get Started Today
                        <ChevronRight className="ml-2 w-5 h-5" />
                      </InteractiveButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* Stats & Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Ingenious IT Solutions and Strong Partnerships Drive Business Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with strategic partnerships to deliver transformative solutions that accelerate your business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-bold text-cyan-400 mb-4">
                Award Winning
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Excellence</h3>
              <p className="text-gray-600">Recognized for innovation and exceptional client service delivery</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="text-4xl font-bold text-cyan-400 mb-4">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Growing Clients</h3>
              <p className="text-gray-600">Building strong partnerships for digital transformation</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="text-4xl font-bold text-cyan-400 mb-4">
                24/7
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Support Available</h3>
              <p className="text-gray-600">Round-the-clock technical assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <TrustedPartners />

      {/* Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden rounded-xl mb-6">
                  <img 
                    src={getServiceImage(service.title)} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <Link to="/services">
              <InteractiveButton variant="outline" size="large">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </InteractiveButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions tailored to your industry's unique challenges and requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 hover:shadow-lg group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                  <img 
                    src={getIndustryImage(industry.name)} 
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <Link to="/industries">
              <InteractiveButton variant="outline" size="large">
                Explore Industries
                <ArrowRight className="ml-2 w-5 h-5" />
              </InteractiveButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Voices of Victory</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our esteemed clients about their transformative experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Quote className="w-8 h-8 text-cyan-400 mb-4" />
                <p className="text-gray-200 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-300">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Tales - Blog Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Tech Tales</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest insights and trends from the world of technology and digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-cyan-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <Link to="/insights">
              <InteractiveButton variant="outline" size="large">
                Read More Insights
                <ArrowRight className="ml-2 w-5 h-5" />
              </InteractiveButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-cyan-900"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
              Let's discuss how our innovative IT solutions can drive your digital transformation and accelerate your growth.
            </p>
            <Link to="/contact">
              <InteractiveButton size="large" variant="light">
                Start Your Transformation
                <ChevronRight className="ml-2 w-5 h-5" />
              </InteractiveButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;