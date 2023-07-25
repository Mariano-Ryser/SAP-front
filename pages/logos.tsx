import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image"


const Logos = () => {


  return (
    <>
        <div className="container"
        //  style={{height: size}}
         >
      <h1>Social Media</h1>
      <Link href={""}>
        <div className='imgs' style={{backgroundImage: `url('/img/linkedin.png')`}}></div>
      </Link>

        <div className='imgs' style={{backgroundImage: `url('/img/twiter.png')`}}></div>
        <Link href={"https://www.instagram.com/mariano_220591/"}>
        <div className='imgs' style={{backgroundImage: `url('/img/insta.png')`}}></div>
        </Link>
        <h1>Empresas</h1>
        <div className='imgs' style={{backgroundImage: `url('/img/zuriVeloLogo.png')`}}></div>
        <div className='imgs' style={{backgroundImage: `url('/img/Alienverde.gif')`}}></div>
       <h1>Planetas</h1>
        <div className='imgs' style={{backgroundImage: `url('/img/earth.gif')`}}></div>
        <div className='imgs' style={{backgroundImage: `url('/img/bichoWhite.png')`}}></div>
     
       <h1>Otros</h1>
       
      <Link href={""}>
        <div className='imgs' style={{backgroundImage: `url('/img/linkedin.png')`}}></div>
      </Link>
        
        </div>

        <style jsx>{`
  .imgs{
    display: inline-block;
    border: solid rgb(72, 48, 48) 1px;
    border-radius: 10px;
    width:200px;
    height: 130px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transition: 0.2s;
  }
  .imgs:hover{
    border: solid rgb(216, 240, 2) 1px;
    transform: rotateZ(2deg) scale(1.02) translateY(0.2rem) translateX(0.4rem);
    cursor: pointer;
    box-shadow: rgb(96, 96, 96) 0px 0px 14px 0px;
  }
  
  .container{
        width:40rem;
        margin: auto;
        color: rgb(210, 210, 210);
        text-align:center;
        font-family:monospace;
    }
    }
  
  
  
  @media (max-width:600px){ 
    .imgs{
    display: inline-block;
    border: solid rgb(72, 48, 48) 1px;
    border-radius: 10px;
    width:20rempx;
    height: 10rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transition: 0.2s;
    .container{
      width:95%;
      margin: auto;
      padding:0rem;
    }
  


  }
  
  
  
         
           `}</style>
        
  </>
  )
}

export default Logos