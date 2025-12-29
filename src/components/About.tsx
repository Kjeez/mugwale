// src/components/About.tsx

import React from 'react';
import { motion, useInView } from 'framer-motion';

// Data for the brands section with logos - Updated with correct paths
const brands = [
  
  { 
    name: "Kamlesh Enterprises", 
    link: "#",
    logo: "/img/KAMLESH.png"
  },
  { 
    name: "Mug Wale", 
    link: "/mugs",
    logo: "/img/MUGWALE.png"
  },
  
  { 
    name: "Powerbook", 
    link: "#",
    logo: "/img/POWER.png"
  },
  { 
    name: "Corporate Gifts", 
    link: "#",
    logo: "/img/CORPORATE.png"
  },
  { 
    name: "Allure Space", 
    link: "#",
    logo: "/img/ALLURE.png"
  },
  { 
    name: "Nars", 
    link: "#",
    logo: "/img/NARS.png"
  },
];

function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div id="about" className="w-full bg-white relative grid-mob-light overflow-hidden flex flex-col justify-center">
      <motion.section
        ref={ref}
        className="w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col justify-center py-20"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        
        {/* --- BLOCK 1: HEADING --- */}
        <motion.div
          className="w-full flex-none mb-4 md:mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal leading-none text-gray-800 text-left bg-transparent">
            Kamlesh Group of Companies
          </h1>
        </motion.div>

        {/* --- BLOCK 2: BRANDS WITH LOGOS --- */}
        <motion.div
          className="w-full flex-none border-y-2 border-gray-300 py-6 md:py-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-between overflow-x-auto px-4 no-scrollbar gap-8 md:gap-12">
  {brands.map((brand, index) => (
    <a  // <--- Add this tag
      key={index}
      href={brand.link}
      className="group flex flex-col items-center gap-3 transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer flex-shrink-0"
    >
      {/* Logo Container */}
      <div className="h-12 md:h-16 flex items-center justify-center">
        <img 
          src={brand.logo} 
          alt={brand.name}
          className="h-full w-auto max-w-[120px] md:max-w-[150px] object-contain transition-all duration-300 hover:opacity-100 opacity-90"
        />
      </div>
      {/* Brand Name */}
      <span className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {brand.name}
      </span>
    </a>
  ))}
</div>
        </motion.div>

        {/* --- BLOCK 3: ARROW (LEFT) & TEXT (RIGHT) --- */}
        <div className="flex-1 flex flex-col md:flex-row items-start gap-8 md:gap-4">
          
          {/* LEFT: Moving Arrow */}
          <motion.div
            className="w-24 md:w-32 flex-none mt-2" 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              animate={{ x: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-8 md:w-24 md:h-12 text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.div>
          </motion.div>

          {/* RIGHT: Body Text */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl font-normal leading-relaxed text-gray-800">
              Kamlesh Group Brands - "Kamlesh Group is a diversified conglomerate with a rich history of innovation and excellence across various industries. We are committed to delivering high-quality products and services through our distinct brands, each a leader in its respective field. Our vision is to continually expand our horizons, fostering growth and creating value for our customers and stakeholders."
            </p>
          </motion.div>
        </div>

      </motion.section>
      
      <style>{`
        .grid-mob-light {
          background-image: linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px);
          background-size: 40px 40px; 
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default About;