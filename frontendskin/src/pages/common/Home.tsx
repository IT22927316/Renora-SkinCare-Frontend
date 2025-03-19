import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/home-comp/Hero';
import Category from '../../components/home-comp/Category';
import AboutSimple from '../../components/home-comp/AboutSimple';
import Reviews from '../../components/home-comp/reviews/Reviews';
import NewsLetter from '../../components/semi/NewsLetter';

const Home: React.FC = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start position
        whileInView={{ opacity: 1, y: 0 }} // Target position
        transition={{ duration: 0.8 }} // Animation speed
        viewport={{ once: true }} // Animation runs once
      >
        <Hero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }} // Slight delay for staggered effect
        viewport={{ once: true }}
      >
        <Category />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <AboutSimple />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Reviews />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <NewsLetter />
      </motion.div>
    </div>
  );
};

export default Home;