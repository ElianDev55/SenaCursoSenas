import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import { FormPostCategories } from "./FormPostCategories"; // Asegúrate de importar el componente correcto

export function ModalPostCategories() {
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
          <Button className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-96 font-semibold" color="success" key={size} onPress={() => handleOpen(size)}>
            Publicar nueva categoría
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
              <ModalHeader className="flex flex-col gap-1">Publicar Categoría</ModalHeader>
              <ModalBody>

               <FormPostCategories/>

              </ModalBody>

            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
