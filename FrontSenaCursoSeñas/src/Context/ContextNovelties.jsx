import { createContext } from "react";
import {useFetchNovelties,useSendDataNovelties,useDeleteNovelties,usePutNovelties,useSearchNovelties} from "../Hooks/CrudNovelties";

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


 // Seach info api
    const { searchTerm, setSearchTerm, searchResults } = useSearchNovelties('');
    
    const SeachNoveltiesData = async (searchTerm) => {
        await setSearchTerm(searchTerm);
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
            //Search
            searchTerm,
            SeachNoveltiesData,
            searchResults,
            //-----
            }}>
                {children}
        </NoveltiesContext.Provider>
        );
    };
    