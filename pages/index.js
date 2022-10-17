import Nav from '../components/NavRespon'
import Icons from '../pages/icons'
import Image from 'next/image' 
import Link from 'next/link';
import BoxComentar from '../components/comentarBox/BoxComentar'


export default function Home() {
  return (
    <>
    <Icons/>
      <section className='hs1'>
       <Link href="https://visualstudio.microsoft.com/de/"><a ><div className='visual'></div></a></Link>
        <Link href="https://de.wikipedia.org/wiki/Hypertext_Markup_Language#:~:text=Die%20Hypertext%20Markup%20Language%20(HTML,und%20werden%20von%20Webbrowsern%20dargestellt."><a ><div className='html'></div></a></Link> 
        <Link href="https://de.wikipedia.org/wiki/Cascading_Style_Sheets"><a ><div className='css'></div></a></Link> 
        <Link href="https://logomakr.com/app/7S2oum#"><a ><div className='logoMark'></div></a></Link> 
        
      </section>
      <section className='hs2'>
        {/* <Link href="https://visualstudio.microsoft.com/de/"><a ><div className='visual'></div></a></Link>
        <Link href="https://de.wikipedia.org/wiki/Hypertext_Markup_Language#:~:text=Die%20Hypertext%20Markup%20Language%20(HTML,und%20werden%20von%20Webbrowsern%20dargestellt."><a ><div className='html'></div></a></Link> */}
        {/* <Link href="https://de.wikipedia.org/wiki/Cascading_Style_Sheets"><a ><div className='css'></div></a></Link> */}
        {/* <Link href="https://logomakr.com/app/7S2oum#"><a ><div className='logoMark'></div></a></Link> */}
        <Link href="https://github.com/Mariano-Ryser"><a ><div className='github'></div></a></Link>
        <Link href="https://www.linkedin.com/in/mariano-ryser-073731221/"><a ><div className='linkedin'></div></a></Link>
        
      </section>
      <section className='hs3'>
        <div className='boxComentar'>
         <BoxComentar/> 
        </div>
        {/* <Link href="https://visualstudio.microsoft.com/de/"><a ><div className='visual'></div></a></Link>
        <Link href="https://de.wikipedia.org/wiki/Hypertext_Markup_Language#:~:text=Die%20Hypertext%20Markup%20Language%20(HTML,und%20werden%20von%20Webbrowsern%20dargestellt."><a ><div className='html'></div></a></Link> */}
        {/* <Link href="https://de.wikipedia.org/wiki/Cascading_Style_Sheets"><a ><div className='css'></div></a></Link> */}
        {/* <Link href="https://logomakr.com/app/7S2oum#"><a ><div className='logoMark'></div></a></Link> */}
        
      </section>
    </>
  )
}
