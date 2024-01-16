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
          title="Dashboard-Api - React"
          description="Proyecto hecho con la PokeApi manejando sistema de fetching en server-components NEXT.JS version 13 y desarrollo de estado de favoritos con hooks de react"
        />
        <ProjectCard
          src="/adminTodo.jpeg"
          title="AdminTodoApp - NEXT, Zustand, "
          description="Desarrollo de un dashboard eficiente con Next.js, Server-Actions y Prisma para gestión de base de datos, acciones asíncronas, manejo de rutas, estados con cookies en server-side components, y un contador global implementado con React-Redux."
        />
        <ProjectCard
          src="/tesla.jpeg"
          title="Ecommerce - Next JS"
          description="Desarrollo de tesla-shop en conjunto de server-actions, Zustan, Prisma, Paypal,  proyecto basado en manejo de estado global con zustand, envio de peticiones asincronas locales dentro del proyecto, authProvider con AuthNext login, manejo de orgendes Swiper para carruseles internos, y envio de informacion a paypal, imagen de dockers para base de datos"
        />

      </div>
    </section>
  );
};

export default Projects;