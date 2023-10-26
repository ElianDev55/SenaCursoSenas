import { VideosProvider } from "../Context/ContextVideos";
import { AllVideos } from "./AllVideos";
import { ModalVideos } from '../Components/ModalVideos';
import { ModalProvider } from "../Context/ContextModal";
import { Footer } from '../Components/Footer';
import '../Styles/App.css'
import { DetailCategory } from "../Components/DetailCategory";
import { DetailCategoryProvider } from "../Context/ContextDetailCard";
import { CategoryOfVideos } from "./CategoryOfVideos";
import { DiscussionProvider } from "../Context/ContextDiscussion";
import { Foro } from "./Foro";
import { UsersProvider } from "../Context/ContextUser";
import { UpVideos } from "../Pages/UpVideos";
import { AllCategories } from "./AllCategories";
import { CategoriesProvider } from "../Context/ContextCategories";
import { UpCategories } from "./UpCategories";
import { UpDiscussion } from "../Components/UpDiscussion";
import { ModalFooter } from "@nextui-org/react";
import { ModalForm } from "../Components/ModalForm";


export const App =  () => {
  

  return (
    <>
    {/*-----CONTEXTS-----*/}
         
      <VideosProvider>
        <ModalProvider>
          <DetailCategoryProvider>
            <DiscussionProvider>
            <UsersProvider>
              <CategoriesProvider>


         {/*-----PAGES-----*/}
          <ModalVideos/>
          
          
          <Footer/>
        {/*-----PAGES-----*/}


                </CategoriesProvider>
              </UsersProvider>
            </DiscussionProvider>
          </DetailCategoryProvider>
        </ModalProvider>
      </VideosProvider>
    {/*-----CONTEXTS-----*/}
         
    </>
  )
}
