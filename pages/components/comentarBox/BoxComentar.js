import { useEffect, useState } from 'react';
import styles from '/styles/BoxComentar.module.css'
import Image from "next/image"

function BoxComentar(){
  const current = new Date();
  const datee = `${current.getDate()} / ${current.getMonth()+1} / ${current.getFullYear()}`;
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

  const initialState = {
    text:'',
    like: 0,
  };
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
    <form className={styles.form}>
      <p className={styles.date}> {datee}</p>
          <textarea 
                    className={styles.textArea}
                    placeholder='Añade un comentario..'
                    maxLength="9999999"
                    type='text'
                    name='text'
                    value={comentar.text}
                    onChange={handleChange}>
          </textarea>
        <button 
        className={styles.button}
        onClick={handleClick}
        >Send
        </button>
        <div>
             {comentars.map(({_id, text}) => (
                <div
                key={_id}
                className={styles.comentarBox}>

                  <span
                   className={styles.text}>
                    -{text}
                   </span> 

                      <div >
                        <span
                        className={styles.x}
                          onClick={()=>{
                                fetch(`${baseURL}/comentars/${_id}`, {method:'DELETE'})
                                .then((res) => res.json())
                                .then((data) => {
                                fetchComentars();
                                  console.log({data})
                              })}}
                        >x</span>
                    </div>
                               
                </div>
                
            ))}
         </div> 

    </form>
  </>
  )
}

export default BoxComentar
