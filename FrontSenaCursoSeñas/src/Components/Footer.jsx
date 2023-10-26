import {Image} from "@nextui-org/react";

export const Footer =  () => {

  return (
   
    
    <footer className="bg-white pt-32 pb-0 fixed-bottom w-full ">
  <div className="   gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-content-center">
  <div className="flex flex-col lg:flex-row gap-10 ">
  <div className="flex flex-col  ">
    <p className="text-base text-gray-700">Servicio Nacional de Aprendizaje SENA - Centro de Industria y Construcción - Regional Tolima</p>
    <p className="text-base text-gray-700">Dirección: Carrera 45 Sur Nº 141-05 Sector Picaleña, contiguo casa de la Moneda - 2709600</p>
    <p className="text-base text-gray-700">Conmutador Nacional (57 1) 5461500 - Extensiones</p>
  </div>
  <div className="flex flex-col">
    <p className="text-base text-gray-700">Atención telefónica: lunes a viernes 7:00 a.m. a 7:00 p.m. - sábados 8:00 a.m. a 1:00 p.m.</p>
    <p className="text-base text-gray-700">Atención al ciudadano: Bogotá (57 1) 3430111 - Línea gratuita y resto del país 018000 910270</p>
    <br />
    <p className="text-base text-gray-700">Hecho por :   Elian Villamarin , Mario Mora , Sebastian Ayerbe, Alejandro Kulma</p>
  </div>
</div>
    <div className="flex flex-col flex-direction-row sm:flex-direction-column  ">
      <Image
      width={300}
      alt=""
      src="src/Assets/FooterSenaImage.png"
    />
    </div>
  </div>
</footer>
    
  );
}
