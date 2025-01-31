import { useState } from 'react';
import '../styles/header.css';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { HiX } from "react-icons/hi";

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    


  return (
    <>
    <nav className='flex justify-between px-5 py-2 bg-secondary font-poppins-font'>
        <a className='font-bold text-black text-lg md:text-xl' href="#">Portfolio</a>
        <div className='hidden md:block'>
        <ul className='flex text-white'>
            <li className="hover-nav"><a href="#">Home</a></li>
            <li className="hover-nav"><a href="#about">About</a></li>
            <li className="hover-nav"><a href="#projects">Projects</a></li>
            <li className="hover-nav"><a href="#resume">Resume</a></li>
            <li className="hover-nav"><a href="#contact">Contact</a></li>
        </ul>
        </div>
        {toggleMenu && <div className='block md:hidden'>
        <ul onClick={()=>setToggleMenu(!toggleMenu)} className='flex flex-col text-white mobile-nav'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </div>}
        {toggleMenu ? (
          <button className='block md:hidden' onClick={() => setToggleMenu(!toggleMenu)}><HiX className='text-white h-5 w-5' /></button>
        ) : (
          <button className='block md:hidden' onClick={() => setToggleMenu(!toggleMenu)}><Bars3Icon className='text-white h-5 w-5' /></button>
        )}
    </nav>
    </>
  )
}

export default Header