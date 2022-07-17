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
        // if (this.state.toggleA===false) {
        //     this.setState({toggleA:true})
        // }else{
        //     this.setState({toggleA:false})
        // }
        if (document.getElementById("toggle-switch").checked) {
            document.body.classList.add("dark-theme");
            let pp= document.getElementById("pp");
            pp.classList.add("dark-theme");
           let ws= document.getElementById("ws");
           ws.classList.add("dark-theme");
           document.getElementById("image-bg").src='./assets/cartography-dark.svg';
           localStorage.setItem("toggle-switch", "true")
        }  else{
            document.body.classList.remove("dark-theme");
            let pp= document.getElementById("pp");
            pp.classList.remove("dark-theme");
           let ws= document.getElementById("ws");
           ws.classList.remove("dark-theme");
           document.getElementById("image-bg").src='./assets/cartography.svg';
           localStorage.setItem("toggle-switch", "false")
        }  
    //         document.body.classList.toggle("dark-theme");
    //      let pp= document.getElementById("pp");
    //      pp.classList.toggle("dark-theme");
    //     let ws= document.getElementById("ws");
    //     ws.classList.toggle("dark-theme");
    //     let bg= document.getElementById("image-bg")
    //    if(bg.src.match('./assets/cartography.svg')){
    //    //bg.src('./assets/cartography-dark.svg')
    //    document.getElementById("image-bg").src='./assets/cartography-dark.svg';
    //    }
    //    else{
    //     document.getElementById("image-bg").src='./assets/cartography.svg';
    //     // bg.src('./assets/cartography.svg')
    //    }
        
  
        
      
      }

    render() {
      return (
        <div className='darkmode'> <label class="switch">
        <input type="checkbox" className="toggle-switch" id="toggle-switch" onClick={this.themeChange}  />
        <span class="slider round"></span>
      </label></div>
      )
    }
  }
  