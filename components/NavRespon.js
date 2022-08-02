import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../styles/NavRespon.module.css"
import Image from "next/image"


//C:\Users\MR22\stock-app\frontend\public
const NavRespon = () => {

 
  return (
    <nav className={styles.nav}>
        <div className={styles.img}>
         <Link href="/"><h1 className={styles.logo}>LESSON</h1></Link> 
        </div>

        <div className={styles.burger}>
        <Image alt='Burger-Icon' src={'/burgerWhite.png'} height={35} width={40}></Image>
        </div> 
     
      {/* <div className={styles.navToggle}>
        <ul className={styles.ulRes}>
        <Link href="/"><a className={styles.li}>Home</a></Link>
        <Link href="/info"><a className={styles.li}>Info</a></Link>
        <Link href="/data"><a className={styles.li}>Data</a></Link> 
        <Link href="/weg"><a className={styles.li}>Weg</a></Link>
        <Link href="/brain"><a className={styles.li}>Brain</a></Link> 
        </ul>
      </div> */}
    </nav>
  )
}

export default NavRespon