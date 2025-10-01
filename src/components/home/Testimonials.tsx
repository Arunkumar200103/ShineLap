import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { testimonials } from '../../data/mockData';

interface TestimonialsProps {
  darkMode: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={`py-24 relative overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
    }`}>
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/3 right-1/4 w-96 h-96 ${
          darkMode ? 'bg-purple-500/5' : 'bg-purple-500/10'
        } rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-1/3 left-1/4 w-96 h-96 ${
          darkMode ? 'bg-blue-500/5' : 'bg-blue-500/10'
        } rounded-full blur-3xl`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
              darkMode 
                ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 border border-purple-500/20' 
                : 'bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 border border-purple-200'
            }`}>
              Customer Stories
            </span>
          </motion.div>
          <h2 className={`text-4xl sm:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Loved by{' '}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Real experiences from real customers who trust us with their technology needs
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Main Card */}
              <div className={`relative overflow-hidden rounded-3xl p-10 sm:p-12 ${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50' 
                  : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-2xl shadow-gray-200/50'
              }`}>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5"></div>
                
                {/* Quote Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-8 left-8 opacity-10"
                >
                  <ChatBubbleLeftRightIcon className={`h-20 w-20 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Avatar with decorative elements */}
                  <div className="flex flex-col items-center mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                      className="relative"
                    >
                      {/* Gradient ring */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                      
                      {/* Avatar container */}
                      <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-br from-purple-500 to-pink-500">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full rounded-full object-cover border-4 border-gray-800"
                        />
                      </div>
                      
                      {/* Verification badge */}
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center border-4 border-gray-800 shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </motion.div>

                    {/* Stars */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex gap-1 mt-6 mb-6"
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                        >
                          <StarIcon 
                            className={`h-6 w-6 ${
                              i < testimonials[currentIndex].rating 
                                ? 'text-yellow-400' 
                                : darkMode ? 'text-gray-600' : 'text-gray-300'
                            }`}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Testimonial Content */}
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className={`text-xl sm:text-2xl font-medium text-center mb-8 leading-relaxed ${
                      darkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}
                  >
                    "{testimonials[currentIndex].content}"
                  </motion.blockquote>

                  {/* Author Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                  >
                    <div className={`font-bold text-xl mb-1 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonials[currentIndex].name}
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {testimonials[currentIndex].role}
                    </div>
                  </motion.div>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevTestimonial}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 sm:-translate-x-16 p-4 rounded-full ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white hover:from-gray-700 hover:to-gray-800' 
                : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
            } shadow-xl transition-all duration-300 group`}
          >
            <ChevronLeftIcon className="h-6 w-6 group-hover:-translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextTestimonial}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 sm:translate-x-16 p-4 rounded-full ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white hover:from-gray-700 hover:to-gray-800' 
                : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
            } shadow-xl transition-all duration-300 group`}
          >
            <ChevronRightIcon className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Enhanced Indicators */}
          <div className="flex justify-center mt-12 gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentIndex(index)}
                className="relative group"
              >
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                    : darkMode
                    ? 'bg-gray-600 hover:bg-gray-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}>
                  {index === currentIndex && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: '5,000+', label: 'Happy Customers' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '98%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;