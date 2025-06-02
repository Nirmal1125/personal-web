import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, socialLinks } from '../data/siteData';
import { Mail, Send } from 'lucide-react';
import * as Icons from 'lucide-react';

const Contact = () => {
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
    return Icon ? <Icon className="w-5 h-5" /> : null;
  };

  return (
    <section id="contact" className="section bg-primary-900 text-white">
      <motion.div 
        ref={ref}
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={itemVariants}
        >
          <motion.h2 
            className="mb-4 text-3xl md:text-4xl font-bold"
            variants={itemVariants}
          >
            Let's build something amazing together
          </motion.h2>
          
          <motion.p
            className="mb-8 text-lg md:text-xl text-primary-100"
            variants={itemVariants}
          >
            Whether you're looking for a collaborator, speaker, or just want to say hello, I'd love to hear from you.
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden text-gray-900"
          variants={itemVariants}
        >
          <div className="grid md:grid-cols-5">
            {/* Contact Info */}
            <div className="md:col-span-2 bg-primary-800 text-white p-6 md:p-8">
              <div className="flex items-center mb-6">
                <Mail className="w-5 h-5 mr-3" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-primary-100 hover:text-white transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              
              <div className="mb-8">
                <h4 className="font-bold mb-4">Connect with me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary-700/50 flex items-center justify-center hover:bg-primary-600 transition-colors"
                      aria-label={link.platform}
                    >
                      {renderIcon(link.icon)}
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Response Time</h4>
                <p className="text-sm text-primary-100">I typically respond within 24-48 hours.</p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-3 p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Send a Message</h3>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary w-full md:w-auto group"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;