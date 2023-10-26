import { useContext} from "react";
import { ModalContext } from "../Context/ContextModal";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {AiFillEye} from "react-icons/ai";
import '../Styles/ModalVideos.css'

export function ModalVideos() {


  const context = useContext(ModalContext);


  const backdrops = "blur";
  const sizes = "5xl";

  context.handleOpen(backdrops,sizes);
  
 

  return (
    <>
      <div className="flex flex-wrap gap-3">
       
        
      </div>
      <Modal
      size={context.size} 
        className="mx-auto"
        placement="center"
        backdrop={context.backdrop}
        isOpen={context.isOpenVideoModal}
        onClose={() => context.CloseModalVideos()}
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
              <ModalHeader className="flex flex-col gap-1">{context.infoVideo.title}</ModalHeader>
              <ModalBody>
              {context.render == "videos" ? (
                <video
                src={context.infoVideo.video}
                controls
                width="100%"
                height="100%"
                />
                ) : (
                  
                  <div className="mt-10">
                    a
                    </div>
                  )}
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