import Footer from './Footer';
import './Home.css';
import './index.css'
import NavButtons from "./NavButtons";
import * as Icons from "@material-ui/icons";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

function Home() {

  return (
    <motion.div
        initial={{opacity: 0, y: "-2%"}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 0}}
        className="common-container flex">
         
      <nav id='home-nav' className='flex'>
        <div className='flex'>
          <img src={require('./assets/LogoBlanco.png')} alt='logo' id='home-logo'/>
          <div className='flex home-title hover'>
            <h1 id='thebig'><b>THE BIG</b></h1>
            <h1 id='walrus'>WALRUS</h1>
          </div>
        </div>
      </nav>
      <div className='buttons flex'>
      
        <NavButtons />
     
      </div>
      <div id='banner-container'>
        <img className='banner-video' src={require('./assets/WalrusBar-home.jpg')} alt='banner'/>
      </div>
      <div id='banner-container2'>
        <img className='banner-video2' src={require('./assets/WalrusBar-home.jpg')} alt='banner'/>
      </div>

      <div id='enter-bar'>
        <h1 className="benechupapija">WELCOME TO THE BIG WALRUS BAR</h1>
        <NavLink  id='enter' to={'/big-walrus/bar'}>ENTER <div className="flex animacion"><Icons.ArrowForward /> </div> </NavLink>
      </div>

      <div id='solanaOpenSea'>
      <a href='https://solana.com/ecosystem/'  target='_blank' rel="noreferrer">
          <img  className="logo2" src={require('./assets/Solana.png')}  alt='Solana' />
        </a>
        <a  href='https://opensea.io/collection/thebigwalerus-store/' target='_blank' rel="noreferrer">
          <img className="logo3" src={require('./assets/OpenSea.png')} alt='OpenSea' />
        </a>
        </div>
      <Footer />
      
    </motion.div>
    
  );
}

export default Home;
