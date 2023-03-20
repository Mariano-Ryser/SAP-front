import React from 'react'
import Image from "next/image"
import { useEffect, useState } from 'react';
// import BoxComentar from '../components/comentarBox/BoxComentar'

function Lectura() {
    const initialState = (1)
    const [gross, setGross] = useState(initialState)

    
    const grosse = ()=> {
        setGross(gross + 0.1)
    }

    const tipografia = ()=> {
        var section = document.getElementsByClassName("section")
           for (let i = 0; i < section.length; i++) {
            section[i].style.fontFamily = "Garamond"
            section[i].style.fontSize = "1.5rem"
          }
    }

    const img = "javaScript.jpeg"
    const img1 = "htmlDomain.jpeg"
    const img2 = "inputSystem.jpeg"
    const img3 = "js1.jpeg"

 
    
return (
  <>
    {/* <form>
      <input type='text' name='text'></input>
      <button onClick={text}></button>
    </form> */}
    
    <div className="box">
        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        Ahora escribimos un texto cualquiera para ver como se ve a la hora de leer en la 
        pantalla del celular, los textos siguientes son sin sentido, solamente para rellenar
        los <b>componentes futuros</b> futuros.
    
        </section><br></br>
        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        <h1>Web Errors</h1>
        <li>400 : Bad request</li>
        <li>401 : Unauthorized Error</li>
        <li>402 : Payment Required</li>
        <li>403 : Farbbidden</li>
        <li><b>404 : Not Found</b></li>
        <li>405 : Method not allowed</li>
        </section>
        <br></br>
        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        <h1>JavaScript Array methods</h1>
        <span>[4, 5, 6, 7].at(1)    // 5</span><br></br>
        <span>[4, 5, 6, 7].push(8)  // [4, 5, 6, 7, 8]</span><br></br>
        <span>[4, 5, 6, 7].pop()    // [4, 5, 6, 7]</span><br></br>
        <span>[4, 5, 6, 7].fill()  // [1, 1, 1, 1]</span><br></br>
        </section>

        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        <h1>JavaScript Array methods</h1>
        <div className='img' 
              style={{backgroundImage: `url('/img/${img}')`}}
        ></div>
        </section>

        <br></br>
        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        Lorem ipsum dolor sit amet,
         conse
      
                dolore magna aliquyam erat, sed diam voluptua.
                 At vero eos et accusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata
                  <div className='img' 
              style={{backgroundImage: `url('/img/${img1}')`}}
        ></div>
                   sanctus est Lorem ipsum dolor sit amet.
        </section>
        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        Lorem ipsum dolor sit amet,
         consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor 
                dolore magna aliquyam erat, sed diam voluptua.
                 At vero eos et accusam et justo duo dolores et ea rebum.
                 <div className='img' 
              style={{backgroundImage: `url('/img/${img2}')`}}
              ></div>
                  Stet clita kasd gubergren, no sea takimata
                   sanctus est Lorem ipsum dolor sit amet.
        </section>
        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        Lorem ipsum dolor sit amet,
         consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor 
    
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
               sed diam nonumy eirmod tempor invidunt ut labore et
               <div className='img' 
              style={{backgroundImage: `url('/img/${img3}')`}}
              ></div>
                dolore magna aliquyam erat, sed diam voluptua.
                 At vero eos et accusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata
                   sanctus est Lorem ipsum dolor sit amet.
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
                }.button2{
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
                    font-family: monospace;
                    font-size: 1.2em;
                    color: #000;
                    display:block;
                    margin:auto;
                    width: 31rem;
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
                    width: 20rem;
                  }
                  .img{
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin:auto;
                    height:16rem;
                    width: 20rem;
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

