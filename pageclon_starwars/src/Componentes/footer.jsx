import React from 'react';
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import './App.css';
import { FaChild } from 'react-icons/fa';

function App() {
  const redirectToKids = () => {
    window.location.href = 'https://www.starwarskids.com/';
  };
  const redirectToYoutube = () => {
    window.location.href = 'https://www.youtube.com/user/starwars/';
  };
  const redirectToTwitter = () => {
    window.location.href = 'https://twitter.com/starwars/';
  };
  const redirectToInstagram =()=> {
     window.location.href = 'https://www.instagram.com/starwars/';
  };
  const redirectToFacebook =() =>{
     window.location.href = 'https://www.facebook.com/StarWars/';
  };
  return (
    <footer>
      <p>More From Star Wars:</p>
      <div>
     <FaFacebook className="icon"onClick={redirectToFacebook}/>
     <FaInstagram className="icon"onClick={redirectToInstagram}/>
     <FaTwitter className="icon" onClick={redirectToTwitter} />
     <FaYoutube className="icon"onClick={redirectToYoutube} />
     <span className="separator2"></span>
     <FaChild className="icon" onClick={redirectToKids} />
      </div>
      <div>
      <p> TM & © Lucasfilm Ltd. All Rights Reserved</p>
      </div>
      <p>
        <a className="terms-link" href="https://disneytermsofuse.com">
          Terms of Use
        </a>
        <span className="separator"></span>
        <a className="terms-link" href="https://disneytermsofuse.com">
        Additional Content Information
        </a>
        <span className="separator"></span>
        <a className="terms-link" href="https://privacy.thewaltdisneycompany.com/en/">
        Privacy Policy
        </a>
        <span className="separator"></span>
        <a className="terms-link" href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/">
        Children's Online Privacy Policy
        </a>
        <span className="separator"></span>
        <a className="terms-link" href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-california-privacy-rights/">
        Your California Privacy Rights
        </a>
        <span className="separator"></span>
        <a className="terms-link" href="https://www.shopdisney.com/franchises/star-wars/?CMP=SYN-Dcom&att=StarWars_Footer_Store">
        Star Wars at shopDisney
        </a>
        <span className="separator"></span>
        <a className="terms-link" href="https://support.starwars.com/hc/en-us">
        Star Wars Helpdesk
        </a>
        <span className="separator"></span>
        <a className="terms-link" href="https://preferences-mgr.truste.com/?type=starwars&affiliateId=115">
        Interest-Based Ad
        </a>
        <span className="separator"></span>
        <a className="terms-link" href="https://privacyportal-de.onetrust.com/webform/64f077b5-2f93-429f-a005-c0206ec0738e/0a4f1f0b-7130-421f-971d-ef578c0bce6d">
        Do Not Sell My Personal Information
        </a>

      </p>
    </footer>
  );
}
export default App;
