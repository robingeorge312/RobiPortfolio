import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Heart, ArrowUp, Phone,  } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
  ];

  const services = [
    { label: 'Brand Design' },
    { label: 'Poster Design' },
    { label: 'Packaging Design' },
    { label: 'Social Media' },
  ];

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:robicreationspace@gmail.com' },
    { icon: Phone, label: 'Phone', href: 'tel:+919500318204' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/robi.designz?igsh=MTEwcnplYXFidmoyZA%3D%3D&utm_source=qr' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/r2025-designer/' },
  ];

  return (
    <footer className="relative bg-black border-t border-yellow-400/20">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold">
                <span className="text-yellow-400">Robin</span>
                <span className="text-white"> G.</span>
              </h3>
              <div
                className="h-1 w-16 bg-yellow-400 mt-2"
                style={{
                  boxShadow: '0 0 10px rgba(255, 211, 0, 0.5)',
                }}
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Crafting bold visuals that tell stories through innovative design solutions.
            </p>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    boxShadow: '0 0 20px rgba(255, 211, 0, 0.2)',
                  }}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-4 transition-all" />
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <span className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2 group cursor-default">
                    <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-4 transition-all" />
                    {service.label}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <p className="text-gray-400">
                Have a project in mind? Let's work together to create something amazing.
              </p>
              <div className="space-y-3">
                <motion.a
                  href="tel:+919500318204"
                  className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Phone size={18} />
                  <span>+91 95003 18204</span>
                </motion.a>
              
              </div>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-colors w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: '0 0 20px rgba(255, 211, 0, 0.5)',
                }}
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-yellow-400/20 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2025 Robidesignz.in . All rights reserved. 
            </p>
            {/* <div className="flex items-center gap-6">
              <button className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
                Terms of Service
              </button>
            </div> */}
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-300 transition-all z-50"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        style={{
          boxShadow: '0 0 30px rgba(255, 211, 0, 0.6)',
        }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;