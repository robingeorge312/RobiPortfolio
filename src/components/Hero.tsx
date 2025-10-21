import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';

import Resume from '../Robin_Graphic_Designer_Resume.pdf'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Profile Image - Top on Mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative md:hidden mb-8"
        >
          <motion.div
            className="relative w-full aspect-square max-w-xs mx-auto"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 211, 0, 0.2) 0%, rgba(255, 211, 0, 0) 100%)',
                boxShadow: '0 0 80px rgba(255, 211, 0, 0.3)',
              }}
            />

            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-yellow-400/30">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dhsnpynrl/image/upload/v1760884403/222profile_lre4m3.png"
                  alt="Robin G - Graphic Designer"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-center md:text-left"
            >
              Hi, I'm{' '}
              <span
                className="text-yellow-400"
                style={{
                  textShadow: '0 0 30px rgba(255, 211, 0, 0.6)',
                }}
              >
                Robin G
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-3xl text-gray-300 mb-6 font-light text-center md:text-left"
            >
              Graphic & Brand Designer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed text-center md:text-left"
            >
              I bring creativity and strategy together to turn ideas into designs that inspire.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: '0 0 30px rgba(255, 211, 0, 0.6)',
                }}
              >
                View My Work
              </motion.button>
              {/* <motion.a
                href={Resume}
                download="Robin_Graphic_Designer_Resume.pdf"
                className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: '0 0 20px rgba(255, 211, 0, 0.3)',
                }}
              >
                <Download size={20} />
                Download Resume
              </motion.a> */}
            </motion.div>
          </motion.div>

          {/* Profile Image - Right on Desktop (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden md:block"
          >
            <motion.div
              className="relative w-full aspect-square max-w-md mx-auto"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 211, 0, 0.2) 0%, rgba(255, 211, 0, 0) 100%)',
                  boxShadow: '0 0 100px rgba(255, 211, 0, 0.3)',
                }}
              />

              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-yellow-400/30">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dhsnpynrl/image/upload/v1760884403/222profile_lre4m3.png"
                    alt="Robin G - Graphic Designer"
                    className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
      </motion.div>
    </div>
  );
};

export default Hero;