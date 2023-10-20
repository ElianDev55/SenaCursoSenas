import  { useState, useEffect } from 'react';
import { DetailCategory } from "../Components/DetailCategory";
import { LayoutDetailCard } from "../Components/LayoutDetailCard"
import { Search } from '../Components/Search';
import { Cards } from '../Components/Cards';
import { LayoutCards } from '../Components/LayoutCards';
import '../styles/CategoryOfVideos.css'


export const  CategoryOfVideos =  () => {
    
    const [items, setItems] = useState(null)
    let counter = 0;
    useEffect(() => {
        fetch('http://127.0.0.1:8000/categoryvideos/1/')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

    return(
        <div>

        <div className="box">
            <LayoutDetailCard>
            {
        items?.map(item => (
            <DetailCategory key={counter} data={item} />
        ))
        }
            </LayoutDetailCard>
        </div>

        <div className="flex justify-center items-center w-full max-w-500 mx-auto">
        <div className="dog  ">
        <Search />
        </div>
        </div>
        <div className="flex justify-center items-center w-full max-w-500 mx-auto">
        <LayoutCards>
        {
        items?.map(item => (
            <Cards key={counter++} data={item} />
        ))
        }
        </LayoutCards>
    </div>
        </div>
    )
}