import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h2 className="text-[40px] font-semibold text-transparent text-white py-20">
        Mis Proyectos
      </h2>
      <div className="h-full w-full grid grid-cols-1 lg:grid-cols-3  md:flex-row gap-10 px-10">
        <ProjectCard
          src="/pokeApi.jpg"
          title="Dashboard-Api - Curso DevTalles"
          description="Desarrollo de un dashboard con la implementacion de REDUX en NEXT.JS manejando la api de pokemon y aplicando los principios de react con hooks en manejo de components del lado del servidor."
        />
        <ProjectCard
          src="/adminTodo.jpeg"
          title="AdminTodoApp - Curso Devtalles"
          description="Desarrollo de dashboard en conjunto de server-actions y prisma para manejo de base datos y accione asincronas, envio de peticiones https con el modelo de route.ts de NEXT.JS manejo de estados con cookies implementadas de lado de NEXT, desarrollo de contador basico con estado globar REACT-REDUX"
        />
        <ProjectCard
          src="/tesla.jpeg"
          title="Ecommerce - Curso Devtalles"
          description="Desarrollo de tesla-shop en conjunto de server-actions, Zustan, Prisma, Paypal,  proyecto basado en manejo de estado global con zustand, envio de peticiones asincronas locales dentro del proyecto, authProvider con AuthNext login, manejo de orgendes Swiper para carruseles internos, y envio de informacion a paypal, imagen de dockers para base de datos"
        />

      </div>
    </section>
  );
};

export default Projects;