import { createContext } from "react";
import {useFetchComments,useSendDataComments,useDeleteComments,usePutComments,useForoCommentsById} from "../Hooks/CrudComments";

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
    const { updated, handleUpdate } = usePutComments();
    
    const updateCommentsData = async (videoId, updatedData) => {
        await handleUpdate(videoId, updatedData);
    }


    //Delete info api
    const { deleted, handleDelete } = useDeleteComments(); 
    
    const deleteCommentsData = async (videoId) => {
        await handleDelete(videoId);
    }


        // Seach info api by id

        const {  comment,loading,error,fetchCommentById,} = useForoCommentsById()

        const fetchCommentData = async (videoId) => {
            
            await fetchCommentById(videoId);
            
    
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
            //By id
            comment,
            loading,
            error,
            fetchCommentData,
            }}>
                {children}
        </CommentsContext.Provider>
        );
    };
    