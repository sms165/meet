import React from "react";
// import { Toggle } from "./Toggle";
// import map from "./assets/cartography.svg";
// import mapDark from "./assets/cartography-dark.svg";
import "./WelcomeScreen.css";




// function themeChange(){
    
  
//   document.body.classList.toggle("dark-theme");
//    let pp= document.getElementById("pp");
//    pp.classList.toggle("dark-theme");
//   let ws= document.getElementById("ws");
//   ws.classList.toggle("dark-theme");
//   let bg= document.getElementById("image-bg")
//  if(bg.src.match('./assets/cartography.svg')){
//  //bg.src('./assets/cartography-dark.svg')
//  document.getElementById("image-bg").src='./assets/cartography-dark.svg';
//  }
//  else{
//   document.getElementById("image-bg").src='./assets/cartography.svg';
//   // bg.src('./assets/cartography.svg')
//  }

// }


function WelcomeScreen(props) {

  
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen " id="ws">
        
      <h1>Welcome to the Meet app</h1>
    
      <h4>
        Log in to see upcoming events around the world for full-stack developers
      </h4>
      <div className="button_cont" align="center">
        <div className="google-btn">
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log
o.svg"
              alt="Google sign-in"
            />
          </div>
          <button
            onClick={() => {
              props.getAccessToken();
            }}
            rel="nofollow noopener"
            class="btn-text"
          >
            <b>Sign in with google</b>
          </button>
        </div>
      </div>
      <a
        href="https://sms165.github.io/meet/privacy.html"
        rel="nofollow noopener"
        id="pp"
      >
        Privacy policy
      </a>
      <img src='./assets/cartography.svg' id="image-bg" alt="map of the world"   />
    </div>
  ) : null;
}
export default WelcomeScreen;
