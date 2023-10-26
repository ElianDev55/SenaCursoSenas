import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { UpVideos } from "../Pages/UpVideos";

export function ModalForm() {
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
          <Button className=" w-96 px-96 font-semibold " color="success"  key={size} onPress={() => handleOpen(size)}>
            Subir nuevo video
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
              <ModalHeader className="flex flex-col gap-1">Subir video</ModalHeader>
              <ModalBody>

               <UpVideos />

              </ModalBody>
              
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
