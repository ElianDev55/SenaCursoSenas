import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
  } from "@mui/material";

  function SearchResult({ result }) {
    const { type, data } = result;
  
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
            image={type === 'video' ? data.miniature : data.categoryImage}
            height="200"
            alt="Card Image"
          />
          <CardContent>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            {type === 'category' && <p>{data.additionalCategoryInfo}</p>}
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  
  export default SearchResult;