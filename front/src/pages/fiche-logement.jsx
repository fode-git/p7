import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/data/data.json';
import Carrousel from '../components/Carrousel'
import Dropdown from "../components/dropdown";
import Error from "../pages/error"
import '../style/pages/fiche-logement.css';
import etoilePlein from "../assets/img/etoilePlein.png";
import etoileVide from "../assets/img/etoileVide.png" 


export default function FicheLogement () {

    const id = useParams ();
   //const navigation = useNavigate ();
/*----------------------fonction_de_comparaison_id_date_et_id_useparams----------------*/
    const article = data.find(data => data.id === id.id)

/*--------------------------si_l'article_n'existe_pas -----------------------------*/
    if(article === undefined ){
        return <Error/>
    }
/*------------------------fonction_equipements---------------------------*/
    const equipe = article.equipments.map((equipement) => {
        return <li>{equipement}</li>
    })
/*-----------------------------fonction_tags ---------------------------*/
    const taggs = article.tags.map((obj) =>{
        return<li className='li' >{obj} </li>
    });

 
/*------------------------fonction_étoile-----------------------------*/
    let note = [];

    for( let i=0; i<5; i++){
       if(i >= article.rating){ 
        note.push(<img key={i} className="etoile" src={etoileVide} alt=""/>)
       }else{ 
        note.push(<img key={i} className="etoile" src={etoilePlein} alt=""/>)
       }
    }
   
return(
<div className='blocGeneralfiche'>     
    <Carrousel images = {article.pictures}/>
      
<section >
    <div className='titre-nom-loc-tag'>
        <h1 className='titre-apropos'>{article.title}</h1>
        <span className='localisation'>{article.location}</span>
        <div className='bloctag'>
            <span className='tags'> {taggs}</span>
        </div>
    </div>
    <div className='blocnameFotoEtoile'>
            <div className='nameFoto'>
                <spam className='name'>{article.host.name}</spam>
                <img  src= {article.host.picture} alt="" />
            </div>
                <span className='etoile'>{ note} </span>
    </div>
</section>
    <div className='bloc-drop'>
        <span className='parti-drop'>
            <Dropdown titre ="description" description = {article.description}/>
        </span>
        <span  className='parti-drop'>
            <Dropdown titre =" equipements" description  = {equipe}/>
        </span>
    </div>


    </div>
)
};