import { useState, useEffect } from "react";
import axios from "axios";

const useFetchDiscussion = (url) => {
  const [discussion, setDiscussion] = useState([]);

  useEffect(() => {
    let list = []
    axios.get(url).then((response) => {
      setDiscussion(response.data);
      list.push(response.data);
      setDiscussion(list);
    });
  }, [url]);
 
  
 

  return discussion;
};

const useSendDataDisscussion = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (data) => {
    setSent(true);

    try {
      await axios.post("http://127.0.0.1:8000/discussion/", data);
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



export  {useFetchDiscussion,useSendDataDisscussion};