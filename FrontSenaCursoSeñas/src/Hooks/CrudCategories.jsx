import { useState, useEffect } from "react";
import axios from "axios";

const useFetchCategories = (url) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let list = []
    axios.get(url).then((response) => {
      setCategories(response.data);
      list.push(response.data);
      setCategories(list);
    });
  }, [url]);
 
  
 

  return categories;
};

const useSendDataCategories = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (data) => {
    setSent(true);

    try {
      await axios.post("http://127.0.0.1:8000/categories/", data);
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




const useDeleteCategories = () => {
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async (videoId) => {
    setDeleted(true);
    console.log(videoId);
    try {
      await axios.delete(`http://localhost:8000/categories/${videoId}`);
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

export {useFetchCategories,useSendDataCategories,useDeleteCategories};