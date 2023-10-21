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


    // what do i render , comments or videos

    const [render, setRender] = useState('videos');

    const  changetoVideos = () => {
        setRender('videos');
    }

    const  changetoComments = () => {
        setRender('comments');
        
    }

    // Get info discussion

    const [infoDiscussion, setInfoDiscussion] = useState({});

    const GetInfoDiscussion = (data) => {
        setInfoDiscussion(data);
    }



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
            render,
            changetoVideos,
            changetoComments,
            infoDiscussion,
            GetInfoDiscussion
        }}>
            {children}
        </ContextVideos.Provider>
    )
}