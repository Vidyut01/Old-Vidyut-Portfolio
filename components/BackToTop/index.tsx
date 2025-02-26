'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const BackToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 700) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <motion.button 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: showButton ? 1 : 0, y: showButton ? 0 : 20 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-5 right-10 text-white py-3 px-4 rounded-full shadow-lg bg-[#50515e] md:block hidden`}
    >
        ↑
    </motion.button>
  )
}

export default BackToTopButton
