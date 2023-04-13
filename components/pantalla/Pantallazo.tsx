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

           <Image
            alt='Burger-Icon'
            src={'/img/Alienverde.gif'}
            height={280} width={200}></Image>

        </div>

    </div>


    



     <style jsx>{`
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
            top:40%;
            left:43%;
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
           .logo{
            position:absolute;
            top:33%;
            left:23%;
           }
                 
}

                
         `}</style>
 </>
  )
}

export default Pantallazo

