import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../styles/NavRespon.module.css"
import Image from "next/image"

//C:\Users\MR22\stock-app\frontend\public
const NavRespon = () => {


   function openList(){

    // const burger = document.getElementById('burger')

    //con desplazamiento
    // const aside = document.getElementById('aside')
    // if(
    //   aside.style.transform == 'translateY(0%)'){
    //   aside.style.transform = 'translateY(-100%)';
    //   setTimeout(()=>{
    //     aside.style.display="none"
    //   },200);
    // }else{
    //   aside.style.display = 'block'
    //   setTimeout(()=>{
    //     aside.style.transform = 'translateY(0%)'
    //   },0);
    // }

    //con aparicion y menos flujo de datos cuanticos XD

    const aside = document.getElementById('aside')
    if(
      aside.style.display == 'block'){
      aside.style.display = 'none';
      // setTimeout(()=>{
    
      // },200);
    }else{
      aside.style.display = 'block'
      // setTimeout(()=>{
     
      // },0);
    }



    // if(burger.style.transform == 'rotateZ(90deg)'){
    //   burger.style.transform = 'rotateZ(0deg)'
    // } else {
    //   burger.style.transform = 'rotateZ(90deg)'
    // }
  }


  return (
    <>    

<nav className={styles.nav}>
        <div className={styles.img}>
         <Link href="/"><h1 className={styles.logo}></h1></Link> 
        </div>
        <div id='burger' className={styles.burger} onClick={openList}>
         <Image alt='Burger-Icon' src={'/burgerWhite.png'} height={40} width={60}></Image>
        </div> 
</nav>


    <aside id='aside' className={styles.asideBar}>

    <header className={styles.header}>
          <div className={styles.boxSap}>
              <h3  className={styles.sap}>Zap</h3>
          </div>
    </header>

          <ul className={styles.ul}>
              <Link href="/"><li className={styles.li}><a className={styles.a}>Home</a></li></Link>
              <Link href="/msj"><li className={styles.li}><a className={styles.a}>Mensajeria</a></li></Link>
              <Link href="/personaje"><li className={styles.li}><a className={styles.a}>Chars Creator</a></li></Link>
              <Link href="/products/create"><li className={styles.li}><a className={styles.a}>Product Creator</a></li></Link>
              <Link href="https://nrto.netlify.app/3d/3d.html"><li className={styles.li}><a className={styles.a}>3D - click box! </a></li></Link>
              {/* <Link href="/products/create"><li className={styles.li}><a className={styles.a}>Icons</a></li></Link> */}
          </ul>
          
          {/* <footer className={styles.footer}>
              <h3  className={styles.sap}>Sap</h3>
          </footer> */}
   </aside>

      
  </>
  )
}

export default NavRespon