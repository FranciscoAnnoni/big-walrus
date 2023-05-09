import './index.css';
import NavButtons from "./NavButtons";
import './Footer.css'


function Footer() {
  return(
      <footer className='flex'>
        <div id='logos'>
        <a href='https://nftcalendar.io/event/the-big-walrus/'  target='_blank' rel="noreferrer">
          <img className="logo1" src={require('./assets/nftcalend1.png')} alt='TheBigWalrus'  />
        </a>
        <a href='https://solana.com/ecosystem/'  target='_blank' rel="noreferrer">
          <img  className="logo2" src={require('./assets/Solana.png')}  alt='Solana' />
        </a>
        <a  href='https://opensea.io/' target='_blank' rel="noreferrer">
          <img className="logo3" src={require('./assets/OpenSea.png')} alt='OpenSea' />
        </a>
        </div>
        <div>
          <div className='footer-buttons flex'>
            <NavButtons />
          </div>
          <p id='rights'><b>©2022 TBW </b><br/> TheBigWalrus.Store<br/>All Rights Reserved.</p>
        </div>
      </footer>
  )
}

export default Footer;