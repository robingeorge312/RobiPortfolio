import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Instagram, Linkedin, } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:robin@example.com', color: 'hover:text-yellow-400' },
    { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-yellow-400' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-yellow-400' },
  ];

  return (
    <div className="py-20 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-400/5 to-black" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span
              className="text-yellow-400 text-sm font-bold uppercase tracking-wider px-4 py-2 border border-yellow-400/30 rounded-full"
              style={{
                boxShadow: '0 0 20px rgba(255, 211, 0, 0.2)',
              }}
            >
              Get In Touch
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's create something{' '}
            <span
              className="text-yellow-400"
              style={{
                textShadow: '0 0 30px rgba(255, 211, 0, 0.5)',
              }}
            >
              amazing
            </span>
            {' '}together
          </h2>

          <p className="text-xl text-gray-400">
            Have a project in mind? Let's talk about bringing your vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-900 border-2 border-yellow-400/20 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors"
                  style={{
                    boxShadow: '0 0 0 rgba(255, 211, 0, 0)',
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 20px rgba(255, 211, 0, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = '0 0 0 rgba(255, 211, 0, 0)';
                  }}
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-900 border-2 border-yellow-400/20 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors"
                  style={{
                    boxShadow: '0 0 0 rgba(255, 211, 0, 0)',
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 20px rgba(255, 211, 0, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = '0 0 0 rgba(255, 211, 0, 0)';
                  }}
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-900 border-2 border-yellow-400/20 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                  style={{
                    boxShadow: '0 0 0 rgba(255, 211, 0, 0)',
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 20px rgba(255, 211, 0, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = '0 0 0 rgba(255, 211, 0, 0)';
                  }}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  boxShadow: '0 0 30px rgba(255, 211, 0, 0.6)',
                }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className={`flex items-center gap-4 p-4 bg-gray-900 border border-yellow-400/20 rounded-lg ${link.color} transition-colors group`}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        boxShadow: '0 0 20px rgba(255, 211, 0, 0.2)',
                      }}
                    >
                      <link.icon size={24} />
                    </motion.div>
                    <span className="font-medium">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="p-8 bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-400/30 rounded-2xl"
            >
              <h4 className="text-xl font-bold mb-3 text-yellow-400">Let's Collaborate</h4>
              <p className="text-gray-400 leading-relaxed">
                I'm always excited to work on new projects and collaborate with creative minds.
                Whether you have a clear vision or just an idea, let's discuss how we can make it happen.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
