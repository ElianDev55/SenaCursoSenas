import React, { useState, useContext, useMemo } from "react";
import { Button } from "@nextui-org/react";
import { CardColla } from "../Components/ComponentCrudCollaborationQuestions/CardColla";
import { CollaborationQuestionsContext } from "../Context/ContextCollaborationQuestions";
import { GrLinkNext } from "react-icons/gr";
import axios from "axios";
import 'animate.css';

export const CollaborationQuestions = () => {
  const [idVideoSeleccionado, setIdVideoSeleccionado] = useState(null);
  const context = useContext(CollaborationQuestionsContext);
  const data = context.collaborationQuestions || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [starData, setStarData] = useState([]);
  const totalQuestions = 5;

  const apiData = useMemo(() => {
    return [
      { id: 1, title: data[0]?.QuestionOne },
      { id: 2, title: data[0]?.QuestionTwo },
      { id: 3, title: data[0]?.QuestionThree },
      { id: 4, title: data[0]?.QuestionFour },
      { id: 5, title: data[0]?.QuestionFive },
    ];
  }, [data]);

  const currentCard = apiData[currentIndex];
  const [totalRating, setTotalRating] = useState(0);

  const handleNextCard = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      console.log("Ya has respondido todas las preguntas.");
    }
  };

  const handleSaveResponse = ({ id, estrellas }) => {
    setStarData((prevStarData) => [
      ...prevStarData,
      { id, estrellas }
    ]);
  };

  const handleVideoChange = () => {
    setStarData([]);
  };

  const handleSubirRespuestas = async ({ respuestas }) => {
    console.log("Respuestas guardadas:", respuestas);

    const idVideoSeleccionado = obtenerIdVideoSeleccionado();
    const idVideo = idVideoSeleccionado.replace(/^.*[\\/]/, '').replace(/\.[^/.]+$/, '');

    // Crear el objeto de respuestas con la estructura esperada por la API
    const answersPayload = {
      QuestionOne: (respuestas.find(item => item.id === 1)?.estrellas || 0).toString(),
      QuestionTwo: (respuestas.find(item => item.id === 2)?.estrellas || 0).toString(),
      QuestionThree: (respuestas.find(item => item.id === 3)?.estrellas || 0).toString(),
      QuestionFour: (respuestas.find(item => item.id === 4)?.estrellas || 0).toString(),
      QuestionFive: (respuestas.find(item => item.id === 5)?.estrellas || 0).toString(),
      State: true,
      IdVideo: 1,
      IdUser: "1104936885",
    };

    try {
      // Enviar los datos a la API
      const response = await axios.post("http://localhost:8000/CollaborationAnswer/", answersPayload);
      console.log("Respuestas enviadas con éxito:", response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error al enviar respuestas:", error);
      console.log("Respuestas enviadas:", answersPayload);
    }
  };

  const obtenerIdVideoSeleccionado = () => {
    return idVideoSeleccionado;
  };

  return (
    <div className="flex flex-col md:flex-row mt-4 justify-center items-center">
      <div className="md:w-1/2 md:pl-4 flex flex-col items-center md:items-end">
        <CardColla
          {...currentCard}
          apiData={apiData}
          totalQuestions={totalQuestions} 
          onSave={(params) => {
            handleSaveResponse(params);
            setTotalRating(0);
          }}
          onVideoChange={handleVideoChange}
          showSubmitButton={currentIndex + 1 === totalQuestions}
          onSubmitButtonClick={() => handleSubirRespuestas({ respuestas: starData })}
          totalRating={totalRating}
          setTotalRating={setTotalRating}
          idVideoSeleccionado={idVideoSeleccionado}
          setIdVideoSeleccionado={setIdVideoSeleccionado} // Pasa la función de actualización
        />
      </div>
      <div className="mt-4 md:mt-0 md:pl-4 flex justify-center md:justify-end">
        <Button color="" onClick={handleNextCard} className="animated rotateIn">
          <GrLinkNext className="mr-2 text-green-500 text-lg" />
        </Button>
      </div>
    </div>
  );
};


