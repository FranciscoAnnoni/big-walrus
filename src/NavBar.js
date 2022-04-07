import './index.css';
import './NavBar.css';
import NavButtons from "./NavButtons";
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {Link} from 'react-scroll';

const NavBar = () => {

  const [clicked,setClicked] = useState(false);

const handleClick = () => {
  setClicked(!clicked);
};

    return(
        <nav className='bar-nav' >

        <div className="botonWalrus" >
           <NavLink to={'/big-walrus'} className='flex' id='logo-nav'>
             <img src={require('./assets/Logotrasnparente.png')} alt='logo' id="centrar-img"/>
             <div>
               <h2 id='logo-big'>THE BIG</h2>
               <h2 id='walerus'>WALRUS</h2>
             </div>
           </NavLink>
         </div>

         <ul className={clicked ? "flex-items" : "flex-items close" }>
           <li className='nav-item'><Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={handleClick} >HOME</Link></li>
           <li className='nav-item'><Link to="second-section" spy={true} smooth={true} offset={0} duration={500}  onClick={handleClick} >ROAD MAP</Link></li>
           <li className='nav-item'><Link to='galeria' spy={true} smooth={true} offset={0} duration={500} onClick={handleClick} >MINI GALLERY</Link></li>
           <li className='nav-item'><Link to='third-section' spy={true} smooth={true} offset={0} duration={500}  onClick={handleClick}>FAQ</Link></li>
           <li className='nav-item'><Link to='team-container' spy={true} smooth={true} offset={-90} duration={500} onClick={handleClick}>ABOUT US</Link></li>
           <li><div><a href='https://opensea.io/collection/thebigwalerus-store/' target='_blank' rel="noreferrer" id='boton'>BUY A WALRUS</a></div></li>
         </ul>

         <div id='botonMorsa'>
           <a href='https://opensea.io/collection/thebigwalerus-store/' target='_blank' rel="noreferrer" >BUY A WALRUS</a>
         </div>

           <div className='menu-icon' onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
           </div>

         <div className='nav-buttons'  >
           <NavButtons />
         </div>

       </nav>
    )
  };
  
  export default NavBar;