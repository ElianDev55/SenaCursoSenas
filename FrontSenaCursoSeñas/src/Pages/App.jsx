

import { AllInfo } from './AllInfo';
import '../Styles/App.css'
import { CategoryOfVideos } from './CategoryOfVideos';
import { Footer } from '../Components/Footer';
import { ModalVideos } from '../Components/ModalVideos';

import { ContextVideosProvider } from '../Context/ContextVideos';
import { Foro } from './Foro';


export const App =  () => {
  
  
  return (
    <>
    <ContextVideosProvider>
      <ModalVideos />
      
   
      <Foro />
    <Footer/>
    
    </ContextVideosProvider>

    
    </>
  )
}
