import { createContext } from "react";
import {useFetchVideos,useSendDataVideos,useDeleteVideos,usePutVideos,useSearchVideos,useVideoById} from "../Hooks/CrudVideos";
import {useDisclosure} from "@nextui-org/react";
import { useState } from "react";

export const VideosContext = createContext();


export const VideosProvider = ({children}) => {
    

    //Get information from api/hook
    const [videos] = useFetchVideos("http://127.0.0.1:8000/videos/");
    
    
    //Post info api
    const { sent, handleSubmit } = useSendDataVideos(); 

    const sendVideosData = async (data) => {
       console.log(data);
        await handleSubmit(data);
       
    };


    // Put info api
    const { updated, handleUpdate } = usePutVideos();
    
    const updateVideosData = async (videoId, updatedData) => {
        console.log(updatedData);
        await handleUpdate(videoId, updatedData);
    }


    //Delete info api
    const { deleted, handleDelete } = useDeleteVideos();
    
    const deleteVideosData = async (videoId) => {
        await handleDelete(videoId);
    }


    // Seach info api by id

    const { video,loading,error,fetchVideoById,} = useVideoById()

    const fetchVideoData = async (videoId) => {
        
        await fetchVideoById(videoId);
        

    }


 // Seach info api
    const { searchTerm, setSearchTerm, searchResults } = useSearchVideos('');
    
    const SeachVideosData = async (searchTerm) => {
        await setSearchTerm(searchTerm);
    }
    


    //Change State of Modal fo size



/* 
    const [backdrop, setBackdrop] = useState('opaque');
    const [size, setSize] = useState('md') */

    const {isOpen, onOpen, onClose} = useDisclosure();
    
    const handleOpen = () => {
        console.log("hola");
        onOpen();
      }
    


    return (
        <VideosContext.Provider value={{ 
            //GET
            videos, 
            //-----
            //Post
            sendVideosData, 
            sent, 
            //-----
            //Put
            updateVideosData,
            updated, 
            //-----
            //Delete
            deleteVideosData,
            deleted,
            //-----
            //Search
            searchTerm,
            SeachVideosData,
            searchResults,
            //-----
            //Modal
            isOpen,
            onClose,
            handleOpen,
            //-----
            //Get by id
            video,
            loading,
            error,
            fetchVideoData,
            //-----
            }}>
                {children}
        </VideosContext.Provider>
        );
    };
    