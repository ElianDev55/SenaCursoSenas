import { ProfileImg } from '../Components/Profileimg'
import { ProfileINFO } from '../Components/ProfileInfo'
import { AditionalInfo } from '../Components/ProfileAdInfo'
import '../Styles/App.css'




export const Perfil =  () => {
  
  return (
    <>
 <div className="flex flex-col sm:flex-row">
  <div className="flex sm:flex-col">
    <ProfileImg />
    <ProfileINFO />
  </div>
  <div className="w-full sm:w-[600px]">
    <AditionalInfo />
  </div>
  
</div>






    
    </>
  )
}