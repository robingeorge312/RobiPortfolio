import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Briefcase, Users, TrendingUp } from 'lucide-react';

const experiences = [
  {
    icon: Briefcase,
    title: 'Graphic Designer',
    description: 'Freelance Graphic Designer specializing in branding, social media design, poster design and packaging design. I help businesses create cohesive visual identities that communicate their story with clarity and style. My approach blends creativity with strategy, ensuring every design makes a lasting impression.',
  },
  {
    icon: Users,
    title: 'Graphic Design Intern',
    description: 'During my internship, I contributed to creating banners, posters, and design assets for product websites and multiple client campaigns. I focused on maintaining consistent visual identity across all platforms, including Instagram, LinkedIn, and Facebook. Collaborating closely with the marketing and product teams, I learned to translate ideas into engaging, on-brand visuals with quick turnarounds and attention to detail.',
  },
  {
    icon: Award,
    title: 'Jr. Software Engineer',
    description: 'As a Junior Software Engineer, I collaborated with cross-functional teams, including UI/UX designers and product managers, to build responsive, user-focused web applications. I developed clean and efficient front-end interfaces using HTML, CSS, JavaScript, and React, ensuring visual consistency and seamless user experiences. This role strengthened my attention to design detail and enhanced my understanding of how technology and creativity work together to deliver impactful digital solutions.',
  },
  {
    icon: TrendingUp,
    title: 'Portfolio Growth',
    description: 'Successfully completed 100+ projects ranging from startups to established brands.',
  },
];

const Experience = () => {
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

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-400 to-transparent hidden md:block" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
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
                        <h3 className="text-xl font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

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
