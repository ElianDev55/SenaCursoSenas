import React, { useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export function ModalOfReport({ videoId, collaborationAnswerId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const size = "md";

  const handleOpen = () => {
    onOpen();
  };

  const handlePatchVideoAndCollaborationAnswer = async () => {
    try {
      setLoading(true);

      // Realiza la solicitud PATCH para el video con Axios
      const videoResponse = await axios.patch(
        `http://localhost:8000/videos/${videoId}/`, // URL de la API para el video
        {
          test: false,
        }
      );

      // Realiza la solicitud PATCH para la colaboración con Axios
      const collaborationResponse = await axios.patch(
        `http://localhost:8000/CollaborationAnswer/${collaborationAnswerId}/`, // URL de la API para la colaboración
        {
          State: false,
        }
      );

      // Puedes manejar las respuestas aquí si es necesario
      console.log(videoResponse.data);
      console.log(collaborationResponse.data);

      // Cierra el modal después de la operación exitosa
      onClose();
      window.location.reload();
    } catch (error) {
      // Maneja errores aquí
      console.error("Error al realizar las solicitudes PATCH:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button color="" key={size} onPress={() => handleOpen()}>
          Subir video
        </Button>
      </div>
      <Modal size={size} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Alerta</ModalHeader>
              <ModalBody>
                <p>Esta seguro que desea subir el video al publico?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handlePatchVideoAndCollaborationAnswer} loading={loading}>
                  Subir Video
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
