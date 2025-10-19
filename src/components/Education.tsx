import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const education = [
  {
    degree: "Master of Computer Applications",
    institution: 'Kongu Engineering College, Erode',
    year: '2020 - 2022',
    //description: 'Advanced studies in visual communication, brand strategy, and creative leadership.',
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: 'The American College, Madurai',
    year: '2017 - 2020',
    //description: 'Comprehensive foundation in design principles, typography, and digital media.',
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="py-32 px-6 relative" ref={ref}>
      <div className="container mx-auto max-w-4xl">
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
              Background
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold">
            <span
              className="text-yellow-400"
              style={{
                textShadow: '0 0 30px rgba(255, 211, 0, 0.5)',
              }}
            >
              Education
            </span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                className="relative group p-8 bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: 'inset 0 0 60px rgba(255, 211, 0, 0.1)',
                  }}
                />

                <div className="relative z-10 flex flex-col md:flex-row gap-6">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-yellow-400/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    style={{
                      boxShadow: '0 0 30px rgba(255, 211, 0, 0.2)',
                    }}
                  >
                    {index === 0 ? (
                      <GraduationCap className="text-yellow-400" size={36} />
                    ) : (
                      <BookOpen className="text-yellow-400" size={36} />
                    )}
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {edu.degree}
                      </h3>
                      <span className="text-yellow-400 font-medium text-sm md:text-base">
                        {edu.year}
                      </span>
                    </div>

                    <p className="text-lg text-gray-300 mb-3 font-medium">
                      {edu.institution}
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>

                    <motion.div
                      className="mt-4 h-1 w-0 bg-yellow-400 group-hover:w-full transition-all duration-500"
                      style={{
                        boxShadow: '0 0 10px rgba(255, 211, 0, 0.5)',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 text-yellow-400">
            <div className="h-px w-12 bg-yellow-400" style={{ boxShadow: '0 0 10px rgba(255, 211, 0, 0.5)' }} />
            <span className="text-sm font-semibold uppercase tracking-wider">Continuous Learning & Growth</span>
            <div className="h-px w-12 bg-yellow-400" style={{ boxShadow: '0 0 10px rgba(255, 211, 0, 0.5)' }} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
