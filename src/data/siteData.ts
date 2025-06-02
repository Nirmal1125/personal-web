import {
  NavItem,
  PortfolioItem,
  ContentItem,
  Testimonial,
  ToolItem,
  SocialLink,
  StatItem
} from '../types';

export const personalInfo = {
  name: "John Doe",
  title: "Content Creator & Product Strategist",
  tagline: "I build digital experiences & tell stories that connect",
  bio: "Hi, I'm John. I blend my experience in product development with my passion for storytelling to create meaningful digital experiences. Over the past 6 years, I've worked with startups and established brands to launch products that users love and content that resonates.\n\nMy unique background in both technical and creative fields allows me to bridge the gap between product vision and user needs, resulting in experiences that are both functional and emotionally engaging.",
  email: "hello@johndoe.com",
  resumeUrl: "/resume.pdf",
  heroBackground: "https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&w=1600"
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Content", href: "#content" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Product Experience Redesign",
    description: "Led a comprehensive redesign of a SaaS platform, increasing user engagement by 47%",
    imageUrl: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Product", "Strategy"],
    link: "#"
  },
  {
    id: "2",
    title: "Video Series: Future of Tech",
    description: "Created and produced a 10-part video series exploring emerging technologies",
    imageUrl: "https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Content"],
    link: "#"
  },
  {
    id: "3",
    title: "Mobile App Launch Strategy",
    description: "Developed go-to-market strategy for a fitness app that acquired 50K users in first month",
    imageUrl: "https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Strategy", "Product"],
    link: "#"
  },
  {
    id: "4",
    title: "Brand Storytelling Workshop",
    description: "Created and facilitated workshops for tech companies to refine their narrative",
    imageUrl: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Content", "Strategy"],
    link: "#"
  }
];

export const contentItems: ContentItem[] = [
  {
    id: "1",
    type: "video",
    title: "How Product Strategy Shapes User Experience",
    description: "A deep dive into the connection between strategic decisions and UX outcomes",
    imageUrl: "https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#"
  },
  {
    id: "2",
    type: "blog",
    title: "The Art of Technical Storytelling",
    description: "How to communicate complex ideas through narrative techniques",
    imageUrl: "https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "John brings a unique blend of technical knowledge and creative vision to every project. His strategic insights were game-changing for our product.",
    name: "Sarah Johnson",
    role: "CPO",
    company: "TechVenture",
    imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "2",
    quote: "Working with John transformed how we communicate our product story. He has an exceptional ability to make complex features relatable.",
    name: "Michael Chen",
    role: "Founder",
    company: "NexGen",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "3",
    quote: "John's content strategy doubled our engagement metrics. His approach combines data-driven insights with genuine creativity.",
    name: "Priya Sharma",
    role: "Marketing Director",
    company: "Elevate Digital",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const toolItems: ToolItem[] = [
  { id: "1", name: "Figma", icon: "figma", category: "Design" },
  { id: "2", name: "Adobe Premiere", icon: "video", category: "Content" },
  { id: "3", name: "Notion", icon: "notebook-pen", category: "Planning" },
  { id: "4", name: "Miro", icon: "layout-dashboard", category: "Strategy" },
  { id: "5", name: "Google Analytics", icon: "line-chart", category: "Analytics" },
  { id: "6", name: "GitHub", icon: "github", category: "Development" }
];

export const socialLinks: SocialLink[] = [
  { id: "1", platform: "LinkedIn", url: "https://linkedin.com/in/johndoe", icon: "linkedin" },
  { id: "2", platform: "YouTube", url: "https://youtube.com/@johndoe", icon: "youtube" },
  { id: "3", platform: "Twitter", url: "https://twitter.com/johndoe", icon: "twitter" },
  { id: "4", platform: "Medium", url: "https://medium.com/@johndoe", icon: "book-open" }
];

export const statItems: StatItem[] = [
  { id: "1", value: "150K+", label: "Views on YouTube", icon: "youtube" },
  { id: "2", value: "10+", label: "Products Launched", icon: "rocket" },
  { id: "3", value: "6", label: "Years Experience", icon: "calendar" }
];

export const brandLogos = [
  { id: "1", name: "Google", imageUrl: "https://brandlogos.net/wp-content/uploads/2015/09/google-logo.png" },
  { id: "2", name: "Microsoft", imageUrl: "https://brandlogos.net/wp-content/uploads/2012/04/microsoft-logo-vector.png" },
  { id: "3", name: "Adobe", imageUrl: "https://brandlogos.net/wp-content/uploads/2016/06/adobe-logo.png" }
];

export const workflowSteps = [
  { id: "1", label: "Ideate", icon: "lightbulb" },
  { id: "2", label: "Plan", icon: "clipboard-list" },
  { id: "3", label: "Build", icon: "hammer" },
  { id: "4", label: "Publish", icon: "send" },
  { id: "5", label: "Measure", icon: "bar-chart-2" }
];