

import { AllInfo } from './AllInfo';
import '../Styles/App.css'
import { CategoryOfVideos } from './CategoryOfVideos';
import { Footer } from '../Components/Footer';
import { ModalVideos } from '../Components/ModalVideos';


export const App =  () => {
  
  return (
    <>
    <ModalVideos/>
    <CategoryOfVideos/>
    <Footer/>
    
    </>
  )
}
