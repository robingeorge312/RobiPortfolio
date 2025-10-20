import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';

const allProjects = [
  {
    title: 'Urban Brand Identity',
    category: 'Brand Design',
    color: 'from-yellow-400/20 to-orange-400/20',
    image: 'https://res.cloudinary.com/dhsnpynrl/image/upload/v1760985685/7_1.5x_lfcluc.png',
    description: 'Complete brand identity redesign for a modern urban lifestyle brand.',
  },
  {
    title: 'Festival Poster Series',
    category: 'Poster Design',
    color: 'from-yellow-400/20 to-green-400/20',
    image: 'https://res.cloudinary.com/dhsnpynrl/image/upload/v1760882883/Cushion_sofa_u5vu0a.png',
    description: 'Eye-catching poster series for a summer music festival.',
  },
  {
    title: 'Luxury Packaging',
    category: 'Packaging Design',
    color: 'from-yellow-400/20 to-blue-400/20',
    image: 'https://res.cloudinary.com/dhsnpynrl/image/upload/v1760882881/Furniture_Design_1_qb4xwe.png',
    description: 'Premium packaging design for luxury cosmetics brand.',
  },
  {
    title: 'Tech Startup Branding',
    category: 'Brand Design',
    color: 'from-yellow-400/20 to-purple-400/20',
    image: 'https://res.cloudinary.com/dhsnpynrl/image/upload/v1760882856/Shawarma_nr4r0a.png',
    description: 'Modern and innovative branding for a tech startup.',
  },
  {
    title: 'Music Event Poster',
    category: 'Poster Design',
    color: 'from-yellow-400/20 to-pink-400/20',
    image: 'https://res.cloudinary.com/dhsnpynrl/image/upload/v1760882855/C1-2_wcsxr4.png',
    description: 'Bold and vibrant poster design for a live music event.',
  },
  {
    title: 'Organic Product Line',
    category: 'Packaging Design',
    color: 'from-yellow-400/20 to-teal-400/20',
    image: 'https://res.cloudinary.com/dhsnpynrl/image/upload/v1760882855/Health_care_social_media_post_sozteo.png',
    description: 'Natural and eco-friendly packaging for organic products.',
  },
  {
    title: 'Fashion Brand Rebrand',
    category: 'Brand Design',
    color: 'from-yellow-400/20 to-red-400/20',
    image: 'https://res.cloudinary.com/dhsnpynrl/image/upload/v1760882858/Real_Estate_1_xinta9.png',
    description: 'Complete rebrand for established fashion label.',
  },
  {
    title: 'Concert Poster Collection',
    category: 'Poster Design',
    color: 'from-yellow-400/20 to-cyan-400/20',
    image: 'https://res.cloudinary.com/dhsnpynrl/image/upload/v1760883126/Dual_Rhythm_Music_Event_Poster_2x_bewgkn.png',
    description: 'Series of promotional posters for concert venues.',
  },
  {
    title: 'Craft Beer Packaging',
    category: 'Packaging Design',
    color: 'from-yellow-400/20 to-amber-400/20',
    image: 'https://res.cloudinary.com/dhsnpynrl/image/upload/v1760986955/Timeless_Pursuit_1.25x_j1pli2.png',
    description: 'Creative packaging design for craft brewery.',
  },
  {
    title: 'Wellness Brand Identity',
    category: 'Brand Design',
    color: 'from-yellow-400/20 to-emerald-400/20',
    image: 'https://res.cloudinary.com/dhsnpynrl/image/upload/v1760987345/Juice_Can_Mockup_2x_kw3zwb.jpg',
    description: 'Holistic branding for wellness and meditation app.',
  },
  {
    title: 'Art Exhibition Poster',
    category: 'Poster Design',
    color: 'from-yellow-400/20 to-violet-400/20',
    image: 'https://res.cloudinary.com/dhsnpynrl/image/upload/v1760987347/Glossy_Standing_Pouch_Mockup_PSD_2x_iuahsx.jpg',
    description: 'Artistic poster design for contemporary art exhibition.',
  },
  {
    title: 'Gourmet Food Packaging',
    category: 'Packaging Design',
    color: 'from-yellow-400/20 to-lime-400/20',
    image: 'https://res.cloudinary.com/dhsnpynrl/image/upload/v1760883098/Artboard_1_1.5x_kcqxrr.png',
    description: 'Elegant packaging for gourmet food products.',
  },
  {
    title: 'Gourmet Food Packaging',
    category: 'Packaging Design',
    color: 'from-yellow-400/20 to-lime-400/20',
    image: 'https://res.cloudinary.com/dhsnpynrl/image/upload/v1760988186/RC_Bakes_Logo_JPG-11_osbql9.jpg',
    description: 'Elegant packaging for gourmet food products.',
  },
    {
    title: 'Gourmet Food Packaging',
    category: 'Packaging Design',
    color: 'from-yellow-400/20 to-lime-400/20',
    image: 'https://res.cloudinary.com/dhsnpynrl/image/upload/v1760988408/Moibook_pooo4o.png',
    description: 'Elegant packaging for gourmet food products.',
  },
  {
    title: 'Gourmet Food Packaging',
    category: 'Packaging Design',
    color: 'from-yellow-400/20 to-lime-400/20',
    image: 'https://res.cloudinary.com/dhsnpynrl/image/upload/v1760988187/Ruga_Wordmark_presentation1-11_pobmul.jpg',
    description: 'Elegant packaging for gourmet food products.',
  },

 

];

interface Project {
  title: string;
  category: string;
  color: string;
  image: string;
  description: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(allProjects.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentProjects = allProjects.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="py-20 px-6 relative overflow-hidden" ref={ref}>
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
            Recent {' '}
            <span
              className="text-yellow-400"
              style={{
                textShadow: '0 0 30px rgba(255, 211, 0, 0.5)',
              }}
            >
              Projects
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${currentPage}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />


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


                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {totalPages > 1 && (
            <>
              <motion.button
                onClick={prevPage}
                disabled={currentPage === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  currentPage === 0
                    ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                    : 'bg-yellow-400 text-black hover:bg-yellow-300'
                }`}
                whileHover={currentPage > 0 ? { scale: 1.1 } : {}}
                whileTap={currentPage > 0 ? { scale: 0.9 } : {}}
                style={{
                  boxShadow: currentPage > 0 ? '0 0 20px rgba(255, 211, 0, 0.5)' : 'none',
                }}
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  currentPage === totalPages - 1
                    ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                    : 'bg-yellow-400 text-black hover:bg-yellow-300'
                }`}
                whileHover={currentPage < totalPages - 1 ? { scale: 1.1 } : {}}
                whileTap={currentPage < totalPages - 1 ? { scale: 0.9 } : {}}
                style={{
                  boxShadow: currentPage < totalPages - 1 ? '0 0 20px rgba(255, 211, 0, 0.5)' : 'none',
                }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </>
          )}
        </div>

        <div className="flex items-center justify-center gap-3 mt-12">
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentPage ? 1 : -1);
                setCurrentPage(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentPage ? 'w-12 bg-yellow-400' : 'w-2 bg-gray-700 hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.2 }}
              style={{
                boxShadow: index === currentPage ? '0 0 10px rgba(255, 211, 0, 0.6)' : 'none',
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            Page {currentPage + 1} of {totalPages}
          </p>
          <motion.a
            href="https://www.behance.net/robidesignz"
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

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-20 w-14 h-14 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              style={{
                boxShadow: '0 0 40px rgba(255, 211, 0, 0.8)',
              }}
            >
              <X size={28} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] w-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-2xl border-4 border-yellow-400/40"
            
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;