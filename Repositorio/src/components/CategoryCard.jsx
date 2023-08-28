// CategoryCard.js
import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";

const CategoryCard = ({ category }) => {
  return (
    <Card
      className="w-[400px] ml-[8%] mt-[5%] "
      sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={category.miniature}
          height="300"
          alt="Card Image"
        />
        <CardContent>
          <h1>{category.title}</h1>
          <p>{category.descripcion}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
