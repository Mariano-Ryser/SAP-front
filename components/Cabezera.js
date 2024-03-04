import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image' 

//C:\Users\MR22\stock-app\frontend\public
const Cabezera = () => {

  return (
    <>
     {/* CABEZERA 1 */}
       <div className='cabezerafondo'></div>
        <header className="cabezera">
          <Link href="/home"><div className='book'><Image src="/gitbook-color.svg" height={40} width={40} /></div></Link>
          <Link href="/about"><span className="name"> About </span></Link>
          
              {/* FECHA */}
                {/* <span className="Date">
                  <Date/>
gitbook

                </span> */}
        </header>

        <style jsx>{`
        
        .cabezerafondo{
    position: absolute;
    margin: auto;
    height: 6.5rem;
    margin-bottom: 0px;
    transition: 0.2s;
} 
.cabezera{
  border-radius: 0px 0px 5px 5px;
  width: 85%;
    position: relative;
    margin: auto;
    height: 6rem;
    margin-bottom: 13px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0.772);
    
    transition: 0.2s;
}
.book{
    cursor: pointer;
    margin: auto 20px;
    margin-left: 2rem;
}

.name{
  color: #ffffffe9;
    letter-spacing: 0.05rem;
    margin: auto 20px;
    margin-left: 2rem;
    font-size: 2.4rem;
    font-weight: 800;
    font-family: 'Josefin Sans', sans-serif;
}

.name:hover, .name2:hover, .name3:hover{
  color: #ffffff;
    cursor: pointer;
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
   width: 95%;
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
    color: rgb(255, 255, 255);
    letter-spacing: 0.05rem;
    margin: auto 20px;
    margin-left: 2rem;
    font-size: 1.4rem;
    font-weight: 800;
    font-family: 'Josefin Sans', sans-serif;
}
 
  }
                       `}</style>
  </>
  )
}

export default Cabezera