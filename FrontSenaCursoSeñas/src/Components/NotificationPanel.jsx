import React from "react";
import { Disclosure } from "@headlessui/react";
import { BiBell } from "react-icons/bi";
import { Listbox, ListboxItem, Image } from "@nextui-org/react";
import { useContext } from "react";
import { NoveltiesContext } from "../Context/ContextNovelties";

export default function NotificationButton() {
  const context = useContext(NoveltiesContext);
  const items = context.novelties;

  return (
    <div className="relative z-10">
      <style>
        {`
          /* Estilo personalizado para el scroll */
          .custom-scrollbar::-webkit-scrollbar {
            width: 12px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #00ff00; /* Color verde */
            border-radius: 6px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background-color: #f1f1f1; /* Color de fondo */
            border-radius: 6px;
          }

          /* Estilo hover para la descripción */
          .description-hover:hover {
            background-color: #e0f7fa; /* Cambia el color de fondo al hacer hover */
            cursor: pointer; /* Cambia el cursor al hacer hover */
            position: relative; /* Añade posición relativa para posicionar la burbuja */
          }

          /* Estilo para la burbuja de información */
          .bubble {
            display: none;
            position: absolute;
            background-color: #4CAF50;
            color: white;
            text-align: center;
            padding: 10px; /* Ajusta el espacio interno para hacer la burbuja más grande */
            border-radius: 8px; /* Ajusta el radio de borde para hacer la burbuja más redonda */
            z-index: 1;
            top: 100%; /* Posiciona la burbuja debajo del elemento */
            left: 50%;
            transform: translateX(-50%);
          }

          .description-hover:hover .bubble {
            display: block;
          }
        `}
      </style>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2">
              <Image
                className="rounded-sm"
                height={45}
                width={45}
                src="src/Assets/campanita.png"
              />
            </Disclosure.Button>
            <Disclosure.Panel
              className={`absolute right-0 mt-2 w-56 p-2 bg-white border rounded shadow-md ${open ? "h-auto" : "h-96"}`}
              style={{ overflowY: "auto" }}
            >
              {/* Agrega el contenedor con desbordamiento automático y clase de estilo personalizado */}
              <div className="custom-scrollbar" style={{ maxHeight: "400px" }}>
                <Listbox
                  items={items}
                  aria-label="Dynamic Actions"
                 
                  className="w-max"
                >
                  {(item) => (
                    <ListboxItem
                      key={item.IdNov}
                      color={item.IdNov === "delete" ? "danger" : "default"}
                      className={item.IdNov === "delete" ? "text-danger description-hover" : "description-hover"}
                    >
                      {item.Title}
                      <br></br>
                      {item.Description}
                      {/* Agrega la burbuja de información */}
                     
                    </ListboxItem>
                  )}
                </Listbox>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
