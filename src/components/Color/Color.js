import React from 'react';
import Delete from '../Delete/Delete';
import ReRoll from '../ReRoll/ReRoll';
import './Color.scss';


function Color({ classH, colorH }) {


  return(
    <div style={{ backgroundColor: colorH}} className={'Color colorNum'+classH}>
       {colorH}
       <div className="save-delete">
        <ReRoll colorH={colorH} idH={classH} />
        <Delete idH={classH} />
       </div>
    </div>
 )
}
export default Color;