import React, { useState } from 'react';
import Delete from '../Delete/Delete';
import Check from '../Check/Check';
import './Color.scss';
import ReRoll from '../ReRoll/ReRoll';
import PropTypes from 'prop-types';


function Color({ classH, colorH, index, checkH, setCheck, deleteFunction, RerollFunc }) {

   const [type, setType] = useState(true);
   const [copied, setCopied] = useState(false);

   const change = (e) => {

      if (e.target.value === 'Hex') {
         setType(true)
      }else{
         setType(false)
      }
   }

   String.prototype.convertToRGB = function(){
      var aRgbHex = this.match(/.{1,2}/g);
      var aRgb = [
          parseInt(aRgbHex[0], 16),
          parseInt(aRgbHex[1], 16),
          parseInt(aRgbHex[2], 16)
      ];
      return aRgb;
  }
  const colorRGB = "rgb('"+colorH.substring(1).convertToRGB()[0]+"','"+colorH.substring(1).convertToRGB()[1]+"','"+colorH.substring(1).convertToRGB()[2]+"')"

   function copy(e) {
      navigator.clipboard.writeText(
         type ? colorH : colorRGB
      );
      setCopied(true);
      setTimeout(() => {
         setCopied(false)
      }, 1500)
    }

  return(
    <div style={{ backgroundColor: colorH}} className={'Color colorNum'+classH}>
       <ReRoll index={index} RerollFunc={RerollFunc} />
       <p className={`colorText ${copied ? 'copied' : ''}`}>{type ? colorH : colorRGB}</p>
       <i onClick={copy} className="fa-regular fa-copy"></i>
       <select onChange={change} className='colorText select'>
         <option onClick={() => console.log('hey')} valeur="hex">Hex</option>
         <option onClick={() => console.log('hey')} valeur="rgb">RGB</option>
       </select>
       <div className="save-delete">
        <Check index={index} colorH={colorH} checkH={checkH} setCheck={setCheck} />
        <Delete deleteFunction={deleteFunction} index={index} />
       </div>
    </div>
 )
}

Color.propTypes = {
   classH: PropTypes.number.isRequired,
   colorH: PropTypes.string.isRequired,
   index: PropTypes.number.isRequired,
   checkH: PropTypes.bool.isRequired,

   setCheck: PropTypes.func.isRequired,
   deleteFunction: PropTypes.func.isRequired,
   RerollFunc: PropTypes.func.isRequired,
};

export default Color;