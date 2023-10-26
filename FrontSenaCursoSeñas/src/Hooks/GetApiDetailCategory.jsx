import { useState, useEffect } from "react";
import axios from "axios";

const useFetchDetailCategory = (url) => {
  const [detailCategory, setDetailCategoty] = useState([]);

  useEffect(() => {
    let list = []
    axios.get(url).then((response) => {
      setDetailCategoty(response.data);
      list.push(response.data);
      setDetailCategoty(list);
    });
  }, [url]);
 


  return detailCategory;
};



const useFetcahVidosOfCategory = (url) => {
  const [videosOfCategory, setVidosOfCategoty] = useState([]);

  useEffect(() => {
    let list = []
    axios.get(url).then((response) => {
      setVidosOfCategoty(response.data);
      list.push(response.data);
      setVidosOfCategoty(list);
    });
  }, [url]);
 


  return videosOfCategory;
};



export {useFetchDetailCategory,useFetcahVidosOfCategory};