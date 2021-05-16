import React from 'react';

import './licores-row.style.css';

const LicoresRow = (props) => {
    return (
        
        <div className="licores-row-container">
                    <div></div>

         {        
           props.licores.unidad <2
           ? //if-true
           <span className="licores-without-stock">{props.licores.name}</span>
           ://
        
           <span>{' '}{Text}{props.licores.name}</span>
         }
        
         {' '}{props.licores.telefono}
  
         {' '}{props.licores.unidad}
          
         {' '}{props.licores.precio}
      
        </div>
    ); 
}

export default LicoresRow;