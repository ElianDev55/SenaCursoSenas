import React, { useContext, useState } from "react";
import { VideosContext } from "../Context/ContextVideos";
import {Input,Textarea,Checkbox,Button} from "@nextui-org/react";
import {IoMdSend} from "react-icons/io";

export function PutVideos(id) {
    const { updateVideoData, updated} = useContext(VideosContext);

    
    
    const [formData, setFormData] = useState({
        video: null,
        title: "",
        description: "",
        state: false,
        miniature: null,
        idUser: null,
        idCategory: null,
      });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) {
        formDataToSend.append(key, formData[key]);
      }
    }
    await updateVideoData(id.id.id,formDataToSend);
    console.log(id.id.id);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const inputValue = type === "checkbox" ? checked : type === "file" ? files[0] : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  return (
    
    <div className="flex justify-center">
      <form onSubmit={handleFormSubmit} className="w-full max-w-md">
    <label className="block">
      <span className="text-sm font-medium text-gray-700">Título del Video:</span>
      <Input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        className="mt-1 block w-full rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
      />
    </label>
    <label className="block mt-4">
      <span className="text-sm font-medium text-gray-700">Descripción del Video:</span>
      <Textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        className="mt-1 block  rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
      />
    </label>
   
   
    <label className="block mt-4">
      <span className="text-sm font-medium text-gray-700">Usuario:</span>
      <Input
        type="text"
        name="idUser"
        value={formData.idUser}
        onChange={handleInputChange}
        className="mt-1 block bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
      />
    </label>
    <label className="block mt-4">
      <span className="text-sm font-medium text-gray-700">Categoría:</span>
      <Input
        type="text"
        name="idCategory"
        value={formData.idCategory}
        onChange={handleInputChange}
        className="mt-1 block  bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
      />
    </label>
     <label className="block mt-4">
      <span className="text-sm font-medium text-gray-700">Miniatura del Video:</span>
      <input
        type="file"
        name="miniature"
        onChange={handleInputChange}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
      />
    </label>
    <label className="block mt-4">
      <span className="text-sm font-medium text-gray-700">Video del Video:</span>
      <input
        type="file"
        name="video"
        accept="video/*"
        onChange={handleInputChange}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
      />
    </label>
    <div className="flex items-center justify-between mt-10 pb-10">
  <label className="text-sm font-medium pr-3 text-gray-700">
    Estado del Video:
    <Checkbox
    type="checkbox"
    name="state"
    checked={formData.state}
    onChange={handleInputChange}
    className=""
  />
  </label>
  
  <Button color="success" variant="solid" type="submit"  >
    Enviar <IoMdSend />
  </Button>
</div>
      </form>
      {updated&& <p>Enviando datos...</p>}
      
    </div>
    
  );
  }
  
