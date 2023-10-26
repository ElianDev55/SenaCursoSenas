import { createContext } from "react";
import {useFetchCategories,useSendDataCategories,useDeleteCategories} from "../Hooks/CrudCategories";

const CategoriesContext = createContext(null);

const CategoriesProvider = ({ children }) => {
  
    const [categories] = useFetchCategories("http://localhost:8000/categories/");
  
  const { sent, handleSubmit } = useSendDataCategories(); // Importa y utiliza el hook aquí

  // Define una función que los componentes puedan usar para enviar datos a la API
  const sendVideoData = async (data) => {
    
    await handleSubmit(data);
  };



  const { deleted, handleDelete } = useDeleteCategories();

  const deleteCategoryData = async (videoId) => {
    await handleDelete(videoId);
  }

  return (
    <CategoriesContext.Provider value={{ 
      categories, 
      sendVideoData, 
      sent,
      deleteCategoryData,
      
      
      
      
      }}>
     
     
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesContext, CategoriesProvider };