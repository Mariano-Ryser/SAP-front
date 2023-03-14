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
         <Image alt='Burger-Icon' src={'/img/Alienverde.gif'} height={100} width={70}></Image>
        </div> 
</nav>


    <aside id='aside' className={styles.asideBar}>

    <header className={styles.header}>
          <div className={styles.boxSap}>
              <h3  className={styles.sap}>Zap</h3>
          </div>
    </header>

          <ul className={styles.ul}>
              <Link href="/">
                <li className={styles.li}>
                  <a className={styles.a}>Home</a>
                </li>
              </Link>

              <Link href="/msj">
                <li className={styles.li}>
                  <a className={styles.a}>Mensajeria</a>
                </li>
              </Link>

              <Link href="">  {/* 3D link */}
                <li className={styles.liBloqued}>
                  <div className={styles.padlock}></div>
                  <a className={styles.a}>Chars Creator</a>
                </li>
              </Link>

              <Link href=""> {/* PRODUCT CREATOR link */}
                <li className={styles.liBloqued}>
                <div className={styles.padlock}></div>
                  <a className={styles.a}>Product Creator</a>
                </li>
              </Link>

              <Link href=""> {/* 3D link */}
            
                <li className={styles.liBloqued}>
                  
                <div className={styles.padlock}></div>

                  <a className={styles.a}>3D - click box! </a>
                </li>
              </Link>

    
           
          </ul>
          
          
   </aside>

      
  </>
  )
}

export default NavRespon