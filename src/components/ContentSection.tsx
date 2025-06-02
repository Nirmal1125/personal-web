import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { contentItems } from '../data/siteData';
import { ExternalLink, Play, BookOpen } from 'lucide-react';

const ContentSection = () => {
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

  return (
    <section id="content" className="section bg-gray-50">
      <motion.div 
        ref={ref}
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-center mb-2 text-3xl md:text-4xl font-bold text-gray-900">Latest Content</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore my recent videos and articles on product strategy, content creation, and digital experiences.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={itemVariants}
        >
          {contentItems.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* Content Process Infographic */}
        <motion.div 
          className="mt-20 bg-white rounded-xl shadow-md p-8"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">My Content Strategy Framework</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ProcessStep 
              number="01" 
              title="Audience Discovery" 
              description="Understanding audience needs through research and data analysis"
            />
            <ProcessStep 
              number="02" 
              title="Story Mapping" 
              description="Creating narrative frameworks that resonate emotionally"
            />
            <ProcessStep 
              number="03" 
              title="Iterative Production" 
              description="Refining content based on feedback and performance metrics"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const ContentCard = ({ item }: { item: any }) => {
  return (
    <motion.div
      className="card group overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
        
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
            {item.type === 'video' ? (
              <>
                <Play className="w-4 h-4 text-primary-600 fill-primary-600" />
                <span className="text-sm font-medium text-gray-900">Video</span>
              </>
            ) : (
              <>
                <BookOpen className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-medium text-gray-900">Article</span>
              </>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <a 
          href={item.link} 
          className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.type === 'video' ? 'Watch Video' : 'Read Article'} <ExternalLink className="ml-1 w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4 text-primary-600 font-bold text-xl">
        {number}
      </div>
      <h4 className="text-lg font-bold mb-2 text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ContentSection;