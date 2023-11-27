import React from "react";
import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";




const Footer = () => {



  return (


<div className=" bg-[#07091b] text-white rounded-t-3xl mt-8 md:mt-0">
<div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
<div className=" w-full md:w-1/4">
<h1 className=" font-semibold text-xl pb-4">FoodLaya</h1>
<p className=" text-sm">
Deléitese con una sinfonía de sabores, donde cada plato es un lienzo de excelencia culinaria.
</p>
</div>
<div>
<h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
<nav className=" flex flex-col gap-2">
<a className=" hover:text-brightColor transition-all cursor-pointer"
    href="/"
>
     Platos
</a>

<a  className=" hover:text-brightColor transition-all cursor-pointer"
     href="/"
>
    Acerca de
</a>
<a className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"   >Menu
</a>
<a className=" hover:text-brightColor transition-all cursor-pointer"
href="/">Opiniones
</a>
</nav>
</div>

<div>
<h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
<nav className=" flex flex-col gap-2">
<a className=" hover:text-brightColor transition-all cursor-pointer"
href="/">Nuestros Platos
</a>
<a className=" hover:text-brightColor transition-all cursor-pointer"
    href="/"
>Premium Menu
</a>
</nav>
</div>

<div>
<h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contactos</h1>
<nav className=" flex flex-col gap-2">
<a className=" hover:text-brightColor transition-all cursor-pointer"
href="/">layadevelop@email.com
</a>

<a className=" hover:text-[pink] transition-all cursor-pointer"
href="https://wa.me/5491122781197?text=Hola%20soy%20Amberlis%20Laya"
target="_blank"
 rel="noopener noreferrer"
>
<BsWhatsapp className="text-2xl hover:text-[red] transition-all cursor-pointer" />
</a>


<div className="flex flex-row gap-2">
              {/* Agregar enlaces de redes sociales aquí */}
<a
    href="https://www.instagram.com/soyamberlis/"
    target="_blank"
     rel="noopener noreferrer"
>
<BsInstagram className="text-2xl hover:text-[red] transition-all cursor-pointer" />
</a>
              
<a
     href="https://www.linkedin.com/in/amberlis-laya-m/"
     target="_blank"
    rel="noopener noreferrer"
>
<BsLinkedin className="text-2xl hover:text-[red] transition-all cursor-pointer" />
</a>
              
</div>             {/* Agregar más iconos de redes sociales según sea necesario */}
</nav>
</div>
</div>

<div>
<p>
<p className=" text-center py-4">
           
<span className=" text-[red]"> © 2023 Amberlis Laya</span> |
Todos los derechos reservados
</p>
</p>
</div>
</div>  );
};

export default Footer;