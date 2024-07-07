import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../styles/Iconsss.module.css";
// import Image from "next/image"


const Icons = () => {

const icons = [
  {img: "Alienverde.gif", link:"/"},
  {img: "alien.png", link:""},
  {img: "bichoWhite.png", link:""},
   {img: "champi.png", link:""},
   {img: "css.gif", link:""},
   {img: "discord.png", link:""},
   {img: "drag2.png", link:""},
   {img: "email.png", link:""},
   {img: "earth.gif", link:""},
   {img: "git.png", link:""},
   {img: "js.png", link:""},
   {img: "linkedin.png", link:""},
   {img: "next.png", link:""},
   {img: "github.png", link:""},
   {img: "googleLogo.png", link:""},
   {img: "paint3d.png", link:""},
   {img: "html.gif", link:""},
   {img: "linux.png", link:""},
   {img: "window.png", link:""},
   {img: "visual.gif", link:""},
   {img: "php.png", link:""},
   {img: "twiter.png", link:""},
   {img: "terminal.png", link:""},
   {img: "snake.png", link:""},
   {img: "tic1.png", link:""},
   {img: "phone.png", link:""},
   {img: "pizza.png", link:""},
   {img: "obs.png", link:""},
   {img: "PacYellow.png", link:""},
   {img: "vue.png", link:""},
   {img: "mooon.gif", link:""},
   {img: "g.gif", link:""},
   {img: "robot.gif", link:""},
]

  return (
    <>
   <Link href="/proyectos/proyects"><li>/proyects..</li></Link>
        <div className="boxIcons"//  style={{height: size}}
         >

<Link href="/proyectos/posts/books">
    <div
            // onClick={()=>{topo()}}
            className="icon"
            style={{backgroundImage: `url('/img/node.png')`}}
            >
          </div>
    </Link>
        
          {icons.map((item,index) => (
            <div key={index}
              //  onClick={()=>{topo()}}
               className="icon"
               style={{backgroundImage: `url('/img/${item.img}')`}}
                >
            <Link href={item.link}>
              <div  className="icon">

              </div>

          </Link>

            </div>


         ))}
        </div>

        <style jsx>{`
       
         
           `}</style>
        
  </>
  )
}

export default Icons