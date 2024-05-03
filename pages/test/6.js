import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function Test5() {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL 


  const [comentars, setComentars] = useState([])

  const fetchComentars= () =>{
    fetch(`${baseURL}/comentars`)
       .then(res => res.json())
       .then( ({comentars}) =>{
        setComentars(comentars)
        console.log('Comentarios:', comentars)
   })
}
    useEffect(()=>{
      fetchComentars();
     },[])
     
  return (
    <>
<Link href="test"><h3>/test ..</h3></Link>

<div className='component'>
    <h2>Ejemplo</h2>
    <p>ejemplo 3</p>
    <p>ejemplo 4</p>

</div>

  {/* MAPEO DE ELEMENTOS */}
  <div>
             {comentars.map(({_id, titulo, text, author}) => (
                <div key={_id} className="comentarBox">
                    <h1 className="titulo">{titulo}</h1>
                    <span className="text">-{text}...</span> 
                    <br></br>
                    <br></br>
                    <span className="author">-{author}...</span> 
                    
     
                </div>
               
            ))}
    </div> 


  <style jsx>{`
    .component{
      padding:1rem;
      margin:auto;
      width:27rem;
      border:solid red 1px;
    }

@media (max-width: 600px) {
 
                 
}
         `}</style>
    </>
  )
}
