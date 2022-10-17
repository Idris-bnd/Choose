import React from 'react';
import './Delete.scss';
import PropTypes from 'prop-types';


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

Delete.propTypes = {
  index: PropTypes.number.isRequired,

  deleteFunction: PropTypes.func.isRequired,
};

export default Delete;