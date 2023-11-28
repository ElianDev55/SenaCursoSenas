import React, { useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { animals } from "./data";

export const CardColla = ({ id, title }) => {
  const size = "sm";
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [totalRating, setTotalRating] = useState(0);

  const handleVideoSelection = (event) => {
    setSelectedVideo(event.target.value);
  };

  const handleRating = (value) => {
    setTotalRating(value);
  };

  return (
    <Card className="py-4">
      <div className="ml-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-2xl">Formulario de colaboracion</h4>

          {/* Componente Select para elegir el video */}
          <Select
            size={size}
            label="Elije el video para calificar"
            placeholder="Selecciona un video"
            className="max-w-xs mt-3"
            onChange={handleVideoSelection}
            value={selectedVideo}
          >
            {animals.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </CardHeader>

        <CardBody className="overflow-visible py-2">
          {/* Mostrar el video seleccionado o la imagen predeterminada */}
          {selectedVideo ? (
            <>
              <video className="w-full mt-4" height="215" controls>
                <source src={selectedVideo} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              <h4 className="font-bold text-xl mt-5">Formulario de colaboracion</h4>
              <h4 className="font-bold text-base mt-5">¿ {title} ?</h4>
              {/* Secciones adicionales para calificación */}
              <div className="flex mt-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    className={`star text-3xl cursor-pointer ${value <= totalRating ? "animate-bounce" : ""} ${
                      value <= totalRating ? "text-yellow-500" : "text-gray-300"
                    }`}
                    onClick={() => handleRating(value)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p>Total de estrellas seleccionadas: {totalRating} </p>
            </>
          ) : (
            <img
              src="src/Assets/avisocolaboracion.png"
              alt="Imagen predeterminada"
              className="w-full  mt-4"
            />
          )}
        </CardBody>
      </div>
    </Card>
  );
};
