import Nav from '../components/NavRespon'
import Icons from '../pages/icons'
import Image from 'next/image' 
import Link from 'next/link';
import BoxComentar from '../components/comentarBox/BoxComentar'
import Products from '../pages/products/create'


export default function Home() {
  return (
    <>

      <div className='hs1'>

         <div className='lectura'>
          <h1 className='titulo'>Mars</h1>
          <p className='parrafo'>
          Der Mars ist, von der Sonne aus gezählt,
           der vierte Planet im Sonnensystem und der äußere
            Nachbar der Erde. Er zählt zu den erdähnlichen Planeten.
             Sein Durchmesser ist mit knapp 6800 Kilometern etwa halb so 
             groß wie der der Erde, sein Volumen beträgt gut ein Siebtel 
             des Erdvolumens.
          </p>
        </div>  

      </div>
       {/* <section className='hs2'>


      </section>  */}

       {/* <section className='hs3'>
        <div className='boxComentar'>
         <BoxComentar/>  
        </div>
        <div className='boxComentar'>
          <Products/>  
        </div>
      
      <Icons/>
      </section>  */}

        <div className='containerIcons'>
        <Link href="https://visualstudio.microsoft.com/de/"><a ><div className='visual'></div></a></Link>
        <Link href="https://de.wikipedia.org/wiki/Hypertext_Markup_Language#:~:text=Die%20Hypertext%20Markup%20Language%20(HTML,und%20werden%20von%20Webbrowsern%20dargestellt."><a ><div className='html'></div></a></Link> 
        <Link href="https://de.wikipedia.org/wiki/Cascading_Style_Sheets"><a ><div className='css'></div></a></Link> 
        <Link href="https://logomakr.com/app/7S2oum#"><a ><div className='logoMark'></div></a></Link> 
        <Link href="https://www.linkedin.com/in/mariano-ryser-073731221/"><a ><div className='linkedin'></div></a></Link>
        <Link href="https://github.com/Mariano-Ryser"><a ><div className='github'></div></a></Link>
        </div> 
    </>
  )
}
