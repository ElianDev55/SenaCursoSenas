import { useContext } from 'react';
import { Search } from '../Components/Search';
import { LayoutCards } from '../Components/LayoutCards';
import {CategoriesContext} from '../Context/ContextCategories';  
import '../styles/AllVideos.css'
import { Cards } from '../Components/Cards';


export const AllCategories = () => {

    const context = useContext(CategoriesContext);
    
    const videos = context.categories;

    return (
        <div>

    <div className="flex justify-center items-center w-full max-w-500 mx-auto">
        <div className="dog  ">
        <Search />
        </div>
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