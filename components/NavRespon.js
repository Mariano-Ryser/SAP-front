import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../styles/NavRespon.module.css"
import Image from "next/image"
import Test5 from '../pages/ztest/test5';

//C:\Users\MR22\stock-app\frontend\public
const NavRespon = () => {
  const [close, setClose] = useState(null);
  const categori = "/lectura/lectura"


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



    //con aparicion but, menos flujo de datos cuanticos XD
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

  function padlook(){
    setClose("Close")
  }
  function leaveA(){
    setClose(null)
  }

  const correct = (e) =>{
    const lock = document.getElementsByTagName("lock")
    const inputValue = e.target.value

    if(inputValue === "1234") { 
       for (let i = 0; i < li.length; i++) {
        li[i].className = styles.li;
       }

       for (let e = 0; e < lock.length; e++) {
        lock[e].style.display= "none";
       }
       setClose(null)
      //  for (let e = 0; e < li.length; e++) {
      //   padlock[e].display = "none"
      //  }
       

      // return;
  }

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
            {/* HOME*/}
              <Link href="/">
              
                <li className={styles.li}
                // onClick={padlook}
                >
                  <a className={styles.a}>Home</a>
                </li>
              </Link>
            {/* Lectura*/}
               <Link href="/lectura/lectura">
              
              <li className={styles.li}
              // onClick={padlook}
              >
                <a className={styles.a}>Lectura
                </a>
              </li>
            </Link>
             
          {/* Mensajeria Link */}
              <Link href="/msj">
                <li className={styles.li}>
                  <a className={styles.a}>Mensajeria</a>
                </li>
              </Link>
              <Link href={categori}>
                <li className={styles.li}>
                  <a className={styles.a}>...</a>
                </li>
              </Link>

          {/* CHAR CREATOR */}
              <Link href="javascript: void(0)">  
                <li
                  id='li'
                  className={styles.liBloqued}
                  >
                   <lock
                       onClick={padlook}
                       id='padlock'
                      className={styles.padlock}></lock>
                  <a className={styles.a}>Chars Creator</a>
                </li>
              </Link>

          {/* PRODUCT CREATOR link */}
          
              <Link href="/msj"> 
                <li 
                id='li'
                className={styles.liBloqued}
                 >
                <lock
                onClick={padlook}
                id='padlock'
                className={styles.padlock}></lock>
                  <a className={styles.a}>Product Creator</a>
                </li>
              </Link>
            
          {/* 3D link */}
              <Link href="/ztest/test"> 
                <li 
                id='li'
                className={styles.liBloqued}
                  >
                  
                <lock
                onClick={padlook}
                id='padlock'
                className={styles.padlock}></lock>

                  <a className={styles.a}>3D - click box! </a>
                </li> 
              </Link>
              

        
            {/* INSERT PASSWORD FORM */}
            {/* ASI PODEMOS MAPEAR ELEMENTOS CON UN BUEN TEMPLET*/}
              {close &&(
                  <div 
                  onMouseLeave={leaveA}
                  className="kleinForm">
                    
                    <p className='parraf'>{ close }</p>
                      <input 
                      onChange={correct}
                      type='password'
                      name="password"
                      className='pass'
                      placeholder='password' 
                      ></input>

                      <style jsx>{`
                       .kleinForm{
                          border-radius:5px;
                          height:4rem;
                          width:14rem;
                          position:absolute;
                          top:20rem;
                          right:35%;
                          background: #6c679dd5;
                          transition: 0.2s;
                          box-shadow: 2px 4px 6px 2px rgba(93, 87, 87, 0.287),  -2px -4px 20px 1px rgba(93, 87, 87, 0.187);
                        }  
                        .kleinForm:hover{
                          background: #6c679dd8;;
                        }  
                        .parraf{
                          color:white;
                          line-height:0rem;
                        }
                        .pass{
                          width: 8rem;
                        }
                          .li{
                     
                              width: 65%;
                              margin: auto;
                                position: relative;
                                align-items: center;
                                align-content: center;
                                background-color: #5c579dd5;
                                margin-top: 0.2rem;
                                margin-bottom: 2rem;
                                padding-top: 0.9rem;
                                height: 4rem;
                                text-align: center;
                                color: rgb(255, 255, 255);
                                transition: 0.2s;
                              }
        
                        `}</style>

                    </div>   
                )}

    
           
          </ul>
        
        
   </aside>

      
  </>
  )
}

export default NavRespon