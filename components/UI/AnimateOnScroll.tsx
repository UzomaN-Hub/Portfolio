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
      initial={{ opacity: 0, y: 0 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.15 }} 
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      style={{ pointerEvents: 'auto' }} 
      {...rest} 
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;