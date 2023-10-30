import { createContext } from "react";
import {useFetchCategories,useSendDataCategories,useDeleteCategories,usePutCategories,useSearchCategories} from "../Hooks/CrudCategories";

export const CategoriesContext = createContext();


export const RolesProvider = ({children}) => {
    

    //Get information from api/hook
    const [categories] = useFetchCategories("http://127.0.0.1:8000/categories/");
    
    
    //Post info api
    const { sent, handleSubmit } = useSendDataCategories(); 

    const sendCategoriesData = async (data) => {
        await handleSubmit(data);
        window.location.reload();
    };


    // Put info api
    const { updated, handleUpdate } = useDeleteCategories();
    
    const updateCategoriesData = async (videoId, updatedData) => {
        await handleUpdate(videoId, updatedData);
    }


    //Delete info api
    const { deleted, handleDelete } = usePutCategories();
    
    const deleteCategoriesData = async (videoId) => {
        await handleDelete(videoId);
    }


 // Seach info api
    const { searchTerm, setSearchTerm, searchResults } = useSearchCategories('');
    
    const SeachCategoriesData = async (searchTerm) => {
        await setSearchTerm(searchTerm);
    }
    

    return (
        <CategoriesContext.Provider value={{ 
            //GET
            categories, 
            //-----
            //Post
            sendCategoriesData, 
            sent, 
            //-----
            //Put
            updateCategoriesData,
            updated, 
            //-----
            //Delete
            deleteCategoriesData,
            deleted,
            //-----
            //Search
            searchTerm,
            SeachCategoriesData,
            searchResults,
            //-----
            }}>
                {children}
        </CategoriesContext.Provider>
        );
    };
    