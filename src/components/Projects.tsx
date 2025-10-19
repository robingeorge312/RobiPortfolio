import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Urban Brand Identity',
    category: 'Brand Design',
    color: 'from-yellow-400/20 to-orange-400/20',
  },
  {
    title: 'Festival Poster Series',
    category: 'Poster Design',
    color: 'from-yellow-400/20 to-green-400/20',
  },
  {
    title: 'Luxury Packaging',
    category: 'Packaging Design',
    color: 'from-yellow-400/20 to-blue-400/20',
  },
  {
    title: 'Tech Startup Branding',
    category: 'Brand Design',
    color: 'from-yellow-400/20 to-purple-400/20',
  },
  {
    title: 'Music Event Poster',
    category: 'Poster Design',
    color: 'from-yellow-400/20 to-pink-400/20',
  },
  {
    title: 'Organic Product Line',
    category: 'Packaging Design',
    color: 'from-yellow-400/20 to-teal-400/20',
  },
];

const Projects = () => {
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
              Portfolio
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Selected{' '}
            <span
              className="text-yellow-400"
              style={{
                textShadow: '0 0 30px rgba(255, 211, 0, 0.5)',
              }}
            >
              Works
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                <motion.div
                  className="absolute inset-0 border-2 border-yellow-400/0 group-hover:border-yellow-400/50 transition-colors duration-300 rounded-2xl"
                  style={{
                    boxShadow: '0 0 0 rgba(255, 211, 0, 0)',
                  }}
                  whileHover={{
                    boxShadow: '0 0 30px rgba(255, 211, 0, 0.5)',
                  }}
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-yellow-400 font-medium">
                      {project.category}
                    </p>
                  </motion.div>

                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      boxShadow: '0 0 20px rgba(255, 211, 0, 0.6)',
                    }}
                  >
                    <ExternalLink className="text-black" size={20} />
                  </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              boxShadow: '0 0 20px rgba(255, 211, 0, 0.3)',
            }}
          >
            View All Projects
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
