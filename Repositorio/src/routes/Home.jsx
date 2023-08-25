import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TestCard from '../components/TestCard'

const Home = () => {
    return (
    <div className='bg-tierra h-[716px]' >
        <Navbar/>
        <Hero/>
        <TestCard/>
    </div>
    )
}

export default Home