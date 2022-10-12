import React from 'react';
import './Delete.scss';


function Delete({ idH }) {

    const handleClick = (e) => {
        console.log(idH);
    }

  return(
    <div id={idH} className='Delete'>
       <i onClick={handleClick} className="fa-solid fa-xmark"></i>
    </div>
 )
}
export default Delete;