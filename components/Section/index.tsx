'use client'

import { motion } from "framer-motion";
import { Fugaz_One, Reem_Kufi } from "next/font/google";
import React from "react";

const subtitleFont = Reem_Kufi({
  weight: '400',
  subsets: ['latin']
})

const headingFont = Fugaz_One({
  weight: '400',
  subsets: ['latin'],
});

const Section = ({id, title, children, className, reverse = false}: {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
    reverse?: boolean;
}) => {
  return (
    <section id={id} className={`flex flex-col items-center lg:flex-row lg:items-start justify-between overflow-hidden px-12 xl:px-32 mb-10 w-full ${className}`}>
      <motion.article
        className=" flex items-center mb-10 lg:mb-0 w-full h-full flex-col lg:flex-row"
        initial={{ opacity: '0', y: '10em' }}
        whileInView={{ opacity: '1', y: '0' }}
        viewport={{ once: true }}
        transition={{ duration: .75 }}
      >
        {<div className={`text-5xl lg:w-[30%] w-full mb-5 lg:mb-0 pb-5 lg:pb-0 h-full lg:border-r border-b lg:border-b-0 grid lg:justify-center pt-10 border-[#E6E6FA] ${reverse && 'lg:hidden'} ${headingFont.className}`}>
          {title}
        </div>}
        <div className="flex flex-col items-center lg:w-[70%]">
          {children}
        </div>
        {reverse && <div className={`pl-10 text-5xl w-[30%] h-full border-l lg:grid justify-center pt-10 border-[#E6E6FA] hidden ${headingFont.className}`}>
          {title}
        </div>}
      </motion.article>
    </section>
  )
}

export default Section