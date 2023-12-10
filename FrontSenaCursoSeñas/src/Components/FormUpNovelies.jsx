import React, { useContext, useState } from "react";
import axios from "axios";
import { Input, Textarea, Checkbox, Button } from "@nextui-org/react";
import { IoMdSend } from "react-icons/io";
import { Spinner } from "@nextui-org/react";

export function FormNovelties() {
  const [formData, setFormData] = useState({
    Title: "",
    Description: "",
    State: false,
    IdUser: null,
  });

  const [sent, setSent] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      setSent(true);

      // Realiza la solicitud POST con Axios
      const response = await axios.post(
        "http://localhost:8000/novelties/",
        formData
      );

      // Puedes manejar la respuesta aquí si es necesario
      console.log(response.data);
    } catch (error) {
      // Maneja errores aquí
      console.error("Error al realizar la solicitud POST:", error);
    } finally {
      setSent(false);
    }
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
          <span className="text-sm font-medium text-gray-700">Título:</span>
          <Input
            type="text"
            name="Title"
            value={formData.Title}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
        </label>
        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">Descripción:</span>
          <Textarea
            name="Description"
            value={formData.Description}
            onChange={handleInputChange}
            className="mt-1 block rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
        </label>
        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">Usuario:</span>
          <Input
            type="text"
            name="IdUser"
            value={formData.IdUser}
            onChange={handleInputChange}
            className="mt-1 block bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
        </label>
        <div className="flex items-center justify-between mt-10 pb-10">
          <label className="text-sm font-medium pr-3 text-gray-700">
            Estado:
            <Checkbox
              type="checkbox"
              name="State"
              checked={formData.State}
              onChange={handleInputChange}
              className=""
            />
          </label>

          <Button color="success" variant="solid" type="submit">
            Enviar <IoMdSend />
          </Button>
        </div>
      </form>
      {sent && <Spinner color="success" />}
    </div>
  );
}
