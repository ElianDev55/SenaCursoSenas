import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';

function SearchComponent() {
  const [categoryData, setCategoryData] = useState([]);
  
  useEffect(() => {
    async function fetchCategoryData() {
      try {
        const categoryResponse = await fetch('http://localhost:8000/categories');
        const categoryData = await categoryResponse.json();
        setCategoryData(categoryData);
      } catch (error) {
        console.error('Error al obtener los datos de categoría:', error);
      }
    }

    fetchCategoryData();
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <div className="ml-[25px] mt-[25px]">
      <div className="grid grid-cols-3 gap-1">
        {categoryData.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
}

export default SearchComponent;


