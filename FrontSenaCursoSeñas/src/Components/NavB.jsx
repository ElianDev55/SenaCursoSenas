import React from "react";
import {Navbar,Image, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem} from "@nextui-org/react";
import UserMenu from "../Components/UserMenu";
import { Link } from 'react-router-dom'
import NotificationButton from '../Components/NotificationPanel'
import { CategoriesProvider } from '../Context/ContextCategories';
import Menu from '../Components/Categorias';
import { NolveltiesProvider } from "../Context/ContextNovelties";

export default function NavB() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/Colaboracion", label: "Colaboracion" },
    { path: "/Foro", label: "Foro de Preguntas" },
    { path: "/Perfil"},
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className='bg-white p-1 border-2 border-azul rounded-lg m-0 mt-0 mb-0 pt-0 pb-0 h-14'
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3 mr-8" justify="center">
        <NavbarBrand>
          <Image
              className="rounded-sm "
              height={45}
              width={45}
              src="src/Assets/logo-circ.png"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
        <Image
              className="rounded-sm"
              height={45}
              width={45}
              src="src/Assets/logo-circ.png"
          />
        </NavbarBrand>
  
        <NavbarContent>
          <CategoriesProvider>
            <Menu/>
          </CategoriesProvider>
        </NavbarContent>

        {links.map((link, index) => (
          <NavbarItem key={index}>
            <Link to={link.path} onClick={handleLinkClick}>
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <NolveltiesProvider>
          <NotificationButton/>
          </NolveltiesProvider>
        </NavbarItem>
        <NavbarItem>
          <UserMenu />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {links.map((link, index) => (
          <NavbarMenuItem key={`${link.label}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === links.length - 1 ? "danger" : "foreground"
              }
              to={link.path}
              size="lg"
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
