// src/App.js
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { CardColla } from "../Components/ComponentCrudCollaborationQuestions/CardColla";
import axios from "axios";

export function CollaborationQuestions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState([]);

  const handleNextQuestion = () => {
    // Verificar si hay preguntas disponibles
    if (questions.length > 0) {
      const nextIndex = (currentIndex + 1) % questions.length;
      setCurrentIndex(nextIndex);
    }
  };

  useEffect(() => {
    // Obtener datos de la API
    axios
      .get("http://127.0.0.1:8000/CollaborationQuestions/")
      .then((response) => {
        const data = response.data;

        // Sobrescribir todas las propiedades 'title' en apiData
        const transformedQuestions = data.map((questionData, index) => ({
          id: index + 1, // Asumiendo que el índice base es 1 (como en apiData)
          title: questionData.QuestionOne,
        }));

        setQuestions(transformedQuestions);
        setCurrentIndex(0); // Iniciar desde la primera pregunta
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API", error);
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row mt-8">
      {/* Video en la izquierda (arriba en dispositivos pequeños) */}
      <div className="md:w-1/2 md:pr-4">
        {/* Aquí puedes insertar tu componente de video local */}
        <video className="w-full" height="315" controls>
          <source src="http://127.0.0.1:8000/media/videos/bogota.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>

      {/* Tarjeta a la derecha (abajo en dispositivos pequeños) */}
      <div className="md:w-1/2 md:pl-4">
        {questions.length > 0 && (
          <>
            <CardColla {...questions[currentIndex]} />
            <Button variant="contained" color="success" onClick={handleNextQuestion}>
              Siguiente
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
