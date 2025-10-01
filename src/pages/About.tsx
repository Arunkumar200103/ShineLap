import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserGroupIcon,
  LightBulbIcon,
  HeartIcon,
  ShieldCheckIcon,
  TrophyIcon,
  StarIcon
} from '@heroicons/react/24/outline';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Anderson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'With 15+ years in the tech industry, John founded Shine Laptops with a vision to provide premium laptop solutions.',
      expertise: ['Business Strategy', 'Technology Innovation', 'Customer Relations']
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      role: 'Technical Director',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Sarah leads our technical team with expertise in hardware engineering and repair services.',
      expertise: ['Hardware Engineering', 'Team Management', 'Quality Assurance']
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      role: 'Sales Manager',
      image: 'https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Mike ensures every customer finds the perfect laptop solution that meets their needs and budget.',
      expertise: ['Sales Strategy', 'Customer Consultation', 'Market Analysis']
    },
    {
      id: 4,
      name: 'Lisa Chen',
      role: 'Service Coordinator',
      image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Lisa coordinates our repair services and ensures timely, quality service delivery to all customers.',
      expertise: ['Service Management', 'Process Optimization', 'Customer Support']
    }
  ];

  const values = [
    {
      icon: UserGroupIcon,
      title: 'Customer First',
      description: 'We prioritize our customers\' needs and satisfaction above all else.',
      color: 'text-blue-500'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We stay ahead with the latest technology and innovative solutions.',
      color: 'text-yellow-500'
    },
    {
      icon: HeartIcon,
      title: 'Passion',
      description: 'We are passionate about technology and helping our customers succeed.',
      color: 'text-red-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality',
      description: 'We maintain the highest standards in products and services.',
      color: 'text-green-500'
    }
  ];

  const achievements = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '5000+', label: 'Happy Customers' },
    { number: '25+', label: 'Expert Technicians' },
    { number: '8', label: 'Service Locations' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen pt-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      {/* Hero Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className={`text-4xl sm:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Shine Laptops</span>
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
              We are a premier laptop sales and service company dedicated to providing high-quality products 
              and exceptional customer service. Since our founding, we've been committed to helping customers 
              find the perfect technology solutions for their needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                Our Story
              </h2>
              <div className="space-y-4">
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  Founded in 2013, Shine Laptops started as a small repair shop with a simple mission: 
                  to provide honest, reliable laptop services to our local community. Over the years, 
                  we've grown into a comprehensive technology solutions provider.
                </p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  What sets us apart is our commitment to understanding each customer's unique needs. 
                  Whether you're a student looking for an affordable laptop, a business professional 
                  needing a high-performance machine, or someone requiring expert repair services, 
                  we're here to help.
                </p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  Today, with multiple locations and a team of certified technicians, we continue 
                  to uphold our founding values while embracing the latest in laptop technology and 
                  service innovations.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <TrophyIcon className="h-8 w-8 mb-2" />
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Our Core Values
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-6 text-center`}
                >
                  <div className={`inline-flex p-3 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-white'} mb-4`}>
                    <Icon className={`h-6 w-6 ${value.color}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                    {value.title}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Our Achievements
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Numbers that speak for our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  {achievement.number}
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wide`}>
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Meet Our Team
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              The passionate professionals behind Shine Laptops
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-6 text-center group`}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                  {member.name}
                </h3>
                <p className="text-blue-500 font-medium mb-3">{member.role}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  {member.bio}
                </p>
                
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1 mb-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              Ready to Experience the Shine Difference?
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-2xl mx-auto`}>
              Join thousands of satisfied customers who trust Shine Laptops for their technology needs. 
              Whether you need a new laptop or professional service, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/sales"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Shop Laptops
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center justify-center px-8 py-4 border-2 text-base font-medium rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'border-gray-600 text-white hover:bg-gray-800' 
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;