import React from 'react'
import './NavBar.css';
import { MdClose, MdHome } from "react-icons/md";
import { GoPersonFill } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
function NavBar() {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  function handleClickMenu(e){
    setMobileMenu(!mobileMenu);

  }

  function handleClose(){
    setMobileMenu(false);
  }
  return (
    <header>
        <nav>
            <h2 className='logo'>Emmanuel Mzota</h2>

            <ul className='nav-options-container'>
                <li className="nav-option"><a href="#Home">Home</a></li>
                <li className="nav-option"><a href="#About">About</a></li>
                <li className="nav-option"><a href="#Skills">Skills</a></li>
                <li className="nav-option"><a href="#Projects">Projects</a></li>
                <li className="nav-option"><a href="#Services">Services</a></li>
                <li className="nav-option"><a href="#Contact">Contact</a></li>
            </ul>
            {
              mobileMenu?
              <ul onMouseLeave={handleClose} className='nav-options-container-mobile nav-options-container'>
                <div className="nav-option"><MdHome className='nv-icon'></MdHome><a href="#Home">Home</a></div>
                <div className="nav-option"><GoPersonFill className='nv-icon'></GoPersonFill><a href="#About">About</a></div>
                <div className="nav-option"><GiSkills className='nv-icon'></GiSkills><a href="#Skills">Skills</a></div>
                <div className="nav-option"><FaProjectDiagram className='nv-icon'></FaProjectDiagram><a href="#Projects">Projects</a></div>
                <div className="nav-option"><FaTools className='nv-icon'></FaTools><a href="#Services">Services</a></div>
                <div className="nav-option"><MdContactMail className='nv-icon'></MdContactMail><a href="#Contact">Contact</a></div>
            </ul>:<></>
            }
            {
              mobileMenu?<MdClose onClick={handleClickMenu} className='close-icon'></MdClose>:<i onClick={handleClickMenu} class="menu-icon fas fa-bars"></i>

            }
            
            
        </nav>
        
    </header>
  )
}

export default NavBar