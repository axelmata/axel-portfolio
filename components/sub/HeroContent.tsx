'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
export const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-10 mt-40 w-full z-[20] sm:ml-10"
        >


            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <div className='flex flex-row items-center justify-start sm:hidden'>
                    <Image
                        src="/perfil2.jpg"
                        alt="logo"
                        width={70}
                        height={70}
                        className="cursor-pointer sx:flex hover:animate-slowspin rounded-full px-1 py-1 sm:px-3 sm:py-3"
                    />

                    <span className="font-bold ml-[10px] block text-gray-300">
                        Axel Mata Ramírez
                    </span>
                </div>

                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#3145fdea] opacity-[0.9] "
                >

                    <SparklesIcon className="text-[#3145fdea] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">
                        Fullstack Developer Portfolio
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-4xl sm:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Proporcionando
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            la mejor{" "}
                        </span>
                        experiencia
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-sm sm:text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    ¡Bienvenidos a mi portafolio! Soy un apasionado desarrollador web front-end dedicado a crear experiencias en línea atractivas, funcionales y accesibles.
                </motion.p>
                <div className='flex flex-row w-full gap-10 h-full'>
                    <motion.a
                        variants={slideInFromLeft(1)}
                        className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[100px]"
                        href='https://www.linkedin.com/in/axel-mata-ram%C3%ACrez-49149010a/'
                        target='_blank'
                    >
                        Linkedin
                    </motion.a>
                    <motion.a
                        variants={slideInFromLeft(1)}
                        className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[100px]"
                        href='https://github.com/axelmata'
                        target='_blank'
                    >
                        GitHub
                    </motion.a>
                    <motion.a
                        variants={slideInFromLeft(1)}
                        className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[100px]"
                        href='mailto:axel.1995@live.com.mx'
                    >
                        Email
                    </motion.a>
                </div>

            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full hidden sm:flex justify-center items-center"
            >
                <Image
                    src="/home2.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div>
    )
}
