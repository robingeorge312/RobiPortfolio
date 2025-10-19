import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Wrench } from 'lucide-react';

const expertise = [
  'Typography',
  'Layout Design',
  'Visual Composition',
  'Brand Strategy',
  'Creative Direction',
  'Color Theory',
];

const tools = [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe InDesign',
  'Adobe Premiere Pro',
  'Canva',
  'Figma',
];

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="py-32 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-400/5 to-black" />

      <div className="container mx-auto max-w-6xl relative z-10">
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
              Skills
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Skills &{' '}
            <span
              className="text-yellow-400"
              style={{
                textShadow: '0 0 30px rgba(255, 211, 0, 0.5)',
              }}
            >
              Tools
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sparkles className="text-yellow-400" size={32} />
              </motion.div>
              <h3 className="text-3xl font-bold">Expertise</h3>
            </div>

            <div className="space-y-4">
              {expertise.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-lg border-l-4 border-yellow-400 hover:border-yellow-300 transition-all">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-yellow-400"
                      whileHover={{ scale: 2 }}
                      style={{
                        boxShadow: '0 0 10px rgba(255, 211, 0, 0.8)',
                      }}
                    />
                    <span className="text-lg text-gray-300 group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                animate={{
                  rotate: [0, -10, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Wrench className="text-yellow-400" size={32} />
              </motion.div>
              <h3 className="text-3xl font-bold">Tools</h3>
            </div>

            <div className="space-y-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-l from-yellow-400/10 to-transparent rounded-lg border-r-4 border-yellow-400 hover:border-yellow-300 transition-all">
                    <span className="text-lg text-gray-300 group-hover:text-white transition-colors flex-1 text-right">
                      {tool}
                    </span>
                    <motion.div
                      className="w-2 h-2 rounded-full bg-yellow-400"
                      whileHover={{ scale: 2 }}
                      style={{
                        boxShadow: '0 0 10px rgba(255, 211, 0, 0.8)',
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
