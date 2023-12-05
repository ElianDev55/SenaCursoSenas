import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { MdOutlineSendAndArchive } from "react-icons/md";

export const CardColla = (props) => {
  const { id, title, onSave, onVideoChange, showSubmitButton, onSubmitButtonClick, totalRating, setTotalRating, currentIndex, totalQuestions } = props;
  const size = "sm";
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [responseSubmitted, setResponseSubmitted] = useState(false);
  const [datosUltimaEstrella, setDatosUltimaEstrella] = useState(null);

  const handleRating = (value) => {
    setTotalRating(value);
  };

  const handleSave = () => {
    if (selectedVideoUrl && totalRating > 0) {
      onSave({ id, stars: totalRating });
      setTotalRating(0);
      setResponseSubmitted(true);
    }

    if (onSubmitButtonClick && currentIndex + 1 === totalQuestions) {
      onSubmitButtonClick();
    }
  };

  const handleVideoSelection = (event) => {
    if (responseSubmitted) {
      console.log("Ya se ha enviado una respuesta. No se puede seleccionar otro video.");
      return;
    }

    const videoUrl = event.target.value;

    onVideoChange();

    fetch(videoUrl)
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setSelectedVideoUrl(videoUrl);
      })
      .catch((error) => {
        console.error("Error fetching selected video:", error);
      });
  };

  useEffect(() => {
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

  useEffect(() => {
    if (showSubmitButton && currentIndex + 1 === totalQuestions && currentIndex === totalQuestions - 1) {
      // Si es la última pregunta y se debe mostrar el botón "Subir respuestas"
      setDatosUltimaEstrella({ id, stars: totalRating });
    }
  }, [showSubmitButton, currentIndex, totalQuestions, id, totalRating]);

  return (
    <Card className="py-4">
      <div className="ml-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-2xl">Formulario de colaboracion</h4>
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
                  <div className="flex mt-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <span
                        key={value}
                        className={`star text-3xl cursor-pointer ${
                          value <= totalRating ? "animate-bounce" : ""
                        } ${
                          value <= totalRating ? "text-yellow-500" : "text-gray-300"
                        }`}
                        onClick={() => handleRating(value)}
                      >
                        ★
                      </span>
                    ))}
                    <Button color="" onClick={handleSave}>
                      <MdOutlineSendAndArchive className="text-lg hover:text-green-500" />
                    </Button>
                  </div>
                  <p>Total de estrellas seleccionadas: {totalRating} </p>
                  {(showSubmitButton && currentIndex + 1 === totalQuestions && currentIndex === totalQuestions - 1) && (
                    <div className="flex justify-center mt-4">
                      <Button color="success" onClick={() => onSubmitButtonClick(datosUltimaEstrella)}>
                        Subir respuestas
                      </Button>
                    </div>
                  )}
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
