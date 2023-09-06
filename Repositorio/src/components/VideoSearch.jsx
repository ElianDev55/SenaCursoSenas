import { useState, useEffect } from 'react';


const API_URL = 'http://localhost:8000/videos/';

function VideoSearch() {
    const [videos, setVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setVideos(data); // Assuming the API response is an array of video objects
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        }

        fetchVideos();
    }, []);

    useEffect(() => {
        const filteredVideos = videos.filter(video =>
            video.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredVideos);
    }, [searchTerm, videos]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search videos..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <div>
                {searchResults.length > 0 ? (
                    <ul>
                        {searchResults.map((video, index) => (
                            <li key={index}>
                                <a href={video.url} target="_blank" rel="noopener noreferrer">
                                    {video.title}
                                    <img src={video.miniature}/>
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No videos found.</p>
                )}
            </div>
        </div>
    );
}

export default VideoSearch;
