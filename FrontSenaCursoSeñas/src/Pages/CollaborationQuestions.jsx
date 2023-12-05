// CollaborationQuestions.jsx
import React, { useState, useEffect, useContext } from "react";
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

  const apiData = React.useMemo(() => {
    return [
      { id: 1, title: data[0]?.QuestionOne },
      { id: 2, title: data[0]?.QuestionTwo },
      { id: 3, title: data[0]?.QuestionThree },
      { id: 4, title: data[0]?.QuestionFour },
      { id: 5, title: data[0]?.QuestionFive },
    ];
  }, [data, currentIndex]);

  const currentCard = apiData[currentIndex];
  const [totalRating, setTotalRating] = useState(0);

  const handleNextCard = () => {
    if (currentIndex + 1 < apiData.length) {
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
  };

  return (
    <div className="flex flex-col md:flex-row mt-4 justify-center items-center">
      <div className="md:w-1/2 md:pl-4 flex flex-col items-center md:items-end">
        <CardColla
          {...currentCard}
          apiData={apiData}  // Agregado para pasar apiData como prop
          onSave={(params) => {
            handleSaveResponse(params);
            // Reiniciar el estado de las estrellas después de guardar
            setTotalRating(0);
          }}
          onVideoChange={handleVideoChange}
          showSubmitButton={!apiData[currentIndex + 1]}
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
