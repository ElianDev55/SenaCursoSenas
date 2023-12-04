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


  // Utiliza useMemo para calcular apiData solo cuando cambie data o currentIndex
  const apiData = React.useMemo(() => {
    return [
      { id: 1, title: data[0]?.QuestionOne   },
      { id: 2, title: data[0]?.QuestionTwo },
      { id: 3, title: data[0]?.QuestionThree },
      { id: 4, title: data[0]?.QuestionFour },
      { id: 5, title: data[0]?.QuestionFive },
    ];
  }, [data, currentIndex]);

  const currentCard = apiData[currentIndex];

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % apiData.length);
  };

  return (
    <div className="flex flex-col md:flex-row mt-4 justify-center items-center">
      <div className="md:w-1/2 md:pl-4 flex flex-col items-center md:items-end">
        <CardColla {...currentCard} />
      </div>
      <div className="mt-4 md:mt-0 md:pl-4 flex justify-center md:justify-end">
      <Button color="" onClick={handleNextCard} className="animated rotateIn">
      <GrLinkNext className="mr-2 text-green-500 text-lg" />
    </Button>
      </div>
    </div>
  );
}
