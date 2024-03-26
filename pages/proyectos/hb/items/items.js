import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image"


const Items = () => {

const images = [
 
  {
  img: "thedevastator.gif",
  categori:"rare",
  link:"/",
  name:"The Devastator"
  },
  {
    img: "blackshadowsw-ord.gif",
    link:"/",
    name:"Black Shadows"
    },
  
  {img: "Ressurectionwand.gif",
   link:"/",
   name:"Ressurection Wand"
 },
 
{img: "bane.png",
   link:"/",
   name:"Banne"
},
{img: "Bastardsword.gif",
   link:"/",
   name:"Bastard Sword"
},
{img: "battleaxe.gif",
   link:"/",
   name:"Battle Axe"
},
{img: "Battlehammer.gif",
   link:"/",
   name:"Battle Hammer"
},


{img: "Bbh.gif",
  link:"/",
  name:"Bbh"
},

]

  return (
    <>

    <Link href="/proyectos/hb/hb"><h3>cd ..</h3></Link>
      <div className="gallery"//  style={{height: size}}
         >
          {images.map((image,index) => (

      
            <div key={index}
              //  onClick={()=>{topo()}}
              className="gallery-item"
                >
               <div className='img'
                    style={{backgroundImage: `url('/itemsHB/${image.img}')`}}
               >
               </div>
                 <span>{image.name}</span> 
                 <span>{image.name}</span> 
                 <span>{image.name}</span> 
                 <span>{image.name}</span> 
                 <span>{image.name}</span> 

           

            </div>
       

         ))}
        </div>

     

        <style jsx>{`
        .gallery {
         padding-top: 1rem;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 2fr));
          gap: 8px;
          margin: 0 auto;
          max-width: 900px;
        }
        .gallery-item {
          padding-top: 0.3rem;
          overflow: hidden;
          border-radius: 8px;
          transition: transform 0.3s ease;
          border: solid red 1px;

        }
        .gallery-item:hover {
          transform: scale(1.05);

        }
        .img {
          border: solid 1px greenyellow;
          width: 100%;
          height: 100px;
          display: block;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }
        span{
          border: dashed 1px bisque;
          margin: 3px;
          text-align: center;
          display: block;
          font-size: 0.8rem;
         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 600;
          transition: 0.2s;
        }
       
        span:hover{
          border: dashed 1px rgb(19, 255, 3);
          background-color: rgb(74, 74, 74);
          cursor: default;
        
        }
       
      

  @media (max-width:600px){ 

   
  }
  
  
  
         
           `}</style>
        
  </>
  )
}

export default Items