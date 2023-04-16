import { Link } from 'react-router-dom';
import imgerror from '../assets/img/404.png';
import '../style/pages/error.css'

export default function Error () {

return(
    <div className='blocGeneral' >
        <div className='error404'>
          <img  src= {imgerror} alt=""  width={70} height={40} />
        </div>
        <div className='oups'>
            <span >Oups! La page que</span>
            <span >vous demandez n'existe pas.</span>
        </div>
        <span className='spa_retour_accueil'> 
            <Link className='retour_accueil' to="/"> Retourner sur la page d'accueil</Link>
        </span>
    </div>
    )
};