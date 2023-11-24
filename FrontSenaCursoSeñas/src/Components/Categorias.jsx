import React, { useContext, useState } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { CategoriesContext } from "../Context/ContextCategories";

export default function Menu() {
  const { categories } = useContext(CategoriesContext);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (id) => {
    const selected = categories.find(category => category.idcategory === id);
    setSelectedCategory(selected);
  }

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button 
          className="capitalize text-azul text-md"
          variant="bordered" 
          >
            Categorias
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Action event example">
          {categories && categories.map(category => (
          <DropdownItem key={category.idcategory} onClick={() => handleSelectCategory(category.idcategory)}>{category.title}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      {selectedCategory && <CategoryDetails category={selectedCategory} />}
    </div>
  );
}

function CategoryDetails({ category }) {
  return (
    <div>
      <h2>{category.title}</h2>
      <img src={category.miniature} alt={category.title} />
      <p>{category.descripcion}</p>
    </div>
  );
}
