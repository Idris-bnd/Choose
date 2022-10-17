import React, { useEffect, useState } from 'react';
import './Colors.scss';
import Color from '../Color/Color';
import PropTypes from 'prop-types';

function Colors({ colorsArray, setCheck, deleteFunction, RerollFunc }) {
  return(
    <div className='Colors'>
        {colorsArray.map((color, index) => (
            <Color
                key={index}
                index={index}
                classH={index}
                colorH={color.colorValue}
                checkH={color.check}
                
                setCheck={setCheck}
                deleteFunction={deleteFunction}
                RerollFunc={RerollFunc}
            />
        ))}
    </div>
 )
}


Colors.propTypes = {
    colorsArray: PropTypes.arrayOf(
        PropTypes.object.isRequired,
    ).isRequired,
    setCheck: PropTypes.func.isRequired,
    deleteFunction: PropTypes.func.isRequired,
    RerollFunc: PropTypes.func.isRequired,
};

export default Colors;