import React, { useState } from 'react';
// import Link from 'next/link';
import styles from "../styles/Icons.module.css";
// import Image from "next/image"


const Icons = () => {

const icons = [
  {img: "insta.png"},
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
        <div className={styles.boxIcons}
        //  style={{height: size}}
         >
          <div
            // onClick={()=>{topo()}}
            className={styles.icon}
            style={{backgroundImage: `url('/img/node.png')`}}
            >
          </div>

          {icons.map((item,index) => (
            <div key={index}
              //  onClick={()=>{topo()}}
               className={styles.icon}
               style={{backgroundImage: `url('/img/${item.img}')`}}
                >
            </div>
         ))}
        </div>

        
  </>
  )
}

export default Icons