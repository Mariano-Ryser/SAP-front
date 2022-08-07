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
           Exelente el trabajo de hoy en mi aplicacion node, donde agregamos modalidades, 
           animaciones en el Navbar, y estilando colores en los codigos, aqui un ejemplo...
            <a> Node JS</a>
          </p>          
          <span className='blue'>const</span> <span className='yellow'>express</span> <span className='white'>=</span> <span className='yellow'>require</span><span className='yellow2'>(</span><span className='htmlColor'>"express"</span><span className='yellow2'>)</span>
          <br></br>
          
        </article>
        <textarea className='text-area' placeholder='Comentario...'>
          
        </textarea>
        <br></br>
      
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
