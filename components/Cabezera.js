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
       
          <Link href="/"><span className={styles.name}> Zap </span></Link>
                
              {/* FECHA */}
                <span className={styles.Date}>
                  <Date/>
                </span>
         
        </div>
       
        
  </>
  )
}

export default Cabezera