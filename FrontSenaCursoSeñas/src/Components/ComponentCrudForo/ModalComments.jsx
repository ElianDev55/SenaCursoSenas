import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button,User} from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Avatar } from "@nextui-org/react";
import '../../Styles/ModalVideos.css'
import { useContext } from "react";
import { DiscussionsContext } from "../../Context/ContextDiscussions";
import {Comment} from "../../Components/Comment";
import { CommentsContext } from "../../Context/ContextComments";

export function ModalComments() {

  const contextVideos = useContext(DiscussionsContext);
  
  const context = useContext(CommentsContext);
    const comment = context.comment;

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
        <ModalContent className="flex items-center justify-center h-screen">

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 m-10 max-h-screen overflow-y-auto">
    
    {comment?.map(item => (
      <Comment key={item.IdComment} comment={item} />
    ))}
  </div>
</ModalContent>

      </Modal>
    
  );
}