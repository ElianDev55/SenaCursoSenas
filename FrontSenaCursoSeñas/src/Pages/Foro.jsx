
import { ForoQuestions } from '../Components/Foroquestions';
import { LayoutForo } from '../Components/LayoutForo';
import { Card, CardBody,Button} from '@nextui-org/react';
import {AiFillFire} from "react-icons/ai";
import {IoMegaphoneSharp} from "react-icons/io5";
import { useContext } from 'react';
import { DiscussionContext } from '../Context/ContextDiscussion';
import { UpDiscussion } from '../Components/UpDiscussion';

export const Foro = () => {

    const  context = useContext(DiscussionContext)
    const {discussion} = context
    

    return(
        <div className="flex justify-center items-center w-full max-w-500 mx-auto">
        <LayoutForo>
        <Card>
            <CardBody>
            <div className="gap-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2  justify-center ">
                <div>
                <Button isIconOnly color="danger" aria-label="Like" className='w-40'  >
                    <AiFillFire/>
                    <p className='ml-3'>
                        Mas votado
                    </p>
                    </Button>    
                </div>

                <div className='' >
                <Button isIconOnly color="success" aria-label="Like" className='w-40' >
                    <IoMegaphoneSharp/>
                    <p className='ml-3' > 
                        Nuevo
                    </p>
                    </Button>    
                </div>
                </div>
                </CardBody>
                </Card>
                <UpDiscussion/>
                
                {
  discussion ? (
    discussion.map(item => (
      <ForoQuestions  key={item.IdDist} data={item} />
    ))
  ) : (
    <p>Cargando...</p>
  )
}

        </LayoutForo>
    </div>
    )
}