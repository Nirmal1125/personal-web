import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioItems } from '../data/siteData';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
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
    <section id="work" className="section bg-white">
      <motion.div 
        ref={ref}
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-center mb-2 text-3xl md:text-4xl font-bold text-gray-900">Featured Work</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A selection of my best projects showcasing my expertise in product strategy and content creation.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={itemVariants}
        >
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

const PortfolioCard = ({ item }: { item: any }) => {
  return (
    <motion.div
      className="card group overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 p-4 flex flex-wrap gap-2">
          {item.tags.map((tag: string, index: number) => (
            <span 
              key={index} 
              className={`tag ${
                tag === 'Product' ? 'tag-product' : 
                tag === 'Content' ? 'tag-content' : 
                'tag-strategy'
              }`}
            >
              {tag}
            </span>
          ))}
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
          View Project <ExternalLink className="ml-1 w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default Portfolio;