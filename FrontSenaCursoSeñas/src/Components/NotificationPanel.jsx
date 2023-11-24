import React from "react";
import { Disclosure } from '@headlessui/react';
import { BiBell } from 'react-icons/bi';
import {Listbox, ListboxItem, Image} from "@nextui-org/react";

export default function NotificationButton() {
  const items = [
    {
      key: "Not1",
      label: "Notificacion 1",
    },
    {
      key: "Not2",
      label: "Notificacion 2",
    },
    {
      key: "Not3",
      label: "Notificacion 3",
    },
    {
      key: "Not4",
      label: "Notificacion 4",
    }
  ];

  return (
    <div className="relative z-10">
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
            <Disclosure.Panel className="absolute right-0 mt-2 w-56 p-2 bg-white border rounded shadow-md">
              <Listbox
                items={items}
                aria-label="Dynamic Actions"
                onAction={(key) => alert(key)}
              >
                {(item) => (
                  <ListboxItem
                    key={item.key}
                    color={item.key === "delete" ? "danger" : "default"}
                    className={item.key === "delete" ? "text-danger" : ""}
                  >
                    {item.label}
                  </ListboxItem>
                )}
              </Listbox>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

