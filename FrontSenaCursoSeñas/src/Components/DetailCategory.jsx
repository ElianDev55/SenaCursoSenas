
import {Card, CardBody, Image} from "@nextui-org/react";


export function DetailCategory() {
  
  return (
        <Card
        isBlurred
        className=" box border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
        >
        <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-2 md:col-span-4 lg:col-span-4">
                <Image
                isBlurred
                alt="Album cover"
                className="object-cover"
                height={200}
                shadow="md"
                src="https://art.ngfiles.com/images/746000/746873_xxdrummerxx_miles-morales.jpg?f1545251285"
                width="100%"
                />
            </div>

            <div className="flex flex-col col-span-4 md:col-span-6 lg:col-span-8">
                <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                    <h3 className="font-semibold text-foreground/90">Categoria</h3>
                    <p className="text-small text-foreground/80">Pop</p>
                    <h1 className="text-large font-medium mt-2">Descripcion</h1>
                    <p className="text-small text-foreground/80">pop, acort. de popular popular. 
                    1. m. Estilo musical de origen angloamericano nacido al final de los años cincuenta del siglo XX, 
                    caracterizado por la creación de canciones de ritmo marcado acompañadas de instrumentos
                    eléctricos y batería, y que busca lograr una gran difusión comercial.</p>
                </div>
                
                </div>
            </div>
            </div>
        </CardBody>
        </Card>
  );
}
