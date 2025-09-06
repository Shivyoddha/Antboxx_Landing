import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/antboxx-logo.jpeg';

const Features = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const features = [
    {
      id: 1,
      title: "Smart Contextual Grouping",
      description: "See related emails as WhatsApp-style conversations. No more hunting through folders - AI groups emails by context automatically.",
      type: "leads-database",
      data: [
        { name: "Ruth Slaven", title: "Health educator", company: "L.L. Berger" },
        { name: "Gloria Eichler", title: "Rehabilitation Counselor", company: "On Cue" },
        { name: "Lola Hsu", title: "Development Specialist", company: "Future Plan" },
        { name: "Jerry Payne", title: "Training Specialist", company: "Olson's Market" },
        { name: "Rebecca Saunders", title: "Physiologist", company: "Skaggs-Alpha Beta" }
      ]
    },
    {
      id: 2,
      title: "Natural Language Search",
      description: "Search like you think: 'Find emails about the project delay last week' instead of complex filters and keywords.",
      type: "email-accounts",
      data: [
        { name: "James Carter", email: "james.carter@gmail.com" },
        { name: "Emma Watson", email: "emma.watson@ymail.com" },
        { name: "Daniel Hughes", email: "daniel.hughes@aol.com" },
        { name: "Sophia Bennett", email: "sophia.bennett@outlook.com" }
      ]
    },
    {
      id: 3,
      title: "AI To-do Extraction",
      description: "Never miss action items again. AI automatically extracts tasks and deadlines from your emails into an organized to-do list.",
      type: "mail-summary",
      data: {
        banner: "95% of Your Warmup Emails Delivered to the Inbox",
        stats: [
          { label: "42 Sent", icon: "✈️" },
          { label: "40 Inbox", icon: "📥" },
          { label: "2 Spam", icon: "⚠️" },
          { label: "21 Received", icon: "✉️" }
        ]
      }
    },
    {
      id: 4,
      title: "Newsletter Digest View",
      description: "Read newsletters like a newspaper. AI organizes subscriptions into a clean, distraction-free digest format.",
      type: "analytics",
      data: {
        chart: "Annual Analytics",
        period: "January to August",
        tooltip: "June 2024 - Sent 14"
      }
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section id="features" className="features-section" aria-label="Loading features section">
        <div className="features-content">
          <div className="loading-skeleton">
            <div className="skeleton-features-title"></div>
            <div className="skeleton-features-subtitle"></div>
            <div className="skeleton-features-grid">
              <div className="skeleton-feature-card large"></div>
              <div className="skeleton-feature-card medium"></div>
              <div className="skeleton-feature-card medium"></div>
              <div className="skeleton-feature-card wide"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="features" className="features-section" aria-label="Features section showcasing product capabilities">
      <div className="features-content">
        <motion.h2 
          className="features-title1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          aria-label="Main features headline"
        >
          Because your inbox is personal
        </motion.h2>
        
        <motion.p 
          className="features-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Unlike cloud-based email clients that analyze your data on external servers, Antboxx processes everything locally on your device. Your emails never leave your control.
        </motion.p>

        <motion.div 
          className="features-showcase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.id} 
                className={`feature-card ${feature.type}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-card-inner">
                  <div className="feature-visual">
                    {feature.type === "leads-database" && (
                      <div className="leads-database-visual">
                        <div className="database-header">
                          <div className="database-icon">📊</div>
                          <span>Leads Database</span>
                        </div>
                        <div className="database-rows">
                          {feature.data.slice(0, 3).map((row, i) => (
                            <div key={i} className="database-row">
                              <div className="row-avatar">
                                <img src={logo} alt={row.name} />
                              </div>
                              <div className="row-info">
                                <span className="row-name">{row.name}</span>
                                <span className="row-company">{row.company}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {feature.type === "email-accounts" && (
                      <div className="email-accounts-visual">
                        <div className="accounts-header">
                          <div className="accounts-icon">📧</div>
                          <span>Email Accounts</span>
                        </div>
                        <div className="accounts-list">
                          {feature.data.slice(0, 2).map((account, i) => (
                            <div key={i} className="account-item">
                              <div className="account-avatar">
                                <img src={logo} alt={account.name} />
                              </div>
                              <div className="account-details">
                                <span className="account-name">{account.name}</span>
                                <span className="account-status">Active</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {feature.type === "mail-summary" && (
                      <div className="mail-summary-visual">
                        <div className="summary-header">
                          <div className="summary-icon">⚡</div>
                          <span>95% Inbox Delivery</span>
                        </div>
                        <div className="summary-metrics">
                          <div className="metric-item">
                            <span className="metric-number">42</span>
                            <span className="metric-label">Sent</span>
                          </div>
                          <div className="metric-item">
                            <span className="metric-number">40</span>
                            <span className="metric-label">Inbox</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {feature.type === "analytics" && (
                      <div className="analytics-visual">
                        <div className="analytics-header">
                          <div className="analytics-icon">📈</div>
                          <span>Annual Analytics</span>
                        </div>
                        <div className="chart-visual">
                          <div className="chart-bars">
                            <div className="bar" style={{height: '60%'}}></div>
                            <div className="bar" style={{height: '80%'}}></div>
                            <div className="bar" style={{height: '45%'}}></div>
                            <div className="bar" style={{height: '90%'}}></div>
                          </div>
                          <div className="chart-label">Jan - Aug 2024</div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
