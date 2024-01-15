import React from 'react';
import { ExperienceItem } from '../sub/ExperienceItem';

const EXPERIENCIE = [
    {
        id: 1,
        date: "Marzo 2022 / Actualmente...",
        title: "Desarrollador web − ACIL México",
        description:
                "Mi enfoque profesional se centra en la creación y implementación de sitios web, así como en la ejecución de diseños provenientes del equipo de marketing para interfaces gráficas en la intranet. Mi destreza se extiende al manejo de datos mediante MySQL, ejecutando consultas básicas y llevando a cabo migraciones de bases de datos.",
    },
    {
        id: 2,
        date: "Agosto 2023",
        title: "Cursos - Devtalles",
        description:
            "Di un salto al siguiente nivel al buscar mejorar constantemente mis conocimientos en desarrollo. Invertí en plataformas de e-learning para perfeccionar mis habilidades y adquirir un conocimiento más profundo en el desarrollo web. Actualmente, estoy utilizando un enfoque más avanzado al trabajar con un framework como Next, complementándolo con React JS.",
    },
    {
        id: 3,
        date: "Enero 2023",
        title: "Cursos - UDEMY",
        description:
            "Durante mi tiempo en ACIL México, aproveché la oportunidad para complementar mi experiencia laboral con educación continua. donde adquirí habilidades sólidas y puse en práctica mis conocimientos desarrollando proyectos web. Esta combinación de aprendizaje teórico y aplicación práctica me permitió crecer profesionalmente y aplicar de manera efectiva lo aprendido en entornos laborales reales.",
    },
    {
        id: 4,
        date: "Octubre 2020",
        title: "Ingenieria en comunicación y multimedia(trunca)  − Universidad Estatal Del Valle DE Ecatepec",
        description:
            "Durante mi tiempo como estudiante, realicé prácticas de desarrollo web con PHP, empleando plantillas de Bootstrap. Adquirí habilidades significativas en la creación y mejora de sitios web, fusionando la versatilidad de PHP con el diseño eficiente de Bootstrap. Estas experiencias no solo fortalecieron mis conocimientos técnicos, sino que también cultivaron mi capacidad para desarrollar soluciones web innovadoras y atractivas.",
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
