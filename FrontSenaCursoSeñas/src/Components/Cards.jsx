
import {Card, CardBody, CardFooter, Image, CardHeader} from "@nextui-org/react";
import {BiSearchAlt} from 'react-icons/bi'

export const Cards =  () => {

  return (
   
      
    <Card
    shadow="sm"
    className="max-w-[250px] mx-auto"
    isPressable
    onPress={() => console.log("item pressed")}
  >
    <CardHeader className="pb-0 pt-5 px-4 flex-col items-start intem justify-center align-center">
      <h4 className="font-bold text-large">ADSO</h4>
    </CardHeader>
    <CardBody className="overflow-visible p-0 pt-4">
      <Image
        isBlurred
        alt="Album cover"
        className="object-cover"
        height={200}
        shadow="md"
        src="https://art.ngfiles.com/images/746000/746873_xxdrummerxx_miles-morales.jpg?f1545251285"
        width="100%"
      />
    </CardBody>
    <CardFooter className="text-small justify-between h-auto max-h-100    p-t-2">
      <b></b>
      <p className="text-default-500">
        Software is a set of computer programs and associated documentation and data. This is in contrast to hardware,
        from which the system is built and which actually performs the work
        from which the system is built and which actually performs the work
      </p>
    </CardFooter>
  </Card>
      
    
  );
}
