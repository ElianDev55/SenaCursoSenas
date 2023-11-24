import {Videos} from './Videos'
import '../Styles/App.css'
import { Footer } from '../Components/Footer';
import { ModalVideos } from '../Components/ModalVideos';

import { VideosProvider } from '../Context/ContextVideos';
import { CategoriesProvider } from '../Context/ContextCategories';
import {CollaborationAnswersProvider} from '../Context/ContextCollaborationAnswers';
import {CollaborationQuestionsProvider} from '../Context/ContextCollaborationQuestions';
import {CommentsProvider} from '../Context/ContextComments';
import {DiscussionsProvider} from '../Context/ContextDiscussions';
import {UsersProvider} from '../Context/ContextUsers';
import {RolesProvider} from '../Context/ContextRoles';
import Foro  from './Foro';



const Home = () => {
    return (
    <div>
        <VideosProvider>
            <CategoriesProvider>
                <DiscussionsProvider>

                    <Foro/>
                <Footer/>

                </DiscussionsProvider>
            </CategoriesProvider>
        </VideosProvider>
    </div>
    )
}

export default Home;