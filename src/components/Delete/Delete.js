import React from 'react';
import './Delete.scss';


function Delete({ index, deleteFunction }) {

    const handleClick = () => {
      deleteFunction(index)
    }

  return(
    <div id={index} className='Delete'>
       <i onClick={handleClick} className="fa-solid fa-xmark"></i>
    </div>
 )
}
export default Delete;