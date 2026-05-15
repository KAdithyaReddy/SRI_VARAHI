import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import PremiumBackground from '../components/PremiumBackground';
import InteractiveButton from '../components/InteractiveButton';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 91542 79226",
      description: "Mon-Fri 9AM-5PM CST"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hr@srivaarahiglobalsolutions.com",
      description: "We respond within hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "P.No 33-34, Beta House, Mithila Nagar, Kukatpally, Pragatinagar, Hyd, Hyderabad- 500090, Telangana",
      description: "Available for on-site visits"
    },
    {
      icon: Clock,
      title: "Emergency Support",
      details: "Available on working days",
      description: "For existing clients"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16">
        <PremiumBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-8 leading-tight">
              Let's Transform
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 animate-gradient">
                Your Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Ready to turn your IT challenges into competitive advantages? Get in touch for a free consultation and discover how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Highlight */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/30 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Side - Highlight Card */}
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-10 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center h-full">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Directly Reach Us</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-md">
                  Skip the forms — call or email us directly. We're always available to connect and assist with your IT needs.
                </p>
                <div className="space-y-4">
  <a href="tel:+919154279226" className="block w-full">
    <InteractiveButton size="large" className="w-full">
      <Phone className="w-5 h-5 mr-2" />
      Call +91 91542 79226
    </InteractiveButton>
  </a>

  <a href="mailto:hr@srivaarahiglobalsolutions.com" className="block w-full">
    <InteractiveButton size="large" className="w-full" variant="light">
      <Mail className="w-5 h-5 mr-2" />
      Email hr@srivaarahiglobalsolutions.com
    </InteractiveButton>
  </a>
</div>

              </div>
            </div>

            {/* Right Side - Contact Information */}
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-6">Get In Touch</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Ready to discuss your technology needs? We're here to help you transform your IT infrastructure into a strategic advantage.
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1">{info.title}</h3>
                        <p className="text-cyan-600 font-medium mb-1">{info.details}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Response Promise */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl">
                  <h3 className="font-bold text-slate-800 mb-2">Our Response Promise</h3>
                  <p className="text-gray-600">
                    We respond to all inquiries within 2 hours during business hours. For urgent matters, 
                    call us directly for immediate assistance.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can you respond to IT emergencies?",
                answer: "For existing clients, we provide all time emergency support with response times under 15 minutes in working days. For new clients, we can typically respond within 2-4 hours depending on the severity of the issue."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We specialize in healthcare, financial services, manufacturing, legal services, education, and professional services. Our team has deep expertise in the compliance and security requirements of these regulated industries."
              },
              {
                question: "Do you offer month-to-month contracts?",
                answer: "Yes, we offer flexible contract terms including month-to-month options. We believe in earning your business through excellent service, not long-term contracts."
              },
              {
                question: "Can you work with our existing IT team?",
                answer: "Absolutely! We can complement your existing IT team, provide specialized expertise, or take over complete IT management. We're flexible and work according to your needs and preferences."
              },
              {
                question: "What's included in your free assessment?",
                answer: "Our free assessment includes a comprehensive review of your current IT infrastructure, security posture, compliance status, and identification of potential risks and opportunities for improvement."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-bold text-slate-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-cyan-900"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
              Don't let IT challenges hold your business back. Contact us today and speak directly with our team.
            </p>
           <a href="tel:+919154279226">
  <InteractiveButton size="large" variant="light">
    <Phone className="w-5 h-5 mr-2" />
    Call +91 91542 79226
  </InteractiveButton>
</a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
