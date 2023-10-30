
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchCollaborationAnswer = (url) => {
    const [collaborationAnswer, setCollaborationAnswer ] = useState([]);
    
    useEffect(() => {
    let list = []
    axios.get(url).then((response) => {
        setCollaborationAnswer (response.data);
        list.push(response.data);
        setCollaborationAnswer (list);
    });
}, [url]);


return collaborationAnswer;


};

const useSendCollaborationAnswer = () => {
    const [sent, setSent] = useState(false);

    const handleSubmit = async (data) => {
    setSent(true);

    try {
        await axios.post("http://127.0.0.1:8000/CollaborationAnswer/", data);
        setSent(false);
    } catch (error) {
        setSent(false);
        console.error('Hubo un problema al enviar los datos a la API:', error);
    }
    console.log(data);
};

    return {
    sent,
    handleSubmit,
};

};


const usePutCollaborationAnswer = () => {
    const [updated, setUpdated] = useState(false);

    const handleUpdate = async (videoId, updatedData) => {
    setUpdated(true);

    try {
        await axios.put(`http://127.0.0.1:8000/CollaborationAnswer/${videoId}`, updatedData);
        setUpdated(false);
    } catch (error) {
        setUpdated(false);
        console.error('Hubo un problema al actualizar los datos del video:', error);
    }
};

return {
    updated,
    handleUpdate,
};
};




const useDeleteCollaborationAnswer = () => {
    const [deleted, setDeleted] = useState(false);

    const handleDelete = async (videoId) => {
    setDeleted(true);
    console.log(videoId);
    try {
        await axios.delete(`http://127.0.0.1:8000/CollaborationAnswer/${videoId}`);
        setDeleted(false);
    } catch (error) {
        setDeleted(false);
        console.error('Hubo un problema al eliminar el video:', error);
    }
    };

return {
    deleted,
    handleDelete,
};
};



function useSearchCollaborationAnswer(initialSearchTerm = '') {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [allVideos, setAllVideos] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/CollaborationAnswer/');
        setAllVideos(response.data);
      } catch (error) {
        console.error('Error al obtener videos:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filtra los videos por título localmente
    const filteredVideos = allVideos.filter((video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredVideos);
  }, [searchTerm, allVideos]);

  

  return { searchTerm, setSearchTerm, searchResults };
}

export {useFetchCollaborationAnswer,useSendCollaborationAnswer,useDeleteCollaborationAnswer,usePutCollaborationAnswer,useSearchCollaborationAnswer};
