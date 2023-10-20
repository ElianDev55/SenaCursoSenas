import { createContext } from "react";
import { useState } from "react";
export const ContextVideos = createContext();


export const ContextVideosProvider = ({children}) => {
    

    //OPEN AND CLOSE MODAL
    const [isOpenVideoModal, setIsOpenVideoModal] = useState(false); 
    
    const OpenModalVideos = () => {
        setIsOpenVideoModal(true);
    }

    const CloseModalVideos = () => {
        setIsOpenVideoModal(false);
    }
    // -----------------------------

    // Get Info Video
    const [infoVideo, setInfoVideo] = useState({});
    
    const GetInfoVideo = (data) => {
        setInfoVideo(data);
    }

    // -----------------------------

    //Change State of Modal fo size

    const [backdrop, setBackdrop] = useState('opaque');
    const [size, setSize] = useState('md')

    const handleOpen = (backdrop,size) => {
        setBackdrop(backdrop);
        setSize(size)
        
      };

    // -----------------------------



    return (
        <ContextVideos.Provider value={{
            isOpenVideoModal,
            OpenModalVideos,
            CloseModalVideos,
            GetInfoVideo,
            infoVideo,
            handleOpen,
            backdrop,
            size,
        }}>
            {children}
        </ContextVideos.Provider>
    )
}