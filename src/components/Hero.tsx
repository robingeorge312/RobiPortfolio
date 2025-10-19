import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';

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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <span className="text-yellow-400 text-lg font-medium">Welcome to my portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
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
              className="text-2xl md:text-3xl text-gray-300 mb-6 font-light"
            >
              Graphic Designer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed"
            >
              I create bold visuals that tell stories through brand, poster, and packaging design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
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
                <ArrowDown size={20} />
              </motion.button>

              <motion.a
                href="#"
                className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: '0 0 20px rgba(255, 211, 0, 0.3)',
                }}
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
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
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-6xl font-bold text-yellow-400">RG</span>
                </div>
              </div>

              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  boxShadow: '0 0 40px rgba(255, 211, 0, 0.6)',
                }}
              >
                <span className="text-black font-bold text-sm">DESIGNER</span>
              </motion.div>
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
        <ArrowDown className="text-yellow-400" size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;
