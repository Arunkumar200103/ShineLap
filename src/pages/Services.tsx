import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  WrenchIcon,
  ClockIcon,
  ShieldCheckIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { services } from '../data/mockData';

interface ServicesProps {
  darkMode: boolean;
}

const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);

  const categories = [...new Set(services.map(service => service.category))];

  const filteredServices = selectedCategory 
    ? services.filter(service => service.category === selectedCategory)
    : services;

  const BookingModal: React.FC = () => {
    const service = services.find(s => s.id === selectedService);
    if (!service) return null;

    const handleNextStep = () => {
      if (bookingStep < 3) {
        setBookingStep(bookingStep + 1);
      } else {
        // Complete booking
        setShowBookingModal(false);
        setBookingStep(1);
        setSelectedService(null);
      }
    };

    const renderStep = () => {
      switch (bookingStep) {
        case 1:
          return (
            <div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Service Details
              </h3>
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4 mb-4`}>
                <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {service.name}
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
                  {service.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-blue-600">${service.price}</span>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {service.estimatedTime}
                    </div>
                    <div className="flex items-center">
                      <ShieldCheckIcon className="h-4 w-4 mr-1" />
                      {service.warranty}
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handleNextStep}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Continue to Details
              </button>
            </div>
          );
        
        case 2:
          return (
            <div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Your Information
              </h3>
              <form className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-3 py-2 border rounded-lg ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                    Email
                  </label>
                  <input
                    type="email"
                    className={`w-full px-3 py-2 border rounded-lg ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className={`w-full px-3 py-2 border rounded-lg ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                    Issue Description
                  </label>
                  <textarea
                    rows={3}
                    className={`w-full px-3 py-2 border rounded-lg ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Describe your laptop issue..."
                  />
                </div>
              </form>
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setBookingStep(1)}
                  className={`flex-1 py-3 px-4 rounded-lg border ${
                    darkMode 
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  } transition-colors`}
                >
                  Back
                </button>
                <button
                  onClick={handleNextStep}
                  className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          );
        
        case 3:
          return (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Booking Confirmed!
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                Your service booking has been confirmed. We'll contact you within 24 hours to schedule your appointment.
              </p>
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4 mb-6`}>
                <div className="text-left space-y-2">
                  <div className="flex justify-between">
                    <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Service:</span>
                    <span className={darkMode ? 'text-white' : 'text-gray-900'}>{service.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Price:</span>
                    <span className="text-blue-600 font-bold">${service.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Estimated Time:</span>
                    <span className={darkMode ? 'text-white' : 'text-gray-900'}>{service.estimatedTime}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleNextStep}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          );
        
        default:
          return null;
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        onClick={() => setShowBookingModal(false)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className={`max-w-md w-full ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-6`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2">
              {[1, 2, 3].map(step => (
                <div
                  key={step}
                  className={`w-8 h-2 rounded-full ${
                    step <= bookingStep ? 'bg-blue-500' : darkMode ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => {
                setShowBookingModal(false);
                setBookingStep(1);
              }}
              className={`p-1 rounded-full ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          {renderStep()}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen pt-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Professional Services
          </h1>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Expert laptop repair and maintenance services by certified technicians
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              selectedCategory === ''
                ? 'bg-blue-600 text-white shadow-lg'
                : darkMode
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
            }`}
          >
            All Services
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : darkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, rotateY: 5 }}
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg overflow-hidden group cursor-pointer`}
              style={{ perspective: '1000px' }}
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    service.category === 'Repairs' ? 'bg-red-100 text-red-800' :
                    service.category === 'Upgrades' ? 'bg-green-100 text-green-800' :
                    service.category === 'Cleaning' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {service.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                  {service.name}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 text-sm leading-relaxed`}>
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1 text-gray-400" />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                        {service.estimatedTime}
                      </span>
                    </div>
                    {service.warranty !== 'N/A' && (
                      <div className="flex items-center">
                        <ShieldCheckIcon className="h-4 w-4 mr-1 text-gray-400" />
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                          {service.warranty}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">
                    ${service.price}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedService(service.id);
                      setShowBookingModal(true);
                    }}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group-hover:scale-105"
                  >
                    <WrenchIcon className="h-4 w-4 mr-2" />
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 text-center`}>
            Service Comparison
          </h2>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg overflow-hidden`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <tr>
                    <th className={`px-6 py-4 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                      Service
                    </th>
                    <th className={`px-6 py-4 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                      Price
                    </th>
                    <th className={`px-6 py-4 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                      Time
                    </th>
                    <th className={`px-6 py-4 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                      Warranty
                    </th>
                  </tr>
                </thead>
                <tbody className={`${darkMode ? 'bg-gray-800' : 'bg-white'} divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                  {services.map(service => (
                    <tr key={service.id} className="hover:bg-opacity-50 hover:bg-blue-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {service.name}
                            </div>
                            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                              {service.category}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-600">
                        ${service.price}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        {service.estimatedTime}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        {service.warranty}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBookingModal && <BookingModal />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Services;