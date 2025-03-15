import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function Home() {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL 

  const [notis, setNotis] = useState([])


  const fetchNotis= () =>{
    fetch(`${baseURL}/notis`)
       .then(res => res.json())
       .then(({notis}) =>{
        setNotis(notis)
        console.log('notis:', notis)
   })
}
  const handleLike = async (_id) => {
  try {
    const response = await fetch(`${baseURL}/notis/${_id}/like`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const updatedNoti = await response.json();
      // Actualizamos el estado con el noti actualizado
      setNotis((prevNotis) =>
        prevNotis.map((noti) =>
          noti._id === _id ? updatedNoti.noti : noti
        )
      );
    } else {
      console.error('Error al agregar like:', response.statusText);
    }
  } catch (error) {
    console.error('Error al agregar like:', error);
  }
};
  useEffect(()=>{
    fetchNotis();
  },[])

  return (
    <>
  {/* MAPEO DE notis */}
  
  <div>
         {notis.map(({_id, titulo, text, likes}) => (
            <div key={_id} className="notiBox">
                <h1 className="titulo">{titulo}</h1>
                <p className="text">{text}</p>
              <button className="likeButton" onClick={() => handleLike(_id)}>
                ❤️{likes}
              </button>
            </div>
             
          ))}
    </div>  



  <style jsx>{`
    .likeButton {
      border: 0;
      cursor: pointer;
      transform: scale(1.8);
      margin-top: 1rem;
      margin-bottom: 1rem;
      background: none;
      position: relative;
      bottom: 0px;
      left: 85%;
      transition: transform 0.1s;
    }
    .likeButton:hover {
      transform: scale(2);
    }
    .likeButton:active {
      transform: scale(1.7);
    }
    .titulo{
      font-family: "Montserrat" ;
      margin-top:0.7rem;
      margin-bottom:1rem;
      line-height: 1; 
    }  
    .notiBox{
      margin-top:1rem;
      margin-bottom:1rem;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }  
    .text{
      font-family: "Montserrat" ;
      
      white-space: pre-line;
      line-height: 1.44; /* Espaciado entre líneas */
      font-size: 19px; /* Tamaño recomendado para móviles */
      margin: auto; /* Centrar el texto */
    }  
    
         `}</style>
    </>
  )
}
