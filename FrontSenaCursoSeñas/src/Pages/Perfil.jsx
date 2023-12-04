import { ProfileImg } from '../Components/Profileimg';
import { ProfileINFO } from '../Components/ProfileInfo';
import { AditionalInfo } from '../Components/ProfileAdInfo';
import '../Styles/App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Perfil = () => {
  const [usuario, setUsuario] = useState(null);
  const [idUsuario, setIdUsuario] = useState(1104936885);

  useEffect(() => {
    const obtenerDatosPorId = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/users/${idUsuario}`);
        setUsuario(response.data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    obtenerDatosPorId();
  }, [idUsuario]);



  return (
    <>
      {usuario ? (
        <div className="flex flex-col sm:flex-row">
          <div className="flex sm:flex-col">
            <ProfileImg data = {usuario}  />
            <ProfileINFO />
          </div>
          <div className="w-full sm:w-[600px]">
            <AditionalInfo data = {usuario} />
          </div>
        </div>
      ) : (
        <p>Cargando datos...</p>
        )}
    </>
  );
};
