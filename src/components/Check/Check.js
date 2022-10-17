import React, { useState } from 'react';
import './Check.scss';
import PropTypes from 'prop-types';

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

Check.propTypes = {
   colorH: PropTypes.string.isRequired,
   index: PropTypes.number.isRequired,
   checkH: PropTypes.bool.isRequired,

   setCheck: PropTypes.func.isRequired,
};

export default Check;