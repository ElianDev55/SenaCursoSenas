import { createContext } from "react";
import {useFetchRoles,useSendDataRoles,useDeleteRoles,usePutRoles,useSearchRoles} from "../Hooks/CrudRoles";

export const RolesContext = createContext();


export const RolesProvider = ({children}) => {
    

    //Get information from api/hook
    const [roles] = useFetchRoles("http://127.0.0.1:8000/roles/");
    
    
    //Post info api
    const { sent, handleSubmit } = useSendDataRoles(); 

    const sendRolesData = async (data) => {
        await handleSubmit(data);
        window.location.reload();
    };


    // Put info api
    const { updated, handleUpdate } = useDeleteRoles();
    
    const updateRolesData = async (videoId, updatedData) => {
        await handleUpdate(videoId, updatedData);
    }


    //Delete info api
    const { deleted, handleDelete } = usePutRoles();
    
    const deleteRolesData = async (videoId) => {
        await handleDelete(videoId);
    }


 // Seach info api
    const { searchTerm, setSearchTerm, searchResults } = useSearchRoles('');
    
    const SeachRolesData = async (searchTerm) => {
        await setSearchTerm(searchTerm);
    }
    

    return (
        <RolesContext.Provider value={{ 
            //GET
            roles, 
            //-----
            //Post
            sendRolesData, 
            sent, 
            //-----
            //Put
            updateRolesData,
            updated, 
            //-----
            //Delete
            deleteRolesData,
            deleted,
            //-----
            //Search
            searchTerm,
            SeachRolesData,
            searchResults,
            //-----
            }}>
                {children}
        </RolesContext.Provider>
        );
    };
    