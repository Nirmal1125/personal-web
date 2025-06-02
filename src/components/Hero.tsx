import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/siteData';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${personalInfo.heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 to-primary-950/90 z-10"></div>
      
      {/* Content */}
      <div className="container-custom relative z-20 text-white pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto md:mx-0"
        >
          <motion.span 
            className="inline-block bg-primary-500/30 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 font-medium text-sm text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hello there
          </motion.span>
          
          <motion.h1
            className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Hi, I'm {personalInfo.name} — <br />
            <span className="text-primary-300">{personalInfo.title}</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {personalInfo.tagline}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a 
              href="#contact" 
              className="btn bg-primary-500 hover:bg-primary-400 text-white group transition-all"
            >
              Let's Connect
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={personalInfo.resumeUrl} 
              className="btn bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white group"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Résumé
              <Download className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center text-white/80 hover:text-white transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity, repeatType: "loop" }}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
};

export default Hero;