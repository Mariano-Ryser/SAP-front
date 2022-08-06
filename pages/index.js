import Nav from '../components/NavRespon'
import Image from 'next/image' 
import Link from 'next/link'

export default function Home() {
  return (
    <>
     <article className='box'>
{/*       
       <Link href='/products/create'>Creese un producto</Link> <br></br>
      <Link href='/products/create'>Creese un producto</Link>   */}
        <article className='article'>
          <h1>Expresion simple</h1>
          <p>Parrafo comun para testear en el telefono la vista.
            seguimos probando y tressteando escribiendo cualquier ganadad.
            Parrafo comun para testear en el telefono la vista.
            seguimos probando y tressteando escribiendo cualquier ganadad.
            Parrafo comun para testear en el telefono la vista.
            seguimos probando y tressteando escribiendo cualquier ganadad.
            Parrafo comun para testear en el telefono la vista.
            seguimos probando y tressteando escribiendo cualquier ganadad.
            <a>Node JS</a>
          </p>          
        </article>
        <textarea className='text-area' placeholder='Comentario...'>
          
        </textarea>
        <br></br>
        <article className='article'>
          <h1>Expresion simple</h1>
          <p>Parrafo comun para testear en el telefono la vista.
            seguimos probando y tressteando escribiendo cualquier ganadad.
            Parrafo comun para testear en el telefono la vista.
            seguimos probando y tressteando escribiendo cualquier ganadad.
            Parrafo comun para testear en el telefono la vista.
            seguimos probando y tressteando escribiendo cualquier ganadad.
            Parrafo comun para testear en el telefono la vista.
            seguimos probando y tressteando escribiendo cualquier ganadad.
            <a>Node JS</a>
          </p>          
        </article>
        <textarea className='text-area' placeholder='Comentario...'>
          
        </textarea>
      </article>
      <style jsx>
            {`
                .box{
                  color: rgb(212, 212, 212);
                  width: 100%;
                  margin:auto;
                  padding: 1rem;
                  background-color: black;
                }
                `}
        </style>
    
  </>
  )
}
