import React from 'react';
import { motion } from 'framer-motion';
import { 
  ComputerDesktopIcon,
  WrenchIcon, 
  ShieldCheckIcon, 
  CpuChipIcon 
} from '@heroicons/react/24/outline';

interface HighlightsProps {
  darkMode: boolean;
}

const Highlights: React.FC<HighlightsProps> = ({ darkMode }) => {
  const highlights = [
    {
      icon:  ComputerDesktopIcon,
      title: 'Premium Laptop Sales',
      description: 'Wide selection of top-brand laptops with competitive prices and warranties',
      color: 'from-blue-500 to-cyan-500',
      accentColor: 'blue'
    },
    {
      icon: WrenchIcon,
      title: 'Professional Services',
      description: 'Expert repair and maintenance services by certified technicians',
      color: 'from-emerald-500 to-teal-500',
      accentColor: 'emerald'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quick Repairs',
      description: 'Fast and reliable repair services with quality parts and guaranteed work',
      color: 'from-violet-500 to-purple-500',
      accentColor: 'violet'
    },
    {
      icon: CpuChipIcon,
      title: 'Quality Accessories',
      description: 'Genuine accessories and spare parts for all laptop brands and models',
      color: 'from-orange-500 to-amber-500',
      accentColor: 'orange'
    }
  ];

  return (
    <section className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'}`}>
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${darkMode ? 'bg-blue-500/5' : 'bg-blue-500/5'} rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${darkMode ? 'bg-purple-500/5' : 'bg-purple-500/5'} rounded-full blur-3xl`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                : 'bg-blue-50 text-blue-600 border border-blue-200'
            }`}>
              Why Choose Us
            </span>
          </motion.div>
          <h2 className={`text-4xl sm:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            Excellence in Every{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Service
            </span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
            From premium sales to expert repairs, we deliver comprehensive laptop solutions 
            with cutting-edge technology and unmatched customer care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Main card */}
                <div className={`relative h-full overflow-hidden rounded-3xl p-8 ${
                  darkMode 
                    ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50' 
                    : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl shadow-gray-200/50'
                } transition-all duration-500 group-hover:shadow-2xl ${
                  darkMode ? 'group-hover:shadow-blue-500/20' : 'group-hover:shadow-blue-500/30'
                }`}>
                  
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>
                  
                  {/* Animated border gradient */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${highlight.color} p-[1px]`}>
                    <div className={`h-full w-full rounded-3xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon container with floating animation */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="relative mb-6 inline-block"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                      <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${highlight.color} shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                      </div>
                    </motion.div>

                    {/* Title with gradient on hover */}
                    <h3 className={`text-xl font-bold mb-4 transition-all duration-300 ${
                      darkMode ? 'text-white group-hover:text-transparent' : 'text-gray-900 group-hover:text-transparent'
                    } group-hover:bg-gradient-to-r group-hover:${highlight.color} group-hover:bg-clip-text`}>
                      {highlight.title}
                    </h3>

                    {/* Description */}
                    <p className={`${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    } leading-relaxed text-sm transition-colors duration-300 group-hover:${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {highlight.description}
                    </p>

                    {/* Decorative corner element */}
                    <div className="absolute top-6 right-6 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                      <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`h-full bg-gradient-to-r ${highlight.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                    </div>
                  </div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className={`absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-r ${highlight.color} rounded-full animate-pulse`}></div>
                  <div className={`absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-gradient-to-r ${highlight.color} rounded-full animate-pulse delay-100`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
            Trusted by thousands of satisfied customers
          </p>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.svg
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                viewport={{ once: true }}
                className="w-6 h-6 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </motion.svg>
            ))}
            <span className={`ml-2 text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              4.9/5.0 Rating
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;