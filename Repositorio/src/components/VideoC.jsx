import React from 'react'

const VideoC = ({video}) => {
return (
    <div className='container bg-30 w-[150px] h[300px]'>

    <div className='title'>
        <h2>{video.title}</h2>
    </div>

    <div className='p-6'>
        <img src={video.miniature} className='h-[90px]' alt={video.title} />
    </div>

    <div className="p-6">
                    <h3>la categoria del video es : + {video.idCategory}</h3>
                    <p>{video.description}</p>
            </div>

    </div>
    )
}

export default VideoC