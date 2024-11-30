"use client"

import React from 'react'
import {motion} from "framer-motion"
import SectionHeading from './section-heading'
import {useSectionInView} from '@/lib/hooks'

export default function About() {
  
  const {ref} = useSectionInView("About")
    
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
          My name is Segni Tulu, and I am an aspiring full-stack software engineer pursuing a Bachelor’s degree in Computer Science with minors in Mathematics, Cybersecurity, and Data Analytics. <br /><br />
          I have experience with a wide range of programming languages and technologies, enabling me to thrive in both individual and collaborative development environments. <br /><br />
          Currently, I am engaged in full-stack development projects where I apply my expertise to streamline workflows, improve user experiences, and contribute to high-impact initiatives. <br /><br />
          Passionate about continuous learning, I excel in team settings and strive to make meaningful contributions to every software engineering project I undertake. <br />
      </p>

    </motion.section>
  );
}














//     return (
//       <motion.section
//         ref={ref}
//         className=''
//         initial={{ opacity: 1, y: 0 }}     //Might change the opacity from initial to 0(zero)
//         animate={{opacity: 1, y:0}}
//         transition={{delay: 0.175}}
//         id='about'  
//       >
//           <SectionHeading>
//               About Me
//           </SectionHeading>

//           <p className='mb-3'>
//             <span className='font-bold'>I'm Segni Tulu, a junior majoring in Computer Science and minoring in Mathematics and Data Analytics at Concordia College.</span> Currently, I'm gaining hands-on experience as a full-stack developer intern at Marvin, where I'm passionate about applying my technical skills to real-world projects. Proficient in front-end and back-end technologies, including HTML, CSS, JavaScript, React, and Node.js, I'm dedicated to crafting user-friendly solutions. My goal is to leverage my academic foundation and internship experience to create innovative web applications and data-driven solutions.
//           </p>

//           <p>
//             <span className='italic'>When I'm not coding,</span> I enjoy challenging myself with different activities like going to the gym, reading tech blogs, and playing soccer. I'm also passionate about <span className='font-medium'>open-source contributions and keeping up with the latest trends in frontend development.</span>
//           </p>


//       </motion.section>
//     )
// }
