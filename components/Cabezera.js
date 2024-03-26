import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image' 

//C:\Users\MR22\stock-app\frontend\public
const Cabezera = () => {

  return (
    <>
     {/* CABEZERA 1 */}

        <header className="cabezera">
        
            <Link href="/">
                 <h3>HOME</h3>
            </Link>

          {/* <Link href="/about"><span className="name"> About </span></Link> */}
          
              {/* FECHA */}
                {/* <span className="Date">
                  <Date/>


                </span> */}
        </header>

        <style jsx>{`
        
      
.cabezera{
    position: relative;
    margin: auto;
    height: 6rem;
    margin-bottom: 13px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-around;
    background-color: rgba(46, 45, 45, 0.772);
    
    transition: 0.2s;
}
h3{
    cursor: pointer;
    margin: auto;
    margin-left: 0.6rem;
}
h3:hover{
  cursor: default;
    color: rgb(18, 221, 228);

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
    width: 80%;
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