import React from 'react'
import { HeroContent } from '../sub/HeroContent'
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center h-full w-full pb-20" id="about-me">
      {/* <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover opacity-10"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video> */}
      
      <HeroContent />
    </div>
  );
}
