import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'expertise', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 origin-left z-50"
        style={{ scaleX }}
      />

      <Header activeSection={activeSection} />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="expertise">
          <Expertise />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
