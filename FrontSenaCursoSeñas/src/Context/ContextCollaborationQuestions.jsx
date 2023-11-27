import { createContext } from "react";
import {useFetchCollaborationQuestions,useSendCollaborationQuestions,useDeleteCollaborationQuestions,usePutCollaborationQuestions} from "../Hooks/CrudCollaborationQuestions";

export const CollaborationQuestionsContext = createContext();


export const CollaborationQuestionsProvider = ({children}) => {
    

    //Get information from api/hook
    const [collaborationQuestions] = useFetchCollaborationQuestions("http://127.0.0.1:8000/CollaborationQuestions/");
   
    
    //Post info api
    const { sent, handleSubmit } = useSendCollaborationQuestions(); 

    const sendCollaborationQuestionsData = async (data) => {
        await handleSubmit(data);
        window.location.reload();
    };


    // Put info api
    const { updated, handleUpdate } = useDeleteCollaborationQuestions();
    
    const updateCollaborationQuestionsData = async (videoId, updatedData) => {
        await handleUpdate(videoId, updatedData);
    }


    //Delete info api
    const { deleted, handleDelete } = usePutCollaborationQuestions();
    
    const deleteCollaborationQuestionsData = async (videoId) => {
        await handleDelete(videoId);
    }




    

    return (
        <CollaborationQuestionsContext.Provider value={{ 
            //GET
            collaborationQuestions, 
            //-----
            //Post
            sendCollaborationQuestionsData, 
            sent, 
            //-----
            //Put
            updateCollaborationQuestionsData,
            updated, 
            //-----
            //Delete
            deleteCollaborationQuestionsData,
            deleted,
            //-----

            }}>
                {children}
        </CollaborationQuestionsContext.Provider>
        );
    };
    