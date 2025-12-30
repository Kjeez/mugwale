import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp } from "../animation/variants";
import { mugProducts } from "../data/mugProducts";
import { ChevronDown, Play, Pause, Volume2, VolumeX } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// ============================================
// 🎬 UPDATE YOUR MEDIA PATHS HERE
// ============================================
const HERO_MEDIA = {
  mobile: {
    type: 'video',
    src: '/video/hero_mob.mp4',
  },
  desktop: {
    type: 'image',
    src: '/video/mugpc.jpg',   // Change this to your desktop image
  },
};
// ============================================

const Mugs = () => {
  const [sortBy, setSortBy] = useState("featured");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Get current media based on screen size
  const currentMedia = isMobile ? HERO_MEDIA.mobile : HERO_MEDIA.desktop;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Full Screen Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        
        {/* Conditional Background - Video for Mobile, Image for Desktop */}
        {currentMedia.type === 'video' ? (
          <video
            ref={videoRef}
            key="mobile-video"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={currentMedia.src} type="video/mp4" />
          </video>
        ) : (
          <img
            src={currentMedia.src}
            alt="Mugs Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        {/* Red Accent Overlay */}
        <div className="absolute inset-0 bg-[#EF4343]/10" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/30">
                Premium Collection
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight"
            >
              Mugs
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed"
            >
              Discover our premium collection of customizable mugs
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-white/70 mb-10 max-w-2xl mx-auto"
            >
              From classic ceramic to modern insulated designs, find the perfect mug for corporate gifts, events, and personal celebrations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={scrollToProducts}
                className="bg-[#EF4343] hover:bg-[#EF4343]/90 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-[#EF4343]/30"
              >
                Explore Collection
              </button>
              
              <a
                href="tel:+919819416689"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-full text-lg font-semibold transition-all border border-white/30"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 cursor-pointer"
            onClick={scrollToProducts}
          >
            <div className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
              <span className="text-sm mb-2 tracking-wider uppercase">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </div>
          </motion.div>

          {/* Video Controls - Only show on mobile when video is playing */}
          {isMobile && currentMedia.type === 'video' && (
            <div className="absolute bottom-10 right-10 flex gap-3">
              <button
                onClick={togglePlay}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/30"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button
                onClick={toggleMute}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/30"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-16 bg-white">
        <div className="container mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Our Collection
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Browse through our extensive range of premium sublimation mugs
            </motion.p>
          </div>

          {/* Filter/Sort Section */}
          <div className="flex flex-wrap items-center justify-between border-b pb-6 mb-8 gap-4">
            <p className="text-gray-500">
              {mugProducts.length} products
            </p>
            
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-black">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] bg-black text-white border-none rounded-md h-10">
                  <SelectValue placeholder="Featured" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Product Grid */}
         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {mugProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="group cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
                onClick={() => navigate(`/mugs/${product.id}`)}
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-square">
                  {/* MAIN IMAGE */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      product.hoverImage 
                        ? "group-hover:opacity-0"
                        : "group-hover:scale-110"
                    }`}
                  />
                  
                  {/* HOVER IMAGE */}
                  {product.hoverImage && (
                    <img
                      src={product.hoverImage}
                      alt={`${product.name} alternate view`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100"
                    />
                  )}

                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                    <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                      View Details
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-black group-hover:text-primary transition-colors duration-300 mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">By Kamlesh Group of Companies</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-bold text-primary">
                        ${product.price}
                      </p>
                      <p className="text-xs text-gray-500">
                        {product.sizes.join(", ")}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                      View →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#EF4343]">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Need Bulk Orders?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Special pricing for corporate and bulk orders. Contact us for customized quotes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+919819416689"
              className="bg-white text-[#EF4343] px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Call: +91 98194 16689
            </a>
            
            <a
              href="mailto:contact@kamleshgroup.in"
              className="bg-white/20 hover:bg-white/30 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all border border-white/30"
            >
              Email Us
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mugs;