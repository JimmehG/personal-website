import {
   mobile,
   backend,
   creator,
   web,
   typescript,
   reactjs,
   tailwind,
   nodejs,
   mongodb,
   git,
   figma,
   infotrack,
   carrent,
   jobit,
   tripguide,
   threejs,
   jira,
   angular,
   csharp,
   fourmation,
   vbreathe
} from '../assets';

export const navLinks = [
   {
      id: 'about',
      title: 'About',
   },
   {
      id: 'work',
      title: 'Work',
   },
   {
      id: 'contact',
      title: 'Contact',
   },
];

const services = [
   {
      title: 'Web & App Full stack Developer',
      icon: web,
   },
   {
      title: 'Process Improvement',
      icon: mobile,
   },
   {
      title: 'User Experience & Interface',
      icon: backend,
   },
   {
      title: 'Project Management',
      icon: creator,
   },
];

const technologies = [
   {
      name: 'TypeScript',
      icon: typescript,
   },
   {
      name: 'CSharp',
      icon: csharp,
   },
   {
      name: 'React JS',
      icon: reactjs,
   },
   {
      name: 'Angular',
      icon: angular,
   },
   {
      name: 'Tailwind CSS',
      icon: tailwind,
   },
   {
      name: 'Node JS',
      icon: nodejs,
   },
   {
      name: 'MongoDB',
      icon: mongodb,
   },
   {
      name: 'Three JS',
      icon: threejs,
   },
   {
      name: 'git',
      icon: git,
   },
   {
      name: 'jira',
      icon: jira,
   },
   {
      name: 'figma',
      icon: figma,
   },
];

const experiences = [
   {
      title: 'Full Stack Software Developer',
      company_name: 'Infotrack',
      icon: infotrack,
      iconBg: '#EEEEEE',
      date: 'Jan 2021 - Feb 2022',
      points: [
         'Developing and maintaining web applications using React.js and other related technologies.',
         'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
         'Implementing responsive design and ensuring cross-browser compatibility.',
         'Participating in code reviews and providing constructive feedback to other developers.',
      ],
   },
   {
      title: 'Full Stack Software Developer',
      company_name: '4Mation',
      icon: fourmation,
      iconBg: '#383E56',
      date: 'Jan 2022 - Jan 2023',
      points: [
         'Developing and maintaining web applications using React.js and other related technologies.',
         'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
         'Implementing responsive design and ensuring cross-browser compatibility.',
         'Participating in code reviews and providing constructive feedback to other developers.',
      ],
   },
   {
      title: 'Lead Software Engineer',
      company_name: 'VBreathe',
      icon: vbreathe,
      iconBg: '#FFFFFF',
      date: 'Jan 2023 - Dec 2023',
      points: [
         'Developing and maintaining web applications using React.js and other related technologies.',
         'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
         'Implementing responsive design and ensuring cross-browser compatibility.',
         'Participating in code reviews and providing constructive feedback to other developers.',
      ],
   },
];

const testimonials = [
   {
      testimonial:
         'Placeholder',
      name: 'Sara Lee',
      designation: 'CFO',
      company: 'Acme Co',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
   },
   {
      testimonial: "Placeholder",
      name: 'Chris Brown',
      designation: 'COO',
      company: 'DEF Corp',
      image: 'https://randomuser.me/api/portraits/men/10.jpg',
   },
   {
      testimonial: "Placeholder",
      name: 'Lisa Wang',
      designation: 'CTO',
      company: '456 Enterprises',
      image: 'https://randomuser.me/api/portraits/women/8.jpg',
   },
];

const projects = [
   {
      name: 'Placeholder',
      description:
         'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
      tags: [
         {
            name: 'react',
            color: 'blue-text-gradient',
         },
         {
            name: 'mongodb',
            color: 'green-text-gradient',
         },
         {
            name: 'tailwind',
            color: 'pink-text-gradient',
         },
      ],
      image: carrent,
      source_code_link: 'https://github.com/',
   },
   {
      name: 'Placeholder',
      description:
         'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
      tags: [
         {
            name: 'react',
            color: 'blue-text-gradient',
         },
         {
            name: 'restapi',
            color: 'green-text-gradient',
         },
         {
            name: 'scss',
            color: 'pink-text-gradient',
         },
      ],
      image: jobit,
      source_code_link: 'https://github.com/',
   },
   {
      name: 'Placeholder',
      description:
         'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
      tags: [
         {
            name: 'nextjs',
            color: 'blue-text-gradient',
         },
         {
            name: 'supabase',
            color: 'green-text-gradient',
         },
         {
            name: 'css',
            color: 'pink-text-gradient',
         },
      ],
      image: tripguide,
      source_code_link: 'https://github.com/',
   },
];

export { services, technologies, experiences, testimonials, projects };
