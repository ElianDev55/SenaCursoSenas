import React, { useState, useContext, useMemo } from "react";
import { Button } from "@nextui-org/react";
import { CardColla } from "../Components/ComponentCrudCollaborationQuestions/CardColla";
import { CollaborationQuestionsContext } from "../Context/ContextCollaborationQuestions";
import { GrLinkNext } from "react-icons/gr";
import 'animate.css';

export function CollaborationQuestions() {
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

  const handleSaveResponse = ({ id, stars }) => {
    setStarData((prevStarData) => [
      ...prevStarData,
      { id, stars }
    ]);
  };

  const handleVideoChange = () => {
    setStarData([]);
  };

  const handleSubirRespuestas = () => {
    console.log("Datos de estrellas guardados:", starData);

    // Obtener la última entrada en starData
    const ultimaEntrada = starData[starData.length - 1];

    // Guardar los datos en una variable adicional si es necesario
    const datosUltimaEstrella = ultimaEntrada ? { id: ultimaEntrada.id, stars: ultimaEntrada.stars } : null;

    console.log("Datos de la última estrella:", datosUltimaEstrella);
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
          onSubmitButtonClick={handleSubirRespuestas}
          totalRating={totalRating}
          setTotalRating={setTotalRating}
        />
      </div>
      <div className="mt-4 md:mt-0 md:pl-4 flex justify-center md:justify-end">
        <Button color="" onClick={handleNextCard} className="animated rotateIn">
          <GrLinkNext className="mr-2 text-green-500 text-lg" />
        </Button>
      </div>
    </div>
  );
}
