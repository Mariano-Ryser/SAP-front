import React, { useState, useEffect } from 'react';


const TestPagination = () => {

  
  return (
    <>

    <section id="page" className='page'>
      <h1>Pagina 1</h1>
      <p>
      Bla bla bla , probando pagination, que trata de explicar cómo funciona nuestro cerebro y definir sus patrones mentales, facilitándonos el conocimiento de nosotros mismos y permitiéndonos cambiarlos utilizando determinadas técnicas con el objetivo de optimizar nuestra capacidad de comunicación. 
      </p>  
    </section>

    <section id="page1" className='page' >
      <h1>Pagina 2</h1>
      <p>
      
      Disciplina que trata de explicar cómo funciona nuestro cerebro y definir sus patrones mentales, facilitándonos el conocimiento de nosotros mismos y permitiéndonos cambiarlos utilizando determinadas técnicas con el objetivo de optimizar nuestra capacidad de comunicación. 
      </p>  
    </section>

    <section id="page1" className='page'>
      <h1>Pagina 3</h1>
      <p>
      La Programación Neurolingüística es una disciplina que trata de explicar cómo funciona nuestro cerebro y definir sus patrones mentales, facilitándonos el conocimiento de nosotros mismos y permitiéndonos cambiarlos utilizando determinadas técnicas con el objetivo de optimizar nuestra capacidad de comunicación. 
      </p>  
    </section>



<div className='botonera-box'>
    <button id="prevBtn" className='back'> back </button>
    <button id="nextBtn" className='next'
    > next </button>
</div>


<style jsx>{`
.page {
  display: none;
}
.page:first-child{
  display: block;
}

  .botonera-box{
    display:flex;
    justify-content:center;
  }
  button{
    height:1.3rem;
    width:3rem;
    margin:1rem;
  }
h1,h2,h3{
  color:white;
}

    section{
      display:none;
      font-family: monospace;
      font-size:1rem;
        color: rgb(191, 191, 191);
        width:40rem;
        margin:auto;
        margin-bottom:1rem;
        margin-top: 1rem;
        padding:0rem;
    }
    .section.active{
      display:block;
    }
           .img{ 
                   background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin:auto;
                    height:32rem;
                    width: 40rem;
                    transform: scale(1);
                    transition:0.2s;
                  }

    @media (max-width: 600px) {
        section{
        width:95%;
        margin:auto;
        margin-bottom:1rem;
        margin-top: 1rem;
        padding:0rem;
            }   

            .img{
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin:auto;
                    height:20rem;
                    width: 95%;
                    {/* border: solid 1px black; */}
                  }
    }   
`}</style>

  </>
  )
}

export default TestPagination