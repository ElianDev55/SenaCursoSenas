import { createContext } from "react";
import { useState } from "react";

const ModalContext = createContext(null);

const ModalProvider = ({ children }) => {
    


    //OPEN AND CLOSE MODAL
    const [isOpenVideoModal, setIsOpenVideoModal] = useState(false); 
    
    const OpenModalVideos = () => {
        setIsOpenVideoModal(true);
    }

    const CloseModalVideos = () => {
        setIsOpenVideoModal(false);
    }
    // -----------------------------

    
       // -----------------------------

    //Change State of Modal fo size

    const [backdrop, setBackdrop] = useState('opaque');
    const [size, setSize] = useState('md')

    const handleOpen = (backdrop,size) => {
        setBackdrop(backdrop);
        setSize(size)
        };

    // -----------------------------

    // Get Info Video
    const [infoVideo, setInfoVideo] = useState({});

    const GetInfoVideo = (data) => {
        setInfoVideo(data);
        }

    // -----------------------------

    const [render, setRender] = useState('videos');

    const  changetoVideos = () => {
        setRender('videos');
    }

    const  changetoComments = () => {
        setRender('comments');
        
    }

    return (
    <ModalContext.Provider value={{
        isOpenVideoModal,
        OpenModalVideos,
        backdrop,
        size,
        handleOpen,
        CloseModalVideos,
        GetInfoVideo,
        infoVideo,
        changetoVideos,
        changetoComments,
        render

        
    }}>
        {children}
    </ModalContext.Provider>
    );
};

export { ModalContext, ModalProvider };