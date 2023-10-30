import { createContext } from "react";
import {useFetchCollaborationAnswer,useSendCollaborationAnswer,useDeleteCollaborationAnswer,usePutCollaborationAnswer,useSearchCollaborationAnswer} from "../Hooks/CrudCollaborationAnswers";

export const CollaborationAnswersContext = createContext();


export const CollaborationAnswersProvider = ({children}) => {
    

    //Get information from api/hook
    const [collaborationAnswer] = useFetchCollaborationAnswer("http://127.0.0.1:8000/collaborationAnswer/");
    
    
    //Post info api
    const { sent, handleSubmit } = useSendCollaborationAnswer(); 

    const sendCollaborationAnswersData = async (data) => {
        await handleSubmit(data);
        window.location.reload();
    };


    // Put info api
    const { updated, handleUpdate } = usePutCollaborationAnswer();
    
    const updateCollaborationAnswersData = async (videoId, updatedData) => {
        await handleUpdate(videoId, updatedData);
    }


    //Delete info api
    const { deleted, handleDelete } = useDeleteCollaborationAnswer();
    
    const deleteCollaborationAnswersData = async (videoId) => {
        await handleDelete(videoId);
    }


 // Seach info api
    const { searchTerm, setSearchTerm, searchResults } =useSearchCollaborationAnswer('');
    
    const SeachCollaborationAnswersData = async (searchTerm) => {
        await setSearchTerm(searchTerm);
    }
    

    return (
        <CollaborationAnswersContext.Provider value={{ 
            //GET
            collaborationAnswer, 
            //-----
            //Post
            sendCollaborationAnswersData, 
            sent, 
            //-----
            //Put
            updateCollaborationAnswersData,
            updated, 
            //-----
            //Delete
            deleteCollaborationAnswersData,
            deleted,
            //-----
            //Search
            searchTerm,
            SeachCollaborationAnswersData,
            searchResults,
            //-----
            }}>
                {children}
        </CollaborationAnswersContext.Provider>
        );
    };
    