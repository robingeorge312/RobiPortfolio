import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Briefcase, Users, } from 'lucide-react';

const experiences = [
  {
    icon: Briefcase,
    title: 'Freelance Graphic Designer',
    company: 'Self-employed',
    description:
      'Worked with 15+ clients across industries like mobile shops, furniture brands, startups, bakeries, and digital agencies. Created brand identities, packaging, posters, and social media creatives that combine creativity with strategy, giving each design purpose and personality.'
  },

  {
    icon: Users,
    title: 'Graphic Design Intern',
    company: 'Kyvag Digital Pvt Limited',
    description:
      'Designed banners, posters, and assets for the company and client websites, maintaining brand consistency. Created social media visuals for Instagram, LinkedIn, and Facebook to support product launches and campaigns, learning to translate ideas into engaging visuals.'
  },
  {
    icon: Award,
    title: 'Junior Software Engineer',
    company: 'Cognizant Technology Solutions',
    description:
      'Developed responsive web applications with HTML, CSS, JavaScript, and React while collaborating with cross-functional teams. This technical experience strengthens my design work with attention to detail and digital feasibility',
  }];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="py-20 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-400/5 to-black" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
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
              Journey
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Experience &{' '}
            <span
              className="text-yellow-400"
              style={{
                textShadow: '0 0 30px rgba(255, 211, 0, 0.5)',
              }}
            >
              Highlights
            </span>
          </h2>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-400 to-transparent hidden md:block" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Card */}
                <div className="flex-1">
                  <motion.div
                    className="p-8 bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        style={{
                          boxShadow: '0 0 30px rgba(255, 211, 0, 0.2)',
                        }}
                      >
                        <exp.icon className="text-yellow-400" size={28} />
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p
                          className="text-yellow-400 font-medium mb-3"
                          style={{
                            textShadow: '0 0 10px rgba(255, 211, 0, 0.3)',
                          }}
                        >
                          {exp.company}
                        </p>
                        <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <motion.div
                  className="w-8 h-8 rounded-full bg-yellow-400 flex-shrink-0 hidden md:flex items-center justify-center"
                  whileHover={{ scale: 1.5 }}
                  style={{
                    boxShadow: '0 0 30px rgba(255, 211, 0, 0.8)',
                  }}
                >
                  <div className="w-3 h-3 rounded-full bg-black" />
                </motion.div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
