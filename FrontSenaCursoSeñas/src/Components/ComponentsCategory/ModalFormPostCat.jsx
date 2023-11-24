import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import { AiFillEdit } from 'react-icons/ai';
import { FormPostCategories } from "./FormPostCategories"; // Asegúrate de importar el componente correcto

export function ModalFormPutCategory(dataCategory) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [size, setSize] = React.useState('md')

  const sizes = ["2xl"];
  const backdrops = "blur";

  const handleOpen = (size) => {
    setSize(size)
    onOpen();
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <Button className=" " color=""  key={size} onPress={() => handleOpen(size)}>
             <AiFillEdit  className="text-4xl text-blue-500 cursor-pointer "/>
          </Button>
        ))}  
      </div>
      <Modal 
        size={size} 
        isOpen={isOpen} 
        onClose={onClose} 
        backdrop={backdrops}
        className = "mt-10"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Editar Categoría</ModalHeader>
              <ModalBody>

               <FormPostCategories  infoCategory = {dataCategory}/>

              </ModalBody>

            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
