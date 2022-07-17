import React, { Component } from 'react'
import { useState } from 'react';
import "./App.css";

  
  export class Toggle extends Component {

     themeChange=()=>{
       
        
        if (document.getElementById("toggle-switch").checked===true) {
            
            document.body.classList.add("dark-theme");
        //     let pp= document.getElementById("pp");
        //     pp.classList.add("dark-theme");
        //    let ws= document.getElementById("ws");
        //    ws.classList.add("dark-theme");
        //    document.getElementById("image-bg").src='./assets/cartography-dark.svg';
           localStorage.setItem("toggle-switch", "true")
        }  else{
            document.body.classList.remove("dark-theme");
        //     let pp= document.getElementById("pp");
        //     pp.classList.remove("dark-theme");
        //    let ws= document.getElementById("ws");
        //    ws.classList.remove("dark-theme");
        //    document.getElementById("image-bg").src='./assets/cartography.svg';
           localStorage.setItem("toggle-switch", "false")
        }  
        if(document.getElementById("pp")){
        if(document.getElementById("toggle-switch").checked===true){
            document.body.classList.add("dark-theme");
            let pp= document.getElementById("pp");
            pp.classList.add("dark-theme");
           let ws= document.getElementById("ws");
           ws.classList.add("dark-theme");
           document.getElementById("image-bg").src='./assets/cartography-dark.svg';
           localStorage.setItem("toggle-switch", "true")
        }else{
            document.body.classList.remove("dark-theme");
            let pp= document.getElementById("pp");
            pp.classList.remove("dark-theme");
           let ws= document.getElementById("ws");
           ws.classList.remove("dark-theme");
           document.getElementById("image-bg").src='./assets/cartography.svg';
           localStorage.setItem("toggle-switch", "false")
        } 
     }
    
      
      }

    render() {
      return (
        <div className='darkmode'> <label class="switch">
        <input type="checkbox" className="toggle-switch" id="toggle-switch" onClick={this.themeChange}  />
        <span className="slider round"></span>
      </label></div>
      )
    }
  }
  