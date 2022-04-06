import './index.css';
import './NavBar.css';
import NavButtons from "./NavButtons";
import {NavLink} from "react-router-dom";
import React, {useState} from "react";


const NavBar = () => {

  const [clicked,setClicked] = useState(false);

const handleClick = () => {
  setClicked(!clicked);
};

    return(
        <nav className='bar-nav' >

        <div className="botonWalrus" >
           <NavLink to={'/'} className='flex' id='logo-nav'>
             <img src={require('./assets/Logotrasnparente.png')} alt='logo' id="centrar-img"/>
             <div>
               <h2 id='logo-big'>THE BIG</h2>
               <h2 id='walerus'>WALRUS</h2>
             </div>
           </NavLink>
         </div>

         <ul className={clicked ? "flex-items" : "flex-items close" }>
           <li><a href='#home' onClick={handleClick} >HOME</a></li>
           <li><a href='#second-section' onClick={handleClick} >ROAD MAP</a></li>
           <li><a href='#galeria' onClick={handleClick} >MINI GALLERY</a></li>
           <li><a href='#third-section' onClick={handleClick}>FAQ</a></li>
           <li><a href='#team-container' onClick={handleClick}>ABOUT US</a></li>
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