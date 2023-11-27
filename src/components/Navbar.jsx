import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoRestaurantSharp } from "react-icons/io5";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";





const Navbar = () => {



 const [menu, setMenu] = useState(false);

const handleChange = () => {
    setMenu(!menu);
};

const closeMenu = () => {
    setMenu(false);
};

 


return (
<div className=" fixed w-full">
<div>
<div className=" flex flex-row justify-between p-5 bg-gradient-to-r from-[#290b0b] md:px-32 px-5 bg-[#130b29] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
<div className=" flex flex-row items-center cursor-pointer">
<span>
          <IoRestaurantSharp size={32} />
</span>
<h1 className=" text-xl font-semibold">FoodLaya</h1>
</div>

<nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
<Link to="home" spy={true} smooth={true} duration={500} className="hover:text-[red] transition-all cursor-pointer">Inicio
</Link>

<div className="relative group">
<div className=" flex items-center gap-1">
<Link to="dishes" spy={true} smooth={true} duration={500} className="hover:text-[red] transition-all cursor-pointer"> Platos
</Link>

<BiChevronDown className="cursor-pointer" size={25} />
</div>

<ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
<li>
<Link to="dishes" spy={true} smooth={true} duration={500} className="text-gray-800 hover:text-[red] transition-all cursor-pointer" >Picante
</Link>
</li>

<li>
<Link to="dishes" spy={true} smooth={true} duration={500} className="text-gray-800 hover:text-[red] transition-all cursor-pointer"
>Tostadas
</Link>
</li>

<li>
<Link to="dishes" spy={true} smooth={true} duration={500} className="text-gray-800 hover:text-[red] transition-all cursor-pointer"
>Deliciosos
</Link>
</li>

<li>
<Link to="dishes" spy={true} smooth={true} duration={500} className="text-gray-800 hover:text-[red] transition-all cursor-pointer" > Crujiente
</Link>
</li>
</ul>
</div>

<Link to="about" spy={true} smooth={true} duration={500} className="hover:text-[red] transition-all cursor-pointer"
 >Acera de
</Link>

<Link to="menu" spy={true} smooth={true} duration={500} className="hover:text-[red] transition-all cursor-pointer"> Menú
</Link>

<Link to="review" spy={true} smooth={true} duration={500} className="hover:text-[red] transition-all cursor-pointer" >
Opiniones
</Link>

<Button title="Login" />
</nav>

<div className="md:hidden flex items-center">
            {menu ? (
  <AiOutlineClose size={25} onClick={handleChange} />
) : (
<AiOutlineMenuUnfold size={25} onClick={handleChange} />
)}
</div>
</div>

<div className={` ${
      menu ? "translate-x-0" : "-translate-x-full"
} lg:hidden flex flex-col absolute bg-[black] text-[white] left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
>

<Link to="home" spy={true} smooth={true} duration={500} className="hover:text-[red] transition-all cursor-pointer" onClick={closeMenu}>Inicio
</Link>

<Link to="dishes" spy={true} smooth={true} duration={500} className="hover:text-[red] transition-all cursor-pointer" onClick={closeMenu} >Platos
</Link>

<Link to="about" spy={true} smooth={true} duration={500} className="hover:text-[red] transition-all cursor-pointer" onClick={closeMenu}>
Acerca de
</Link>

<Link to="menu" spy={true} smooth={true} duration={500} className="hover:text-[red] transition-all cursor-pointer" onClick={closeMenu}>Menú
</Link>

<Link to="review" spy={true} smooth={true} duration={500} className="hover:text-[red] transition-all cursor-pointer" onClick={closeMenu}>Opiniones</Link>

<Button title="login"/>
</div>
</div>
</div>
);
};

export default Navbar;












