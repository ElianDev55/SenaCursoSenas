import React, { useState, useEffect } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  TextField,
  Button,
} from "@mui/material";
import { Padding } from '@mui/icons-material';

const Video = () => {
  const [categoryId, setCategoryId] = useState("");
  const [categoryDetails, setCategoryDetails] = useState({});
  const [categoryVideos, setCategoryVideos] = useState([]);

  const handleCategorySearch = () => {
    // Función para obtener los detalles de la categoría y sus videos por su ID
    const fetchCategoryDetailsAndVideos = async (categoryId) => {
      try {
        const responseCategory = await fetch(`http://localhost:8000/categories/${categoryId}`);
        const responseVideos = await fetch(`http://localhost:8000/categoryvideos/${categoryId}`);

        if (!responseCategory.ok || !responseVideos.ok) {
          throw new Error("La solicitud no fue exitosa");
        }

        const dataCategory = await responseCategory.json();
        const dataVideos = await responseVideos.json();

        setCategoryDetails(dataCategory);
        setCategoryVideos(dataVideos);
      } catch (error) {
        console.error("Error al obtener los detalles de la categoría y sus videos:", error);
      }
    };

    // Llamar a la función para obtener detalles de la categoría y sus videos con el ID ingresado
    fetchCategoryDetailsAndVideos(categoryId);
  };

  useEffect(() => {
    // Limpia los datos de la categoría y videos al cambiar el ID
    setCategoryDetails({});
    setCategoryVideos([]);
  }, [categoryId]);

  return (
    <div>
      <TextField
        label="ID de Categoría"
        variant="outlined"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleCategorySearch}
      >
        Buscar Categoría y Videos
      </Button>
      
      <img src={categoryDetails.miniature} />
      <h2 className='text-5xl text-right'>{categoryDetails.title}</h2>
      <p className='text-4x1 pt-[70px] text-left'>{categoryDetails.descripcion}</p>
      
      <div className='grid grid-cols-3 gap-1'>
      {categoryVideos.map((video, index) => (
        <Card
          key={index}
          className="w-[300px] ml-[8%] mt-[5%]"
          orientation="horizontal"
          sx={{
            transition: "0.2s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
        <CardActionArea>
        <CardContent>
            <CardMedia
             component="img"
              image={video.miniature}
              height="100%"
              alt="Card Image"
              className=''
            />
              <h1>{video.title}</h1>
              <p>{video.description}</p>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
      </div>
    </div>
  );
};

export default Video;