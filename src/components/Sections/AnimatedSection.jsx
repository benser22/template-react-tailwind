// src/components/AnimatedSection.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.8,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 50,
      }}
      transition={{ duration: 0.5 }}
      className="p-12 shadow-xl rounded-lg w-full"
    >
      <h2 className="text-2xl font-bold mb-4">Animación al hacer scroll</h2>
      <p className="mb-4">
        Este es un ejemplo de animación que aparece al hacer scroll usando
        Framer Motion y Tailwind CSS.
      </p>
      <div className="flex items-center justify-between">
        <motion.div
          className="w-16 h-16 bg-blue-500 border-black border rounded-md"
          animate={{ rotate: inView ? 360 : 0 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="w-16 h-16 bg-red-500 border-black border rounded-md"
          animate={{ rotate: inView ? -360 : 0 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="w-16 h-16 bg-green-500 border-black border rounded-md"
          animate={{ rotate: inView ? -360 : 0 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="w-16 h-16 bg-yellow-500 border-black border rounded-md"
          animate={{ rotate: inView ? 360 : 0 }}
          transition={{ duration: 2 }}
        />
      </div>
    </motion.div>
  );
};

export default AnimatedSection;
