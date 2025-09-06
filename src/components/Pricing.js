import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for individuals starting out with the essentials.",
      buttonText: "Contact Us",
      buttonType: "secondary",
      features: [
        "Unlimited Emails & Phone Lookups",
        "500 Email Exports",
        "500 Phone Exports",
        "300 Emails/Day",
        "1,000 Active Contacts",
        "10 Mailboxes Connect"
      ],
      featureTitle: "Get started with:"
    },
    {
      id: 2,
      name: "Starter",
      price: "$59",
      period: "/month",
      description: "Great for small teams boosting productivity.",
      buttonText: "Request A Demo",
      buttonType: "primary",
      isPopular: true,
      features: [
        "Unlimited Emails & Phone Lookups",
        "1,200 Email Exports",
        "1,200 Phone Exports",
        "500 Emails/Day",
        "10,000 Active Contacts",
        "50 Mailboxes Connect",
        "10,000 AI Writer Credits",
        "Unlimited Email Warmup"
      ],
      featureTitle: "Free plan features, plus:"
    },
    {
      id: 3,
      name: "Growth",
      price: "$119",
      period: "/month",
      description: "Built for large teams needing control and security.",
      buttonText: "Contact Us",
      buttonType: "secondary",
      features: [
        "Unlimited Emails & Phone Lookups",
        "5,000 Email Exports",
        "5,000 Phone Exports",
        "Unlimited Emails/Day",
        "200,000 Active Contacts",
        "100 Mailboxes Connect",
        "20,000 AI Writer Credits",
        "Unlimited Email Warmup",
        "Included Lead Enrichment",
        "Premium Chat Support"
      ],
      featureTitle: "Starter plan features, plus:"
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-content">
        <motion.h2
          className="pricing-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Simple, Transparent Pricing
        </motion.h2>
        
        <motion.p
          className="pricing-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We simplify emails with the power of AI. From categorizing to prioritizing, your inbox stays organized, clear, and always under control.
        </motion.p>
        
        <motion.div
          className="pricing-cards"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                {plan.isPopular && (
                  <div className="popular-badge">Most Popular</div>
                )}
              </div>
              
              <div className="plan-price">
                <span className="price-amount">{plan.price}</span>
                <span className="price-period">{plan.period}</span>
              </div>
              <p className="plan-description">{plan.description}</p>
              
              <button className={`plan-button ${plan.buttonType}`}>
                {plan.buttonText}
              </button>
              
              <div className="plan-features">
                <h4 className="features-title">{plan.featureTitle}</h4>
                <ul className="features-list">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="checkmark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
