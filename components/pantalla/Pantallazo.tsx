import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react';

function Pantallazo() {

function click(){
    const logo =  document.getElementById('logo')

    logo.style.transition = "opacity 1s, visibility 1s linear";
    logo.style.opacity = "0";
    logo.style.visibility = "hidden";

    setTimeout(function() {
        logo.style.display = "none";
      }, 1000);

}

return (
  <>
  
    <div
    id='logo'
    className='pantallazo'>

        <div 
        onClick={click}
        className='logo'>
          
          <h1>Ciencia-con</h1>
           {/* <Image
            alt='Burger-Icon'
            src={'/img/Alienverde.gif'}
            height={280} width={200}></Image> */}

    <div className="lds-facebook"><div></div><div></div><div></div></div> 
      </div>

    </div>
   


     <style jsx>{`
      h1{
        margin-bottom:2.2rem;
        color:white;
        font-family:monospace;
        font-size:1.4rem;
        animation:con 2s infinite alternate;
      }
      @keyframes con {
        0%{ transform:scale(1)}
        100%{transform:scale(1.1) }
      }

           .pantallazo{
            z-index:2;
            position:absolute;
            top: 0;
            color:withe;
            width:100%;
            height:100%;
            background-color:black;
           }
           .logo{
            cursor:pointer;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%, -50%)
           }
           .lds-facebook {
            z-index:3;
            display: inline-block;
            position: absolute;
            width: 80px;
            height: 80px;
            top:110%;
            left:50%;
            transform:translate(-50%, -50%)
          }
          .lds-facebook div {
            display: inline-block;
            border-radius:4rem;
            position: absolute;
            left: 8px;
            width: 20px;
            background-color:rgb(122, 212, 221);
            animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
          }
          .lds-facebook div:nth-child(1) {
            left: -20px;
            animation-delay: -0.35s;
          }
          .lds-facebook div:nth-child(2) {
            left: 32px;
            animation-delay: -0.17s;
          }
          .lds-facebook div:nth-child(3) {
            left: 86px;
            animation-delay: 0;
          }
          @keyframes lds-facebook {
            0% {
              top: 8px;
              height: 30px;
            }
            50%, 100% {
              top: 24px;
              height: 20px;
              border-radius:4rem;
              background-color:rgb(21, 212, 21);
            }
          }

                 
@media (max-width: 600px) {
    .pantallazo{
            z-index:2;
            position:absolute;
            top: 0;
            color:withe;
            width:100%;
            height:100%;
            background-color:black;
           }
           
                 
}

                
         `}</style>
         
 </>
  )
}

export default Pantallazo

