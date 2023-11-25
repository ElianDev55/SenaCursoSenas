import { createContext } from "react";
import {useFetchDiscussion,useSendDataDiscussion,useDeleteDiscussion,usePutDiscussion} from "../Hooks/CrudDiscussions";
import {useDisclosure} from "@nextui-org/react";

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
    const { updated, handleUpdate } = usePutDiscussion();
    
    const updateDiscussionsData = async (videoId, updatedData) => {
        await handleUpdate(videoId, updatedData);
    }


    //Delete info api
    const { deleted, handleDelete } = useDeleteDiscussion ();
    
    const deleteDiscussionsData = async (videoId) => {
        console.log(videoId);
        await handleDelete(videoId);
    }


       // Seach info api by id
       



       const {isOpen, onOpen, onClose} = useDisclosure();
    
       const handleOpen = () => {
           console.log("hola");
           onOpen();
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
            //modal
            isOpen,
            handleOpen,
            onClose,
       
            }}>
                {children}
        </DiscussionsContext.Provider>
        );
    };
    