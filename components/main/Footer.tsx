import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" bg-black w-full h-full  text-gray-200  p-[15px]   z-1000 sm:px-10">
            <div className="w-full block flex-auto justify-around items-center m-auto sm:flex">
    
                <div className="mb-[20px] text-[15px] text-center">
                    &copy; 2024 Axel Mata Ramirez. Todos los derechos reservados.
                </div>


            </div>
        </footer>
    )
}

export default Footer