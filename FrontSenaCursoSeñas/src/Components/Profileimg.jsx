import React from "react";
import {Card, CardFooter, Image} from "@nextui-org/react";


export const ProfileImg = () => {

    return (
        <Card
        isFooterBlurred
        className="max-w-[200px] lg:mt-10 lg:ml-20 md:mt-10 md:ml-20 max-sm:mt-5 max-sm:ml-5"
      >
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={200}
          src="src/images/logosena.jpg"
          width={250}
        />
        <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-center text-black/90">Eloy Villamarin Urrutia</p>
        </CardFooter>
      </Card>
    );



}