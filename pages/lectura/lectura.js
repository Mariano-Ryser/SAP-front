import React from 'react'
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
 
    
return (
  <>
    
    <div className="box">
        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        Ahora escribimos un texto cualquiera para ver como se ve a la hora de leer en la 
        pantalla del celular, los textos siguientes son sin sentido, solamente para rellenar
        los <b>componentes futuros</b> futuros.
    
        </section>
        <section className='section'>
        Constrast is very important in any written text. Whether in print or on
         consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor 
          invidunt ut labore et dolore magna aliquyam erat,
           sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren,
             no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
               sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua.
                 At vero eos et accusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata
                   sanctus est Lorem ipsum dolor sit amet.
        </section>
        <br></br>
        <section className='section'>
        Lorem ipsum dolor sit amet,
         consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor 
          invidunt ut labore et dolore magna aliquyam erat,
           sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren,
             no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
               sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua.
                 At vero eos et accusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata
                   sanctus est Lorem ipsum dolor sit amet.
        </section>
        <br></br>
        <section className='section'>
        Lorem ipsum dolor sit amet,
         consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor 
          invidunt ut labore et dolore magna aliquyam erat,
           sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren,
             no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
               sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua.
                 At vero eos et accusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata
                   sanctus est Lorem ipsum dolor sit amet.
        </section>
        <section className='section'>
        Lorem ipsum dolor sit amet,
         consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor 
          invidunt ut labore et dolore magna aliquyam erat,
           sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren,
             no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
               sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua.
                 At vero eos et accusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata
                   sanctus est Lorem ipsum dolor sit amet.
        </section>
        <section className='section'>
        Lorem ipsum dolor sit amet,
         consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor 
          invidunt ut labore et dolore magna aliquyam erat,
           sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren,
             no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
               sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua.
                 At vero eos et accusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata
                   sanctus est Lorem ipsum dolor sit amet.
        </section>
        <br></br>
      
    </div>
    <button
     className='button'
     onClick={tipografia}
     ></button>
     <button
     className='button2'
     onClick={grosse}
     ></button>
    
  


     <style jsx>{`
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
                    width: 19rem;
                  }
}

                
         `}</style>
   
 </>
  )
}

export default Lectura

