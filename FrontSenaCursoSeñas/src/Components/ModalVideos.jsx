import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {AiFillEye} from "react-icons/ai";
import '../Styles/ModalVideos.css'

export function ModalVideos() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('opaque');

  const backdrops = ["blur"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {backdrops.map((b) => (
          <Button
            key={b}
            variant="flat"
            color="primary"
            variant="shadow"
            onClick={() => handleOpen(b)}
            className="capitalize"
          >
            <AiFillEye />
          </Button>
        ))}
      </div>
      <Modal
        maxwidth="90vw"
        minwidth="80%"
        className="mx-auto"
        placement="center"
        backdrop={backdrop}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Pop</ModalHeader>
              <ModalBody>
                <video
                  src="https://v3.cdnpk.net/videvo-files/video/free/2017-05/watermarked/170111_064_Tokyo_IlluminatedStreet_1080p_preview.mp4"
                  controls
                  width="100%"
                  height="100%"
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onClick={onClose}
                >
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}