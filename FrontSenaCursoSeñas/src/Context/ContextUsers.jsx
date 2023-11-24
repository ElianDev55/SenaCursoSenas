import { createContext } from "react";
import {useFetchUsers,useSendDataUsers,useDeleteUsers,usePutUsers,useUserById} from "../Hooks/CrudUsers";

export const UsersContext = createContext();


export const UsersProvider = ({children}) => {
    

    //Get information from api/hook
    const [users] = useFetchUsers("http://127.0.0.1:8000/users/");
    
    
    //Post info api
    const { sent, handleSubmit } = useSendDataUsers(); 

    const sendUsersData = async (data) => {
        await handleSubmit(data);
        window.location.reload();
    };


    // Put info api
    const { updated, handleUpdate } = useDeleteUsers();
    
    const updateUsersData = async (videoId, updatedData) => {
        await handleUpdate(videoId, updatedData);
    }


    //Delete info api
    const { deleted, handleDelete } = usePutUsers();
    
    const deleteUsersData = async (videoId) => {
        await handleDelete(videoId);
    }

     // Seach info api by id
     const {user,loading,error,fetchUserById,} = useUserById()

     const fetchUserData = async (userid) => {
         
         await fetchUserById(userid);
         
 
     }
 

    

    return (
        <UsersContext.Provider value={{ 
            //GET
            users, 
            //-----
            //Post
            sendUsersData, 
            sent, 
            //-----
            //Put
            updateUsersData,
            updated, 
            //-----
            //Delete
            deleteUsersData,
            deleted,
            //-----
            //Search by id
            user,
            loading,
            error,
            fetchUserData,
            //-----
        
            }}>
                {children}
        </UsersContext.Provider>
        );
    };
    