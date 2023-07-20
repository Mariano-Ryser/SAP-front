import Link from 'next/link'
import Pantallazo from '../components/pantalla/Pantallazo'
import D1 from '../components/diario/d1'
import D2 from '../components/diario/d2'
import D3 from '../components/diario/d3'
// import Image from 'next/image' 
// import Link from 'next/link';




export default function Home() {
  return (
    <>

   


  <D3/>
  <D2/>
  <D1/>
  
  {/* <Pantallazo/> */}

  <style jsx>{`
  
  
      
@media (max-width: 600px) {
 
                 
}
       
         `}</style>
    </>
  )
}
