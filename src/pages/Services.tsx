import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { fadeInUp } from "../animation/variants";
import { motion } from "framer-motion";

const Services = () => {
  const [searchParams] = useSearchParams();
  const selectedServiceParam = searchParams.get('service') || 'sublimation-mugs';
  
  // Map slugs to indices for default open state
  const [openServices, setOpenServices] = useState<{ [key: number]: boolean }>(() => {
    const serviceMap: { [key: string]: number } = {
      'sublimation-mugs': 0,
      'sublimation-merchandise': 1,
      'corporate-gifting': 2,
      'stationery-powerbooks': 3
    };
    const initialService = serviceMap[selectedServiceParam] !== undefined ? serviceMap[selectedServiceParam] : 0;
    return { [initialService]: true };
  });

  const toggleService = (index: number) => {
    setOpenServices(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const services = [
    {
      title: "Sublimation Mugs",
      slug: "sublimation-mugs",
      description: "Our core specialty. We offer a diverse range of high-quality sublimation mugs, perfect for corporate branding, personalized gifts, and promotional campaigns. From classic white to magic color-changing options.",
      subServices: [
        {
          title: "White 11 oz Mugs",
          description: "The industry standard classic white ceramic mug, perfect for vibrant, full-color sublimation prints."
        },
        {
          title: "Color Handle Mugs",
          description: "Dual-tone mugs featuring colored handles and rims to perfectly match your brand's color palette."
        },
        {
          title: "Magic Mugs",
          description: "Black 'Magic' mugs that reveal your custom design or photo only when hot liquid is poured inside."
        },
        {
          title: "Patch Mugs",
          description: "Stylish Black and White patch mugs offering a modern, contrasting aesthetic for your logos."
        }
      ]
    },
    {
      title: "Sublimation Merchandise",
      slug: "sublimation-merchandise",
      description: "Beyond mugs, we provide a full suite of sublimation-ready merchandise. Whether for sports events, corporate giveaways, or fashion, our sublimation products ensure long-lasting, high-definition prints.",
      subServices: [
        {
          title: "Sublimation T-Shirts",
          description: "High-quality polyester blend t-shirts designed specifically for durable, full-color sublimation printing."
        },
        {
          title: "Sublimation Bottles",
          description: "Durable aluminum and steel sipper bottles, ideal for sports teams, gyms, and eco-friendly corporate gifts."
        },
        {
          title: "Sublimation Cups",
          description: "Versatile tumblers and cups available in various finishes, ready for your custom artwork."
        },
        {
          title: "Coffee Mugs",
          description: "Standard and custom-shaped coffee mugs for cafes, offices, and daily use."
        }
      ]
    },
    {
      title: "Corporate Gifting",
      slug: "corporate-gifting",
      description: "Strengthen business relationships and recognize excellence with our premium corporate gifting solutions. We offer a wide array of customizable items suitable for clients, employees, and partners.",
      subServices: [
        {
          title: "Trophies",
          description: "Elegant trophies and awards to recognize achievement, milestones, and excellence within your organization."
        },
        {
          title: "Keychains",
          description: "Custom branded keychains in metal, leather, or plastic – a cost-effective and practical promotional item."
        },
        {
          title: "Pens",
          description: "Premium metal and plastic pens engraved or printed with your company logo for lasting brand recall."
        },
        {
          title: "Bags",
          description: "Functional corporate bags, laptop bags, and totes designed for professionals on the move."
        }
      ]
    },
    {
      title: "Stationery & Powerbooks",
      slug: "stationery-powerbooks",
      description: "Equip your team with essential office stationery that combines utility with professional branding. Our Powerbooks and diaries are perfect for the modern professional workspace.",
      subServices: [
        {
          title: "Powerbooks",
          description: "Innovative notebooks with built-in power banks and charging cables – the ultimate utility for professionals."
        },
        {
          title: "Diaries",
          description: "Premium leather and hardbound diaries for organizing schedules, notes, and daily tasks."
        },
        {
          title: "Corporate Notebooks",
          description: "Customized notebooks available in various sizes (A5, B5) and finishes for office use."
        },
        {
          title: "Office Essentials",
          description: "A complete range of branded desk accessories and stationery to unify your office look."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#EF4343] grid-overlay-light">
        <motion.div variants={fadeInUp}
          initial="hidden"
          animate="visible" className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.h1 variants={fadeInUp}
              initial="hidden"
              animate="visible" className="text-6xl md:text-8xl font-bold mb-8 text-foreground">
              Services
            </motion.h1>
            <motion.p variants={fadeInUp}
              initial="hidden"
              animate="visible" className="text-xl md:text-2xl text-white max-w-2xl leading-relaxed">
              We deliver specialized Sublimation Printing, Corporate Gifting, and Branding solutions, driven by a commitment to quality and a deep understanding of your business needs.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Service Types Section */}
      <section className="py-20 bg-white" >
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">Our Offerings</h2>
            <div className="border-t-2 border-black"></div>
          </div>
          
          <div className="space-y-0">
            {services.map((service, index) => {
              const isOpen = openServices[index];
              return (
                <Collapsible key={index} open={isOpen} onOpenChange={() => toggleService(index)}>
                  <div className="border-b-2 border-black">
                    <CollapsibleTrigger className="group cursor-pointer p-6 transition-all duration-300 w-full text-left hover:translate-x-2">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${
                          isOpen ? 'text-[#EF4343] translate-x-2' : 'text-black group-hover:text-[#EF4343] group-hover:translate-x-2'
                        }`}>
                          {service.title}
                        </h3>
                        <div className={`text-3xl font-light text-black transition-all duration-300 transform ${
                          isOpen ? 'rotate-45' : 'rotate-0'
                        }`}>
                          +
                        </div>
                      </div>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="space-y-8 px-6 pb-8">
                        <p className="text-xl text-black leading-relaxed max-w-4xl">
                          {service.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          {service.subServices.map((subService, subIndex) => (
                            <div key={subIndex} className="border-2 border-black p-8 hover:border-[#EF4343]/30 transition-all duration-300 group/sub relative overflow-hidden">
                              {/* Background image that appears on hover - keeping random Unsplash images for now, can be specific if needed */}
                              <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover/sub:opacity-95 transition-opacity duration-500" 
                                style={{
                                  backgroundImage: `url('https://images.unsplash.com/photo-${
                                    subIndex % 4 === 0 ? '1576402187877-e51f29503342' : // mug/gift related
                                    subIndex % 4 === 1 ? '1512418490979-92798cec1380' : // gift/box
                                    subIndex % 4 === 2 ? '1513519245088-0e12902e5a38' : // festive
                                    '1513885535751-8b9238bd345a' // gift
                                  }?ixlib=rb-4.0.3&auto=format&fit=crop&w=2115&q=80')`
                                }}>
                              </div>
                              {/* Dark overlay on hover */}
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/sub:opacity-80 transition-opacity duration-300"></div>
                              <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                  <h4 className="text-2xl font-bold text-black group-hover/sub:text-white uppercase tracking-wide transition-colors duration-300">
                                    {subService.title}
                                  </h4>
                                  <svg 
                                    className="w-8 h-8 text-black group-hover/sub:text-white group-hover/sub:translate-x-1 transition-all duration-300"
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                                <p className="text-lg text-black group-hover/sub:text-white leading-relaxed transition-colors duration-300">
                                  {subService.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;