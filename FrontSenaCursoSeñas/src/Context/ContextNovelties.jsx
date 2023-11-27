import { createContext } from "react";
import {useFetchNovelties,useSendDataNovelties,useDeleteNovelties,usePutNovelties} from "../Hooks/CrudNovelties";

export const NoveltiesContext = createContext();


export const NolveltiesProvider = ({children}) => {
    

    //Get information from api/hook
    const [novelties] = useFetchNovelties("http://127.0.0.1:8000/novelties/");
    
    
    //Post info api
    const { sent, handleSubmit } = useSendDataNovelties(); 

    const sendNoveltiesData = async (data) => {
        await handleSubmit(data);
        window.location.reload();
    };


    // Put info api
    const { updated, handleUpdate } = useDeleteNovelties();
    
    const updateNoveltiessData = async (videoId, updatedData) => {
        await handleUpdate(videoId, updatedData);
    }


    //Delete info api
    const { deleted, handleDelete } = usePutNovelties();
    
    const deleteNoveltiesData = async (videoId) => {
        await handleDelete(videoId);
    }


    

    return (
        <NoveltiesContext.Provider value={{ 
            //GET
            novelties, 
            //-----
            //Post
            sendNoveltiesData, 
            sent, 
            //-----
            //Put
            updateNoveltiessData,
            updated, 
            //-----
            //Delete
            deleteNoveltiesData,
            deleted,
            //-----
            }}>
                {children}
        </NoveltiesContext.Provider>
        );
    };
    