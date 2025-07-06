import React from 'react';
import { Home, Building2, Hammer, HardHat } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Complete home building solutions from foundation to finishing with quality craftsmanship and modern techniques."
    },
    {
      icon: Building2,
      title: "Property Buying & Selling",
      description: "Expert guidance in property transactions with structural assessments and market analysis for informed decisions."
    },
    {
      icon: Hammer,
      title: "Structural Consulting",
      description: "Professional structural analysis and design services ensuring safety, compliance, and optimal building performance."
    },
    {
      icon: HardHat,
      title: "Site Supervision",
      description: "Comprehensive project management and on-site supervision to ensure quality execution and timeline adherence."
    }
  ];

  return (
    <section id="services" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Services
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Comprehensive civil engineering solutions tailored to meet your construction and development needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-500 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center group-hover:text-blue-800 transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {service.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-4 w-8 h-0.5 bg-amber-500 mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
            Get A Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;