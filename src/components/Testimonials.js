import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/antboxx-logo.jpeg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "As a professional athlete, I rely on high-performance gear for my training. This site offers a great selection of top-notch products.",
      name: "Leland Kiehn",
      avatar: logo
    },
    {
      id: 2,
      text: "Antboxx has completely transformed how I manage my emails. The AI-powered organization saves me hours every week.",
      name: "Sarah Chen",
      avatar: logo
    },
    {
      id: 3,
      text: "The local AI processing gives me peace of mind knowing my data stays private while getting intelligent email management.",
      name: "Marcus Johnson",
      avatar: logo
    },
    {
      id: 4,
      text: "Finally, an email client that understands my workflow. Antboxx has made me 10x more productive without compromising security.",
      name: "Emily Rodriguez",
      avatar: logo
    },
    {
      id: 5,
      text: "The seamless integration with all my email providers makes switching effortless. Highly recommended for professionals.",
      name: "David Kim",
      avatar: logo
    }
  ];

  // Duplicate testimonials for seamless marquee effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="testimonials-section">
      <div className="testimonials-content">
        <motion.h2
          className="testimonials-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Voices Of Productivity
        </motion.h2>
        
        <motion.p
          className="testimonials-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Every inbox tells a story. These testimonials show how our Antboxx is helping people save time, reduce stress, and get more done.
        </motion.p>
        
        <motion.div
          className="testimonials-carousel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="testimonials-container">
            <div className="testimonials-track">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className="testimonial-card">
                  <div className="testimonial-content">
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">
                      <div className="author-info">
                        <span className="author-name">{testimonial.name}</span>
                      </div>
                      <div className="author-avatar">
                        <img src={testimonial.avatar} alt={testimonial.name} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
