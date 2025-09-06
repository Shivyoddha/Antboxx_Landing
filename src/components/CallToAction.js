import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/antboxx-logo.jpeg';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <motion.div
          className="cta-logo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={logo} alt="Antboxx Logo" className="cta-logo-image" />
        </motion.div>
        
        <motion.h2
          className="cta-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get Started with Antboxx Today
        </motion.h2>
        
        <motion.p
          className="cta-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Transform your inbox with Antboxx sorting, effortless organization, and smarter workflows built for focus.
        </motion.p>
        
        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="cta-btn-primary" style={{borderRadius: '32px'}}>Start Private Beta</button>
          <button className="cta-btn-secondary" style={{borderRadius: '32px'}}>Request Enterprise Demo</button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
