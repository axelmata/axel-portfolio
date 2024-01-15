import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 border-t-indigo-950 z-50 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto hidden flex-row items-center sm:flex"
        >
          <Image
            src="/perfil2.jpg"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin rounded-full px-1 py-1 sm:px-3 sm:py-3"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Axel Mata Ramírez
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#1014ffc2] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:text-cyan-500">
              Inicio
            </a>
            <a href="#experiencias" className="cursor-pointer hover:text-cyan-500 hidden sm:block">
              Experiencia
            </a>
            <a href="#projects" className="cursor-pointer hover:text-cyan-500">
              Proyectos
            </a>
            <a href="#skills" className="cursor-pointer hover:text-cyan-500">
              Habilidades
            </a>

          </div>
        </div>

        <div className="  flex-row gap-5 hidden sm:flex">
          {Socials.map((social) => (
            <a href={social.link} key={social.name} target="_blank" className="hover:bg-cyan-500 hover:rounded-full stroke-none">
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;