import React, { Component } from 'react'
import { useState } from 'react';
import "./App.css";

  
  export class Toggle extends Component {

    constructor(props) {
        super(props);
        this.state = {
          toggleA: false
        };
      }

     themeChange=()=>{
        
            this.setState({toggleA:true})
            document.body.classList.toggle("dark-theme");
         let pp= document.getElementById("pp");
         pp.classList.toggle("dark-theme");
        let ws= document.getElementById("ws");
        ws.classList.toggle("dark-theme");
        let bg= document.getElementById("image-bg")
       if(bg.src.match('./assets/cartography.svg')){
       //bg.src('./assets/cartography-dark.svg')
       document.getElementById("image-bg").src='./assets/cartography-dark.svg';
       }
       else{
          
        document.getElementById("image-bg").src='./assets/cartography.svg';
        // bg.src('./assets/cartography.svg')
       }
        
  
        
      
      }

    render() {
      return (
        <div className='darkmode'> <label class="switch">
        <input type="checkbox" className="toggle-switch" onClick={this.themeChange} />
        <span class="slider round"></span>
      </label></div>
      )
    }
  }
  