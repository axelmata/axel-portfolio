import React from 'react';
import { ExperienceItem } from '../sub/ExperienceItem';

const EXPERIENCIE = [
    {
        id: 1,
        date: "Marzo 2022 / Actualmente...",
        title: "Desarrollador web − ACIL México",
        description:
                "Mi enfoque profesional se centra en la creación e implementación de sitios web, así como en la ejecución de diseños provenientes del equipo de marketing para interfaces gráficas en la intranet. Mi destreza se extiende al manejo de datos mediante MySQL, ejecutando consultas básicas y llevando a cabo migraciones de bases de datos.",
    },
    
]
export const MyExperience = () => {
    return (
        <section
            className="flex flex-col items-center justify-center py-10 sm:py-20 px-10 lg:px-50 xl:px-80"
            id='experiencias'
        >
            <h2 className="text-[40px] font-semibold text-transparent text-white py-20">
                Mi experiencia
            </h2>
            <div>
                <ol className="relative border-s border-gray-200 ml-3">
                    {
                        EXPERIENCIE.map((experiencie) => (
                            <li className=" mb-10 ms-4" key={experiencie.id}>
                                <ExperienceItem {...experiencie}  />
                            </li>
                        ))
                    }
                </ol>

            </div>

        </section>
    )
}
