import Link from 'next/link'
import Pantallazo from '../components/pantalla/Pantallazo'
// import Image from 'next/image' 
// import Link from 'next/link';




export default function Home() {
  return (
    <>
   
   
  <Pantallazo/>
  <ul>
  <Link href="/posts/pnl"><li>PNL - Spanish</li></Link>
  <Link href="/posts/conciencia"><li>La magia de la Conciencia</li></Link>
  

  
  </ul> 

  <style jsx>{`
    ul{
      width:40rem;
      margin: auto;
      padding:0rem;
    }
    li{
      font-family: 'Courier New', Courier, monospace;
      line-height: 1.7rem;
      list-style:none;
      color: rgb(191, 191, 191);
      margin: 0.5rem 0.5rem 0.5rem 0.5rem;
      border-bottom:solid gray 1px;
    }
    li:hover{
      cursor:pointer;
      font-family: 'Courier New', Courier, monospace;
      line-height: 1.7rem;
      list-style:none;
      color:white;
    }
      
@media (max-width: 600px) {
    ul{
      width:95%;
      margin: auto;
      padding:0rem;
    }
  li{
      font-family: 'Courier New', Courier, monospace;
      line-height: 1.7rem;
      list-style:none;
      color: rgb(191, 191, 191);
      margin: 0.5rem 0.5rem 0.5rem 0.5rem;
      border-bottom:solid gray 1px;
    }
    li:hover{
      cursor:pointer;
      font-family: 'Courier New', Courier, monospace;
      line-height: 1.7rem;
      list-style:none;
      color:white;
    }
           
                 
}
       
         `}</style>
    </>
  )
}
