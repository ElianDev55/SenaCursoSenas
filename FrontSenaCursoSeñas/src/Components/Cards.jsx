
import {Card, CardBody, CardFooter, Image, CardHeader,Button  } from "@nextui-org/react";
import { useContext } from 'react';
import { ModalContext } from "../Context/ContextModal";
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';
import {VideosContext} from '../Context/ContextVideos';
import {CategoriesContext} from '../Context/ContextCategories';
import { ModalFormPutVideo } from "./ModalFormPutVideos";

export const Cards =  (data) => {
  
  const context = useContext(ModalContext);
  const contextVideos = useContext(VideosContext);
  const contextCategories = useContext(CategoriesContext);

  const DeleteClickVideo = async (id) => {
    await contextVideos.deleteVideoData(id);
    window.location.reload();
  }

  const DeleteClickCategory = async (id) => {
    await contextCategories.deleteCategoryData(id);
    window.location.reload();
  }


  return (
   
      

      
    <Card
    shadow="sm"
    className="max-w-[250px] mx-auto"
    isPressable
    
     
  >
    <CardHeader className="pb-0 pt-5 px-4 flex-col items-start intem justify-center align-center">
      <h4 className="font-bold text-large">{data.data.title}</h4>
    </CardHeader>
    <CardBody className="overflow-visible p-0 pt-4"  
    
    onClick={() => {  context.OpenModalVideos();  context.GetInfoVideo(data.data);  context.changetoVideos()    } }
    
    >
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
      <p className="text-default-500">{data.data.description ? data.data.description : data.data.descripcion}</p>

      
    </CardFooter>

    <CardFooter className="h-100 max-h-100 p-4 flex justify-between items-center">
      <div className="flex items-center">
      {data.data.idvideo ? (
      <button className="text-4xl text-red-500 cursor-pointer"  onClick={() => DeleteClickVideo(data.data.idvideo)}>
        <AiFillDelete />
        </button>
        ) : (
        <button className="text-4xl text-red-500 cursor-pointer" onClick={() => DeleteClickCategory (data.data.idcategory)}>
          
          <AiFillDelete />
          </button>
)}
      </div>
      <div>
        <button className="text-4xl text-blue-500 cursor-pointer">
          <ModalFormPutVideo />
        </button>
      </div>
    </CardFooter>

  </Card>


    
  );
}
