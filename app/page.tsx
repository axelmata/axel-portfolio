import { Educacion } from '@/components/main/Educacion'
import Encryption from '@/components/main/Encryption'
import { Hero } from '@/components/main/Hero'
import { MyExperience } from '@/components/main/MyExperience'
import Projects from '@/components/main/Projects'
import Skills from '@/components/main/Skills'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col '>
          <Hero />
          <MyExperience/>
          <Educacion/>
          <Projects/>
          <Skills/>
          {/* <Encryption/> */}
          
          
      </div>
    </main>
  )
}
