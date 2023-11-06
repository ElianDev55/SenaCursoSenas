
import {Videos} from './Videos'
import '../Styles/App.css'
import { Footer } from '../Components/Footer';
import { VideosProvider } from '../Context/ContextVideos';
import { ModalVideos } from '../Components/ModalVideos';
import { CategoriesProvider } from '../Context/ContextCategories';




export const App =  () => {
  
  
  return (
    <>
    
    <VideosProvider> 
      <CategoriesProvider>

      
      <ModalVideos/>
      <Videos/>
      <Footer/>
      
      
      </CategoriesProvider>
      </VideosProvider>
    
    </>
  )
}
