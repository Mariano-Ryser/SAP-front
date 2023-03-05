import React, { useState } from 'react';
import Link from 'next/link';
// import styles from "../styles/Icons.module.css";
import styles from "../styles/Fotos.module.css";
import Image from "next/image"


const Fotos = () => {
// const topo = () =>{alert("Wala ! - Mapeo de elementos")
//   console.log("peticion")
// }

const icons = [
  {img: "champi.png"},
  {img: "email.png"},
  {img: "github.png"},
  {img: "team.jpg"},
  {img: "github.png"},
  {img: "github.png"},
  {img: "github.png"},
  {img: "github.png"},
  {img: "github.png"},
 
]

  return (
    <>


<div className={styles.titel}>WORKING HERE</div>



        <div className={styles.boxFotos}>

          <div
            // onClick={()=>{topo()}}
            className={styles.foto}
            style={{backgroundImage: `url('/3.png')`}}
            >
          </div>

          {icons.map((item,index) => (
            <div key={index}
            //    onClick={()=>{topo()}}
               className={styles.foto}
               style={{backgroundImage: `url('/img/${item.img}')`}}
                >
            </div>
         ))}
        </div> 

        
  </>
  )
}

export default Fotos