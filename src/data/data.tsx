import {
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Sumedh Kapoor Portfolio',
  description: "Personal portfolio website of Sumedh Kapoor, AI Developer | Machine Learning Engineer | Full Stack Developer",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Sumedh Kapoor.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Machine Learning Engineer</strong> based in Chandigarh, India, currently working
        as a <strong className="text-stone-100">Full Stack Developer</strong> at Infosys, specializing in AI and ML solutions.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm passionate about developing intelligent solutions using <strong className="text-stone-100">LLMs</strong>,{' '}
        <strong className="text-stone-100">Computer Vision</strong>, and <strong className="text-stone-100">Full Stack Development</strong>.
        When I'm not coding, you can find me exploring the latest AI technologies and contributing to open-source projects.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `AI Developer and Machine Learning Engineer with expertise in developing end-to-end ML solutions. 
  Proficient in Python, TensorFlow, PyTorch, and various ML frameworks. Experienced in building and deploying
  Large Language Models (LLMs) and Computer Vision applications. Strong background in full-stack development
  with React, Node.js, and cloud technologies.`,
  aboutItems: [
    {label: 'Location', text: 'Chandigarh, India', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'AI/ML, Open Source, Technology', Icon: SparklesIcon},
    {label: 'Employment', text: 'Infosys Ltd.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'AI & Machine Learning',
    skills: [
      {
        name: 'TensorFlow',
        level: 9,
      },
      {
        name: 'PyTorch',
        level: 8,
      },
      {
        name: 'LLMs & NLP',
        level: 8,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'JavaScript',
        level: 8,
      },
      {
        name: 'TypeScript',
        level: 8,
      },
    ],
  },
  {
    name: 'Web Development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Next.js',
        level: 7,
      },
    ],
  },
  {
    name: 'Tools & Technologies',
    skills: [
      {
        name: 'Git',
        level: 9,
      },
      {
        name: 'Docker',
        level: 7,
      },
      {
        name: 'Azure',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'AI-Powered Document Processing System',
    description: 'Developed an intelligent document processing system using Azure Cognitive Services and LangChain. Implemented OCR, document understanding, and custom LLM models for automated information extraction.',
    url: 'https://github.com/sumedhkapoor',
    image: porfolioImage1,
  },
  {
    title: 'Enterprise Chat Application',
    description: 'Built a secure enterprise chat application using React, Node.js, and Azure. Integrated Microsoft Graph API for seamless authentication and Azure services for real-time communication.',
    url: 'https://github.com/sumedhkapoor',
    image: porfolioImage2,
  },
  {
    title: 'Face Recognition System',
    description: 'Created a real-time face detection and recognition system using Python, OpenCV, and deep learning models. Implemented for educational institution attendance tracking.',
    url: 'https://github.com/sumedhkapoor',
    image: porfolioImage3,
  },
  {
    title: 'Student Performance Prediction Model',
    description: 'Developed a machine learning model using Python and scikit-learn to predict student academic performance. Implemented feature engineering and model optimization techniques.',
    url: 'https://github.com/sumedhkapoor',
    image: porfolioImage4,
  },
  {
    title: 'AI Education Research Platform',
    description: 'Led the development of a research platform for studying AI applications in education. Implemented data collection, analysis, and visualization tools.',
    url: 'https://github.com/sumedhkapoor',
    image: porfolioImage5,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [];

export const experience: TimelineItem[] = [
  {
    date: 'October 2022 - Present',
    location: 'Infosys Ltd., Chandigarh, India',
    title: 'Senior Principal Software Architect',
    content: (
      <p>
        • Leading architectural decisions and implementations for enterprise-scale applications<br />
        • Specializing in Web Development, Software Architecture, and AWS cloud solutions<br />
        • Driving technical innovation and establishing architectural standards across projects<br />
        • Mentoring teams and ensuring best practices in software development
      </p>
    ),
  },
  {
    date: 'July 2021 - September 2022',
    location: 'Infosys Ltd., Chandigarh, India',
    title: 'Principal Technology Architect',
    content: (
      <p>
        • Led architecture for a leading global asset manager's frontend development<br />
        • Implemented micro-services architecture using Angular<br />
        • Managed AWS cloud deployment and infrastructure<br />
        • Ensured scalability and performance of enterprise applications
      </p>
    ),
  },
  {
    date: 'April 2014 - January 2020',
    location: 'Infosys Ltd., Chandigarh, India',
    title: 'Principal Technology Architect',
    content: (
      <p>
        • Led iOS and Android native mobile app redesign with 5M+ users for US insurance company<br />
        • Architected multi-million-dollar cloud migration using Angular and Spring Boot on Azure<br />
        • Designed large-scale enterprise iOS application for US medical equipment manufacturer<br />
        • Established engineering standards and best practices across the unit
      </p>
    ),
  },
  {
    date: 'September 2013 - March 2014',
    location: 'Threadient Infotech, Panchkula, India',
    title: 'Founder',
    content: (
      <p>
        • Built an eCommerce platform using Magento for flower ordering and delivery<br />
        • Scaled operations across 100 cities in India<br />
        • Achieved cash flow positive status from day one<br />
        • Managed end-to-end technical and business operations
      </p>
    ),
  },
  {
    date: 'April 2013 - July 2013',
    location: 'Tech Mahindra, Chandigarh, India',
    title: 'Senior Technology Architect - Mobility',
    content: (
      <p>
        • Headed Mobility unit at Chandigarh development center<br />
        • Created technical solutions for RFPs and led pre-sales technical presentations<br />
        • Provided technical oversight for all mobility projects<br />
        • Managed technical delivery and quality assurance
      </p>
    ),
  },
  {
    date: 'March 2012 - March 2013',
    location: 'Publicis Sapient, Gurugram, India',
    title: 'Senior Technology Manager',
    content: (
      <p>
        • Led multi-million-dollar eCommerce implementation using Demandware SAAS<br />
        • Managed project estimation, technical architecture, and code quality<br />
        • Developed native Mobile-Commerce Android application<br />
        • Finalist for Sapient 2013 Distinguished Technologist Program
      </p>
    ),
  },
  {
    date: 'April 2005 - March 2012',
    location: 'Infosys Ltd., Chandigarh, India',
    title: 'Senior Technology Architect – Telecom Practice',
    content: (
      <p>
        • Architected mobility solutions for global mobile service provider<br />
        • Developed Android tablet application for live TV streaming and program recording<br />
        • Designed SOA-based offers platform for digital coupons over mobile phones<br />
        • Created workflow-based web service platform for enterprise customers
      </p>
    ),
  },
  {
    date: 'March 2004 - March 2005',
    location: 'Tata Consultancy Services, Mumbai, India',
    title: 'IT Analyst',
    content: (
      <p>
        • Led development of FOREX module for Thomas Cook's Front Office System<br />
        • Managed client interactions and production system issues<br />
        • Developed business reports using Crystal Reports<br />
        • Implemented Java Swing-based solutions
      </p>
    ),
  },
  {
    date: 'October 1998 - December 2003',
    location: 'ICE Data Services, New York, United States',
    title: 'Project Lead',
    content: (
      <p>
        • Led Y2K migration of stock exchange data feed handlers to Java<br />
        • Developed low-latency real-time data processing systems<br />
        • Implemented feed handlers for major global exchanges including LSE, ASX, TSE<br />
        • Mentored team members and ensured performance SLAs were met
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out for collaborations or just a friendly hello! I\'m always open to discussing new projects and opportunities.',
  items: [
    {
      type: ContactType.Email,
      text: 'sumedhkapoor.sk@gmail.com',
      href: 'mailto:sumedhkapoor.sk@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Chandigarh, India',
      href: 'https://www.google.com/maps/place/Chandigarh',
    },
    {
      type: ContactType.Github,
      text: 'sumedhkapoor',
      href: 'https://github.com/sumedhkapoor',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/sumedhkapoor'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sumedh-kapoor-7a693220b/'},
];
