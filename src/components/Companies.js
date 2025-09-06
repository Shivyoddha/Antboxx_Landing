import React from 'react';
import { motion } from 'framer-motion';
import gmailPic from '../assets/gmail_pic.jpg';

const Companies = () => {
  const companies = [
    { id: 1, name: "Logoipsum", icon: "🎯" },
    { id: 2, name: "Logoipsum", icon: "☀️" },
    { id: 3, name: "Logoipsum", icon: "⚡" },
    { id: 4, name: "Logoipsum", icon: "🌍" },
    { id: 5, name: "Logoipsum", icon: "🌊" },
    { id: 6, name: "Logoipsum", icon: "🔗" },
    { id: 7, name: "Logoipsum", icon: "🏔️" }
  ];

  return (
    <section className="companies-section">
      <div className="companies-content">
        <motion.div 
          className="gmail-image-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img 
            src={gmailPic} 
            alt="Gmail interface showcasing email management" 
            className="gmail-image"
          />
          <div className="image-blur-gradient"></div>
        </motion.div>
        
        <motion.h2 
          className="companies-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Empowering Teams at the World's Most Innovative Companies
        </motion.h2>
        
        <motion.div 
          className="companies-logos"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="logo-row">
            {companies.slice(0, 4).map((company) => (
              <div key={company.id} className="company-logo">
                <span className="logo-icon">{company.icon}</span>
                <span className="logo-text">{company.name}</span>
              </div>
            ))}
          </div>
          
          <div className="logo-row">
            {companies.slice(4, 7).map((company) => (
              <div key={company.id} className="company-logo">
                <span className="logo-icon">{company.icon}</span>
                <span className="logo-text">{company.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Companies;
