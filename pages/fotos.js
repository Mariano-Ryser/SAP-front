import React, { useState } from 'react';
import Link from 'next/link';
// import styles from "../styles/Icons.module.css";
// import styles from "../styles/Fotos.module.css";
import Image from "next/image"


const Fotos = () => {
// const topo = () =>{alert("Wala ! - Mapeo de elementos")
//   console.log("peticion")
// }

const icons = [
  {img: "champi.png"},
  {img: "email.png"},
  {img: "github.png"},
  {img: "github.png"},
  {img: "github.png"},
  {img: "github.png"},
  {img: "github.png"},
  {img: "github.png"},
 
]
const valor = 100;


  return (
    <>


<div className="titel">WORKING HERE</div>

        <div className="boxFotos">

          <div
            // onClick={()=>{topo()}}
            className="foto"
            style={{backgroundImage: `url('/.png')`}}
            >
          </div>

          {icons.map((item,index) => (
            <div key={index}
            //    onClick={()=>{topo()}}
               className="foto"
               style={{backgroundImage: `url('/img/${item.img}')`}}
                >
            </div>
         ))}
        </div> 


        
        <style jsx>
           {`
           .titel
           {
            color: rgb(${valor}, 200, 255);
           }

.boxFotos{
    background-color: black;
    display: grid;
    /* height: 240px; */
    overflow: hidden;
    gap: 0.5rem; 
    grid-auto-rows: 8rem;
    grid-auto-columns: repeat(auto-fill, minmax(0.2rem, 4fr));
    grid-template-columns: repeat(12,1fr);
    padding-top: 1.4rem;
    padding-bottom: 22px;
    
  }
  .foto{
    display: inline-block;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 190px;
    width: 190px;
   grid-column: span 2;
   filter: blur(0.4px);
   /* filter: drop-shadow(4px 4px 6px rgb(109, 109, 109));  */
   margin: auto;
   transition:0.3s 
  }
  .foto:hover{
    cursor: pointer;
    transform: scale(105%) rotateZ(1.5deg);
     filter: blur(0.0px); 
     /* filter: drop-shadow(2px 2px 6px rgb(109, 109, 109));  */
  }

  @media (max-width:600px){ 
    
    .boxFotos{
      background-color: black;
      display: grid;
      /* height: 240px; */
      overflow: hidden;
      gap: 1rem; 
      grid-auto-rows: 7rem;
    }
    .foto{
        border: dashed rgb(144, 219, 5) 1px ;
      display: inline-block;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      height: 120px;
      width: 120px;
     grid-column: span 4;
     filter: blur(0.4px);
     transition:0.3s 
    }
    .foto:hover{
      cursor: pointer;
      transform: scale(105%) rotateZ(1.5deg);
       filter: blur(0.0px); 
    }
    
  }
               `}
       </style>

        
  </>
  )
}

export default Fotos