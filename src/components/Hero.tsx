import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

// ============================================
// 🎬 UPDATE YOUR VIDEO PATHS HERE
// ============================================
const HERO_VIDEOS = {
  mobile: '/video/hero_mob.mp4',
  desktop: '/video/hero.mp4',
};
// ============================================

function Hero({ setNavbarTransparent }) {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection observer for navbar
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setNavbarTransparent(true);
        } else {
          setNavbarTransparent(false);
        }
      },
      {
        threshold: [0, 0.5, 1],
        rootMargin: '-80px 0px 0px 0px'
      }
    );
    console.log('Hero rendering, isMobile:', isMobile);
    const currentRef = heroRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [setNavbarTransparent]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Single Video - Source changes based on screen size */}
      <video
        ref={videoRef}
        key={isMobile ? 'mobile' : 'desktop'}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90" // Slight opacity to blend with black bg
      >
        <source 
          src={isMobile ? HERO_VIDEOS.mobile : HERO_VIDEOS.desktop} 
          type="video/mp4" 
        />
      </video>

      {/* UPDATED: Darker Gradient Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 pointer-events-none" />

      {/* Vignette Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      {/* Content Container */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Added Text Shadow (drop-shadow-lg) for better readability */}
        <div className="max-w-4xl space-y-6 drop-shadow-lg">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Kamlesh Group of Companies
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            Innovating across industries, delivering excellence in every venture.
          </p>
          
          <div className="pt-8">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-[#EF4343] hover:bg-[#d03a3a] text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-red-600/30"
            >
              Discover More
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-24 md:bottom-10 right-10 z-20 bg-black/40 backdrop-blur-sm p-3 rounded-full hover:bg-black/60 transition-all border border-white/10"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <VolumeX size={24} className="text-white/90" />
        ) : (
          <Volume2 size={24} className="text-white/90" />
        )}
      </button>
    </div>
  );
}

export default Hero;