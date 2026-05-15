import React from "react";

const TrustedPartners: React.FC = () => {
  const partners = Array.from({ length: 22 }, (_, i) => ({
    logo: `${import.meta.env.BASE_URL}logos/${i + 1}.png`,
  }));

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-lg font-light text-gray-600">
            Collaborating with industry leaders to deliver exceptional results
          </p>
        </div>
      </div>

      <div className="overflow-hidden w-full">
        <div className="flex animate-scroll w-max space-x-6 items-center">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 min-w-max"
            >
              <img
                src={partner.logo}
                alt={`Partner ${index + 1}`}
                className="w-56 h-32 object-contain hover:scale-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default TrustedPartners;