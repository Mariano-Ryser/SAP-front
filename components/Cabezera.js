import React, { useState } from 'react';
import Link from 'next/link';
import Date from './Date';

//C:\Users\MR22\stock-app\frontend\public
const Cabezera = () => {

  return (
    <>
     {/* CABEZERA 1 */}
        <header className="cabezera">
       
          <Link href="/home"><span className="name"> Book </span></Link>
          <Link href="/about"><span className="name"> About </span></Link>
          
              {/* FECHA */}
                <span className="Date">
                  <Date/>
                </span>
        </header>

        <style jsx>{`
        
         
.cabezera{
    justify-content: space-between;
    display: flex;
    align-items: center;
    position: relative;
    margin: auto;
    width:40rem;
    height: 4rem;
    border-bottom: 1px solid rgba(173, 172, 172, 0.282);
}

.name{
    color: rgb(191, 191, 191);
    letter-spacing: 0.05rem;
    margin: 1.4em;
    margin-left: 2rem;
    font-size: 1.4rem;
    font-weight: 800;
    font-family: 'Josefin Sans', sans-serif;
}

.name:hover, .name2:hover, .name3:hover{
    color: rgb(255, 255, 255);
    cursor: pointer;
}
.Date{
    position: relative;
    margin-right: 1rem;
    text-align: end;
    color: #dedede;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 900;
    font-size: 1rem;
}

@media (max-width:600px){ 

.cabezera{
    width: 90%;
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

.name{
    /* border:solid red 1px; */
    letter-spacing: 0.05rem;
    margin: 1.7em;
    margin-left: 0.5rem;
    font-weight: 800;
    font-family: 'Josefin Sans', sans-serif;
}
  }
                       `}</style>
  </>
  )
}

export default Cabezera