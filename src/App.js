import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Companies />
      <Features />
      <Integrations />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
