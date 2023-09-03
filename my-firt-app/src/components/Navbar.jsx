import React, { useState } from 'react'
import { navLinks } from '../constants/';
import MenuIcon from '../assets/menu.svg';
import CloseIcon from '../assets/close.svg';
import user from '../assets/user.svg';
import bell from '../assets/bell.svg';
import film from '../assets/film.svg';


export default function Navbar() {

  const [toggle, settoggle] = useState(false);

  return (
    <nav className='bg-20 w-full flex py-3 justify-between items-center navbar mb-[0] mt-[0]'>
    <ul className='list-none sm:flex hidden justify-start items-center flex-1' >
      {navLinks.map((nav, index) => (
            <li
            key={nav.id}
            className='font-sans font-normal cursor-pointer  text-[18px] text-white  px-4 index === navLinks.length - 1 ? 'mr-0 : mr-10 >
              <a href={'#${nav.id}'} >
              {nav.title}
              </a>
            </li>
            
      ))} 
    </ul>
    <div className='flex justify-content-between cursor-pointer justify-items-end navbar '>
      <img src={film} className="w-[35px] h-[35px] ml-8 mr-5 "/>
      <img src={bell} className="w-[35px] h-[35px] ml-8 mr-5 "/>
      <img src={user} className="w-[35px] h-[35px] ml-8 mr-5 "/>
    </div>
      
      
      


      <div className='sm:hidden flex flex-1 justify-end items-end'>
        <img
          src={toggle ? CloseIcon : MenuIcon}
          alt="menu"
          className='w-[28px] h-[28px] object-contain'
          onClick={() => settoggle((prev) => !prev)}
        />

          <div
          className={`${
            !toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            
            <ul className='list-none flex flex-col justify-end items-center flex-1' >
              {navLinks.map((nav, index) => (
              <li
              key={nav.id}
              className='font-sans font-normal cursor-pointer  text-[18px]  text-white ml-10 index === navLinks.length - 1 ? 'mr-0 : mb-4 >
                <a href={'#${nav.id}'} >
                {nav.title}
                </a>
              </li>
            ))} 

        </ul>

          </div>
      </div>
    </nav>
  )
}
