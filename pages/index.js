import Nav from '../components/NavRespon'
import Image from 'next/image' 
import Link from 'next/link'

export default function Home() {
  return (
    <>
     <div className='box'>
{/*       
       <Link href='/products/create'>Creese un producto</Link> <br></br>
      <Link href='/products/create'>Creese un producto</Link>   */}

        <div className='code'>
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
        </div>
        <div className='code'>
          <h1>Expresion compleja</h1>
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
        </div>
        <div className='code'>
          <h1>Expresion Dificil</h1>
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
        </div>


      <style jsx>
            {`
                .box{
                    margin-top:1rem
                }
                .code{
                  margin-top:2rem;
                  border: solid rgb(104, 226, 56) 0px;
                  width: 95%;
                  margin:auto;
                  color:white;
                  
                }
                `}
        </style>
     </div>
    
  </>
  )
}
