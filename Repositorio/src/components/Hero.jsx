import { useEffect , useState } from 'react';
import VideoCard from '../components/VideoCard'


// API KEY => 4e12ea08

const API_URL = 'http://www.omdbapi.com?apikey=4e12ea08';


function Hero() {
    const [videos, setVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const searchVideos = async (title) => {
        try {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            setVideos(data.Search); 
        } catch (error) {
            console.log(error); 
        }
        }

    useEffect(() => {
        searchVideos('');
    }, []);

    return (
        
    <section id="home" class="" className={'h-full bg-tierra flex md:flex-row flex-col  ${styles.paddingY} '}>
        <div className={'flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6'} >
            <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2' >
                <input className='bg-gray-100 w-full h-[30px] mt-[170px] rounded-lg pl-[25px] pb-[2px]'
                type="text" 
                placeholder='Ingresa tu busqueda'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg xmlns="http://www.w3.org/2000/svg" className='cursor-pointer mt-[163px] h-[24px] w-[24px] absolute top-21  left-15 pt-[4px] ' viewBox="0 0 24 24" fill="none" stroke="#39A900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                alt="search"
                onClick={() => searchVideos(searchTerm)}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>

                {
                    videos?.length > 0
                        ? (
                            <div className='h-[310] align-items-start grid grid-cols-5 gap-5 p-[6px] place-items-center mt-[80px] space-x-0.5 w-full justify-center '>
                                {videos.map((video) => (
                                    <VideoCard video={video}/>
                                ))}
                            </div>
                        ) :
                        (
                            <div className='empty h-[440px]'>
                                {/* <h2>No movies found</h2> */}
                            </div>
                        )
                }

        </div>
    </section>
    )
}

export default Hero

