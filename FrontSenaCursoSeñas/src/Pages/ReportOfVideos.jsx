import React, { useEffect, useContext, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { VideosContext } from "../Context/ContextVideos";
import { CollaborationAnswersContext } from "../Context/ContextCollaborationAnswers";
import { ModalOfReport } from '../Components/ModalOfReport';

export function ReportOfVideos() {
  const contextVideo = useContext(VideosContext);
  const videos = contextVideo.videos;

  const contextCollaborationAnswer = useContext(CollaborationAnswersContext);
  const collaborationAnswers = contextCollaborationAnswer.collaborationAnswer;

  const [videosForValue, setVideosForValue] = useState([]);

  useEffect(() => {
    if (videos && collaborationAnswers) {
      const filteredData = videos.map((video) => {
        const collaborationAnswer = collaborationAnswers.find((answer) => answer.IdVideo === video.idvideo);

        

        if (collaborationAnswer && collaborationAnswer.State) {
          const totalPoints = 25;
          const earnedPoints =
            parseInt(collaborationAnswer.QuestionOne) +
            parseInt(collaborationAnswer.QuestionTwo) +
            parseInt(collaborationAnswer.QuestionThree) +
            parseInt(collaborationAnswer.QuestionFour) +
            parseInt(collaborationAnswer.QuestionFive);

          const percentage = (earnedPoints / totalPoints) * 100;

          let description = "No hay puntaje";
          if (earnedPoints <= 5) {
            description = "NO SUBIR";
          } else if (percentage === 100) {
            description = "Listo para subir";
          } else if (percentage >= 75) {
            description = "Excelente";
          } else if (percentage >= 50) {
            description = "Revisión del admin";
          } else if (percentage >= 30) {
            description = "Revisión total";
          } else if (percentage >= 10) {
            description = "NO SUBIR";
          }
          return {
            idvideo: video.idvideo,
            title: video.title,
            score: `${collaborationAnswer.QuestionOne}/${collaborationAnswer.QuestionTwo}/${collaborationAnswer.QuestionThree}/${collaborationAnswer.QuestionFour}/${collaborationAnswer.QuestionFive}`,
            percentage: percentage === 100 ? "100.00%" : percentage.toFixed(2) + "%",
            description: getDescriptionWithEmoji(description),
            idquestion: collaborationAnswer.IdCollaborationAnswer, // Asegúrate de que esta propiedad sea válida
          };
          
        } else {
          return null; // Retorna null para indicar que no debe incluirse en filteredData
        }
      }).filter(item => item !== null); // Filtra los elementos que son null

      setVideosForValue(filteredData);
    }
  }, [videos, collaborationAnswers]);



  function getDescriptionWithEmoji(description) {
    switch (description) {
      case "NO SUBIR":
        return `${description} 😡`;
      case "Listo para subir":
        return `${description} 😊`;
      case "Excelente":
        return `${description} 👍`;
      case "Revisión del admin":
        return `${description} 🕵️`;
      case "Revisión total":
        return `${description} 🔍`;
      default:
        return description;
    }
  }
  



  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold text-center text-green-500 mb-10 mt-16">
        Resultados de las encuestas
      </h1>

      <Table isStriped aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Nombre video</TableColumn>
          <TableColumn>Puntaje</TableColumn>
          <TableColumn>Porcentaje</TableColumn>
          <TableColumn>Descripción</TableColumn>
          <TableColumn>Subir</TableColumn>
        </TableHeader>
        <TableBody>
          {videosForValue.map((item) => (
            <TableRow key={item.idvideo}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.score}</TableCell>
              <TableCell>{item.percentage === "N/A" ? item.percentage : `${item.percentage}`}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell> <ModalOfReport videoId={item.idvideo} collaborationAnswerId={item.idquestion} /> </TableCell>

        
            </TableRow>
            
            
            
          ))}
        </TableBody>
      </Table>
      
    </div>
  );
}
