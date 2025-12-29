// src/components/Services.tsx

import { useState } from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      title: "Mug Wale",
      description: "Our core specialty. We offer a diverse range of high-quality sublimation mugs, perfect for corporate branding, personalized gifts, and promotional campaigns.",
      subServices: [
        {
          title: "White 11 oz Mugs",
          description: "The industry standard classic white ceramic mug, perfect for vibrant, full-color sublimation prints.",
          tagline: "Classic ceramic",
          subtitle: "sublimation ready",
          image: "/mug-images/1_h.jpg"
        },
        {
          title: "Color Handle Mugs",
          description: "Dual-tone mugs featuring colored handles and rims to perfectly match your brand's color palette.",
          tagline: "Dual tone",
          subtitle: "color matching",
          image: "/mug-images/2.jpg"
        },
        {
          title: "Magic Mugs",
          description: "Black 'Magic' mugs that reveal your custom design or photo only when hot liquid is poured inside.",
          tagline: "Heat reveal",
          subtitle: "color changing",
          image: "/mug-images/3.jpg"
        },
        {
          title: "Patch Mugs",
          description: "Stylish Black and White patch mugs offering a modern, contrasting aesthetic for your logos.",
          tagline: "Modern style",
          subtitle: "contrast design",
          image: "/mug-images/4.jpg"
        }
      ]
    },
    {
      title: "Kamlesh Enterprises",
      description: "Beyond mugs, we provide a full suite of sublimation-ready merchandise for sports events, corporate giveaways, or fashion.",
      subServices: [
        {
          title: "Sublimation T-Shirts",
          description: "High-quality polyester blend t-shirts designed specifically for durable, full-color sublimation printing.",
          tagline: "Premium quality",
          subtitle: "full color prints",
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80"
        },
        {
          title: "Sublimation Bottles",
          description: "Durable aluminum and steel sipper bottles, ideal for sports teams, gyms, and eco-friendly corporate gifts.",
          tagline: "Eco friendly",
          subtitle: "durable finish",
          image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80"
        },
        {
          title: "Sublimation Cups",
          description: "Versatile tumblers and cups available in various finishes, ready for your custom artwork.",
          tagline: "Versatile cups",
          subtitle: "custom artwork",
          image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80"
        },
        {
          title: "Coffee Mugs",
          description: "Standard and custom-shaped coffee mugs for cafes, offices, and daily use.",
          tagline: "Daily essentials",
          subtitle: "office ready",
          image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80"
        }
      ]
    },
    {
      title: "Powerbook",
      description: "Strengthen business relationships with our premium corporate gifting solutions for clients, employees, and partners.",
      subServices: [
        {
          title: "Premium Trophies",
          description: "Elegant trophies and awards to recognize achievement, milestones, and excellence within your organization.",
          tagline: "Corporate",
          subtitle: "gifting natural",
          image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80"
        },
        {
          title: "Branded Keychains",
          description: "Custom branded keychains in metal, leather, or plastic – a cost-effective and practical promotional item.",
          tagline: "Brand recall",
          subtitle: "practical gifts",
          image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=400&q=80"
        },
        {
          title: "Luxury Pens",
          description: "Premium metal and plastic pens engraved or printed with your company logo for lasting brand recall.",
          tagline: "Executive style",
          subtitle: "lasting impression",
          image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80"
        },
        {
          title: "Professional Bags",
          description: "Functional corporate bags, laptop bags, and totes designed for professionals on the move.",
          tagline: "Professional",
          subtitle: "on the move",
          image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80"
        }
      ]
    },
    {
      title: "Corporate Gifting",
      description: "Equip your team with essential office stationery that combines utility with professional branding.",
      subServices: [
        {
          title: "Powerbooks",
          description: "Innovative notebooks with built-in power banks and charging cables – the ultimate utility for professionals.",
          tagline: "Tech enabled",
          subtitle: "power on go",
          image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80"
        },
        {
          title: "Diaries",
          description: "Premium leather and hardbound diaries for organizing schedules, notes, and daily tasks.",
          tagline: "Premium leather",
          subtitle: "daily planner",
          image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&q=80"
        },
        {
          title: "Corporate Notebooks",
          description: "Customized notebooks available in various sizes (A5, B5) and finishes for office use.",
          tagline: "Custom sizes",
          subtitle: "office essentials",
          image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&q=80"
        },
        {
          title: "Office Essentials",
          description: "A complete range of branded desk accessories and stationery to unify your office look.",
          tagline: "Desk ready",
          subtitle: "unified branding",
          image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&q=80"
        }
      ]
    },
    {
      title: "Allure Space",
      description: "Premium interior and lifestyle products designed to elevate your personal and professional spaces.",
      subServices: [
        {
          title: "Photo Frames",
          description: "Elegant photo frames in various materials and sizes to showcase your cherished memories.",
          tagline: "Cherished",
          subtitle: "memories framed",
          image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400&q=80"
        },
        {
          title: "Wall Art",
          description: "Custom wall art and canvas prints to transform any space into a personalized gallery.",
          tagline: "Transform",
          subtitle: "your space",
          image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80"
        },
        {
          title: "Cushion Covers",
          description: "Sublimation-printed cushion covers with vibrant designs for home and office decor.",
          tagline: "Vibrant prints",
          subtitle: "home decor",
          image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80"
        },
        {
          title: "Home Decor",
          description: "A curated collection of home decor items to add personality to any living space.",
          tagline: "Curated",
          subtitle: "living spaces",
          image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&q=80"
        }
      ]
    },
    {
      title: "NARS",
      description: "Cutting-edge fashion and apparel solutions with custom printing and branding options.",
      subServices: [
        {
          title: "Custom Apparel",
          description: "Personalized clothing items with high-quality prints that reflect your brand identity.",
          tagline: "Brand identity",
          subtitle: "custom prints",
          image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&q=80"
        },
        {
          title: "Sports Jerseys",
          description: "Professional-grade sports jerseys with sublimation printing for teams and events.",
          tagline: "Team spirit",
          subtitle: "pro grade",
          image: "https://images.unsplash.com/photo-1580087256394-dc596e1c8f4f?w=400&q=80"
        },
        {
          title: "Caps & Hats",
          description: "Custom branded caps and hats perfect for outdoor events and promotional campaigns.",
          tagline: "Outdoor ready",
          subtitle: "brand visibility",
          image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80"
        },
        {
          title: "Accessories",
          description: "Fashion accessories including scarves, ties, and more with custom printing options.",
          tagline: "Fashion forward",
          subtitle: "custom style",
          image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&q=80"
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#EF4343]">
      <div className="container mx-auto px-8 md:px-12 lg:px-20">
   <div className="grid md:grid-cols-5 gap-8 md:gap-12 mb-16 items-start">
  {/* Left - Title (40% = 2/5) */}
  <div className="md:col-span-2">
    <h2 className="text-4xl md:text-5xl text-center lg:text-7xl  text-white">Our Services</h2>
  </div>
  
  {/* Right - Description (60% = 3/5) */}
  <div className="md:col-span-3">
  <p className="text-lg md:text-xl text-white/90 leading-relaxed pl-20 pr-10 text-center">
    <span className="text-5xl md:text-6xl lg:text-3xl font-bold float-left mt-[-8px] leading-none">W</span>
    e deliver specialized Sublimation Printing, Corporate Gifting, and Branding solutions, driven by a commitment to quality and a deep understanding of your business needs.
  </p>
</div>
</div>
        
        {/* 40/60 Split Grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 mb-16">
          
          {/* Main Services - Left Side (40% = 2/5) */}
          <div className="lg:col-span-2 space-y-1">
            {services.map((service, index) => (
              <div key={index}>
                <div 
                  className={`group cursor-pointer py-8 px-4 border-b-2 transition-all duration-300 ${
                    selectedService === index 
                      ? 'border-white' 
                      : 'border-white/40 hover:border-white'
                  }`}
                  onClick={() => setSelectedService(index)}
                  onMouseEnter={() => setSelectedService(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl md:text-2xl font-bold transition-all duration-300 ${
                      selectedService === index 
                        ? 'text-white translate-x-2' 
                        : 'text-white/80 group-hover:text-white group-hover:translate-x-2'
                    }`}>
                      {service.title}
                    </h3>
                    <svg 
                      className={`w-6 h-6 transition-all duration-300 ${
                        selectedService === index 
                          ? 'text-white translate-x-2' 
                          : 'text-white/60 group-hover:text-white group-hover:translate-x-2'
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sub Services - Right Side (60% = 3/5) with Images */}
          <div className="lg:col-span-3 hidden md:block pl-20 pr-10">
            <div className="grid grid-cols-2 gap-5">
              {services[selectedService].subServices.map((subService, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-3"
                  onClick={() => console.log("Clicked:", subService.title)}
                >
                  {/* Image with Overlay Card */}
                  <div className="relative h-40 rounded-xl overflow-hidden">
                    {/* Background Image */}
                    <img 
                      src={subService.image} 
                      alt={subService.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-[#4A5D5D]/1" />
                    
                    {/* Content on top of image */}
                    {/* Content on top of image */}
<div className="absolute inset-0 flex flex-col items-center justify-center p-4">
  {/* Main Tagline - Italic Serif Style */}
  <p className="text-white/95 group-hover:text-[#EF4343] text-lg font-light italic text-center z-10 font-serif transition-colors duration-300">
    {subService.tagline}
  </p>
  <p className="text-white/95 group-hover:text-[#EF4343] text-lg font-light italic text-center z-10 font-serif transition-colors duration-300">
    {subService.subtitle}
  </p>
  
  {/* Middle small text */}
  <p className="text-white/50 group-hover:text-[#EF4343]/70 text-[10px] uppercase tracking-[0.2em] mt-3 z-10 transition-colors duration-300">
    Kamlesh Group
  </p>
  
  {/* Bottom decorative text */}
  <p className="text-white/40 group-hover:text-[#EF4343]/60 text-[8px] mt-1 text-center max-w-[90%] z-10 tracking-wide transition-colors duration-300">
    Premium quality products for your business
  </p>
</div>
                  </div>
                  
                  {/* White Content Container */}
                  <div className="pt-4 pb-2 px-1">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">
                      {subService.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                      {subService.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Sub Services */}
          <div className="lg:col-span-3 md:hidden space-y-4">
            {services[selectedService].subServices.map((subService, index) => (
              <div 
                key={index} 
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg p-3"
              >
                {/* Image with Overlay - Mobile */}
                <div className="relative h-32 rounded-xl overflow-hidden">
                  <img 
                    src={subService.image} 
                    alt={subService.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#4A5D5D]/90" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                    <p className="text-white/95 text-base font-light italic text-center font-serif">
                      {subService.tagline}
                    </p>
                    <p className="text-white/95 text-base font-light italic text-center font-serif">
                      {subService.subtitle}
                    </p>
                    <p className="text-white/50 text-[9px] uppercase tracking-[0.2em] mt-2">
                      Kamlesh Group
                    </p>
                  </div>
                </div>
                
                <div className="pt-3 pb-1 px-1">
                  <h4 className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wide">
                    {subService.title}
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {subService.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;