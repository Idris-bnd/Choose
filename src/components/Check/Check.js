import React, { useState } from 'react';
import './Check.scss';


function Check({ colorH, index, checkH, setCheck }) {
   const handleClick = (e) => {
      setCheck(index)
   };

  return(
    <div className={'Check check'+ index}>
       <i onClick={handleClick} style={{color: (checkH ? "#000000" : colorH)}} className="fa-solid fa-check"></i>
    </div>
 )
}
export default Check;