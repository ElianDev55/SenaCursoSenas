
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchNovelties = (url) => {
    const [novelties, setNovelties] = useState([]);
    
    useEffect(() => {
    let list = []
    axios.get(url).then((response) => {
        setNovelties(response.data);
        list.push(response.data);
        setNovelties(list);
    });
}, [url]);


return novelties;


};

const useSendDataNovelties = () => {
    const [sent, setSent] = useState(false);

    const handleSubmit = async (data) => {
    setSent(true);

    try {
        await axios.post("http://127.0.0.1:8000/novelties/", data);
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


const usePutNovelties = () => {
    const [updated, setUpdated] = useState(false);

    const handleUpdate = async (videoId, updatedData) => {
    setUpdated(true);

    try {
        await axios.put(`http://127.0.0.1:8000/novelties/${videoId}`, updatedData);
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




const useDeleteNovelties = () => {
    const [deleted, setDeleted] = useState(false);

    const handleDelete = async (videoId) => {
    setDeleted(true);
    console.log(videoId);
    try {
        await axios.delete(`http://127.0.0.1:8000/novelties/${videoId}`);
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




export {useFetchNovelties,useSendDataNovelties,useDeleteNovelties,usePutNovelties};
