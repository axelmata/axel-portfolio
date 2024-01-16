import React from 'react'
import { ArrowIcon } from './ArroyIcon'
interface Props {
    title: string
    description: string
    link?: string
    date: string
}


export const ExperienceItem = ({ title, description, link, date }: Props) => {
    return (
        <>
            <section
                className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"
            >
            </section>
            <time
                className="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80"
            >{date}</time>
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-cyan-500 mt-2">
                {title}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-300 text-pretty">
                {description}
            </p>

        </>
    )
}
