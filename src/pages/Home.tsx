import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Highlights from '../components/home/Highlights';
import BrandsCarousel from '../components/home/BrandsCarousel';
import Testimonials from '../components/home/Testimonials';

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      <Hero darkMode={darkMode} />
      <Highlights darkMode={darkMode} />
      <BrandsCarousel darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
    </motion.div>
  );
};

export default Home;