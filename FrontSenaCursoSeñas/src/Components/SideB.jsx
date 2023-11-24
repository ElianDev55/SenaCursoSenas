import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { SlArrowRightCircle } from "react-icons/sl";
import { RiArrowLeftCircleLine } from "react-icons/ri";
import { TiArrowSync } from "react-icons/ti";


const SideB = () => {
    const [nav, setNav] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const menuItems = [
        { text: "Categoria 1" },
        { text: "Categoria 2" },
        { text: "Categoria 3" },
        { text: "Categoria 4" },
    ];

    const handleCheckboxChange = (index) => {
        const newSelectedItems = [...selectedItems];
        newSelectedItems[index] = !newSelectedItems[index];
        setSelectedItems(newSelectedItems);
    };

    const deselectAll = () => {
        setSelectedItems(new Array(menuItems.length).fill(false));
    };

    return (
        <div className="fixed bottom-[50%] left-2">
            <div>
                <SlArrowRightCircle size={30} color="39a900" onClick={() => setNav(!nav)} />
            </div>
            {nav ? (
                <div className="bg-black/80 fixed w-auto h-screen z-10 top-0 left-0"></div>
            ) : (
                ""
            )}
            <div
                className={
                    nav
                        ? "fixed top-0 mt-11 border-2 border-color-azul left-0 w-[240px] h-[95%] bg-white z-10 duration-300"
                        : "fixed top-0 left-[-100%] w-[300px] h-[500px] bg-white z-10 duration-300"
                }
            >
                <RiArrowLeftCircleLine
                    onClick={() => setNav(!nav)}
                    size={25}
                    className="absolute right-1 top-4 cursor-pointer"
                />
                <h2 className="text-2xl p-2 mt-16">
                    <span className="font-bold">Categorias</span>
                </h2>
                <TiArrowSync
                    onClick={deselectAll}
                    size={22}
                    className="absolute right-[9%] top-[11.59%] cursor-pointer text-green-600 "
                />
                <hr className="bold"></hr>
                
                <nav>
                    <ul className="flex flex-col p-0 text-gray-800 px-0 ml-2 ">
                        {menuItems.map(({ text }, index) => {
                            return (
                                <div key={index} className="py-3 ">
                                    <li className={`text-base flex cursor-pointer px-1 mx-0 w-[95%] rounded-md  p-2 hover:text-white hover:bg-black ${selectedItems[index] ? 'border-2 border-blue-500' : ''}`}>
                                        <input
                                            type="checkbox"
                                            checked={selectedItems[index] || false}
                                            onChange={() => handleCheckboxChange(index)}
                                            className="mr-2"
                                        />
                                        {text}
                                    </li>
                                </div>  
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SideB;
