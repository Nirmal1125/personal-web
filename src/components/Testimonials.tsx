import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { testimonials } from '../data/siteData';
import { Quote } from 'lucide-react';

const Testimonials = () => {
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
    <section className="section bg-white">
      <motion.div 
        ref={ref}
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-center mb-2 text-3xl md:text-4xl font-bold text-gray-900">What People Say</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Feedback from clients and collaborators who have worked with me on various projects.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={itemVariants}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>

        {/* Trust Bar */}
        <motion.div 
          className="bg-gray-50 rounded-xl p-8 text-center"
          variants={itemVariants}
        >
          <p className="text-sm text-gray-500 mb-4">AS FEATURED IN</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="https://brandlogos.net/wp-content/uploads/2016/10/medium-logo-500x500.png" alt="Medium" className="h-8 opacity-70" />
            <img src="https://brandlogos.net/wp-content/uploads/2023/09/product_hunt-logo_brandlogos.net_ogn0l.png" alt="Product Hunt" className="h-8 opacity-70" />
            <img src="https://brandlogos.net/wp-content/uploads/2021/04/forbes-logo-500x500.png" alt="Forbes" className="h-8 opacity-70" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <motion.div
      className="card p-6 relative"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-100" />
      
      <p className="text-gray-700 mb-6 relative z-10 italic">"{testimonial.quote}"</p>
      
      <div className="flex items-center">
        <img 
          src={testimonial.imageUrl} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;