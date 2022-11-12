import Nav from '../components/NavRespon'
import Icons from '../pages/icons'
import Image from 'next/image' 
import Link from 'next/link';
import BoxComentar from '../components/comentarBox/BoxComentar'
import Products from '../pages/products/create'


export default function Home() {
  return (
    <>
      <section className='hs1'>
        
        <section className='lectura'>
          <h1 className='titulo'>Tipografías para libros</h1>
          <p className='parrafo'>Si pasas tiempo optimizando tu contenido, títulos, subtítulos y metadescripciones de tu blog o de tu sitio web para los motores de búsqueda, la imagen siguiente debería preocuparte:
          Hoy en día, las páginas de resultados de los motores de búsqueda (SERP, por sus siglas en inglés) de Google ofrecen tantos resultados de imágenes como resultados basados ​​en texto. La captura de pantalla de arriba es la primera SERP que Google produce para el término «diseño de boletín electrónico». Observa cómo, además de la pestaña «Imágenes» en la parte superior, Google extrae un paquete de imágenes al principio de la página principal, donde se puede hacer clic, incluso antes que los resultados de texto orgánicos sean visibles.</p>
        </section> 
        
      </section>
      {/* <section className='hs2'>
      </section> */}

      <section className='hs3'>
        <div className='boxComentar'>
         <BoxComentar/>  
        </div>
        <div className='boxComentar'>
          <Products/>  
        </div>
      
      <Icons/>
      </section>


        {/* <div className='containerIcons'>
       <Link href="https://visualstudio.microsoft.com/de/"><a ><div className='visual'></div></a></Link>
        <Link href="https://de.wikipedia.org/wiki/Hypertext_Markup_Language#:~:text=Die%20Hypertext%20Markup%20Language%20(HTML,und%20werden%20von%20Webbrowsern%20dargestellt."><a ><div className='html'></div></a></Link> 
        <Link href="https://de.wikipedia.org/wiki/Cascading_Style_Sheets"><a ><div className='css'></div></a></Link> 
        <Link href="https://logomakr.com/app/7S2oum#"><a ><div className='logoMark'></div></a></Link> 
        <Link href="https://www.linkedin.com/in/mariano-ryser-073731221/"><a ><div className='linkedin'></div></a></Link>
        <Link href="https://github.com/Mariano-Ryser"><a ><div className='github'></div></a></Link>
        </div> */}
    </>
  )
}
