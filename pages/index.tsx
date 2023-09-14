import Link from 'next/link'
import Page from './web/page'
import BoxComentar from '../components/comentarBox/BoxComentar'
import Segmento from './web/segmentos'
// import Image from 'next/image' 
// import Link from 'next/link';

export default function Home() {
  return (
    <>
 

        <div className='body'>
           {/* <Page/> */}
           {/* <BoxComentar/> */}
           <Segmento/> 
           
           </div>

  <style jsx>{`
    
@media (max-width: 600px) {

  
}
`}</style>
    </>
  )
}
