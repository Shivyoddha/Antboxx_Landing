import React from 'react';
import { motion } from 'framer-motion';

const Integrations = () => {
  const integrations = [
    {
      id: 1,
      title: "Microsoft Teams Integration",
      description: "Chat about emails directly in Teams. Convert email threads to Teams discussions with one click.",
      icon: "💬"
    },
    {
      id: 2,
      title: "JIRA Project Management",
      description: "Turn email action items into JIRA tickets automatically. Keep projects moving without manual entry.",
      icon: "✏️"
    },
    {
      id: 3,
      title: "Google Workspace Sync",
      description: "Sync with Gmail, Google Calendar, and Drive. Automate workflows between your favorite Google tools.",
      icon: "📁"
    }
  ];

  return (
    <section className="integrations-section">
      <div className="integrations-content">
        <motion.h2 
          className="integrations-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Seamlessly Integrates With Your Workflow
        </motion.h2>
        
        <motion.p 
          className="integrations-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Stop switching between apps. Antboxx connects with tools your team already uses.
        </motion.p>

        <motion.div 
          className="integrations-cards"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {integrations.map((integration) => (
            <div key={integration.id} className="integration-card">
              <div className="integration-icon">
                <span className="icon-symbol">{integration.icon}</span>
              </div>
              <h3 className="integration-title">{integration.title}</h3>
              <p className="integration-description">{integration.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
