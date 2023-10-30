import { createContext } from "react";
import {useFetchDiscussion,useSendDataDiscussion,useDeleteDiscussion,usePutDiscussion,useSearchDiscussion} from "../Hooks/CrudDiscussions";

export const DiscussionsContext = createContext();


export const DiscussionsProvider = ({children}) => {
    
    
    //Get information from api/hook
    const [discussion] = useFetchDiscussion("http://127.0.0.1:8000/discussion/");
    
    
    //Post info api
    const { sent, handleSubmit } = useSendDataDiscussion(); 

    const sendDiscussionsData = async (data) => {
        await handleSubmit(data);
        window.location.reload();
    };


    // Put info api
    const { updated, handleUpdate } = useDeleteDiscussion();
    
    const updateDiscussionsData = async (videoId, updatedData) => {
        await handleUpdate(videoId, updatedData);
    }


    //Delete info api
    const { deleted, handleDelete } = usePutDiscussion();
    
    const deleteDiscussionsData = async (videoId) => {
        await handleDelete(videoId);
    }


 // Seach info api
    const { searchTerm, setSearchTerm, searchResults } = useSearchDiscussion('');
    
    const SeachDiscussionsData = async (searchTerm) => {
        await setSearchTerm(searchTerm);
    }
    

    return (
        <DiscussionsContext.Provider value={{ 
            //GET
            discussion, 
            //-----
            //Post
            sendDiscussionsData, 
            sent, 
            //-----
            //Put
            updateDiscussionsData,
            updated, 
            //-----
            //Delete
            deleteDiscussionsData,
            deleted,
            //-----
            //Search
            searchTerm,
            SeachDiscussionsData,
            searchResults,
            //-----
            }}>
                {children}
        </DiscussionsContext.Provider>
        );
    };
    