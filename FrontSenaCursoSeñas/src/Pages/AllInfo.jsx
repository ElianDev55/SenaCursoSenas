import  { useState, useEffect } from 'react';
import { Search } from '../Components/Search';
import { Cards } from '../Components/Cards';
import { LayoutCards } from '../Components/LayoutCards';
import '../styles/AllVideos.css'

export const AllInfo = () => {

    const [items, setItems] = useState(null)
    let counter = 0;
    useEffect(() => {
        fetch('http://127.0.0.1:8000/videos/')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

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
        items?.map(item => (
            <Cards key={counter} data={item} />
        ))
        }
        </LayoutCards>
    </div>
    {counter++}
        </div>
        
    )
}