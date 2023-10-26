import { createContext, useState, useEffect } from "react";
import { useFetchUser, useFetcOnehUser } from "../Hooks/CrudUsers";

const UsersContext = createContext(null);

const UsersProvider = ({ children }) => {
  const [users] = useFetchUser("http://127.0.0.1:8000/users/");
  const [userid, setuserid] = useState(1);
  const [userinfo, setUserInfo] = useState(null);

  // Función para obtener información del usuario según el id
  const fetchUserInfo = async (userId) => {
    try {
      const response = await useFetcOnehUser(`http://127.0.0.1:8000/users/${userId}`);
      setUserInfo(response);
    } catch (error) {
      console.error("Error al obtener la información del usuario", error);
    }
  };

  // Actualizar el valor de userid cuando cambie
  useEffect(() => {
    // Realizar la solicitud para obtener la información del usuario
    fetchUserInfo(userid);
  }, [userid]);

  return (
    <UsersContext.Provider value={{
      users,
      userinfo,
      userid,
      setuserid,
    }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
