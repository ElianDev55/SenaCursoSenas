import React, { useState } from 'react';
import Video from './Videos';

function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [videoToShow, setVideoToShow] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const encodedQuery = encodeURIComponent(searchQuery);
      const response = await fetch(`http://localhost:8000/videos/?q=${encodedQuery}`);
      const data = await response.json();

      if (data.length > 0) {
        setVideos(data);
        setError('');
        const foundVideo = data.find(video => video.title.toLowerCase() === searchQuery.toLowerCase());
        setVideoToShow(foundVideo); // Establecer el video encontrado como videoToShow
      } else {
        setVideos([]);
        setError('No se encontraron videos para la búsqueda.');
        setVideoToShow(null);
      }
    } catch (error) {
      console.error('Error al realizar la búsqueda:', error);
      setError('Ocurrió un error al realizar la búsqueda.');
      setVideoToShow(null);
    }
  };

  return (
    <div className="ml-[25px] mt-[25px]">
      <div>
        <input
          className='w-[400px] '
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className='ml-[10px]'
          onClick={handleSearch}>Buscar</button>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="video-list">
        {videoToShow && <VideoCard video={videoToShow} />}
      </div>
    </div>
  );
}

export default Hero;



