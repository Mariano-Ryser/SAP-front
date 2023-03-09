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
      aside.style.display == 'none'){
      aside.style.display = 'block';
      // setTimeout(()=>{
    
      // },200);
    }else{
      aside.style.display = 'none'
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
            <li className={styles.li}><Link href="/"><a className={styles.a}>Home</a></Link></li>
            <li className={styles.li}><Link href="/icons"><a className={styles.a}>Icons?</a></Link></li>
            {/* <li className={styles.li}><Link href="/img"><a className={styles.a}>Images</a></Link></li> */}
             <li className={styles.li}><Link href="/products/create"><a className={styles.a}>Productos?</a></Link></li>
            <li className={styles.li}><Link href="/msj"><a className={styles.a}>Mensajeria</a></Link></li>
            <li className={styles.li}><Link href="/personaje"><a className={styles.a}>Create Char XD x 2</a></Link></li>
            {/* <li className={styles.li}><Link href="/fotos"><a className={styles.a}>Fotos</a></Link></li> */}
            <li className={styles.li}><Link href="https://nrto.netlify.app/3d/3d.html"><a className={styles.a}>Kubik?</a></Link></li>
            {/* <li className={styles.li}><Link href="/social"><a className={styles.a}>Social</a></Link></li> */}
          </ul>
          
          {/* <footer className={styles.footer}>
              <h3  className={styles.sap}>Sap</h3>
          </footer> */}
        </aside>

      
  </>
  )
}

export default NavRespon