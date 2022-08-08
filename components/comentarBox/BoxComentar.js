import { useState } from 'react';
import styles from '../../styles/BoxComentar.module.css'
function BoxComentar(){

  const initialState = {text:''};
  const [comentar, setComentar] = useState(initialState)
  

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
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/comentars`,{
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
        })
        .catch( err=> {
            console.log("Aqui algo anda mal")
            console.log({err})
        })
    }
  return (
    <>
    <form className={styles.form}>
      <textarea className={styles.textArea}
      type='text'
      name='text'
      value={comentar.text}
      onChange={handleChange}
      >
    </textarea>

        <button 
        className={styles.button}
        onClick={handleClick}
        >Send
        </button>

    </form>
  </>
  )
}

export default BoxComentar