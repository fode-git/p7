import data from '../assets/data/data.json';
import '../style/components/thumb.css';
import { NavLink } from "react-router-dom";



export default function Thumb () {

/*const [data, setData] = useState([]);  

useEffect(() => {
    fetch(`../data.json`)
         .then((res => res.json()))
         .then(data=> setData(JSON.stringify(data)))
    
      console.log (setData," recuperation");
        // console.log (setData," recuperation");
       // })
        // .catch((error) => console.log(error))
       // )
 }, [])

   */
    return(

        <div className="blocarticle">
            { 
             data.map( data =>( 
                <NavLink className="article" key = {data.id} to={"/FicheLogement/"+data.id+"/#"} id={data.id} >
             
               
                <img className='imgArticle' src={data.cover} alt=""  />
                <span className='titreArticle'>{data.title}</span>

                </NavLink>
                ))
            }
        </div>
    )
}
 
