import React, { useState } from 'react';
// import Link from 'next/link';
import styles from "../styles/Footer.module.css"
import Image from "next/image"


//C:\Users\MR22\stock-app\frontend\public
const Footer = () => {

 
  return (
   <footer className={styles.footer} >
    <article className={styles.socialMedia}>
      <a className={styles.a} href='https://www.linkedin.com/in/mariano-ryser-073731221/' target='_blank' rel="noreferrer"><Image  alt='Linkedin' src={'/linkedin.png'} height={50} width={50}></Image></a>
      <a className={styles.a} href='https://github.com/Mariano-Ryser' target='_blank' rel="noreferrer"><Image alt='Github' src={'/github.png'} height={50} width={50}></Image></a>
      <a className={styles.a} href='https://twitter.com/RyserMariano' target='_blank' rel="noreferrer"><Image alt='Twitter' src={'/twiter.png'} height={50} width={50}></Image></a>
    </article>
   </footer>
  )
}

export default Footer