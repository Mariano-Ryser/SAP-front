import { useEffect, useState } from 'react';
import styles from '../../styles/BoxComentar.module.css'
import Image from "next/image"

function BoxComentar(){
  const current = new Date();
  const datee = `${current.getDate()} / ${current.getMonth()+1} / ${current.getFullYear()}`;
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

  const initialState = {
    titulo:'',
    text:'',
    author:'',
  };
  const [comentar, setComentar] = useState(initialState)
  const [comentars, setComentars] = useState([])

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);



  //  ALERTAS DE COMPLETADO DE CASILLERO 
  
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

      if(comentar.titulo.trim() === "") {  //.trim() significa toma como error los espacios en blanco
          setError("Debes indicar un titulo")
          return;
      }
      if(comentar.text.trim() === "") {
          setError("Debes indicar una descripcion")
          return;
      }
      if(comentar.author.trim() === "") {
        setError("Debes indicar un Author")
        return;
    }
      
      else{
        setSuccessMessage("Agregado con Exito!!")
      }
    
       setTimeout(()=> {
           setSuccessMessage(null)}
           , 2000)
      setError(null);
        
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

      {/* Input Titulo */}
      <input
    placeholder='Titulo'
    className={styles.authorInput}
     maxLength="20"
     type='text'
     name='titulo'
     value={comentar.titulo}
     onChange={handleChange}
    ></input>

    {/* Input Text area */}
      <textarea
      className={styles.textArea}
      placeholder='Añade un comentario..'
      maxLength="9999999"
      type='text'
      name='text'
      value={comentar.text}
      onChange={handleChange}
      >
        
    </textarea>

    {/* Input Autor */}
    <input
    placeholder='Author..'
    className={styles.authorInput}
     maxLength="9999999"
     type='text'
     name='author'
     value={comentar.author}
     onChange={handleChange}
    ></input>

      {/* Send Button */}
        <button 
        className={styles.button}
        onClick={handleClick}
        >Send
        </button>
        {
                error && 
                (
                    <div className={styles.error}>
                        { error }
                    </div>
                ) 
                
            }
            {
                successMessage && 
                (
                    <div className={styles.success}>
                        { successMessage }
                    </div>
                ) 
                
            }


        {/* MAPEO DE ELEMENTOS */}
        <div>
             {comentars.map(({_id, titulo, text, author}) => (
                <div key={_id} className={styles.comentarBox}>
                    <h1 className={styles.titulo}>{titulo}</h1>
                    <span className={styles.text}>-{text}...</span> 
                    <br></br>
                    <br></br>
                    <span className={styles.author}>-{author}...</span> 
                    
                <div >
              {/* Button Deleted */}
              <span
                        className={styles.x}
                          onClick={
                              ()=>{
                                fetch(`${baseURL}/comentars/${_id}`, {method:'DELETE'})
                                .then((res) => res.json())
                                .then((data) => {
                                fetchComentars();
                                console.log({data})})}}
                      >X</span>

                    </div>
                               
                </div>
                
            ))}
         </div> 
       

    </form>

    
  </>
  )
}

export default BoxComentar
