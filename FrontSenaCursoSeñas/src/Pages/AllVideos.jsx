import { useContext } from 'react';
import { Search } from '../Components/Search';
import { LayoutCards } from '../Components/LayoutCards';
import {VideosContext} from '../Context/ContextVideos';
import '../styles/AllVideos.css'
import { Cards } from '../Components/Cards';
import { ModalForm } from '../Components/ModalForm';


export const AllVideos = () => {

    const context = useContext(VideosContext);
    
    const videos = context.searchResults;

    return (
        <div>

    <div className="flex justify-center items-center w-full max-w-500 mx-auto">
        <div className="dog  ">
        <Search />
        
        </div>
    </div>
    <div className="flex justify-center items-center w-full max-w-500 mx-auto mt-12 mb-0">
        <ModalForm/>
    </div>
    <div className="flex justify-center items-center w-full max-w-500 mx-auto">
        <LayoutCards>
        {
            videos ? (
                videos.map((video) => (
                    <Cards key={video.idvideo} data={video} />
                ))
            ) : (
                <p>No hay videos disponibles</p>
            )
        }
        </LayoutCards>
    </div>
        </div>
        
    )
}