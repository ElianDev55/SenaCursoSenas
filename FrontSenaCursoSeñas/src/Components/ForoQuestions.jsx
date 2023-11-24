import { Card, CardHeader, CardBody, CardFooter, Avatar } from "@nextui-org/react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useEffect, useState } from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export function ForoQuestions(data) {
  const [items, setItems] = useState({
    avatar: "https://www.sena.edu.co/Style%20Library/alayout/images/logoSena.png",
    username: "Sena",
  });

  useEffect(() => {
    fetch(`http://localhost:8000/users/${data.data.IdUser}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-[540px] hover:shadow-md transition-transform transform hover:translate-y-[-5px] hover:bg-green-300 cursor-pointer">

        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar isBordered radius="full" size="lg" src={items.avatar} />

            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-medium font-semibold leading-none text-default-600">
                {data.data.Title}
              </h4>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-4 py-2 text-default-700">
          <p>{data.data.Description}</p>
        </CardBody>
        <CardFooter className="gap-3">
          <BiMessageSquareDetail
            className="text-default-500 cursor-pointer"
            size={20}
            onClick={() => console.log("clicked")}
          />
        </CardFooter>
      </Card>


    
    </div>
  );
}
