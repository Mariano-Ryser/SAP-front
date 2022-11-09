import { useEffect, useState } from 'react';
import styles from '../../styles/BoxComentar.module.css'
import Image from "next/image"

function BottonLike(){
  const current = new Date();
  const datee = `${current.getDate()} / ${current.getMonth()+1} / ${current.getFullYear()}`;
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

  const initialState = {text:''};
  const [comentar, setComentar] = useState(initialState)
  const [comentars, setComentars] = useState([])
  
  const handleChange = (e) =>{
        const inputValue = e.target.value
        const inputName = e.target.name

      setComentar({
        ...comentar, 
        [inputName]: inputValue,
      });
  }
  const handleClick = (e)=> {
        e.preventDefault()
        fetch(`${baseURL}/comentars`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(comentar)
        })
        .then(res => res.json())

        .then((data) =>{
            setComentar(initialState)
            console.log("Comentario creado con exito!")
            const newComentars = [data.comentar, ...comentars]
            setComentars(newComentars)
            // fetchComentars();
            console.log("Comentario creado con exito!")
        })

        .catch( err=> {
            console.log("Aqui algo anda mal")
            console.log({err})
        })

  }
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
        <div
            className={styles.like}
            onClick={handleClick()}
            > 
              <Image
              alt='Burger-Icon' 
              src={'/like.png'} 
              height={22} 
              width={24}></Image>
        </div>
  </>
  )
}

export default BottonLike
