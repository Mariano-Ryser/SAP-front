
import Link from 'next/link';
import styles from "../styles/NavRespon.module.css"
import Image from "next/image"
import Test5 from '../pages/ztest/test5';
import { useEffect, useState } from 'react';
import DayColorSquare from '../components/dayBox/DayBox';
//C:\Users\MR22\stock-app\frontend\public

export default function NavRespon(){
  
  const [close, setClose] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
// BACKGROUND IMGS
const bgColors = [
  'url(/img/bBack.jpg)',
  'url(/img/a1.png)',
  'url(/img/a0.jpg)',

];

//  COLORES PARA BACKGROUND COLOR
  // const bgColors = ['rgb(7, 7, 7)','rgb(255, 255, 255)', 'rgb(66, 58, 24)', 'rgb(25, 66, 24)', 'rgb(0, 0, 0)'];
 
  const letterColors = [
    'rgb(251, 255, 34)',  
    'rgb(255, 255, 255)',   
    'rgb(124, 252, 0)',      
    'rgb(255, 165, 0)',     
    'rgb(0, 255, 255)',      
    'rgb(0, 0, 0)', 
  ];
  
  const aliens = ['Alienverde.gif','']

  const [bgColor, setBgColor] = useState(bgColors[0]); // Empieza con el primer color
  const [letterColor, setLetterColor] = useState(letterColors[0]); // Empieza con el primer color


  const changeBgColor = () => {
    // Encuentra el índice actual del color
    const currentIndex = bgColors.indexOf(bgColor);
    // Obtiene el siguiente color en la lista, o vuelve al primero si llega al final
    const nextIndex = (currentIndex + 1) % bgColors.length;
    const newColor = bgColors[nextIndex];
    setBgColor(newColor);
    document.documentElement.style.setProperty('--bg-color', newColor);
  };
  const changeLetterColor = () => {
    // Encuentra el índice actual del color
    const currentIndex = letterColors.indexOf(letterColor);
    // Obtiene el siguiente color en la lista, o vuelve al primero si llega al final
    const nextIndex = (currentIndex + 1) % letterColors.length;
    const newColor = letterColors[nextIndex];
    setLetterColor(newColor);
    document.documentElement.style.setProperty('--letter-color', newColor);
  };
//    function openList(){
//     const burger = document.getElementById('burger')
//     const aside = document.getElementById('aside')
   

//     if(
//       aside.style.transform == 'translateY(0%)'){
//       aside.style.transform = 'translateY(-100%)';
//       setTimeout(()=>{
//         aside.style.display="none"
//       },200);
//     }else{
//       aside.style.display = 'block'
//       setTimeout(()=>{
//         aside.style.transform = 'translateY(0%)'
//       },0);
//     }
//   // Función para cerrar el aside cuando se hace clic en un enlace
// // Función para cerrar el aside cuando se hace clic en un enlace
// function closeAsideOnLinkClick(e) {
//   const aside = document.getElementById('aside');
//   // Cierra el aside antes de navegar
//   aside.style.transform = 'translateY(-100%)';
//   setTimeout(() => {
//     aside.style.display = 'none';
//   }, 200);
// }
//     //con aparicion but, menos flujo de datos cuanticos XD
//     // const aside = document.getElementById('aside')
//     // if(
//     //   aside.style.display == 'block'){
//     //   aside.style.display = 'none';
//     //   setTimeout(()=>{
    
//     //   },200);
//     // }else{
//     //   aside.style.display = 'block'
//     //   setTimeout(()=>{
     
//     //   },0);
//     // }


//     // if(burger.style.transform == 'rotateZ(90deg)'){
//     //   burger.style.transform = 'rotateZ(0deg)'
//     // } else {
//     //   burger.style.transform = 'rotateZ(90deg)'
//     // }
//   }
function openList() {
  setIsOpen(!isOpen); // Cambiar el estado al hacer clic en el botón de menú
}
function closeAsideOnLinkClick() {
  setIsOpen(false); // Cambiar el estado para cerrar el menú cuando se hace clic en un enlace
}
  function padlook(){
    setClose("Close")
  }
  function leaveA(){
    setClose(null)
  }
  const correct = (e) =>{
    const lock = document.querySelectorAll<HTMLElement>("#padlock")
    const inputValue = e.target.value

    if(inputValue === "1234") { 
      const li = document.querySelectorAll<HTMLElement>("li")
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

// function overed(){
//   // alert("Se desactivo el click izquierdo")
//   document.addEventListener("contextmenu",(e)=>{
//     e.preventDefault();
//   })
// }

return (
    <>    
   
{/* BOTONES PARA CAMBIAR COLOR DE FUENTE */}
{/* <button className={styles.buttonColor} onClick={changeFontColor}></button>  */}
<button className={styles.buttonColor} onClick={changeBgColor}></button>
<button className={styles.buttonLetterColor} onClick={changeLetterColor}></button> 

{/* CAJA DE COLORES POR DIA  */}
{/* <DayColorSquare /> */}


<nav  className={styles.nav}>

        <div className={styles.img}>
         <Link href="/home"><h1 className={styles.logo}></h1></Link> 
        </div>

      <div id='burger' className={styles.burger} onClick={openList}>
      {/* 🍄 */}
         <Image
        //  onMouseOver={overed}
          //  alt='Burger-Icon' src={'/img/Alienverde.gif'
           alt='Burger-Icon' src={'/img/oja.png'

           }
          height={90} width={95}></Image> 

   
        
   </div> 

     
</nav>

              

    <aside  style={{
      transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)',
      display: isOpen ? 'block' : 'none',
    }}  id='aside' className={styles.asideBar}>
    
          <ul className={styles.ul}>
         
          <Test5/>
          
            {/* Index*/}
            <Link href="/"><li onClick={closeAsideOnLinkClick}>/Home</li></Link> 
            <Link href="/proyectos/noti"><li onClick={closeAsideOnLinkClick}>/Nota</li></Link> 
  <Link href="../about"><li onClick={closeAsideOnLinkClick}>/About</li></Link> 
  <Link href="/proyectos/proyects"><li onClick={closeAsideOnLinkClick}>/Proyects</li></Link> 
  <Link href="/proyectos/icons"><li onClick={closeAsideOnLinkClick}>/Icons</li></Link> 
  <Link href="../songs"><li onClick={closeAsideOnLinkClick}>/Songs</li></Link> 
  <Link href="../idiomas/DayCard"><li onClick={closeAsideOnLinkClick}>/Deutsch</li></Link> 
  <Link href="../idiomas/EnglishCard"><li onClick={closeAsideOnLinkClick}>/English</li></Link> 
  <Link href="/proyectos/msj"><li onClick={closeAsideOnLinkClick}>/ComentarBox</li></Link> 
  <Link href="/proyectos/personaje"><li onClick={closeAsideOnLinkClick}>/CreateChar</li></Link> 
  <Link href="/proyectos/productCreator"><li onClick={closeAsideOnLinkClick}>/ProductCreator</li></Link> 
  <Link href="/proyectos/logazo"><li onClick={closeAsideOnLinkClick}>/Logo</li></Link> 
  <Link href="/proyectos/musica"><li onClick={closeAsideOnLinkClick}>/MusicaProyect</li></Link> 
  <Link href="/proyectos/hb/sound/music"><li onClick={closeAsideOnLinkClick}>/GameSound</li></Link> 
  <Link href="/proyectos/posts/books"><li onClick={closeAsideOnLinkClick}>/BooksProyect</li></Link> 
  <Link href="../partners"><li onClick={closeAsideOnLinkClick}>/Partners</li></Link> 
           

  
  
          </ul>
              
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
                        
                       
                        #aside {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: #333;
  color: white;
  transition: transform 0.3s ease-in-out; /* Suaviza la transición */
  display: none;
  padding: 20px;
}

#aside nav ul {
  list-style: none;
  padding: 0;
}

#aside nav ul li {
  margin: 20px 0;
}

#aside nav ul li a {
  text-decoration: none;
  color: white;
  font-size: 18px;
}
                  
                         
                              
                        `}</style>

                    </div>   
                )}

    
           
        
        
   </aside>

      
  </>
  )
}

