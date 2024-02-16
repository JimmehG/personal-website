import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

interface ProjectProps {
   index: number;
   project: {
      name: string;
      description: string;
      tags: {
         name: string;
         color: string;
      }[];
      image: string;
      link?: string;
   };
}

const ProjectCard: React.FC<ProjectProps> = ({ index, project }) => {
   return (
      <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
         <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
            <div
               onClick={() => window.open(project.link, '_blank')}
               className="relative w-full h-[230px] cursor-pointer"
            >
               <img src={project.image} alt="project_image" className="w-full h-full object-cover rounded-2xl" />
            </div>

            <div className="mt-5">
               <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
               <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
               {project.tags.map((tag) => (
                  <p key={`${project.name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                     #{tag.name}
                  </p>
               ))}
            </div>
         </Tilt>
      </motion.div>
   );
};

const Works = SectionWrapper(() => {
   return (
      <>
         <motion.div variants={textVariant(0)}>
            <p className={`${styles.sectionSubText} `}>My work</p>
            <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
         </motion.div>

         <div className="w-full flex">
            <motion.p
               variants={fadeIn('', '', 0.1, 1)}
               className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
               Following projects showcases my skills and experience through real-world examples of my work. It reflects
               my ability to solve complex problems, work with different technologies, and manage projects effectively.
            </motion.p>
         </div>

         <div className="mt-20 flex flex-wrap gap-7">
            {projects.map((project, index) => (
               <ProjectCard key={`project-${index}`} index={index} project={project} />
            ))}
         </div>
      </>
   );
}, 'works');

export default Works;
