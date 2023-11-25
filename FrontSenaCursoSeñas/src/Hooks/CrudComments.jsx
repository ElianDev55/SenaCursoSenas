
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchComments = (url) => {
    const [comments, setComments ] = useState([]);
    
    useEffect(() => {
    let list = []
    axios.get(url).then((response) => {
        setComments (response.data);
        list.push(response.data);
        setComments (list);
    });
}, [url]);


return comments;


};

const useSendDataComments = () => {
    const [sent, setSent] = useState(false);

    const handleSubmit = async (data) => {
    setSent(true);

    try {
        await axios.post("http://127.0.0.1:8000/comment/", data);
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


const usePutComments = () => {
    const [updated, setUpdated] = useState(false);

    const handleUpdate = async (videoId, updatedData) => {
    setUpdated(true);

    try {
        await axios.put(`http://127.0.0.1:8000/comment/${videoId}`, updatedData);
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

const useForoCommentsById = () => {
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCommentById = async (commentid) => {
    setLoading(true);

    try {
      const response = await axios.get(`http://127.0.0.1:8000/forocomments/${commentid}`);
      setComment(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return {
    comment,
    loading,
    error,
    fetchCommentById,
  };
};



const useDeleteComments = () => {
    const [deleted, setDeleted] = useState(false);

    const handleDelete = async (videoId) => {
    setDeleted(true);
    console.log(videoId);
    try {
        await axios.delete(`http://127.0.0.1:8000/comment/${videoId}`);
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





export {useFetchComments,useSendDataComments,useDeleteComments,usePutComments,useForoCommentsById};
