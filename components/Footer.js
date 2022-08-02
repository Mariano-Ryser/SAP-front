import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../styles/Footer.module.css"
import Image from "next/image"


//C:\Users\MR22\stock-app\frontend\public
const Footer = () => {

 
  return (
   <footer className={styles.footer} >
    <a className={styles.a} href='https://www.linkedin.com/in/mariano-ryser-073731221/' target='_blank'><Image src={'/linkedin.png'} height={50} width={50}></Image></a>
    <a className={styles.a} href='https://github.com/Mariano-Ryser' target='_blank'><Image src={'/github.png'} height={50} width={50}></Image></a>
    <a className={styles.a} href='https://twitter.com/RyserMariano' target='_blank'><Image src={'/twiter.png'} height={50} width={50}></Image></a>
   </footer>
  )
}

export default Footer