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
   vbreatheShot,
   infotrackShot,
   threejs,
   jira,
   angular,
   csharp,
   fourmation,
   vbreathe,
   mikecamara,
   kennardsShot,
} from '../assets';

interface NavBarLinkProps {
   id: string;
   title: string;
   link?: string;
}

export const navLinks: NavBarLinkProps[] = [
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
   {
      id: 'gitHub',
      title: 'GitHub',
      link: 'https://github.com/JimmehG/personal-website',
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
         'My first taste of professional web development using C# and Angular.',
         'Working with product managers and sales employees to release new features and products.',
         'Experience with Octopus and TeamCity. Learned the basics of DevOps',
         'Learning how to handle Live problems quickly and safely.',
      ],
   },
   {
      title: 'Full Stack Software Developer',
      company_name: '4Mation',
      icon: fourmation,
      iconBg: '#383E56',
      date: 'Jan 2022 - Jan 2023',
      points: [
         'Worked in many varied working environments and was able to quickly switch up my skills to adjust.',
         'Able to flex my communication skills by dealing directly with the clients.',
         'Managing my work using sprints and different project management tools such as JIRA.',
         "Utilising a wide variety of tech to suit the client's needs or their ongoing project's needs.",
      ],
   },
   {
      title: 'Lead Software Engineer',
      company_name: 'VBreathe',
      icon: vbreathe,
      iconBg: '#FFFFFF',
      date: 'Jan 2023 - Dec 2023',
      points: [
         'Working with a cloud connected IoT device using AWS and an Ionic/Angular Android/iOS app.',
         'Managing the tasks for my team using Sprint pland and Retrospectives, as well as organising workshops to discuss next steps.',
         'Collaborating with managers and setting expectations for my team.',
         'Introduced JIRA as well as implementing the DevOps to hook into the JIRA automation to make task tracking a breeze.',
      ],
   },
];

const testimonials = [
   {
      testimonial:
         'James is a beacon of calm in the often tumultuous sea of software development deadlines and challenges. His ability to absorb pressure and maintain an even keel has not only steered our projects to safe harbor but also inspired our team to adopt a similar demeanor. His communication skills are outstanding. James can break down complex technical concepts into digestible, understandable pieces, making collaboration with cross-functional teams seamless and practical.',
      name: 'Mike Camara',
      designation: 'Senior Software Engineer',
      company: 'VBreathe',
      image: mikecamara,
   },
];

const projects = [
   {
      name: 'VBreathe/Enviroguard',
      description:
         'An Android/iOS app allowing users to control their VBreathe or Enviroguard purifier devices. The purifiers would connect using the user\'s wireless network or straight to the app using Bluetooth. It was very rewarding allowing users to sign up and be able to control their devices from anywhere they had internet access. Using Figma also we were creating a new user experience for our partnership company Enviroguard.',
      tags: [
         {
            name: 'ionic',
            color: 'blue-text-gradient',
         },
         {
            name: 'aws',
            color: 'green-text-gradient',
         },
         {
            name: 'figma',
            color: 'pink-text-gradient',
         },
      ],
      image: vbreatheShot,
      link: 'https://github.com/',
   },
   {
      name: 'InfoTrack',
      description:
         'Web application that enables users to search for property titles. Using automation it allows the users to obtain these titles and other documents for properties in one easy to use place.',
      tags: [
         {
            name: 'angular',
            color: 'blue-text-gradient',
         },
         {
            name: 'selenium',
            color: 'green-text-gradient',
         },
         {
            name: 'postgresql',
            color: 'pink-text-gradient',
         },
      ],
      image: infotrackShot,
      link: 'https://github.com/',
   },
   {
      name: 'Kennards Self Storage',
      description:
         "A legacy system requiring expertise with server systems, SQL database queries and expert problem solving. I'm proud to have worked on and maintained this system.",
      tags: [
         {
            name: 'visual-basic',
            color: 'blue-text-gradient',
         },
         {
            name: 'sql',
            color: 'green-text-gradient',
         },
      ],
      image: kennardsShot,
   },
];

export { services, technologies, experiences, testimonials, projects };
