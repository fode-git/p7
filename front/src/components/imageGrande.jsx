
import React from 'react';
import '../style/components/imageGrande.css';


export default function ImageGrande ({images}){
   // <img src="../../image/imgfond.png" alt=""  height={50} width={270}  />
    return(
        <div className="blocImgtete">
            <div className='texteentete'>Chez vous, partout et ailleurs</div> 
            <div className='background'></div>
           
            <img src={images}  />

        </div>
    )
};