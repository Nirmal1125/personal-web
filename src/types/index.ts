export interface NavItem {
  label: string;
  href: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: ('Product' | 'Content' | 'Strategy')[];
  link: string;
}

export interface ContentItem {
  id: string;
  type: 'video' | 'blog';
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  imageUrl: string;
}

export interface ToolItem {
  id: string;
  name: string;
  icon: string;
  category: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: string;
}