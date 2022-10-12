import React, { useEffect } from 'react';
import './Colors.scss';
import { useSelector } from 'react-redux';
import Color from '../Color/Color';


function Colors() {

    const colors = useSelector((state) => state.colors)

    useEffect(() => {
        const randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16).toUpperCase();
    }, [])

  return(
    <div className='Colors'>
        {colors.map((color) => (
            <Color key={color.id} classH={color.id} colorH={color.colorValue} />
        ))}
    </div>
 )
}
export default Colors;