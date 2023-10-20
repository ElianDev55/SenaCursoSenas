
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import {BiMessageSquareDetail} from "react-icons/bi";

export  function ForoQuestions(data) {

  return (
    <Card className="max-w-[540px] hover:shadow-md transition-transform transform hover:translate-y-[-5px] hover:bg-green-300">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="http://127.0.0.1:8000/media/miniatures/animecolombia.jfif" />
          
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            
          </div>
        </div>
        
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-700  ">
        <p>
          {data.data.Description}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <BiMessageSquareDetail className="text-default-500  cursor-pointer"size={20} 
        
        onClick={() => console.log("clicked")}

        />
      </CardFooter>
    </Card>
  );
}
