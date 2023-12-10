import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from '@nextui-org/react';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { ModalNovelies } from './ModalNovelies';

const UserMenu = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    // En esta parte ira la redireccion del usuario al hacer click en cerrar sesion
    console.log('Cerrar sesión');
  };

  const navigate = useNavigate();

  
  const handleClickPerfil = () => {
    navigate('/Perfil');
  };


  return (
    <Dropdown>
      <DropdownTrigger>
        <Image
            className="cursor-pointer"
            height={45}
            width={45}
            src="src/Assets/usuario_1.png"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
      <DropdownItem onClick={handleClickPerfil}>Mi perfil</DropdownItem>
        {windowWidth <= 1022 && <DropdownItem key="notifications">Notificaciones</DropdownItem>}
        <DropdownItem key="copy"><ModalNovelies></ModalNovelies></DropdownItem>
        <DropdownItem key="edit">Administrador</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Cerrar sesion
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserMenu;
