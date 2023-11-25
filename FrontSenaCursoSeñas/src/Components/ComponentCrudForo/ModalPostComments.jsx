import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {FormUpCommet} from "../ComponentCrudForo/FormUpCommet";
import { CiCirclePlus } from "react-icons/ci";

export function ModalPostComments(data) {
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
          
          <Button className="hover:text-blue-600-500 " color="" key={size} onPress={() => handleOpen(size)}>
            
          <CiCirclePlus className="text-2xl " />

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
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>

                <FormUpCommet data = {data} />

              </ModalBody>

            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}