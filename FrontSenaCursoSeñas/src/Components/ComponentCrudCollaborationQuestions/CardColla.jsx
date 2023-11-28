import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

export const CardColla = ({ id, title }) => {
  const size = "sm";
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [totalRating, setTotalRating] = useState(0);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleRating = (value) => {
    setTotalRating(value);
  };

  useEffect(() => {
    // Realizar la solicitud a la API para obtener la lista de videos
    fetch("http://localhost:8000/videos/")
      .then((response) => response.json())
      .then((data) => {
        const testVideos = data.filter((video) => video.test === true);
        setVideos(testVideos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setLoading(false);
      });
  }, []);

  const handleVideoSelection = (event) => {
    const videoUrl = event.target.value;
  
    // Realizar la solicitud a la API para obtener información adicional si es necesario
    fetch(videoUrl)
      .then((response) => response.text())  // Utiliza response.text() en lugar de response.json()
      .then((data) => {
        console.log(data);  // Imprime el contenido de la respuesta
        setSelectedVideoUrl(videoUrl);
      })
      .catch((error) => {
        console.error("Error fetching selected video:", error);
      });
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
            value={selectedVideoUrl}
          >
            {videos.map((video) => (
              <SelectItem key={video.video} value={video.video}>
                {video.title}
              </SelectItem>
            ))}
          </Select>
        </CardHeader>

        <CardBody className="overflow-visible py-2">
          {loading ? (
            <p>Cargando videos...</p>
          ) : (
            <>
              {selectedVideoUrl ? (
                <>
                  <video className="w-full mt-4" height="215" controls>
                    <source src={selectedVideoUrl} type="video/mp4" />
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
            </>
          )}
        </CardBody>
      </div>
    </Card>
  );
};
