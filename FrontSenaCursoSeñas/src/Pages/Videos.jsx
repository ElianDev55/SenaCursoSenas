import  { useState, useEffect } from 'react';
import { Search } from '../Components/Search';
import { Cards } from '../Components/Cards';
import { LayoutCards } from '../Components/LayoutCards';
import { useContext } from 'react';
import { VideosContext } from '../Context/ContextVideos';
import '../styles/AllVideos.css'
import { MagicMotion } from 'react-magic-motion';
import { ModalPostVideo } from '../Components/ComponentCrudVideo/ModalPostVideo';
import { motion } from 'framer-motion';


export const Videos = () => {
    const context = useContext(VideosContext);
    const videos = context.searchResults;

    return (
        
        <div>
            <div className="flex justify-center items-center w-full max-w-500 mx-auto">
                <div className="dog">
                    <Search />
                </div>
            </div>
            <div className="flex justify-center items-center w-full mx-auto mt-12 mb-0">
                <ModalPostVideo/>
            </div>
            <div className="flex justify-center items-center w-full max-w-500 mx-auto">
                
                
                <LayoutCards>
            
                        
                {videos.length > 0 ? (
                    videos.map((video) => (
                    <Cards key={video.idvideo} data={video} />
                    ))
                    ) : (
                    <p>No hay videos disponibles.</p>
                    )}

     
                </LayoutCards>
            </div>
        </div>
    )
}