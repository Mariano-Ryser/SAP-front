import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../styles/NavRespon.module.css"
import Image from "next/image"

//C:\Users\MR22\stock-app\frontend\public
const NavRespon = () => {
  const [close, setClose] = useState(null);

   function openList(){

  
    const aside = document.getElementById('aside')
    if(
      aside.style.transform == 'translateY(0%)'){
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

    //con aparicion but, menos flujo de datos cuanticos XD
    // const aside = document.getElementById('aside')
    // if(
    //   aside.style.display == 'block'){
    //   aside.style.display = 'none';
    //   setTimeout(()=>{
    
    //   },200);
    // }else{
    //   aside.style.display = 'block'
    //   setTimeout(()=>{
     
    //   },0);
    // }


    // if(burger.style.transform == 'rotateZ(90deg)'){
    //   burger.style.transform = 'rotateZ(0deg)'
    // } else {
    //   burger.style.transform = 'rotateZ(90deg)'
    // }
  }




function overed(){
  // alert("Wasa")
  document.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
  })
}


return (
    <>    
   
<nav className={styles.nav}>


        <div className={styles.img}>
         <Link href="/home"><h1 className={styles.logo}></h1></Link> 
        </div>

      <div id='burger' className={styles.burger} onClick={openList}>
    
         <Image
          onMouseOver={overed}
           alt='Burger-Icon' src={'/img/Alienverde.gif'}
          height={100} width={70}></Image>
        </div> 
</nav>

              
    <aside id='aside' className={styles.asideBar}>
    
          <ul className={styles.ul}>
          
            {/* HOME*/}
              <Link href="/">
              
                <li className={styles.li}
                // onClick={padlook}
                >
                  <a className={styles.a}>Home</a>
                </li>
              </Link>

             
          {/* Mensajeria Link */}
              <Link href="/msj">
                <li className={styles.li}>
                  <a className={styles.a}>Mensajeria</a>
                </li>
              </Link>
        
      
          </ul>
       
                    

                      <style jsx>{`

                   
                              
                        `}</style>

        
   </aside>

      
  </>
  )
}

export default NavRespon