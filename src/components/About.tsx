import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="py-32 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-400/5 to-black" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
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
              About Me
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Visuals with {' '}
            <span
              className="text-yellow-400"
              style={{
                textShadow: '0 0 30px rgba(255, 211, 0, 0.5)',
              }}
            >
            Purpose
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I’m a passionate graphic designer with nearly two years of experience turning ideas into meaningful visuals. I’ve collaborated with over 15 clients across industries including mobile and furniture brands, startups, bakeries, beverage and food brands, and event management companies.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              My work blends creativity and strategy to craft branding, packaging, and social media designs that connect with people and strengthen brand identity. Every project I take on is guided by curiosity, clarity, and the desire to create something truly memorable.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8"
            >
              <div className="inline-flex items-center gap-4 text-yellow-400">
                <div className="h-px w-12 bg-yellow-400" style={{ boxShadow: '0 0 10px rgba(255, 211, 0, 0.5)' }} />
                <span className="text-sm font-semibold uppercase tracking-wider">Design with Purpose</span>
                <div className="h-px w-12 bg-yellow-400" style={{ boxShadow: '0 0 10px rgba(255, 211, 0, 0.5)' }} />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
