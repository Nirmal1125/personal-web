import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { toolItems, workflowSteps } from '../data/siteData';
import * as Icons from 'lucide-react';

const Tools = () => {
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
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  return (
    <section id="tools" className="section bg-gray-50">
      <motion.div 
        ref={ref}
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-center mb-2 text-3xl md:text-4xl font-bold text-gray-900">Tools & Workflow</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The tools I use and how I approach projects from ideation to measurement.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-16"
          variants={itemVariants}
        >
          {toolItems.map((tool) => (
            <div 
              key={tool.id}
              className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-3 text-primary-600">
                {renderIcon(tool.icon)}
              </div>
              <h4 className="font-medium text-gray-900">{tool.name}</h4>
              <p className="text-xs text-gray-500">{tool.category}</p>
            </div>
          ))}
        </motion.div>

        {/* Workflow Process */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-8"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">My Creative Workflow</h3>
          
          <div className="relative">
            {/* Process line */}
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-1 bg-primary-100 rounded-full z-0"></div>
            
            {/* Process steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-2 relative z-10">
              {workflowSteps.map((step, index) => (
                <WorkflowStep 
                  key={step.id}
                  icon={step.icon}
                  label={step.label}
                  number={index + 1}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

interface WorkflowStepProps {
  icon: string;
  label: string;
  number: number;
}

const WorkflowStep = ({ icon, label, number }: WorkflowStepProps) => {
  const renderIcon = (iconName: string): React.ReactNode => {
    const Icon = (Icons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  return (
    <motion.div 
      className="flex flex-col items-center text-center"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center mb-4 text-white shadow-md">
        {renderIcon(icon)}
      </div>
      <h4 className="font-bold text-gray-900 mb-1">{label}</h4>
      <p className="text-xs font-medium text-primary-600">Step {number}</p>
    </motion.div>
  );
};

export default Tools;