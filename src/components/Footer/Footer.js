import React from 'react';
import './Footer.scss';


function Footer({ changeAll, add1 }) {

    const handleClick = (e) => {
        switch (e.target.name) {
            case 'CHANGE_ALL':
                console.log('change');
                changeAll()
            break;
            case 'ADD_1_COLOR':
                console.log('add');
                add1()
            break;
            default:
                break;
        }
    }

  return(
    <footer className='Footer'>
       <div className="leftSide-footer">
           <button name='CHANGE_ALL' onClick={handleClick} className='leftSide-footer-button'>
               CHANGE ALL <i className="fa-solid fa-rotate-right" />
            </button>
       </div>
       <div className="rightSide-footer">
           <button name='ADD_1_COLOR' onClick={handleClick} className='rightSide-footer-button'>
               ADD 1 COLOR
            </button>
       </div>
    </footer>
 )
}
export default Footer;