import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function Home() {
  const initialState = {
    titulo:'',
    text:'',
  };
  const [noti, setNoti] = useState(initialState)
  const [notis, setNotis] = useState([])
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL 
  const fetchNotis= () =>{
    fetch(`${baseURL}/notis`)
       .then(res => res.json())
       .then(({notis}) =>{
        setNotis(notis)
        console.log('notis:', notis)
   })
}
  useEffect(()=>{
    fetchNotis();
  },[])

  return (
    <>

  {/* <Link href="/"><li>/home</li></Link> 
  <Link href="about"><li>/about</li></Link> 
  <Link href="/proyectos/proyects"><li>/proyects</li></Link> 
  <Link href="songs"><li>/songs</li></Link> 
  <Link href="partners"><li>/partners</li></Link> 
  <Link href="idiomas/DayCard"><li>/Deutsch</li></Link> 
  <Link href="/idiomas/EnglishCard"><li>/English</li></Link> 
  <Link href="test"><li>/test</li></Link>  */}
  {/* <Link href="/stapler"><li>/home/StaplerBasis</li></Link> */}
  {/* <Link href="/stapler1"><li>/home/StaplerR1</li></Link>
  <Link href="/stapler2"><li>/home/StaplerR2</li></Link> */}
  {/* <Link href="/proyectos/noti/noticias"><li>/home/noticias</li></Link> */}
  {/* <Link href="/proyectos/nasa/pictureOfTheDay"><li>/AstronomyInfoDay</li></Link> */}
  {/* <Link href="/test/test"><li>/home/test</li></Link> */}

  {/* MAPEO DE notis */}
  
  <div>
         {notis.map(({_id, titulo, text}) => (

            <div key={_id} className="notiBox">
                <h1 className="titulo">{titulo}</h1>
                <span className="text">{text}...</span> 
                <br></br>    
            </div>
             
          ))}
    </div>  



  <style jsx>{`
    .titulo{
      font-family: "Montserrat" ;
      margin:0.2rem;
    }  
    .notiBox{
      padding:0.2rem;
    }  
    .text{
      font-family: "Montserrat" ;
      white-space: pre-line;
      line-height: 1.6; /* Espaciado entre líneas */
  font-size: 16px; /* Tamaño recomendado para móviles */
      width: 90vw;  /* El texto ocupa el 90% del ancho de la pantalla */
  max-width: 600px; /* Máximo ancho para que no se vuelva difícil de leer */
  margin: auto; /* Centrar el texto */
    }  
    
         `}</style>
    </>
  )
}
