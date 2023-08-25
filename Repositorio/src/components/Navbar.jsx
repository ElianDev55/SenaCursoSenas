import React from 'react'
import { Link } from 'react-router-dom'
import user from '../assets/user.svg';
import bell from '../assets/bell.svg';
import film from '../assets/film.svg';

const Navbar = () => {
    return (
    <nav className='bg-20 w-full flex py-3 justify-between items-center navbar mb-[0] mt-[0]'>
        <ul className='list-none sm:flex hidden justify-start items-center flex-1'>
            <li className='font-sans font-normal cursor-pointer  text-[18px] text-white  px-4 '>
                <Link to={"/"}>Home</Link>
            </li>
            <li className='font-sans font-normal cursor-pointer  text-[18px] text-white  px-4 '>
                <Link to={"/categories"}>Categories</Link>
            </li>
            <li className='font-sans font-normal cursor-pointer  text-[18px] text-white  px-4 '>
                <Link to={"/forum"}>Forum</Link>
            </li>
        </ul>
        <div className='flex justify-content-between cursor-pointer justify-items-end navbar '>
        <img src={film} className="w-[35px] h-[35px] ml-8 mr-5 "/>
        <img src={bell} className="w-[35px] h-[35px] ml-8 mr-5 "/>
        <img src={user} className="w-[35px] h-[35px] ml-8 mr-5 "/>
        </div>
    </nav>
    )
}

export default Navbar