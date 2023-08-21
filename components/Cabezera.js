import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../styles/Cabezera.module.css"
import Date from './Date';

//C:\Users\MR22\stock-app\frontend\public
const Cabezera = () => {

  return (
    <>
     {/* CABEZERA 1 */}
        <header className={styles.cabezera}>
       
          <Link href="/home"><span className={styles.name}> Ciencia-con </span></Link>
          <Link href="/about"><span className={styles.name}> About </span></Link>
          
              {/* FECHA */}
                <span className={styles.Date}>
                  <Date/>
                </span>
        </header>
        {/* <aside className="aside">
       
     
        </aside> */}
        <style jsx>{`
                .aside{
                  position:absolute;
                  top:0px;
                  width:20rem;
                  height:25rem;
                  border:solid rgb(89, 195, 40) 1px;
                }
                       `}</style>
  </>
  )
}

export default Cabezera