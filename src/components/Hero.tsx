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
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Single Video - Source changes based on screen size */}
      <video
        ref={videoRef}
        key={isMobile ? 'mobile' : 'desktop'}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source 
          src={isMobile ? HERO_VIDEOS.mobile : HERO_VIDEOS.desktop} 
          type="video/mp4" 
        />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />

      {/* Vignette Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 100%)',
        }}
      />

      {/* Content Container */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Your content goes here */}
      </motion.div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-24 md:bottom-10 right-10 z-20 bg-black/40 p-3 rounded-full hover:bg-black/70 transition-colors"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <VolumeX size={24} className="text-[#F05656]" />
        ) : (
          <Volume2 size={24} className="text-[#F05656]" />
        )}
      </button>
    </div>
  );
}

export default Hero;