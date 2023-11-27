import {Videos} from './Videos'
import '../Styles/App.css'
import { Footer } from '../Components/Footer';
import { ModalVideos } from '../Components/ModalVideos';

import { VideosProvider } from '../Context/ContextVideos';
import { CategoriesProvider } from '../Context/ContextCategories';
import {CollaborationAnswersProvider} from '../Context/ContextCollaborationAnswers';

import {CommentsProvider} from '../Context/ContextComments';
import {DiscussionsProvider} from '../Context/ContextDiscussions';
import {UsersProvider} from '../Context/ContextUsers';
import {RolesProvider} from '../Context/ContextRoles';
import Foro  from './Foro';
import { ModalComments } from '../Components/ComponentCrudForo/ModalComments';
import { CollaborationQuestions } from './CollaborationQuestions';
import {CollaborationQuestionsProvider} from '../Context/ContextCollaborationQuestions';


const Home = () => {

    

    return (
    <div>
        <VideosProvider>
            <CategoriesProvider>
                <DiscussionsProvider>
                    <CommentsProvider>
                        
                        <CollaborationQuestionsProvider>
                        
                        <CollaborationQuestions/>
                        <Footer/>

                        </CollaborationQuestionsProvider>
                        
                    
                      
                       


                    </CommentsProvider>

                </DiscussionsProvider>
            </CategoriesProvider>
        </VideosProvider>
    </div>
    )
}

export default Home;