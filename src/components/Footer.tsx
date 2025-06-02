import React from 'react';
import { navItems, personalInfo, socialLinks } from '../data/siteData';
import { ChevronUp } from 'lucide-react';
import * as Icons from 'lucide-react';

const Footer = () => {
  const renderIcon = (iconName: string): React.ReactNode => {
    const Icon = (Icons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    return Icon ? <Icon className="w-4 h-4" /> : null;
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="flex justify-center mb-6">
          <a 
            href="#home" 
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </a>
        </div>
        
        <div className="max-w-md mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">{personalInfo.name}</h2>
          <p className="text-gray-400 mb-4">{personalInfo.title}</p>
          
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((link) => (
              <a 
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label={link.platform}
              >
                {renderIcon(link.icon)}
              </a>
            ))}
          </div>
          
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <p className="text-gray-500 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;