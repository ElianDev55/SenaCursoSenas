
import { createContext } from "react";
import {useFetchDetailCategory} from "../Hooks/GetApiDetailCategory";
import {useFetcahVidosOfCategory} from "../Hooks/GetApiDetailCategory";

const DetailCategoryContext = createContext(null);

const DetailCategoryProvider = ({ children }) => {
    
    
    const [detailCategory] = useFetchDetailCategory("http://127.0.0.1:8000/categories/1/");
    const [videosOfCategory] = useFetcahVidosOfCategory("http://127.0.0.1:8000/categoryvideos/3/")
  

  return (
    <DetailCategoryContext.Provider value={{detailCategory,videosOfCategory}}>
      {children}
    </DetailCategoryContext.Provider>
  );
};

export { DetailCategoryContext, DetailCategoryProvider };