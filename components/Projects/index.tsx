'use client'

import React from 'react'

import { AiFillGithub } from 'react-icons/ai';
import ResumeCard from '^/ResumeCard'
import { motion } from 'framer-motion';

import projects from '@/json/projects.json';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
      opacity: 1,
      transition: {
      staggerChildren: 0.2,
      },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
  },
};

const Projects = () => {
  return (
    <div className="lg:px-10 w-full">
        {projects.slice(0,3).map((e, i) => 
        <ResumeCard
            key={i}
            title={e.title}
            className={`${e.repo && 'cursor-pointer'}`}
            onClick={() => e.repo && window.open(e.repo)}
        >
            <div className="text-xl">
              {e.content}
            </div>
            <br/>
            <div className='flex flex-wrap'>
              {e.stack.map((s, ind) =>
                <motion.span
                  key={ind}
                  title={s}
                  whileHover={{ rotate: 3, y: -5, transition: { type: 'spring', stiffness: 500, duration: 0.08 } }}
                  className='text-sm border-2 border-[#32334ecb] bg-[#4c4d76cb] rounded-full p-2 mr-3 mb-2 flex gap-2 items-center duration-100 h-9 hover:scale-110'
                >
                  {s}
                </motion.span>
              )}
            </div>
            {e.repo && <p className='mt-3 opacity-50 hover:underline w-fit'>Click to view on GitHub</p>}
        </ResumeCard>
        )}
    </div>
  )
}

export default Projects