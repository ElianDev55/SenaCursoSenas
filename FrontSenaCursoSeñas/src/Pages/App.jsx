

import { AllInfo } from './AllInfo';
import '../Styles/App.css'
import { CategoryOfVideos } from './CategoryOfVideos';
import { Footer } from '../Components/Footer';
import { ModalVideos } from '../Components/ModalVideos';
import { ContextVideosProvider } from '../Context/ContextVideos';


export const App =  () => {
  
  return (
    <>
    <ContextVideosProvider>

    <ModalVideos/>
    <CategoryOfVideos/>
    <Footer/>
    
    </ContextVideosProvider>
    
    </>
  )
}
