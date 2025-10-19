import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content: 'Robin transformed our brand identity completely. The attention to detail and creative vision exceeded all expectations. Truly a master of visual storytelling.',
    rating: 5,
    image: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, Urban Brands',
    content: 'Working with Robin was an absolute pleasure. The poster designs brought our campaign to life in ways we never imagined possible.',
    rating: 5,
    image: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, Organic Goods',
    content: 'The packaging design Robin created for our product line has been a game-changer. Sales increased by 40% within the first month!',
    rating: 5,
    image: 'ER',
  },
  {
    name: 'David Williams',
    role: 'Creative Director, Studio Flow',
    content: 'Robin brings a unique blend of artistic creativity and strategic thinking. Every project is executed with precision and passion.',
    rating: 5,
    image: 'DW',
  },
  {
    name: 'Lisa Thompson',
    role: 'Brand Manager, Fashion Hub',
    content: 'An exceptional designer who understands the power of visual communication. Robin\'s work speaks volumes and delivers results.',
    rating: 5,
    image: 'LT',
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
    <div className="py-32 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-400/5 to-black" />

      <div className="container mx-auto max-w-5xl relative z-10">
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
              Testimonials
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold">
            What{' '}
            <span
              className="text-yellow-400"
              style={{
                textShadow: '0 0 30px rgba(255, 211, 0, 0.5)',
              }}
            >
              Clients Say
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-400/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-6"
                  >
                    <Quote
                      className="text-yellow-400"
                      size={48}
                      style={{
                        filter: 'drop-shadow(0 0 20px rgba(255, 211, 0, 0.5))',
                      }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-8"
                  >
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-400 fill-yellow-400"
                          size={20}
                        />
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 italic">
                      "{testimonials[currentIndex].content}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center"
                        style={{
                          boxShadow: '0 0 30px rgba(255, 211, 0, 0.4)',
                        }}
                      >
                        <span className="text-black font-bold text-lg">
                          {testimonials[currentIndex].image}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-white">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-yellow-400 font-medium">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-yellow-400 text-black hover:bg-yellow-300 flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                boxShadow: '0 0 20px rgba(255, 211, 0, 0.5)',
              }}
            >
              <ChevronLeft size={24} />
            </motion.button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16">
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-yellow-400 text-black hover:bg-yellow-300 flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                boxShadow: '0 0 20px rgba(255, 211, 0, 0.5)',
              }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-12 bg-yellow-400' : 'w-2 bg-gray-700 hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.2 }}
              style={{
                boxShadow: index === currentIndex ? '0 0 10px rgba(255, 211, 0, 0.6)' : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
