import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import Grid from '@mui/joy/Grid';
import Item from '@mui/material/ListItem';


function Watch() {
  const [videoId, setVideoId] = useState('');
  const [videoData, setVideoData] = useState('');

  const handleSearch = async () => {
    try {
      // Realiza la solicitud a tu API aquí para obtener los datos del video
      const response = await fetch(`http://localhost:8000/videos/${videoId}`);
      if (!response.ok) {
        throw new Error('No se pudo obtener el video');
      }
      const data = await response.json();
      setVideoData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="ID del video"
        value={videoId}
        onChange={(e) => setVideoId(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      <Card className="w-[1350px] mt-[5%]" orientation="horizontal" sx={{ transition: "0.2s", "&:hover": { transform: "scale(1.0)",},}}>
      <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ width: '100%' }}>
         <Grid xs={6}>
        <Item>
        <CardActionArea>
          <CardContent>
            {videoData && (
              <div>
                <ReactPlayer
                  url={videoData.video}
                  controls
                  autoPlay  // Reproducción automática
                  width="100%"
                  height="auto"
                />
              </div>
            )}
          </CardContent>
        </CardActionArea>
        </Item>
      </Grid>
      <Grid xs={6}>
        <Item>
        <CardActionArea>
          <CardContent>
          <h2 className='text-5xl '>{videoData.title}</h2>
          <p className='text-4x1 pt-[70px]'>{videoData.description}</p>
          </CardContent>
        </CardActionArea>
        </Item>
      </Grid>
      </Grid>
      </Card>
    </div>
  );
}

export default Watch;
