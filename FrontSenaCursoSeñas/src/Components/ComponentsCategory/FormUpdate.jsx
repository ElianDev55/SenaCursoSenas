import React, { useContext, useState } from "react";
import { CategoriesContext } from "../../Context/ContextCategories";
import {Input,Textarea,Checkbox,Button} from "@nextui-org/react";
import {IoMdSend} from "react-icons/io";

export function FormUpdateCategories() {
    const { handleUpdate, updated } = useContext(CategoriesContext);

    const [formData, setFormData] = useState({
        idcategory: null,
        title: "",
        descripcion: "",
        state: false,
        miniature: null,
        iduser: null,
      });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleUpdate(formData.idcategory, formData);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleFormSubmit} className="w-full max-w-md">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">ID de la Categoría:</span>
          <Input
            type="text"
            name="idcategory"
            value={formData.idcategory}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
        </label>
        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">Título de la Categoría:</span>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
        </label>
        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">Descripción de la Categoría:</span>
          <Textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleInputChange}
            className="mt-1 block rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
        </label>
        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">Estado:</span>
          <Checkbox
            name="state"
            checked={formData.state}
            onChange={handleInputChange}
            className="mt-1 block rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
        </label>
        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">Miniatura:</span>
          <Input
            type="text"
            name="miniature"
            value={formData.miniature}
            onChange={handleInputChange}
            className="mt-1 block bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
        </label>
        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">ID del Usuario:</span>
          <Input
            type="text"
            name="iduser"
            value={formData.iduser}
            onChange={handleInputChange}
            className="mt-1 block bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
        </label>
        <Button
          type="submit"
          className="mt-4"
          loading={updated}
          icon={<IoMdSend />}
        >
          Actualizar Categoría
        </Button>
      </form>
    </div>
  );
}
