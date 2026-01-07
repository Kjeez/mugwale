import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { fadeInUp } from "../animation/variants";
import { motion, AnimatePresence } from "framer-motion";
import showcaseItems from "@/data/showcaseItems";
import { X, ZoomIn } from "lucide-react";

const News = () => {
  // State to track which image is currently opened in the lightbox
  const [selectedItem, setSelectedItem] = useState<typeof showcaseItems[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#EF4343] grid-overlay-light">
          <motion.div 
            variants={fadeInUp} 
            initial="hidden"
            animate="visible" 
            className="container mx-auto px-6"
          >
            <div className="max-w-4xl">
              <motion.h1 
                variants={fadeInUp} 
                initial="hidden"
                animate="visible" 
                className="text-6xl md:text-8xl font-bold mb-8 text-foreground"
              >
                Client Showcase
              </motion.h1>
              <motion.p 
                variants={fadeInUp} 
                initial="hidden"
                animate="visible" 
                className="text-xl md:text-2xl text-foreground max-w-2xl leading-relaxed"
              >
                Explore our latest exhibitions, behind-the-scenes moments, and client engagements.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {showcaseItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group cursor-pointer block h-full"
                  onClick={() => setSelectedItem(item)} // Open the lightbox
                >
                  <article className="flex flex-col h-full bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    {/* Image Container */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={item.media}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Hover Overlay with Zoom Icon */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 p-3 rounded-full text-primary">
                          <ZoomIn className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-6 flex flex-col flex-grow space-y-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs font-normal">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold leading-tight text-black group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox / Gallery Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedItem(null)} // Close when clicking background
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking image itself
            >
              <img
                src={selectedItem.media}
                alt={selectedItem.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              
              <div className="mt-6 text-center text-white max-w-2xl">
                <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-white/80">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default News;