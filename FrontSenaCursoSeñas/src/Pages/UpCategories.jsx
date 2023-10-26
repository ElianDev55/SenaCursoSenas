import React, { useContext, useState } from "react";
import { CategoriesContext } from "../Context/ContextCategories";
import { Input, Textarea, Checkbox, Button } from "@nextui-org/react";
import { IoMdSend } from "react-icons/io";

export function UpCategories() {
  const { sendVideoData, sent } = useContext(CategoriesContext);

  const [formData, setFormData] = useState({
    title: "",
    descripcion: "",
    state: false,
    miniature: null,
    iduser: null,
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) {
        formDataToSend.append(key, formData[key]);
      }
    }
    await sendVideoData(formDataToSend);
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
          <span className="text-sm font-medium text-gray-700">Título:</span>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
        </label>
        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">Descripción:</span>
          <Textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleInputChange}
            className="mt-1 block rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
        </label>
        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">Usuario:</span>
          <Input
            type="text"
            name="iduser"
            value={formData.iduser}
            onChange={handleInputChange}
            className="mt-1 block bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
        </label>
        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">Miniatura:</span>
          <input
            type="file"
            name="miniature"
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
        </label>
        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">Estado:</span>
          <Checkbox
            type="checkbox"
            name="state"
            checked={formData.state}
            onChange={handleInputChange}
            className="mt-1 mr-2"
          />
        </label>
        <br />
        <Button color="success" variant="solid" type="submit">
          Enviar <IoMdSend />
        </Button>
      </form>
      {sent && <p>Enviando datos...</p>}
    </div>
  );
}
