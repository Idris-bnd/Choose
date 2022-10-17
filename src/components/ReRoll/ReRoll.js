import React from 'react';
import './ReRoll.scss';
import PropTypes from 'prop-types';


function ReRoll({ RerollFunc, index }) {

    const handleClick = () => {
        RerollFunc(index);
    }

  return(
    <div className='ReRoll'>
       <i onClick={handleClick} className="fa-solid fa-rotate-right" />
    </div>
 )
}

ReRoll.propTypes = {
    index: PropTypes.number.isRequired,

    RerollFunc: PropTypes.func.isRequired,
};


export default ReRoll;