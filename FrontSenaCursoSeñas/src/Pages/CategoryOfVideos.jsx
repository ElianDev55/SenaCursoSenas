import  { useState, useEffect } from 'react';
import { DetailCategory } from "../Components/DetailCategory";
import { LayoutDetailCard } from "../Components/LayoutDetailCard"
import { Search } from '../Components/Search';
import { Cards } from '../Components/Cards';
import { LayoutCards } from '../Components/LayoutCards';
import { DetailCategoryContext } from "../Context/ContextDetailCard";
import { useContext } from "react";
import '../styles/CategoryOfVideos.css'


export const  CategoryOfVideos =  () => {
    


    
    const videosOfCategory= useContext(DetailCategoryContext)
    

    

    return(
        <div>

        <div className="box">
            <LayoutDetailCard>
            {
        videosOfCategory.videosOfCategory?.map(item => (
            <DetailCategory key={item.idvideo} data={item} />
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
        videosOfCategory.videosOfCategory?.map(item => (
            <Cards key={item.idvideo} data={item} />
        ))
        }
        </LayoutCards>
    </div>
        </div>
    )
}