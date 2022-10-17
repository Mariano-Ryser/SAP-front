import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../styles/Icons.module.css";
import Image from "next/image"


const Icons = () => {
const topo = () =>{alert("wala")
  console.log("peticion")
}

const array= [
  {key:1 , value: "saturn.png"},
  {key:2 , value: "bichoWhite.png"},
  {key:3 , value: "github.png"},
  {key:4 , value: "alien.png"},
]

  return (
    <>
        <div className={styles.boxIcons}
        //  style={{height: size}}
         >
          <div
            onClick={()=>{topo()}}
           className={styles.icon}
            style={{backgroundImage: `url('/img/node.png')`}}
            >

          </div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/insta.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/Alienverde.gif')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/alien.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/bootstrap.gif')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/bichoWhite.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/champi.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/css.gif')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/discord.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/docker.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/cubegif.gif')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/drag2.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/fo.gif')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/email.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/earth.gif')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/earth2.gif')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/earth.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/git.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/js.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/linkedin.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/next.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/github.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/googleLogo.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/paint3d.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/html.gif')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/linux.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/window.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/watsap.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/visual.gif')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/php.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/twiter.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/terminal.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/snake.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/tic1.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/react.gif')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/phone.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/pizza.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/obs.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/PacYellow.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/vue.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/venus.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/venus.gif')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/uranus.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/pluto.png')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/mooon.gif')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/meteoro.gif')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/mercurio2.gif')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/marss.gif')`}}></div>

          <div className={styles.icon} style={{backgroundImage: `url('/img/mars-unscreen.gif')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/jupiter.gif')`}}></div>
          <div className={styles.icon} style={{backgroundImage: `url('/img/saturn.png')`}}></div>
        </div>

        {/* {array.map(({key, value}) => (
                <div >
                   <span style={{color: "red"}}>
                    {key} {value} TAMBIEN DEJAMOS EN CLARO COmO ES EL TEMA DEL MAPEADO PARA CONTINUAR NO UN CODIGO LIMPIO
                  </span> 

                  <div 
                  className={styles.icon}
                  style={{backgroundImage: `url('/img/${value}')`}}
                   >
                    {key}"Hola"
                   </div>


                </div>
                
            ))} */}
  </>
  )
}

export default Icons