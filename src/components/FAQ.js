import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default

  const faqData = [
    {
      question: "How is this different from Gmail or Outlook?",
      answer: "Unlike traditional email clients, Antboxx provides AI-powered intelligence while keeping all processing local to your device. Your data never touches external AI servers."
    },
    {
      question: "What email providers does Antboxx support?",
      answer: "We support Gmail, Outlook, Apple Mail, and any IMAP/SMTP email provider. Integration is seamless and secure."
    },
    {
      question: "Is my email data really private?",
      answer: "Yes, absolutely. All AI processing happens locally on your device. Your emails never leave your computer, ensuring complete privacy and security."
    },
    {
      question: "Do you offer enterprise deployment?",
      answer: "Yes, we offer enterprise solutions with advanced security features, centralized management, and custom deployment options for large organizations."
    },
    {
      question: "How does local AI processing work?",
      answer: "Our local AI engine runs entirely on your device, analyzing your emails without sending any data to external servers. This ensures maximum privacy while providing intelligent email management."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-content">
        <motion.h2
          className="faq-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Your Questions, Answered
        </motion.h2>
        
        <motion.p
          className="faq-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get answers to your questions about Antboxx's features, pricing, and how it streamlines your outreach.
        </motion.p>
        
        <motion.div
          className="faq-items"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <div className="faq-icon">
                  {openIndex === index ? (
                    <ChevronUp size={20} color="#64748b" />
                  ) : (
                    <ChevronDown size={20} color="#64748b" />
                  )}
                </div>
              </div>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
