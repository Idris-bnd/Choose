import React from 'react';
import './ReRoll.scss';


function ReRoll({ idH, colorH }) {


  return(
    <div className='ReRoll'>
       <i style={{ color: colorH }} className="fa-solid fa-check"></i>
    </div>
 )
}
export default ReRoll;