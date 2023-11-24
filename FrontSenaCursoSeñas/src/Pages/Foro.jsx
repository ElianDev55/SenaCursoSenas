
import { ForoQuestions } from '../Components/Foroquestions';
import { LayoutForo } from '../Components/LayoutForo';
import { Card, CardBody,Button} from '@nextui-org/react';
import {AiFillFire} from "react-icons/ai";
import {IoMegaphoneSharp} from "react-icons/io5";
import { useContext } from 'react';
import {DiscussionsContext} from '../Context/ContextDiscussions';
import {ModalPostForo} from '../Components/ComponentCrudForo/ModalPostForo';

 const Foro = () => {

    const context = useContext(DiscussionsContext);
    const discussion = context.discussion;

    return(

        <div>

    <div className="flex justify-center items-center w-full mx-auto mt-12 mb-0">
                <ModalPostForo/>
            </div>

     
        
            

     <LayoutForo>
                
       
                {
                    discussion?.map(item => (
                        < ForoQuestions   key={item.IdDist} data={item}  />
                        ))
                    }

      
        </LayoutForo>
    </div>
    
    )
} 


export default Foro;