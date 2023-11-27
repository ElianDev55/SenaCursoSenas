import { Card, CardBody, CardFooter, CardHeader,User } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Tooltip, Button } from "@nextui-org/react"
import { useContext } from "react";
import { CommentsContext } from "../Context/ContextComments";

export const Comment = ({ comment }) => {
  
  const context = useContext(CommentsContext);

  const DeleteClickComment = async (id) => {
    await context.deleteCommentsData(id);
    window.location.reload();
  };

    const [items, setItems] = useState({
        avatar: "https://www.sena.edu.co/Style%20Library/alayout/images/logoSena.png",
        username: "Sena",
      });
    
      useEffect(() => {
        fetch(`http://localhost:8000/users/${comment.IdUser}`)
          .then((response) => response.json())
          .then((data) => setItems(data));
      }, []);
    
    


    return (
        
        <div className="">
<Card className="w-full max-w-[540px] hover:shadow-md transition-transform transform hover:translate-y-[-5px] hover:bg-green-300 ">
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
        <CardBody className="px-4 py-2 text-default-700">
          <p>{comment.Description}</p>
        </CardBody>
        <CardFooter className="gap-3">
        <Tooltip key="bottom" placement="bottom" content="Eliminar" color="danger">
              <Button color="" className="text-2xl text-red-500 cursor-pointer" onClick={() => DeleteClickComment(comment.IdComment)}>
                <AiFillDelete />
              </Button>
            </Tooltip>
        </CardFooter>
      </Card>
    </div>
    );
}