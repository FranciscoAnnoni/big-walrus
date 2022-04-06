import React from "react";
import './index.css';
import './Bar.css';
import {motion} from "framer-motion";
import Footer from "./Footer";
import * as Icons from "@material-ui/icons";
import NavBar from "./NavBar";

function Bar () {

  return(

      <motion.div
          initial={{opacity: 0, y: "-2%"}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: 0}}
        className='common-container flex'>
          
         
          <NavBar/>
      

        <div className='banner-container' id='home'>
 
          <img src={require('./assets/insideWalrusBar-min.jpg')} alt='banner'/>

        </div>
        <div id='below-banner'>
          <h1>DISCOVER OUR PROJECT</h1>

          <p id="subtituloPrincipal"> There are no bonding curves here. Buying a Big Walrus costs <b> 0.3 SOL </b>.</p>
          <p id="colorNaranja">(There are no whitelists or pre-sales, <b> everyone can participate</b>)</p> 
        </div>
        <br/>
        <div className='separator'/>
        <div className='flex' id='first-section'>
          <img src={require('./assets/gifPrincipal.gif')} alt='walrus-02' id= "picture1"/>
          <div>
            <h2>THE BIG</h2>
            <h2 id='walrus'>WALRUS</h2>

            <p id='ProgetDefinition'> 
            <b>The Big Walrus (TBW)</b> is a collection of Non-Fungible Tokens living on Solana blockchain, punlish on OpenSea. <br />
            NFTs are <b> immutable and forever </b>. We only have one chance to do it right, so we obsess over  <b> quality </b> and review all  <b> details </b>.
            That's why we decided to make each Big Walrus NFT by hand in a completely  <b id= 'SoloEnNegrita'> handmade </b> way , making The Big Walrus a   <b> unique collection </b>. 
            The liquidity of the collection is very limited, for the work and the time that it takes to carry out each one of them.<br />
            Anyway, when you buy a Big Walrus you are not only paying for the art of the drawing, but doubles as your  <b id= 'SoloEnNegrita'> Big Walrus membership card </b>, 
            and grants access to <b> members-only benefits </b> , which are described in the <a id= 'SoloEnNegrita' href='#second-section'> Road Map </a>. <br />
            Future areas and perks can be <b > unlocked by the community </b> through <a id= 'SoloEnNegrita' href='#second-section'> Road Map </a> activation.<br />
            </p>
          </div>
        </div>
        <div className='separator'/>
        <div className='flex' id='second-section'>
          
          <h1>ROAD MAP</h1>

          <div id='roadmap'>
            <img src={require('./assets/roadmap-01.png')} alt='RoadMap1'/>
            

            
            <div id='text'>
            <h2 id='referencias'>REFERENCES:</h2>

            <h3>THE BEGINNING</h3> <span className="colorChicoNaranja"> <b> (starting point)</b></span>
            <p> 
            We start owr journey in search of the lost treasure by launching. The Big Walrus NFT, with a Mint price of <b>0.3 SOL</b>
            </p>
            <h4>1. </h4><h3>WICKED PALM TREES</h3><br /> <span className="colorChicoNaranja"> <b> (Drop 10 Big Golded Walruses to random holders)</b></span>
            <p> 
             Once we have owr first 25 sales, we will get to the famous wicked palm trees. This place is no piece of cake, so we decided  to drop The Big Gold
Walruses to encourage you to continue.
            </p>
            <h4>2. </h4><h3>THE BEGINNING</h3><br />  <span className="colorChicoNaranja"> <b> (15 Big Walruses will be given away and everyone can participate)</b></span>
            <p> 
            Since we started, we have become a strong community!  But when we get to the cave, we will see that there will be many people who will want to join us, so for them we are going to give away some Walruses to allow them to be part of the team!
            </p>
            <h4>3. </h4><h3>THE BEGINNING</h3> <br /> <span className="colorChicoNaranja">  <b>(30 Tematic NFTs released whit a mint price: 0,6 SOL)</b></span>
            <p> 
            By reaching 75 sales, we will have gotten to the skull mountain. For this we will launch The Tematic Big Walrus (TTBW), with a Mint Price: 0.6 SOL.
            </p>
            <h4>4. </h4><h3>THE BEGINNING</h3><span className="colorChicoNaranja"> <b> (top-secret)</b></span>
            <p> 
            If we start to see nothing else but sand, it means that we reached the big dune. Here is where we found a gold doubloon, this doubloon will be delivered to all of The Big Walrus holders, which will serve as an entrance pass to a special place...
            </p>
            <h4>5. </h4><h3>THE BEGINNING</h3><br /> <span className="colorChicoNaranja">  <b>(5 Big Unique Walruses will be drop to holders, Mint Price:__?)</b></span>
            <p> 
            After a couple of days of travel we find 5 pirate walruses that drink in the tavern, you will know which ones they are?
            </p>
             <h4>?. </h4><h3>TO BE CONTINUED...</h3><span className="colorChicoNaranja"><b>  (See you next chapter)</b></span>
   
            
            </div>
            </div>

             <div id='galeria'>   
          <div className='flex' id='images'>

            <img className='zoom' src={require('./assets/morsas/3.png')} alt='morsa'/>
            <img className='zoom' src={require('./assets/morsas/6.png')} alt='morsa'/>
            <img className='zoom' src={require('./assets/morsas/8.png')} alt='morsa'/>
            <img className='zoom' src={require('./assets/morsas/7.png')} alt='morsa'/>
            <img className='zoom' src={require('./assets/morsas/9.png')} alt='morsa'/>
            <img className='zoom' src={require('./assets/morsas/5.png')} alt='morsa'/>
          </div>
          </div>
          <div id='below-images'>
          <img  src={require('./assets/LogoNaranja.png')} alt='morsaLogo' width="3.2%" id='logoNaranja'/>

          <p><b> To get your Walrus, check out the collection on OpenSea</b></p>
            <a id='button-buy' href='https://opensea.io/collection/thebigwalerus-store/' target='_blank' rel="noreferrer" > <b> BUY A WALRUS ON OPENSEA</b></a>
            

          </div>
        </div>
        <div id='third-section'>
          <h1>FAQ</h1>
          <ul id='FAQ'>
            <li><details>
              <summary>
                When is the mint date?
                <Icons.KeyboardArrowDown />
              </summary>
              <p>The exact date is still under discussion but it will be in the month of April</p>
            </details></li>
            <li><details>
              <summary>
                 What will the price be?
                <Icons.KeyboardArrowDown />
              </summary>
              <p>Te minting price is 0.3 SOL. The Big Walrus collection will be published on the @openSea page, on the Solana network. </p>
            </details></li>
            <li><details>
              <summary>
                How do I get whitelisted? When will the pre-sale be?
                <Icons.KeyboardArrowDown />
              </summary>
              <p> We are not doing pre-sales or whitelisting. Everyone will get the same fair chance to mint a Big Walrus on mint day. </p>
            </details></li>
            <li><details>
              <summary>
               How many Big Walruses will be available?
                <Icons.KeyboardArrowDown />
              </summary>
              <p>The initial amount of walruses published in open sea will be 25 walruses, to see more information check the Road Map </p>
            </details></li>
            <li><details>
              <summary>
                Who is the team behind it?
                <Icons.KeyboardArrowDown />
              </summary>
              <p>In summary, we are a group of experienced professional engineers who like to do things right. We hope to exceed all your expectations! (You can read more about it on the Team section, right below).</p>
            </details></li>
          </ul>
        </div>
        <div id='fourth-section' className='flex' >
          <div id='team-container'>
            <h1>THE TEAM</h1>
            <p> Made up of 4 old friends who met in college, TBW team is made up of people with a clear objective and an achievable goal.</p>
            <ul id='team'>
              <li><h4>DOCTOR GRANT: </h4>  Loves dinosaurs but 's a bit dyslexic</li>
              <li><h4>STEVEN:</h4>  Addicted to the series but draws well</li>
              <li><h4>FIELD GARMET:</h4> Drinks "mate" all day, but 's smart.</li>
              <li><h4>EDWARD TEACH:</h4> Loves to be in the tavern with the walruses</li>
            </ul>
          </div>
          <div id='team-images' className='flex'>
            <img src={require('./assets/Francisco.png')} alt='morsa'/>
            <img src={require('./assets/Giuli.png')} alt='morsa'/>
            <img src={require('./assets/Camila.png')} alt='morsa'/>
            <img src={require('./assets/Santiag.png')} alt='morsa'/>
          </div>
        </div>
        <div className='separator'/>
      

        <Footer />
        
      </motion.div>
   
     
  )
}

export default Bar