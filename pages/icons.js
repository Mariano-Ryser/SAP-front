import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../styles/Icons.module.css";
import Image from "next/image"


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
  {img: "cubegif.gif"},
  {img: "drag2.png"},
  {img: "fo.gif"},
  {img: "email.png"},
  {img: "earth.gif"},
  {img: "earth2.gif"},
  {img: "earth.png"},
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
  {img: "venus.png"},
  {img: "venus.gif"},
  {img: "uranus.png"},
  {img: "mooon.gif"},
  {img: "meteoro.gif"},
  {img: "marss.gif"},
  {img: "mars-unscreen.gif"},
  {img: "jupiter.gif"},
  {img: "saturn.png"},
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