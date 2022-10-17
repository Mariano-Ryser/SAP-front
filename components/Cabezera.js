import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../styles/Cabezera.module.css"
import Date from '../components/Date';

//C:\Users\MR22\stock-app\frontend\public
const Cabezera = () => {
 
  return (
    <>
        <div className={styles.cabezera}>
          <div className={styles.boxData}>
                <span className={styles.name}>0 / Mariano Ryser / sap </span>
                <span 
                className={styles.Date}
                >
                  <Date/>
                </span>
          </div> 
        </div>

        <div className={styles.cabezera2}>
          <div className={styles.boxData2}>
                {/* <div className={styles.foto} style={{backgroundImage: `url('/me/me.jpg')`}}></div> */}
                <span className={styles.name2}>https://sap-front.vercel.app/</span>
                
          </div> 
        </div>
       
        
  </>
  )
}

export default Cabezera