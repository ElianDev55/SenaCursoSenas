import { createContext } from "react";
import {useFetchDiscussion,useSendDataDisscussion} from "../Hooks/CrudDiscussion";

const DiscussionContext = createContext(null);

const DiscussionProvider = ({ children }) => {
    
    
    const [discussion, setDiscussion] = useFetchDiscussion ("http://127.0.0.1:8000/discussion/");

    
    const { sent, handleSubmit } = useSendDataDisscussion(); // Importa y utiliza el hook aquí

  // Define una función que los componentes puedan usar para enviar datos a la API
  const sendVideoData = async (data) => {
    await handleSubmit(data);
  };
    
  return (
    <DiscussionContext.Provider value={{discussion,sendVideoData,sent}}>
      {children}
    </DiscussionContext.Provider>
  );
};

export { DiscussionContext, DiscussionProvider };
