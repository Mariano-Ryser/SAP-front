import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../styles/Cabezera.module.css"
import Image from "next/image"

//C:\Users\MR22\stock-app\frontend\public
const Cabezera = () => {
 
  return (
    <>
        <div className={styles.cabezera}>
                <div  className={styles.foto} style={{backgroundImage: `url('/me/me.jpg')`}}>
                </div>
                <span className={styles.name}>Mariano ryser</span>
       
        <div className={styles.noti1}></div>
       
       
        </div>
  </>
  )
}

export default Cabezera