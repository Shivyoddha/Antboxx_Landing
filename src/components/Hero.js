import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const chipText = "Modernize The Way You Manage Your Inbox";
  const titleText = "Where Email Privacy Meets Effortless Productivity And Focus.";
  const subtitleText = "The Only Email Client With Local AI Processing. Get 10x More Productive While Keeping Your data Completely Private.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.03 // Faster stagger for word-by-word
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0,
      filter: "blur(10px)",
      y: 20
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  if (isLoading) {
    return (
      <section id="home" className="hero" aria-label="Loading hero section">
        <div className="hero-content">
          <div className="loading-skeleton">
            <div className="skeleton-chip"></div>
            <div className="skeleton-title"></div>
            <div className="skeleton-subtitle"></div>
            <div className="skeleton-buttons">
              <div className="skeleton-button"></div>
              <div className="skeleton-button"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="hero" aria-label="Hero section with main value proposition">
      <div className="hero-content">
        <motion.div 
          className="chip"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.8,
            ease: "easeOut"
          }}
          aria-label="Modernize inbox management chip"
        >
          {chipText}
        </motion.div>
        
        <motion.h1
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          aria-label="Main headline about email privacy and productivity"
        >
          {titleText.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              style={{ display: 'inline-block', marginRight: '0.3em' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          aria-label="Product description about local AI processing"
        >
          {subtitleText.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              style={{ display: 'inline-block', marginRight: '0.3em' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
        
        <div className="hero-buttons" role="group" aria-label="Call to action buttons">
          <button 
            className="btn-primary" 
            style={{borderRadius: '32px'}}
            aria-label="Start private beta program"
          >
            Start Private Beta
          </button>
          <button 
            className="btn-secondary" 
            style={{borderRadius: '32px'}}
            aria-label="Request enterprise demo"
          >
            Request Enterprise Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
