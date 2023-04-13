import { useState } from "react";
import vectorBas from '../assets/img/Vector.png';
import vectorHaut from '../assets/img/Vectorhaut.png';
import '../style/components/dropdown.css';


export default function Dropdown ({titre, description,  equipments}) {

const  [ouvert, setOuvert] = useState (true);

const  functionOuvert = () =>{
    setOuvert (!ouvert);
}

    if(ouvert){  
        return(
            <div className="bloctexte" >
                <div className="titre" >
                    <span className="title2">{titre }</span>
                    <img  onClick={functionOuvert} src= {vectorBas} alt="" />
                </div> 
            </div>
        )
    }else{
        return(
            <div className="bloctexte" >
                <div className="titre" >
                    <span className="title2">{titre }</span>
                    <img  onClick={functionOuvert} src= {vectorHaut} alt="" />
                </div> 
                <div className="description"> {description} </div>
            </div>
        )
    }
};