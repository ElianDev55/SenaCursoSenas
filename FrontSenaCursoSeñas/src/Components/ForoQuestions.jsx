import { Card, CardHeader, CardBody, CardFooter, Avatar } from "@nextui-org/react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Tooltip, Button } from "@nextui-org/react";
import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { DiscussionsContext } from "../Context/ContextDiscussions";
import { User, Link } from "@nextui-org/react";
import { ModalPostComments } from "./ComponentCrudForo/ModalPostComments";
import { CommentsContext } from "../Context/ContextComments";
import { CiCirclePlus } from "react-icons/ci";

export function ForoQuestions(data) {

  const discontext = useContext(DiscussionsContext);
  const comments = useContext(CommentsContext);


  const [items, setItems] = useState({
    avatar: "https://www.sena.edu.co/Style%20Library/alayout/images/logoSena.png",
    username: "Sena",
  });

  useEffect(() => {
    fetch(`http://localhost:8000/users/${data.data.IdUser}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);


  const DeleteClickForo = async (id) => {
    await discontext.deleteDiscussionsData(id);
    window.location.reload();
  }


  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-[540px] hover:shadow-md transition-transform transform hover:translate-y-[-5px] hover:bg-green-300 cursor-pointer">
        
        <CardHeader className="justify-between">
          <div className="flex gap-5">
          <User
  name={items.name}
  avatarProps={{
    src: items.avatar.toString()
  }}
/>
          </div>
        </CardHeader>
        
        <div className="flex flex-col gap-1 items-start justify-center ml-4">
          <h4 className="text-medium font-semibold leading-none text-default-600">
            {data.data.Title}
            </h4>
            </div>
        <CardBody className="px-4 py-2 text-default-700"

        onClick={() => {  discontext.handleOpen(); comments.fetchCommentData(data.data.IdDist); console.log(data.data.IdDist)  } }

        >
          <p>{data.data.Description}</p>
        </CardBody>

        <CardFooter className="gap-3">


     
        <ModalPostComments data={data.data.IdDist} />
     

          <Tooltip key="bottom" placement="bottom" content="Eliminar" color="danger">
              <Button color="" className="text-2xl text-red-500 cursor-pointer" onClick={() => DeleteClickForo(data.data.IdDist)}>
                <AiFillDelete />
              </Button>
            </Tooltip>
        </CardFooter>
      </Card>


    
    </div>
  );
}
