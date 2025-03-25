import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image' 
import Date from "../Date"

//C:\Users\MR22\stock-app\frontend\public
const Cabezera = () => {

  return (
    <>
     {/* CABEZERA 1 */}
        <header className="cabezera">
            <Link href="/">
                 <li className='li'>HOME</li>
            </Link>
            <Link href="/about">
                 <li>ABOUT</li>
            </Link> 
            {/* <Date></Date> */}

          
          
                 {/* <span className="Date"><Date/></span>  */}
        </header>

  <style jsx>{`
   
        
      
.cabezera{
    margin: auto;
    height: 6rem;
    margin-bottom: 13px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-around;
    transition: 0.2s;
    
}

.Date{
    position: relative;
    margin-right: 1rem;
    text-align: end;
    color: #ffffff;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 900;
    font-size: 1rem;
}

@media (max-width:600px){ 
  .cabezerafondo{
    width: 100%;
    height: 4rem;
} 
.cabezera{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin: auto;
    height: 4rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}


  }
                       `}</style>
  </>
  )
}

export default Cabezera