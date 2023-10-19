import { Search } from '../Components/Search';
import { Cards } from '../Components/Cards';
import { LayoutCards } from '../Components/LayoutCards';
import '../styles/AllVideos.css'

export const AllInfo = () => {
    return (
        <div>

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