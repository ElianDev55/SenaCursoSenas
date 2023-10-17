import '../Styles/App.css'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export const App =  () => {
  
  return (
    <>
    <h1>PRUEBA UNO :P </h1>
      <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://cdn.theatlantic.com/thumbor/tvoccZR-OQ02Oca7QQjNA0s2-0Q=/420x0:1500x1080/1080x1080/media/img/mt/2017/04/your_name-1/original.jpg"
          width={270}
        />
      </CardBody>
    </Card>
    </>
  )
}
