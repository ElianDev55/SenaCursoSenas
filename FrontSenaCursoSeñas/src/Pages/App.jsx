
import {Videos} from './Videos'
import '../Styles/App.css'
import { Footer } from '../Components/Footer';
import { VideosProvider } from '../Context/ContextVideos';



export const App =  () => {
  
  
  return (
    <>
    
    <VideosProvider> 
      
      <Videos/>
      <Footer/>
      
      
      </VideosProvider>
    
    </>
  )
}
