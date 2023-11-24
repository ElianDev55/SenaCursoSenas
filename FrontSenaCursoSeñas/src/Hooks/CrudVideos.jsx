import { useState, useEffect } from "react";
import axios from "axios";

const useFetchVideos = (url) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    let list = []
    axios.get(url).then((response) => {
      setVideos(response.data);
      list.push(response.data);
      setVideos(list);
    });
  }, [url]);
 
  
 

  return videos;
};

const useSendDataVideos = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (data) => {
    setSent(true);

    try {
      await axios.post("http://127.0.0.1:8000/videos/", data);
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


const usePutVideos = () => {
  const [updated, setUpdated] = useState(false);

  const handleUpdate = async (videoId, updatedData) => {
    setUpdated(true);

    try {
      await axios.patch(`http://127.0.0.1:8000/videos/${videoId}/`, updatedData);
      console.log(updatedData);

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




const useDeleteVideos = () => {
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async (videoId) => {
    setDeleted(true);
    console.log(videoId);
    try {
      await axios.delete(`http://127.0.0.1:8000/videos/${videoId}`);
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

const useVideoById = () => {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVideoById = async (videoId) => {
    setLoading(true);

    try {
      const response = await axios.get(`http://localhost:8000/videos/${videoId}`);
      setVideo(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return {
    video,
    loading,
    error,
    fetchVideoById,
  };
};


function useSearchVideos(initialSearchTerm = '') {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [allVideos, setAllVideos] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/videos');
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

export {useFetchVideos,useSendDataVideos,useDeleteVideos,usePutVideos,useSearchVideos,useVideoById};
