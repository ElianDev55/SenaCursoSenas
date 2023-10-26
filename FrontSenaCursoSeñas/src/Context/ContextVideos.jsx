import { createContext } from "react";
import { useFetchVideos, useSendDataVideos,usePutVideo,useDeleteVideo,useSearchVideos } from "../Hooks/CrudAllvideos";

const VideosContext = createContext(null);

const VideosProvider = ({ children }) => {
  
  //Get info api
  const [videos] = useFetchVideos("http://127.0.0.1:8000/videos/");
  
  //Post info api
  const { sent, handleSubmit } = useSendDataVideos(); 

  const sendVideoData = async (data) => {
    await handleSubmit(data);
    
      window.location.reload();
  
  
  };

  // Put info api

  const { updated, handleUpdate } = usePutVideo();

  const updateVideoData = async (videoId, updatedData) => {
    await handleUpdate(videoId, updatedData);
  }

  //Delete info api

  const { deleted, handleDelete } = useDeleteVideo();

  const deleteVideoData = async (videoId) => {
    await handleDelete(videoId);
  }

  // Seach info api

  const { searchTerm, setSearchTerm, searchResults } = useSearchVideos('');
  
  const SeachVideoData = async (searchTerm) => {
    await setSearchTerm(searchTerm);
  }
  

  return (
    <VideosContext.Provider value={{ 
      videos, 
      //-----
      sendVideoData, 
      sent, 
      //-----
      updateVideoData,
      updated, 
      //-----
      deleteVideoData,

      searchTerm,
      SeachVideoData,
      searchResults,


      
      }}>
      
      {children}
    </VideosContext.Provider>
  );
};

export { VideosContext, VideosProvider };