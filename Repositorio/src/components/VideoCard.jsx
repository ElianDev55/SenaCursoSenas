import React from 'react'

const VideoCard = ({video}) => {
    return (
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 h-[300px] w-[220px] self-start">
    
            <div className='p-6'>
            <img src={video.Poster} className='h-[90px]' alt={video.Title} />
            </div>
    
    
            <div class="p-6">
                    <span>{video.Type}</span>
                    <h3>{video.Title}</h3>
                    <p>{video.Year}</p>
            </div>
    </div>
    )
}




export default VideoCard