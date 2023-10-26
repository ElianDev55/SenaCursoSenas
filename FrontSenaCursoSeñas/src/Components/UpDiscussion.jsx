import React, { useContext, useState } from "react";
import { DiscussionContext } from  "../Context/ContextDiscussion";
import {Input,Textarea,Checkbox,Button} from "@nextui-org/react";
import {IoMdSend} from "react-icons/io";

export function UpDiscussion() {
    const { sendVideoData, sent } = useContext(DiscussionContext);

    const [formData, setFormData] = useState({
        Title: "",
        Description: "",
        State: false,
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
    
      <Input
        type="text"
        name="Title"
        value={formData.Title}
        label="Título"
        minRows={1}
        onChange={handleInputChange}
        className="mt-1 block w-full   rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
      />
    
      <Textarea
            name="Description"
            placeholder="Que piensas preguntar?"
            value={formData.Description}
            onChange={handleInputChange}
            minRows={1} // Usar minRows en lugar de style.minHeight
            className="mt-1 block rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
   
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
   
    <label className="block mt-4">
      <span className="text-sm font-medium text-gray-700">Estado:</span>
      <Checkbox
        type="checkbox"
        name="State"
        checked={formData.State}
        onChange={handleInputChange}
        className="mt-1 mr-2"
      />
    </label>
    <br />
    <div className="flex justify-end ">
          <Button color="success" variant="solid" type="submit">
            Enviar <IoMdSend />
          </Button>
        </div>
      </form>
      {sent && <p>Enviando datos...</p>}
    </div>
    
  );
  }
  
