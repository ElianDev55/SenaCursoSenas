
import {Card, CardBody, CardFooter, Image, CardHeader} from "@nextui-org/react";
import { ModalVideos } from "./ModalVideos";
import { useContext } from "react";
import { ContextVideos } from "../Context/ContextVideos";

export const Cards =  (data) => {
  
  const context = useContext(ContextVideos);
  
 

  return (
   
      
    <Card
    shadow="sm"
    className="max-w-[250px] mx-auto"
    isPressable
    onClick={() => {  context.OpenModalVideos(); context.GetInfoVideo(data.data); context.changetoVideos()   } }
  >
    <CardHeader className="pb-0 pt-5 px-4 flex-col items-start intem justify-center align-center">
      <h4 className="font-bold text-large">{data.data.title}</h4>
    </CardHeader>
    <CardBody className="overflow-visible p-0 pt-4">
      <Image
        isBlurred
        alt="Album cover"
        className="object-cover"
        height={200}
        shadow="md"
        src={data.data.miniature}
        width="100%"
      />
    </CardBody>
    <CardFooter className="text-small justify-between h-auto max-h-100    p-t-2">
      <b></b>
      <p className="text-default-500">{data.data.description}</p>
    </CardFooter>
  </Card>
      
    
  );
}
