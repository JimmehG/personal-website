import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

interface ServiceCardProps {
   index: number;
   title: string;
   icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => (
   <Tilt className="xs:w-[250px] w-full">
      <motion.div
         variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
         className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
         <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />

            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
         </div>
      </motion.div>
   </Tilt>
);

const About = SectionWrapper(() => {
   return (
      <>
         <motion.div variants={textVariant(0)}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
         </motion.div>

         <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
         >
            Team leader who loves to find the best approach. Have me in your team and I'll often present new ideas for
            process improvement or a new tech that can fit our latest issues. <br /><br />
            I believe it's important to utilise the different skills of my team and so I value understanding how my
            teammates work and what makes them give the best results. <br /><br />
            Also when developing I tend towards front end development as I have a strong sense for how users would use
            our app and have begun working in Figma as well as working closely with designers to improve their UX and UI
            designs.
         </motion.p>

         <div className="mt-20 flex flex-wrap gap-10">
            {services.map((service, index) => (
               <ServiceCard key={service.title} index={index} {...service} />
            ))}
         </div>
      </>
   );
}, 'about');

export default About;
