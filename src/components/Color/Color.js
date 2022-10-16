import React from 'react';
import Delete from '../Delete/Delete';
import Check from '../Check/Check';
import './Color.scss';


function Color({ classH, colorH, index, checkH, setCheck, deleteFunction }) {

  return(
    <div style={{ backgroundColor: colorH}} className={'Color colorNum'+classH}>
       {colorH}
       <div className="save-delete">
        <Check index={index} colorH={colorH} checkH={checkH} setCheck={setCheck} />
        <Delete deleteFunction={deleteFunction} index={index} />
       </div>
    </div>
 )
}
export default Color;