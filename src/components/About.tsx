import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, statItems, brandLogos } from '../data/siteData';
import { StatItem } from '../types';
import { DivideIcon as LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const renderIcon = (iconName: string): React.ReactNode => {
    const Icon = (Icons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    return Icon ? <Icon className="w-10 h-10 text-primary-500 mb-2" /> : null;
  };

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 
            className="text-center mb-4 text-3xl md:text-4xl font-bold text-gray-900"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-12"
            variants={itemVariants}
          >
            <div className="prose prose-lg max-w-none">
              {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            variants={itemVariants}
          >
            {statItems.map((stat: StatItem) => (
              <motion.div
                key={stat.id}
                className="stat-box flex flex-col items-center text-center group"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {renderIcon(stat.icon)}
                <span className="text-3xl md:text-4xl font-bold text-primary-600 mb-1 group-hover:text-primary-500 transition-colors">
                  {stat.value}
                </span>
                <span className="text-gray-600">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Career Timeline */}
          <motion.div
            className="relative mb-12"
            variants={itemVariants}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-gray-800">My Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 rounded-full"></div>
              
              {/* Timeline steps */}
              <div className="space-y-12 relative">
                <TimelineItem 
                  year="2019" 
                  title="Content Creator"
                  description="Started creating tech tutorials and product reviews"
                />
                <TimelineItem 
                  year="2021" 
                  title="Product Manager"
                  description="Transitioned to product management at a tech startup"
                />
                <TimelineItem 
                  year="2023" 
                  title="Product Strategist"
                  description="Advanced to leading product strategy initiatives"
                  isLast={true}
                />
              </div>
            </div>
          </motion.div>

          {/* Brand Logos */}
          <motion.div 
            variants={itemVariants}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-gray-800">Brands I've Worked With</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {brandLogos.map((brand) => (
                <motion.img 
                  key={brand.id}
                  src={brand.imageUrl} 
                  alt={brand.name}
                  className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem = ({ year, title, description, isLast = false }: TimelineItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="relative flex items-center"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-1/2 pr-8 md:pr-12 text-right">
        <div className="font-bold text-lg text-primary-600">{year}</div>
      </div>
      
      {/* Circle on timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary-500 z-10 border-4 border-white"></div>
      
      <div className="w-1/2 pl-8 md:pl-12">
        <h4 className="font-bold text-lg text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default About;