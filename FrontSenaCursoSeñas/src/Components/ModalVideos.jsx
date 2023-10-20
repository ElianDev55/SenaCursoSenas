import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {AiFillEye} from "react-icons/ai";
import '../Styles/ModalVideos.css'

export function ModalVideos() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('opaque');
  const [size, setSize] = React.useState('md')


  const backdrops = "blur";
  const sizes = "5xl";

  const handleOpen = (backdrop,size) => {
    setBackdrop(backdrop);
    setSize(size)
    console.log(size);
    onOpen();
  };
 
 

  return (
    <>
      <div className="flex flex-wrap gap-3">
       
          <Button
          
            key={backdrops}
            variant="flat"
            color="primary"
            variant="shadow"
            onClick={() => handleOpen(backdrops,sizes)}
            
            className="capitalize"
          >
            <AiFillEye />
          </Button>
        
      </div>
      <Modal
      size={size} 
        className="mx-auto"
        placement="center"
        backdrop={backdrop}
        isOpen={isOpen}
        onClose={onClose}
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#FFFFFF] bg-[#FFFFFF] dark:bg-[#FFFFFF] text-[#000000]",
          header: "border-b-[1px] border-[#000000]",
          footer: "border-t-[1px] border-[#000000]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Pop</ModalHeader>
              <ModalBody>
                <video
                  src="https://media.istockphoto.com/id/1371228411/es/v%C3%ADdeo/lapso-de-tiempo-de-la-noche-de-kabukicho-con-multitud-caminando-por-la-calle-en-la-ciudad-de.mp4?s=mp4-640x640-is&k=20&c=ZqSSHwj5JBAfo192hwy79b5eZl7AGGoXlqRwK1nFB5o="
                  controls
                  width="100%"
                  height="100%"
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onClick={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}