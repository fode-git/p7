import {useState} from 'react';
import vectorRigh from "../assets/img/VectorRight.png";
import vectorLeght from '../assets/img/VectorLeght.png';
import '../style/components/carrousel.css';


export default function  Carrousel ({images}) {

const [compteur, setCompteur] = useState(0);



const Suivante = ()=>{
    if(compteur ===images.length-1 ){
        setCompteur(0)
        console.log("commpteur",compteur)
    }else{
        setCompteur(compteur+1)
    }
}

const Précédente = () =>{
    if(compteur===0){
        setCompteur(images.length-1)
    }else{
        setCompteur(compteur-1)
    }
}

    return(

        <div className='bloc_carrousel'>
            {
            images.map((image, index) =>
                <div  key ={index}  className={compteur === index
                    ? "imageactif"
                    : "image"}>
               
                {index === compteur && <img  src={image}  alt="" />}
                </div>
                
            )
            }
            
                {images.length>1 && <img className='vectorRight' src={vectorRigh} onClick ={Suivante} alt="" />}
                {images.length>1 && <img  className='vectorLeght'src={vectorLeght} onClick ={Précédente}  alt="" />}
                <p className='paragrapheCpt'>{compteur+1}/{images.length}</p>
        </div>
    )
 
}
