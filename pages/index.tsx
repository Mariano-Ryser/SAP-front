
import Pantallazo from '../components/pantalla/Pantallazo'
// import Image from 'next/image' 
// import Link from 'next/link';




export default function Home() {
  return (
    <>
   
  <Pantallazo/>
  <ul>
    <li>Preparacion automatica probando</li>
    <li>Otro titulo al azar</li>
    <li>Seguimos programando escuchando a ! migue granados y la CURDA!</li>
    <li>Otro campo para completar y probar links</li>
    <li>Empezamos a crear nuestro blog</li>
    <li>Ideas de manera concreta</li>
    <li>La condena social diaria</li>
    <li>Sobre estres y condicion</li>
    <li>Palabras al azar</li>
    <li>megalomania y desesperacion</li>
    <li>i dont know</li>
    <li>me paso de rombo</li>
    <li>Creacion</li>
  </ul>

  <style jsx>{`
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
    ul{
      width:40rem;
      margin: auto;
      padding:0rem;
    }
      
@media (max-width: 600px) {
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
    ul{
      width:95%;
      margin: auto;
      padding:0rem;
    }
           
                 
}
       
         `}</style>
    </>
  )
}
