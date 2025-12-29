import React from 'react';

const HowWeHelp = () => {
  const benefits = [
    {
      title: "Precision Customization",
      description: "We bring your vision to life with high-definition sublimation printing, ensuring your brand logo and designs look vibrant and professional on every product.",
      icon: "🎨"
    },
    {
      title: "Premium Quality Assurance",
      description: "From durable ceramic mugs to high-quality apparel fabric, we use top-tier materials that ensure longevity and a premium feel for your merchandise.",
      icon: "💎"
    },
    {
      title: "End-to-End Corporate Gifting",
      description: "We simplify corporate appreciation. From trophies for achievers to welcome kits for new joiners, we provide a complete range of gifting solutions.",
      icon: "🎁"
    },
    {
      title: "Innovative Product Range",
      description: "Stay ahead with unique offerings like Magic Mugs, tech-integrated Powerbooks, and eco-friendly sippers that leave a lasting impression.",
      icon: "💡"
    },
    {
      title: "Bulk Manufacturing Capacity",
      description: "Whether it's an event with thousands of attendees or a niche team gift, our manufacturing units are equipped to handle scale with consistency.",
      icon: "🏭"
    },
    {
      title: "Brand Amplification",
      description: "We turn everyday utility items—like bottles, pens, and bags—into powerful marketing tools that enhance your brand recall daily.",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-[#EF4343] relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-overlay-white opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            How We Elevate Your Brand
          </h2>
          <div className="max-w-4xl mx-auto text-white/90 leading-relaxed text-lg md:text-xl">
            <p>
              At Kamlesh Group, we don't just sell products; we create brand experiences. By combining manufacturing expertise with cutting-edge sublimation technology, we help businesses build a cohesive and professional identity.
            </p>
          </div> 
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 border bg-white border-transparent rounded-lg hover:border-black hover:shadow-2xl transition-all duration-300 group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#EF4343] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-800">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .grid-overlay-white {
          background-image: linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default HowWeHelp;