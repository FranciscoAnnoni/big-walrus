import CountdownTimer from './Components/CountdownTimer/CountdownTimer';
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
          <p id="colorNaranja"> <b> (There are no whitelists or pre-sales, everyone can participate</b>)</p>  <br/>
          <p id='subtitulo2'>First drop Count Down:</p><CountdownTimer countdownTimestampMs={1653420000000}/>
        </div>

        <br/>
        <div className='separator'/>
        <div className='flex' id='first-section'>
          <img src={require('./assets/gifPrincipal.gif')} alt='walrus-02' id= "picture1"/>
          <div>
            <h2>THE BIG</h2>
            <h2 id='walrus'>WALRUS</h2>

            <p id='ProgetDefinition'> 
            <b>The Big Walrus (TBW)</b> is a collection of Non-Fungible Tokens living on Solana blockchain, publish on OpenSea. <br />
            NFTs are <b> immutable and forever.</b> We only have one chance to do it right, so we obsess over <b> quality </b> and review all <b> details. </b>
            That is why we decided to make each NFT <b>by hand</b>, generating a <b>unique </b> and <b> incomparable</b> collection, 
            for this reason <b>the liquidity</b> of the collection <b>is very limited.</b><br /> 
            In addition, when you buy a big walrus you are not paying only for art, 
            but also to be part of the <b id= 'SoloEnNegrita'> Big Walrus membership card </b>, 
            and grants access to <b> Members-Only </b> benefits, which are described in the <a id= 'SoloEnNegrita' href='#second-section'> Road Map </a>. <br />
            Future areas and perks can be <b > unlocked by the community </b> through <a id= 'SoloEnNegrita' href='#second-section'> Road Map </a> activation.<br />
            </p>
          </div>
        </div>
        <div className='separator'/>
        <div className='flex' id='second-section'>
          
          <h1>ROAD MAP</h1>

          <div id='roadmap'>
            <img src={require('./assets/roadmap-01.png')} alt='RoadMap1' id="RoadMap1"/>
            

            
            <div id='text'>
            <h2 id='referencias'>REFERENCES:</h2>

            <h3>THE BEGINNING</h3> <span className="colorChicoNaranja"> <br /> <b> (starting point)</b></span>
            <p> 
            We start owr journey in search of The Lost Treasure. <br /> 
            <b> &#x2022;</b> We drop 25 special Wlaruses <b>at once.</b> <br />
            <b> &#x2022;</b> Mint price: <b> 0.3 SOL</b> <b> &#x2022;</b> Item: 25 special <b> &#x2022;</b> Public Giveway
            
            </p>
            <h4>1. </h4><h3>WICKED PALM TREES</h3><br /> <span className="colorChicoNaranja"> <b> (Drop 10 Big Golded Walruses to random holders)</b></span>
            <p> 
             When we reach 25 sales, we will get to the wicked palm trees. <br /> 
             <b> &#x2022;</b> We drop 25 common Wlaruses.<br />
             <b> &#x2022;</b> Mint price: <b> (0.3 - 0.4 SOL)</b> <b> &#x2022; </b> Item: 25 common<b> &#x2022;</b> <b>Holders Giveway</b>
            </p>
            <h4>2. </h4><h3>THE CAVE</h3><br />  <span className="colorChicoNaranja"> <b> (There will be a Big Giveway and everyone can participate)</b></span>
            <p> 
            We arrived at a cave, and many people wanted to join us.<br /> 
            <b> &#x2022;</b> We drop 25 common-rare Wlaruses.<br />
            <b> &#x2022;</b> Mint price: <b>0.4 SOL</b> <b> &#x2022;</b> Item: 25 (common-rare) <b> &#x2022;</b> <b>Special Giveaway</b>   
            </p>
            <h4>3. </h4><h3>SKULL MOUNTAIN</h3> <br /> <span className="colorChicoNaranja">  <b>(25 Super rare Tematic NFTs released whit a mint price: 0,6 SOL)</b></span>
            <p> 
            By reaching 75 sales, we will have gotten to the skull mountain.<br /> 
            <b> &#x2022;</b> For this we will launch <b> The Tematic Big Walrus (TTBW)</b>. <br /> 
            <b> &#x2022;</b> Mint price: <b>0.6 SOL</b> <b> &#x2022;</b> Item: 25 (<b> super rare tematic </b>)
            </p>
            <h4>4. </h4><h3>THE BIG DUNE</h3> <br /><span className="colorChicoNaranja"> <b> (top-secret)</b></span>
            <p> 
            Once we arrive at the big dune, we will find a <b>Gold Doubloon</b> that will be given to all of The Big Walrus holders.<br /> 
            <b> &#x2022;</b><b> Which will serve as an entrance pass to a special place...</b>
            </p>
            <h4>5. </h4><h3>THE WALRUS BAR</h3><br /> <span className="colorChicoNaranja">  <b>(5 Big Unique Walruses will be drop, Mint Price:__?)</b></span>
            <p> 
            After a couple of days of travel we find 5 pirate walruses that drink in the tavern.<br /> 
            <b> &#x2022;</b> Mint price:<b>_?</b> <b> &#x2022;</b> Item: 5 (  <b>Legendary</b> )  <b> &#x2022;</b> <b>Special Announcement</b>
            </p>
             <h4>?. </h4><h3>TO BE CONTINUED...</h3> <br /><span className="colorChicoNaranja"><b>  (See you next chapter)</b></span>
   
            
            </div>
            </div>
            </div>
            <div className='flex' id='second-section2'>
             <div id='galeria'>   
          <div className='flex-1' id='images'>

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


            <a id='button-buy' target='_blank' rel="noreferrer" > <b> BUY A WALRUS ON OPENSEA</b></a>
            

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
              <p>The exact date is still under discussion but it will be in the month of May.</p>
            </details></li>
            <li><details>
              <summary>
                 What will the price be?
                <Icons.KeyboardArrowDown />
              </summary>
              <p>The minting price is 0.3 SOL. The Big Walrus collection will be published on the @openSea page, on the Solana network. </p>
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
              <p>The initial amount of walruses published in open sea will be 25 walruses, to see more information check the Road Map.</p>
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
            <img src={require('./assets/Francisco.png')} alt='morsa' id="DoctorGrant"/>
              <li><h4>DOCTOR GRANT: </h4>  <p>Loves dinosaurs but 's a bit dyslexic </p> </li>
              <img src={require('./assets/Giuli.png')} alt='morsa' id="Steven"/>
              <li><h4>STEVEN:</h4>  <p>Addicted to the series but draws well</p></li>
              
              <img src={require('./assets/Santiag.png')} alt='morsa' id="Edward-Teach"/>
              <li><h4>BNGOL:</h4> <p>Drinks "mate" all day, and 's smart.</p></li>
              <img src={require('./assets/Camila.png')} alt='morsa' id="Field-Garmet"/>
              <li><h4>LITTLE STARFISH:</h4> <p>Loves to be in the tavern with the walruses</p></li>
              
            </ul>
          </div>
          <div id='team-images' className='flex-2'>

            <img src={require('./assets/Francisco.png')} alt='morsa'/>
            <img src={require('./assets/Giuli.png')} alt='morsa' />
            <img src={require('./assets/Camila.png')} alt='morsa'/>
            <img src={require('./assets/Santiag.png')} alt='morsa' />

          </div>
        </div>
        <div className='separator'/>
      

        <Footer />

      </motion.div>



  )
}

export default Bar