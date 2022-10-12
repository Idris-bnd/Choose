import React from 'react';
import './Footer.scss';


function Footer() {

    const handleClick = (e) => {
        console.log(e);
    }

  return(
    <footer className='Footer'>
       <div className="leftSide-footer">
           <button onClick={handleClick} className='leftSide-footer-button'>
               CHANGE ALL <i className="fa-solid fa-rotate-right"></i>
            </button>
       </div>
       <div className="rightSide-footer">
           <button onClick={handleClick} className='rightSide-footer-button'>
               ADD 1 COLOR
            </button>
       </div>
    </footer>
 )
}
export default Footer;