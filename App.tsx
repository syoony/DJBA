
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InstitutionInfo from './components/InstitutionInfo';
import SupportPrograms from './components/SupportPrograms';
import CustomerSupport from './components/CustomerSupport';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'institution', 'support', 'customer'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeSection={activeSection} />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="institution">
          <InstitutionInfo />
        </section>
        <section id="support">
          <SupportPrograms />
        </section>
        <section id="customer">
          <CustomerSupport />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
