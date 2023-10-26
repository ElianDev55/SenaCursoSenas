import { useState, useEffect } from "react";
import axios from "axios";

const useFetchUser = (url) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let list = []
    axios.get(url).then((response) => {
      setUsers(response.data);
      list.push(response.data);
      setUsers(list);
    });
  }, [url]);
 
  
 

  return users;
};


const useFetcOnehUser = (url) => {
  const [userinfo, setUser] = useState([]);

  useEffect(() => {
    let list = []
    axios.get(url).then((response) => {
      setUser(response.data);
      list.push(response.data);
      setUser(list);
    });
  }, [url]);
 
  
 

  return userinfo;
};


export {useFetchUser, useFetcOnehUser  };