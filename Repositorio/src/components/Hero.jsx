import { useEffect, useState } from 'react';
import { Button, Container } from '@mui/material'

import VideoCard from '../components/VideoCard';

const API_URL = 'http://localhost:8000/videos/';

function Hero() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchVideos = async (title) => {
    try {
      const response = await fetch(`${API_URL}?title=${title}`);
      const data = await response.json();
      setVideos(data); 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    searchVideos(''); 
  }, []);

  return (
    <section className='p-[29px]'>
      <Container
      
      sx={{
        border: 2,
        boxShadow: 1,
        pb: 2,
      }}
      >
        <input
            sx={{
            border: 2,
            boxShadow: 1,
            pb: 2,
          }}
          className='w-[500px] h-[28px] mr-[20px] ml-[10px] mt-[15px]'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />

        <Button
        className='h-[28px] w-[40px]'
        onClick={() => searchVideos(searchTerm)}
        >
          Search
        </Button>

        {videos.length > 0 ? (
          <div>
            {videos.map(video => (
              <VideoCard video={video} />
            ))}
          </div>
        ) : (
          <div>No videos found</div>  
        )}
      </Container>
    </section>
  );
}

export default Hero;