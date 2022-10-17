import React from 'react';
import './Footer.scss';
import PropTypes from 'prop-types';


function Footer({ changeAll, add1 }) {

    const handleClick = (e) => {
        switch (e.target.name) {
            case 'CHANGE_ALL':
                changeAll()
            break;
            case 'ADD_1_COLOR':
                add1()
                console.log(window.innerHeight);
                if (window.innerWidth < 1024) {
                    console.log(document.body.scrollHeight);
                    window.scrollTo(0, document.body.scrollHeight);
                }
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


Footer.propTypes = {
    changeAll: PropTypes.func.isRequired,
    add1: PropTypes.func.isRequired,
};

export default Footer;