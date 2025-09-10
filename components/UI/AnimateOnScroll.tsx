
"use client";

import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface AnimateOnScrollProps extends MotionProps {
  children: React.ReactNode;
  delay?: number; 
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, delay = 0, ...rest }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Starts invisible and slightly below its final position
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      {...rest} 
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;