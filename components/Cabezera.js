import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../styles/Cabezera.module.css"
import Date from './Date';

//C:\Users\MR22\stock-app\frontend\public
const Cabezera = () => {

  return (
    <>
     {/* CABEZERA 1 */}
        <div className={styles.cabezera}>
          <div className={styles.boxData}>
          <Link href="/"><span className={styles.name}>0 / Mariano Ryser / zap </span></Link>
                
                <span 
                className={styles.Date}
                >
                  <Date/>
                </span>
          </div> 
        </div>
        {/* CABEZERA 2 */}
        <div className={styles.cabezera2}>


          <div className={styles.boxData2}>
                <Link href="/"><span className={styles.name2}>https://zap-front.vercel.app/home</span></Link>
          </div> 
          <div className={styles.boxData2}>

                <Link href="/"><span className={styles.name2}>Prototipo-Test</span></Link>
          </div> 
        

         
        </div>
        <div className={styles.boxData3}>

<Link href="/"><span className={styles.name3}>Prototipo-Test</span></Link>
</div> 
        
  </>
  )
}

export default Cabezera