import  { useContext, useState } from "react";
import { Input, Textarea, Checkbox, Button } from "@nextui-org/react";
import { IoMdSend } from "react-icons/io";
import { Spinner } from "@nextui-org/react";
import {DiscussionsContext} from '../../Context/ContextDiscussions';

export function FormUpForo() {

  const context = useContext(DiscussionsContext);
  const { sent, sendDiscussionsData } = context;

  const [formData, setFormData] = useState({
    Title: "",
    Description: "",
    State: true,
    IdUser: null,
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) {
        formDataToSend.append(key, formData[key]);
      }
    }
    console.log(formDataToSend);
    await sendDiscussionsData(formDataToSend);
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
          <span className="text-sm font-medium text-gray-700">Título del Video:</span>
          <Input
            type="text"
            name="Title"
            value={formData.Title}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
        </label>
        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">Descripción del Video:</span>
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

          <Button color="success" variant="solid" type="submit">
            Enviar <IoMdSend />
          </Button>
        </div>
      </form>
      {sent && <Spinner color="success" />}
    </div>
  );
}
