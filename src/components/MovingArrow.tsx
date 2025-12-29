import React from 'react';
import { motion } from 'framer-motion';

// Define the interface for props
interface MovingArrowProps {
  className?: string;
}

const MovingArrow: React.FC<MovingArrowProps> = ({ className = "" }) => {
  return (
    <motion.div
      className={className}
      // This creates the forward-backward loop
      animate={{ x: [0, 15, 0] }} 
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
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
  );
};

export default MovingArrow;