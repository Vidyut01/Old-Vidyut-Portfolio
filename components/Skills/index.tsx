'use client'

import React from 'react'

import skills from '@/json/skills.json';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};
  
const itemVariantsUp: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 30, y: -25, filter: 'blur(2px)' },
    show: { 
        opacity: 1, 
        scale: 1,
        y: 0,
        rotate: 0,
        filter: 'blur(0px)',
        transition: { type: "spring", stiffness: 100, delayChildren: 0.2 }
    },
};

const itemVariantsDown: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -30, y: 25, filter: 'blur(2px)' },
    show: { 
        opacity: 1, 
        scale: 1,
        y: 0,
        rotate: 0,
        filter: 'blur(0px)',
        transition: { type: "spring", stiffness: 100, delayChildren: 0.2 }
    },
};

const Skills = () => {
  return (
    <div className="w-full lg:px-10">
        {skills.map((e, i) => (
            <div key={i} className='mt-5'>
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2, once: true }}
                    variants={containerVariants}
                    className='bg-[#292a35b6] p-5 rounded-2xl hover:bg-[#292a35] hover:scale-[1.01] duration-200'
                >
                <h2 className='text-2xl'>{e.type}</h2><br/>
                <div className='flex flex-wrap '>
                    {e.skills.map((s, ind) => 
                        <motion.span
                            key={ind}
                            title={s.name}
                            whileHover={{ rotate: 3, y: -5, transition: { type: 'spring', stiffness: 500, duration: 0.08 } }}
                            className='border-2 border-[#32334ecb] bg-[#4c4d76cb] rounded-full p-2 mr-3 mb-2 flex gap-2 items-center duration-100 h-11'
                            variants={ind & 1 ? itemVariantsUp : itemVariantsDown}
                        >
                            <Image
                                src={s.icon}
                                alt={s.name}
                                width={25}
                                height={25}
                                key={ind}
                            />
                            {s.name}
                        </motion.span>
                    )}
                </div>
                </motion.div>
            </div>
        ))}
    </div>
  )
}

export default Skills