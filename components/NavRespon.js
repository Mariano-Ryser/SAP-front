import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../styles/NavRespon.module.css"
import Image from "next/image"


//C:\Users\MR22\stock-app\frontend\public
const NavRespon = () => {

   function openList(){
    const burger = document.getElementById('burger')
    const aside = document.getElementById('aside')
    if(aside.style.transform == 'translateY(0%)'){
      aside.style.transform = 'translateY(-100%)';
      setTimeout(()=>{
        aside.style.display="none"
      },200);
    }else{
      aside.style.display = 'block'
      setTimeout(()=>{
        aside.style.transform = 'translateY(0%)'
      },0);
    }
    if(burger.style.transform == 'rotateZ(90deg)'){
      burger.style.transform = 'rotateZ(0deg)'
    } else {
      burger.style.transform = 'rotateZ(90deg)'
    }
  }

 
  return (
    <>
    <nav className={styles.nav}>
        <div className={styles.img}>
         <Link href="/"><h1 className={styles.logo}></h1></Link> 
        </div>

        <div id='burger' className={styles.burger} onClick={openList}>
         <Image alt='Burger-Icon' src={'/burgerWhite.png'} height={20} width={25}></Image>
        </div> 

    </nav>
    <aside id='aside' className={styles.asideBar}>
          <ul className={styles.ul}>
            <li className={styles.li}><Link href="/"><a className={styles.a}>Home</a></Link></li>
            <li className={styles.li}><Link href="/products/create"><a className={styles.a}>Producto</a></Link></li>
            <li className={styles.li}><Link href="/msj"><a className={styles.a}>Mensajeria</a></Link></li>
            {/* <li className={styles.li}><Link href="/tecnologies"><a className={styles.a}>Tecnologies</a></Link></li> */}
            {/* <li className={styles.li}><Link href="/viventa"><a>Viventa</a></Link></li> */}
            {/* <li className={styles.li}><Link href="/code"><a>Codes</a></Link></li> */}
          </ul>
          
        </aside>
      
  </>
  )
}

export default NavRespon