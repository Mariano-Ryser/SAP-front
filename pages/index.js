import Nav from '../components/NavRespon'
import Image from 'next/image' 
import Link from 'next/link'
import BoxComentar from '../components/comentarBox/BoxComentar'


export default function Home() {
  return (
    <>
     <article className='box'>
{/*       
       <Link href='/products/create'>Creese un producto</Link> <br></br>
      <Link href='/products/create'>Creese un producto</Link>   */}
         <article className='article'>
          <h1>Expresion simple</h1>
          <p> 
            node, modalidades, 
            kompliziertere sache um zu verstehen ...
            <a> Node JS</a>
          </p>          
          <p>
           -Objeto. niveles, estructura.-
          </p>  
          <p>
           -Nodo... 
          </p>  
          <p>
           -Dicen que cacha me la agita con su facha viednamita... 
          </p>  
          <p>
           -callBack, funcionalidad de componente, folderStruktur ? "Ya visto"
          </p>   
        </article> 
        <BoxComentar/>
        
        <br></br>
      
      </article>
      <style jsx>
            {`
                
                `}
        </style>
    
  </>
  )
}
