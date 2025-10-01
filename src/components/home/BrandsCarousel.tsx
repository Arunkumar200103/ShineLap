import React from 'react';
import { motion } from 'framer-motion';
import { brands } from '../../data/mockData';
import { SparklesIcon, ShieldCheckIcon, ClockIcon, HeartIcon } from '@heroicons/react/24/outline';

interface BrandsCarouselProps {
  darkMode: boolean;
}

const BrandsCarousel: React.FC<BrandsCarouselProps> = ({ darkMode }) => {
  // Duplicate brands for seamless scrolling
  const allBrands = [...brands, ...brands, ...brands];

  const stats = [
    {
      icon: SparklesIcon,
      value: '50+',
      label: 'Laptop Models',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ShieldCheckIcon,
      value: '10+',
      label: 'Top Brands',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: ClockIcon,
      value: '24/7',
      label: 'Support',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: HeartIcon,
      value: '98%',
      label: 'Satisfaction',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className={`py-24 relative overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-b from-white via-gray-50 to-white'
    }`}>
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-1/3 w-96 h-96 ${
          darkMode ? 'bg-blue-500/5' : 'bg-blue-500/10'
        } rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-0 right-1/3 w-96 h-96 ${
          darkMode ? 'bg-purple-500/5' : 'bg-purple-500/10'
        } rounded-full blur-3xl`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
                ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border border-blue-500/20' 
                : 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border border-blue-200'
            }`}>
              Premium Partners
            </span>
          </motion.div>
          <h2 className={`text-4xl sm:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Trusted{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Laptop Brands
            </span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Partnering with world-leading manufacturers to deliver cutting-edge technology and unmatched performance
          </p>
        </motion.div>

        {/* Scrolling Brands with gradient overlay edges */}
        <div className="relative mb-20">
          {/* Left gradient overlay */}
          <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 ${
            darkMode 
              ? 'bg-gradient-to-r from-gray-800 to-transparent' 
              : 'bg-gradient-to-r from-gray-50 to-transparent'
          }`}></div>
          
          {/* Right gradient overlay */}
          <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 ${
            darkMode 
              ? 'bg-gradient-to-l from-gray-800 to-transparent' 
              : 'bg-gradient-to-l from-gray-50 to-transparent'
          }`}></div>

          <motion.div
            animate={{ x: ['0%', '-33.33%'] }}
            transition={{
              duration: 30,
              ease: 'linear',
              repeat: Infinity,
            }}
            className="flex space-x-8"
          >
            {allBrands.map((brand, index) => (
              <motion.div
                key={`${brand.id}-${index}`}
                className={`flex-shrink-0 w-56 h-40 relative overflow-hidden rounded-2xl group cursor-pointer ${
                  darkMode 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50' 
                    : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl shadow-gray-200/50'
                }`}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500 to-purple-500 p-[1px]">
                  <div className={`h-full w-full rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                  {/* Logo container with glow effect */}
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className={`relative w-20 h-20 rounded-xl overflow-hidden ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-100'
                    } p-2 group-hover:scale-110 transition-transform duration-300`}>
                      <img
                        src={brand.icon}
                        alt={brand.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </motion.div>

                  {/* Brand name */}
                  <h3 className={`text-lg font-bold mb-1 transition-all duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  } group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text`}>
                    {brand.name}
                  </h3>

                  {/* Series count */}
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center gap-1`}>
                    <span className="inline-block w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                    {brand.series.length} Series Available
                  </p>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-3 right-3 w-12 h-12 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`relative overflow-hidden rounded-2xl p-6 group cursor-pointer ${
                    darkMode 
                      ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50' 
                      : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg'
                  }`}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-block mb-3"
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                        <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                      </div>
                    </motion.div>

                    {/* Value */}
                    <div className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>

                    {/* Label */}
                    <div className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {stat.label}
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-full blur-2xl`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
            darkMode 
              ? 'bg-gray-800/50 border border-gray-700' 
              : 'bg-white/80 border border-gray-200 shadow-lg'
          }`}>
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 ${
                    darkMode ? 'border-gray-800' : 'border-white'
                  } bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold`}
                >
                  ✓
                </div>
              ))}
            </div>
            <span className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Authorized Dealer for All Brands
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsCarousel;