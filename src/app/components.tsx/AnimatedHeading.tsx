'use client';

import { motion } from 'framer-motion';

const text = 'Welcome to Online Judge';

const AnimatedHeading = () => {
  return (
    <h1 className="text-4xl font-bold mb-4 flex flex-wrap">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: [0, 1, 1, 0],  // fade in, stay, then fade out
            y: [10, 0, 0, 10],
          }}
          transition={{
            delay: index * 0.05,  // letters appear one after another
            duration: 2,         // total duration of one cycle
            repeat: Infinity,    // loop forever
            repeatDelay: 0.5,    // small delay before loop restarts
            ease: 'easeInOut',
          }}
          className={char === ' ' ? 'w-2' : 'text-blue-600'}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

export default AnimatedHeading;
