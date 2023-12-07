import { createContext } from "react";
import {useFetchCollaborationAnswer,useSendCollaborationAnswer,useDeleteCollaborationAnswer,usePutCollaborationAnswer} from "../Hooks/CrudCollaborationAnswers";

export const CollaborationAnswersContext = createContext();


export const CollaborationAnswersProvider = ({children}) => {
    

    //Get information from api/hook
    const [collaborationAnswer] = useFetchCollaborationAnswer("http://localhost:8000/CollaborationAnswer/");
    
    
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
         
            //-----
            }}>
                {children}
        </CollaborationAnswersContext.Provider>
        );
    };
    