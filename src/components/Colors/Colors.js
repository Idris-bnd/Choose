import React, { useEffect } from 'react';
import './Colors.scss';
import { useSelector } from 'react-redux';


function Colors() {

    const colors = useSelector((state) => state.colors)

    console.log(colors);

    useEffect(() => {
        const randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16).toUpperCase();
        console.log(randomColor);
    }, [])

  return(
    <div className='Colors'>
        {colors.map((color) => (
            <h1 key={color.id} style={{ backgroundColor : color.colorValue }}>{color.colorValue}</h1>
        ))}
    </div>
 )
}
export default Colors;