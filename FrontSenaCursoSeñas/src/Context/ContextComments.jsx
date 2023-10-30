import { createContext } from "react";
import {useFetchComments,useSendDataComments,useDeleteComments,usePutComments,useSearchComments} from "../Hooks/CrudComments";

export const CommentsContext = createContext();


export const CommentsProvider = ({children}) => {
    
    
    //Get information from api/hook
    const [comments] = useFetchComments("http://127.0.0.1:8000/comment/");
    
    
    //Post info api
    const { sent, handleSubmit } = useSendDataComments(); 

    const sendCommentsData = async (data) => {
        await handleSubmit(data);
        window.location.reload();
    };


    // Put info api
    const { updated, handleUpdate } = useDeleteComments();
    
    const updateCommentsData = async (videoId, updatedData) => {
        await handleUpdate(videoId, updatedData);
    }


    //Delete info api
    const { deleted, handleDelete } = usePutComments();
    
    const deleteCommentsData = async (videoId) => {
        await handleDelete(videoId);
    }


 // Seach info api
    const { searchTerm, setSearchTerm, searchResults } = useSearchComments('');
    
    const SeachCommentsData = async (searchTerm) => {
        await setSearchTerm(searchTerm);
    }
    

    return (
        <CommentsContext.Provider value={{ 
            //GET
            comments, 
            //-----
            //Post
            sendCommentsData, 
            sent, 
            //-----
            //Put
            updateCommentsData,
            updated, 
            //-----
            //Delete
            deleteCommentsData,
            deleted,
            //-----
            //Search
            searchTerm,
            SeachCommentsData,
            searchResults,
            //-----
            }}>
                {children}
        </CommentsContext.Provider>
        );
    };
    