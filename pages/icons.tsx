import React, { useState } from 'react';
// import Link from 'next/link';
import styles from "../styles/Iconsss.module.css";
// import Image from "next/image"


const Icons = () => {

const icons = [
  {img: "insta.png", link:"/"},
  {img: "Alienverde.gif"},
  {img: "alien.png"},
  {img: "bootstrap.gif"},
  {img: "bichoWhite.png"},
  {img: "champi.png"},
  {img: "css.gif"},
  {img: "discord.png"},
  {img: "docker.png"},
  {img: "drag2.png"},
  {img: "email.png"},
  {img: "earth.gif"},
  {img: "git.png"},
  {img: "js.png"},
  {img: "linkedin.png"},
  {img: "next.png"},
  {img: "github.png"},
  {img: "googleLogo.png"},
  {img: "paint3d.png"},
  {img: "html.gif"},
  {img: "linux.png"},
  {img: "window.png"},
  {img: "watsap.png"},
  {img: "visual.gif"},
  {img: "php.png"},
  {img: "twiter.png"},
  {img: "terminal.png"},
  {img: "snake.png"},
  {img: "tic1.png"},
  {img: "phone.png"},
  {img: "pizza.png"},
  {img: "obs.png"},
  {img: "PacYellow.png"},
  {img: "vue.png"},
  {img: "mooon.gif"},
]

  return (
    <>
        <div className="boxIcons"
        //  style={{height: size}}
         >
          <div
            // onClick={()=>{topo()}}
            className="icon"
            style={{backgroundImage: `url('/img/node.png')`}}
            >
          </div>

          {icons.map((item,index) => (
            <div key={index}
              //  onClick={()=>{topo()}}
               className="icon"
               style={{backgroundImage: `url('/img/${item.img}')`}}
                >
            </div>
         ))}
        </div>

        <style jsx>{`
        .boxIcons{
          width: 40rem;
          height: 100vh;
          margin: auto;
          display: grid;
          overflow: hidden;
          gap: 0.5rem; 
          grid-auto-rows: 5rem;
          grid-auto-columns: repeat(auto-fill, minmax(0.2rem, 4fr));
          grid-template-columns: repeat(12,1fr);
          padding-top: 1.4rem;
          padding-bottom: 22px;
  }
  
  .icon{
      display: inline-block;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      height: 90px;
      width: 90px;
     grid-column: span 2;
     filter: blur(0.4px);
     margin: auto;
     transition:0.3s 
    }
  .icon:hover{
    cursor: pointer;
    transform: scale(105%) rotateZ(1.5deg);
    filter: blur(0.0px); 
  }
  
  @media (max-width:600px){ 
    .boxIcons{
      width: 27rem;
      margin: auto;
      display: grid;
      overflow: hidden;
      gap: 1rem; 
      grid-auto-rows: 4.2rem;
      grid-auto-columns: repeat(auto-fill, minmax(0.2rem, 5fr));
      padding-top: 0.3rem;
      padding-bottom: 12px;
    }
    .icon{
      display: inline-block;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      height: 70px;
      width: 70px;
     grid-column: span 3;
     filter: blur(0.4px);
     margin: auto;
     transition:0.3s 
    }

    .icon:hover{
      cursor: pointer;
      transform: scale(105%) rotateZ(1.5deg);
       filter: blur(0.0px); 
    }
  }
  
  
  
         
           `}</style>
        
  </>
  )
}

export default Icons