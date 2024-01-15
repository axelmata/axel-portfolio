"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'

const SkillText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className='text-4xl sm:text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
            >
                <h2 className='text-[40px] font-semibold text-transparent bg-clip-text text-white'>Creando aplicaciones con tecnologías modernas</h2>
            </motion.div>
            <motion.div
                variants={slideInFromRight(0.5)}
                className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
            >
               Ayudando a dar vida a una idea
            </motion.div>
        </div>
    )
}

export default SkillText