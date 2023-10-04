import Screen from '../Screen'
import React from 'react';

import {useContext, useState} from "react";
import App from '../../App';





function NumericButton({number, onClick}) {

    
  

    return (
        <div>

               <button className="number" onClick={onClick}> {number}  </button>

              
            {/* <button >{play} </button> */}
 
        </div>
    )
}


export default NumericButton

