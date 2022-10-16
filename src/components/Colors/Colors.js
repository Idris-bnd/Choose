import React, { useEffect, useState } from 'react';
import './Colors.scss';
import Color from '../Color/Color';


function Colors({ colorsArray, setCheck, deleteFunction }) {

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
            />
        ))}
    </div>
 )
}
export default Colors;