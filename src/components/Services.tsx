import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { PenTool, BadgeCheck, Share2, Lightbulb, Box,Layout } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: 'Logo Design',
    description: 'Creating unique and memorable logos that capture a brand’s essence and make a lasting first impression.',
  },
  {
    icon: BadgeCheck,
    title: 'Brand Identity Design',
    description: 'Building complete visual systems that define how a brand looks, feels, and communicates across all platforms.',
  },
  {
    icon: Share2,
    title: 'Social Media Design',
    description: 'Developing cohesive, scroll-stopping creatives that strengthen your brand presence online.',
  },
    {
    icon: Layout,
    title: 'Poster Design',
    description: 'Creating visually striking posters that capture attention and emotion at first glanc',
  },
  {
    icon: Lightbulb,
    title: 'Creative Direction',
    description: 'Guiding ideas from concept to execution with a focus on storytelling and strategy.',
  },
  {
    icon: Box,
    title: 'Packaging Design',
    description: 'Designing packaging that not only looks beautiful but communicates the story and soul of your brand.',
  },
 

 
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="py-32 px-6 relative" ref={ref}>
      <div className="container mx-auto max-w-6xl">
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
              Services
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold">
            What I{' '}
            <span
              className="text-yellow-400"
              style={{
                textShadow: '0 0 30px rgba(255, 211, 0, 0.5)',
              }}
            >
              Offer
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="relative group p-8 bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: 'inset 0 0 60px rgba(255, 211, 0, 0.1)',
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 mb-6 rounded-full bg-yellow-400/10 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      boxShadow: '0 0 30px rgba(255, 211, 0, 0.2)',
                    }}
                  >
                    <service.icon className="text-yellow-400" size={32} />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  <motion.div
                    className="mt-6 h-1 w-0 bg-yellow-400 group-hover:w-full transition-all duration-500"
                    style={{
                      boxShadow: '0 0 10px rgba(255, 211, 0, 0.5)',
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
