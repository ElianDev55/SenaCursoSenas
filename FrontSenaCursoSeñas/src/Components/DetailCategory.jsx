import {useState, useEffect} from "react";
import {Card, CardBody, Image} from "@nextui-org/react";


export function DetailCategory(data) {
  

    const [items, setItems] = useState(null)
    
    const categoryId = data.data.idCategory

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/categories/${categoryId}/`)
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

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
                src={items ? items.miniature : "https://cdn.vox-cdn.com/thumbor/BurYtvTdu3WviUU9pWwlyrZxkqc=/0x0:1496x727/1820x1024/filters:focal(747x258:985x496):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63096914/Screen_Shot_2019_02_12_at_4.38.43_PM.0.png"}
                width="100%"
                />
            </div>

            <div className="flex flex-col col-span-4 md:col-span-6 lg:col-span-8">
                <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                    <h3 className="font-semibold text-foreground/90">Categoria</h3>
                    <p className="text-small text-foreground/80">{items ? items.title : "Cargando..."}</p>
                    <h1 className="text-large font-medium mt-2">Descripcion</h1>
                    <p className="text-small text-foreground/80">{items ? items.descripcion : "Cargando..."}.</p>
                </div>
                
                </div>
            </div>
            </div>
        </CardBody>
        </Card>
  );
}
