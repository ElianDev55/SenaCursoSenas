import { createContext } from "react";
import {useFetchVideos,useSendDataVideos,useDeleteVideos,usePutVideos,useSearchVideos} from "../Hooks/CrudVideos";

export const VideosContext = createContext();


export const VideosProvider = ({children}) => {
    

    //Get information from api/hook
    const [videos] = useFetchVideos("http://127.0.0.1:8000/videos/");
    
    
    //Post info api
    const { sent, handleSubmit } = useSendDataVideos(); 

    const sendVideosData = async (data) => {
        await handleSubmit(data);
        window.location.reload();
    };


    // Put info api
    const { updated, handleUpdate } = usePutVideos();
    
    const updateVideosData = async (videoId, updatedData) => {
        await handleUpdate(videoId, updatedData);
        window.location.reload();
    }


    //Delete info api
    const { deleted, handleDelete } = useDeleteVideos();
    
    const deleteVideosData = async (videoId) => {
        await handleDelete(videoId);
    }


 // Seach info api
    const { searchTerm, setSearchTerm, searchResults } = useSearchVideos('');
    
    const SeachVideosData = async (searchTerm) => {
        await setSearchTerm(searchTerm);
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
            }}>
                {children}
        </VideosContext.Provider>
        );
    };
    