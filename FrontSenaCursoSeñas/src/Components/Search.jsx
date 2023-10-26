import { BiSearchAlt } from "react-icons/bi";
import {Input} from "@nextui-org/react";
import { useState } from "react";
import { useSearchVideos } from "../Hooks/CrudAllvideos";
import { useContext } from "react";
import { VideosContext } from "../Context/ContextVideos";


export function Search() {

  const context = useContext(VideosContext);
  

  return (
    
    <Input
  label="Buscar"
  isClearable
  radius="lg"
  onChange={(e) => context.SeachVideoData(e.target.value)}
  classNames={{
    label: "text-black/50 dark:text-white/90",
    input: [
      "bg-transparent",
      "text-black/90 dark:text-white/90",
      "placeholder:text-default-700/50 dark:placeholder:text-white/60",
    ],
    innerWrapper: "bg-transparent",
    inputWrapper: [
      "shadow-xl",
      "bg-default-200/50",
      "dark:bg-default/60",
      "backdrop-blur-xl",
      "backdrop-saturate-200",
      "hover:bg-default-200/70",
      "dark:hover:bg-default/70",
      "group-data-[focused=true]:bg-default-200/50",
      "dark:group-data-[focused=true]:bg-default/60",
      "!cursor-text",
      "w-25 min-w-20 max-w-500", // NextUI classes
      "w-300", // This is the new class to set the width of the component
      "h-[your desired height]", // NextUI class to set the height of the component
    ],
  }}
  placeholder="Buscar Video..."
  startContent={
    <BiSearchAlt
      className="text-green-700 text-slate-400 pointer-events-none flex-shrink-0 text-4xl"
      size={25}
    />
  }
  
/>


  );
}