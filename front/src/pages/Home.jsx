



import ImageGrande from '../components/imageGrande';
import Thumb from '../components/thumb';
import '../style/pages/home.css';
import imageacceuil from "../assets/img/imgAcceuil.png"

//<div className='blocarticlepagehome'><Thumb/></div>
function Home() {

  return (
    <div className="blocGeneral">


    
      <ImageGrande images= {imageacceuil}/>
      <div className='blocarticlepagehome'><Thumb/></div>
    
     
  
    </div>
  )
};
export default  Home;






