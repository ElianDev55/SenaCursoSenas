
import {Card, CardBody, CardFooter, Image, CardHeader} from "@nextui-org/react";
import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { VideosContext } from '../Context/ContextVideos';
import { CategoriesContext } from '../Context/ContextCategories';
import { ModalFormPutVideo } from "./ComponentCrudVideo/ModalFormPutVideos";
import {Tooltip, Button} from "@nextui-org/react";


export const Cards =  (data) => {
  
  const contextVideos = useContext(VideosContext);
  const contextCategories = useContext(CategoriesContext);
  
  const DeleteClickVideo = async (id) => {
    await contextVideos.deleteVideosData(id);
    window.location.reload();
  }

  const DeleteClickCategory = async (id) => {
    await contextCategories.deleteCategoriesData(id);
    window.location.reload();
  }
 


  return (
   
    

      <Card
      shadow="sm"
      className="max-w-[250px] mx-auto self-start transform transition duration-500 ease-in-out hover:scale-105"
      isPressable
      >
          <CardHeader className="pb-0 pt-5 px-4 flex-col items-start justify-center align-center">
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
          <CardFooter className="text-small justify-between h-auto max-h-100 p-t-2">
            <p className="text-left text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg">{data.data.description}</p>
          </CardFooter>
          <CardFooter className="h-100 max-h-100 p-4 flex justify-between items-center">
            <div className="flex items-center">
              {data.data.idvideo ? (
                <Tooltip 
                key= "bottom"
                placement="bottom"
                content="Eliminar video"
                color="danger"
                
                >
                <Button  color=""   className="text-4xl text-red-500 cursor-pointer" onClick={() => DeleteClickVideo(data.data.idvideo)}>
                  <AiFillDelete />
                </Button>
                </Tooltip>
              ) : (
                <Button  color="" className="text-4xl text-red-500 cursor-pointer" onClick={() => DeleteClickCategory(data.data.idcategory)}>
                  <AiFillDelete />
                </Button>
              )}
            </div>

            <div>
            <Tooltip 
                key= "bottom"
                placement="bottom"
                content="Actualizar video"
                color="primary"
                
                >
              <Button color=""  className="text-4xl text-blue-500 cursor-pointer">
                <ModalFormPutVideo datavideo = {data} />
              </Button>
              </Tooltip>
            </div>
          </CardFooter>
      </Card>
    
  );
}
