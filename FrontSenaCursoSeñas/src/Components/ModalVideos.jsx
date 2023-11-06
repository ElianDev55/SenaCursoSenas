import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import '../Styles/ModalVideos.css'
import { useContext } from "react";
import { VideosContext } from "../Context/ContextVideos";



export function ModalVideos() {

  const contextVideos = useContext(VideosContext);
  let video = contextVideos.video;

  

  let  isOpen = contextVideos.isOpen;
  let  onClose = contextVideos.onClose;
  
  
  
  const size = "4xl";
  const backdrops = "blur";


 
  return (
    
      <Modal 
        size={size} 
        isOpen={isOpen} 
        onClose={onClose} 
        backdrops={backdrops}
        className="mx-auto"
        placement="center"
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
              <ModalHeader className="flex flex-col gap-1">
                {video ? (
                  video.title // Renderiza el valor de video.video si no es nulo
                  ) : (
                    "El video está vacío o no disponible" // Muestra un mensaje alternativo si video.video es nulo
                    )}
</ModalHeader>
              <ModalBody>
              {video ? (
                    <video
                    src={video.video}
                    controls
                    width="100%"
                    height="100%"
                    />
                 // Renderiza el valor de video.video si no es nulo
                  ) : (
                    "El video está vacío o no disponible" // Muestra un mensaje alternativo si video.video es nulo
                    )}

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    
  );
}