import React from 'react'
import Image from "next/image"
import { useEffect, useState } from 'react';

import Test3 from '../ztest/test3'
import Test4 from '../ztest/test4'
import Test5 from '../ztest/test5'
import Test6 from '../ztest/test6'

function Lectura() {
    const initialState = (1)
    const [gross, setGross] = useState(initialState)

    
    const grosse = ()=> {
        setGross(gross + 0.1)
    }

    const tipografia = ()=> {
        var section = document.getElementsByClassName("section")
           for (let i = 0; i < section.length; i++) {
            section[i].style.fontSize = "1.3rem"
          }
    }

return (
  <>
    {/* <form>
      <input type='text' name='text'></input>
      <button onClick={text}></button>
    </form> */}
    
    <div className="box">
    <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        <h1></h1> 
        <p></p>
        
     </section>
      {/* TypeScript Introduccion */}
        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        <h1>TypeScript - Introduccion</h1>
        <p>En este módulo se presenta el lenguaje TypeScript, se explica por qué se creó y
           se muestra en qué puede beneficiarle su uso para el desarrollo en JavaScript.
       A demás, aquí configurará un entorno de desarrollo de TypeScript con vistas
 a prepararse para ejercicios futuros.</p>
        </section>
        <br></br>
      {/* Requisitos previos */}
        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        <h1>Requisitos previos</h1> 
        <li>Conocimientos de JavaScript</li>
     </section>
     <br></br>
        {/* */}
        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        <h1>Información general de TypeScript</h1> 
        <p>JavaScript se considera uno de los lenguajes
           de programación más usados del mundo y se ha convertido en el oficial de la Web.
            Los desarrolladores lo usan para escribir aplicaciones multiplataforma que se
             pueden ejecutar en cualquier plataforma y explorador.
             </p>
          <br></br>
          <p>Aunque JavaScript se usa para crear aplicaciones multiplataforma, 
            no está concebido para aplicaciones grandes que impliquen miles o incluso
             millones de líneas de código. JavaScript carece de algunas de las características 
             de los lenguajes más maduros que se emplean en las sofisticadas aplicaciones de 
             hoy en día. Para los editores de desarrollo integrado (IDE), puede ser todo un 
             desafío administrar JavaScript y mantener estas grandes bases de código.
             </p>
             <br></br>
             <p>TypeScript aborda las limitaciones de JavaScript sin poner en peligro
               la propuesta de valor clave de JavaScript: la capacidad de ejecutar el
                código en cualquier lugar y en cualquier plataforma, explorador o host.
                </p>
                <h1>¿Qué es TypeScript?</h1>
                <p>TypeScript es un lenguaje de código abierto desarrollado por Microsoft.
                   Se trata de un supraconjunto de JavaScript, lo que significa que puede
                    usar sus conocimientos actuales sobre JavaScript que ya ha desarrollado
                     junto con determinadas características que antes no estaban disponibles.
                </p>
                <h1>Sugerencias de escritura</h1>
                <p>La característica principal de TypeScript es su sistema de tipos.
                   En TypeScript, puede identificar el tipo de datos de una variable
                    o un parámetro mediante una sugerencia de tipo. Con las sugerencias 
                    de tipo, se describe la forma de un objeto, lo que proporciona una 
                    documentación mejor y permite a TypeScript validar que el código funciona
                    correctamente.
                </p>
                <br></br>
                <p>Mediante la comprobación de tipos estáticos, 
                  TypeScript al principio del desarrollo detecta problemas de
                   código que JavaScript normalmente no puede detectar hasta que
                    el código se ejecuta en el explorador. Los tipos también permiten
                     describir lo que debe hacer el código. Si forma parte de un equipo, 
                     un compañero que trabaje en el código después de usted podrá entenderlo 
                     fácilmente.
                  </p>
                  <br></br>
                <p>Los tipos también potencian las ventajas de inteligencia y 
                  productividad de las herramientas de desarrollo, como IntelliSense,
                   la navegación basada en símbolos, la opción Ir a definición, la búsqueda 
                   de todas las referencias, la finalización de instrucciones y la 
                   refactorización del código.
                   </p>
                   <br></br>
                   <p>Escribir tipos puede ser opcional en TypeScript, porque la inferencia de 
                    tipos permite obtener gran parte de esta potencia sin escribir código adicional. 
                    Si TypeScript puede determinar el tipo de datos implícitamente
                     (por ejemplo, cuando se asigna un valor a una variable mediante let age = 42),
                      el tipo de datos se deduce automáticamente.
  
                   </p>

     </section>
     <br></br>
      
    </div>


    {/* BOTONES GROSSE BUCHSTABE*/}
    <button
     className='button'
     onClick={tipografia}
     ></button>
     <button
     className='button2'
     onClick={grosse}
     ></button>
    
     <style jsx>{`
                .img{
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin:auto;
                    height:30rem;
                    width: 32rem;
                    transform: scale(1);
                    transition:0.2s;
                  }
                .img:hover{
                  transform: scale(1.2);
                }
                .button{
                    position: fixed;
                    top: 2rem;
                    left:0.4rem;
                    background-color: white;
                    height:50px;
                    width:70px;
                }
                .button2{
                    position: fixed;
                    top: 5rem;
                    left:0.4rem;
                    background-color: white;
                    height:50px;
                    width:70px;
                }
                .box{
                    margin: auto;
                    width: 100%;
                    background-color: rgb(221, 221, 221);
                  }
                  .section{
                    padding-top:0.01rem;
                    font-family: monospace;
                    font-size: 1.2em;
                    color: #000;
                    display:block;
                    margin:auto;
                    width: 31rem;
                  }
                  p{
                    margin:0;
                  }

                  
@media (max-width: 600px) {
 
                 .box{
                    margin: auto;
                    width: 100%;
                    background-color: rgb(221, 221, 221);
                  }
                  .section{
                    font-size: 1.1em;
                    color: #000;
                    display:block;
                    margin:auto;
                    width: 21rem;
                  }
                  .img{
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin:auto;
                    height:16rem;
                    width: 21rem;
                    {/* border: solid 1px black; */}
                  }
                  .img:hover{
                  transform: scale(1.1);
                }
}

                
         `}</style>
   
 </>
  )
}

export default Lectura

