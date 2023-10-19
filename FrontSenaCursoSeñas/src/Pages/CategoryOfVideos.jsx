import { DetailCategory } from "../Components/DetailCategory";
import { LayoutDetailCard } from "../Components/LayoutDetailCard"
import { Search } from '../Components/Search';
import { Cards } from '../Components/Cards';
import { LayoutCards } from '../Components/LayoutCards';
import '../styles/CategoryOfVideos.css'


export const  CategoryOfVideos =  () => {
    return(
        <div>

        <div className="box">
            <LayoutDetailCard>
                <DetailCategory />
            </LayoutDetailCard>
        </div>

        <div className="flex justify-center items-center w-full max-w-500 mx-auto">
        <div className="dog  ">
        <Search />
        </div>
        </div>
        <div className="flex justify-center items-center w-full max-w-500 mx-auto">
        <LayoutCards>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </LayoutCards>
    </div>
        </div>
    )
}