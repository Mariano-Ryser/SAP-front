import { useEffect, useState } from 'react';
// import Image from "next/image"

function Noti(){

  const current = new Date();
  const datee = `${current.getDate()} / ${current.getMonth()+1} / ${current.getFullYear()}`;

  // .ENV VARIABLE DE ENTORNOOOOO!!!!!!!!!!
  // ()=>("api/v1") ( se encuentra en backend app.js enrutador)
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL 

  const initialState = {
    titulo:'',
    text:'',
  };
  
  const [noti, setNoti] = useState(initialState)
  const [notis, setNotis] = useState([])

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [deletedMessage, setDeleted] = useState(null);

  const [likes, setLikes] = useState(noti.likes);

  //  ALERTAS DE COMPLETADO DE CASILLERO 
  const handleChange = (e) =>{
        const inputValue = e.target.value
        const inputName = e.target.name

      setNoti({
        ...noti, 
        [inputName]: inputValue,
      });
  }


  
  const handleClick = (e)=> {
        e.preventDefault()

      if(noti.titulo.trim() === "") {  //.trim() significa toma como error los espacios en blanco
          setError("Debes indicar un titulo")
          return;
      }
      if(noti.text.trim() === "") {
          setError("Debes indicar una descripcion")
          return;
      }
      
      else{
        setSuccessMessage("Agregado con Exito!!")
      }
       setTimeout(()=> {
           setSuccessMessage(null)}
           , 2100)
      setError(null);
        
        fetch(`${baseURL}/notis`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(noti)
        })
        .then(res => res.json())

        .then((data) =>{
            setNoti(initialState)
            console.log("noti creado con exito ! !")
            const newNotis = [data.noti, ...notis]
            setNotis(newNotis)
            fetchNotis();
            console.log("notiio creado con exito!")
        })

        .catch( err=> {
            console.log("Aqui algo anda mal")
            console.log({err})
        })
  }
  const handleDeleted = (e)=> {
    e.preventDefault()
}

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
    <form className="form">
      <p className="date"> {datee}</p>

      {/* Input Titulo */}
      <input
    placeholder='Titulo'
    className="authorInput"
     maxLength="20"
     type='text'
     name='titulo'
     value={noti.titulo}
     onChange={handleChange}
    ></input>

    {/* Input Text area */}
      <textarea
      className="textArea"
      placeholder='Añade un notiio..'
      maxLength="9999999"
      type='text'
      name='text'
      value={noti.text}
      onChange={handleChange}
      >
        
    </textarea>

 

      {/* Send Button */}
        <button 
        className="button"
        onClick={handleClick}
        >Send
        </button>
        {
                error && 
                (
                    <div className="error">
                        { error }
                    </div>
                ) 
                
            }
            {
                successMessage && 
                (
                    <div className="success">
                        { successMessage }
                    </div>
                ) 
            }

          {
                deletedMessage && 
                (
                    <div className="deleted">
                        { deletedMessage }
                    </div>
                ) 
            }
    </form>

     {/* MAPEO DE notis */}
     <div>
             {notis.map(({_id, titulo, text}) => (
                <div key={_id} className="notiBox">
                    <h1 className="titulo">{titulo}</h1>
                    <span className="text">-{text}...</span> 
                    <br></br>
        <div >
              {/* Button Deleted */}
              <span
                        className="x"
                          onClick={
                              ()=>{
                                fetch(`${baseURL}/notis/${_id}`, {method:'DELETE'})
                                .then((res) => res.json())
                                .then((data) => {
                                fetchNotis();
                                setDeleted("Deleted!") 

                                setTimeout(()=> {
                                  setDeleted(null)}
                                  , 2000)

                                 setError(null);

                                console.log({data})})}}
                                
                      >X</span>
                    </div>
                        
                </div>
               
            ))}
    </div> 
       
      <div className='msjCarga'>
                  Das Laden der Nachricht kann ein paar Sekunden dauern...
      </div>
   
    <style jsx>{`
    .msjCarga{
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
      }

     
        
.date{
font-weight: 900;
margin: 0rem;
padding: 0.7rem;
font-family:monospace;
}

/* FORMULARIO A COMPLETAR */
.form{
  position: relative;
  width: 40rem;
  margin: auto;
  padding-top: 0.7rem;
}

.error{
  font-family:monospace;
  border-radius: 3px;
  display: inline-block;
  padding: 0.4rem;
  margin: 0rem 1rem 0rem 1rem;
  color: rgb(226, 226, 226);
  background-color: #ac0b0b96;
  transition: 0.2s;
  animation: alert 0.2s 1 ease-in;
}
@keyframes alert {
  0%{ opacity: 0%;}
  100%{opacity: 100%;}
  
}
.success{
  font-family:monospace;
  display: inline-block;
  padding: 0.4rem;
  margin: 0rem 1rem 0rem 1rem;
  color: white;
  background-color: #17b11cbd;
  transition: 0.2s;
  animation: alert 0.2s 1 ease-in;
}

.deleted{
  position: fixed;
  top: 33%;
  left: 43%;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0rem 1rem 0rem 1rem;
  color: white;
  background-color: black;
  transform: rotateZ(360deg);
  scale: 2;
  transition: 0.2s;
  animation:deleted 1s 1 ease-in;
  font-family:monospace;
}
@keyframes deleted {
  
  0%{transform: rotateZ(0deg);
  scale:0}

  50%{
    scale:3;
    }
  100%{
    scale:2;
    transform: rotateZ(360deg)}
}

.textArea{
  position: relative;
  width:100%;
  border-radius:0.2rem;
  margin-bottom: 0.1rem;
  margin-top: 0.1rem;
  height: 6rem;
 font-size:1.1rem;
 font-family:monospace; 
  }

  .textArea::placeholder {
    display: block;
   
    font-size:1.1rem;
  }

  .authorInput{
    display: block;
    margin-bottom: 0.3rem;
    margin-top:0rem;
    padding: 0.4rem;
    font-size:1.1rem;
   font-family:monospace; 
  }

  .authorInput::placeholder{
    font-size:1.1rem;
  font-family:monospace; 
  }

/* SEND BUTTON */
.button{
  height: 2rem;
  width: 5rem;
  margin-bottom: 0.2rem;
  border-radius: 0.2rem;
  border: solid 1px #383838 ;
}


/* NOTA */

/* TTITULO EN TEXTO */
.titulo{
  color: rgb(133, 133, 133);
  font-family:monospace;
  line-height: 0rem;
  font-size: 1rem;
}

.notiBox{
  border:solid 1px black;
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  padding-bottom: 2rem;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  font-family:monospace;
  color: rgb(219, 219, 219);
  transition: 0.1s;
}
{/* .notiBox:hover{
  background-color: #3c3c3c;
  border: dashed rgb(50, 50, 50) 1px;
} */}
.author{
  font-size: 0.9rem;
  display: block;
  color: white;
  text-align: start;
}

.x{
  position: absolute;
  font-size: 0.9rem;
  right: 1rem;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-family: sans-serif;
}

/* MOBIL - STYLE */

@media (max-width: 600px) {
  .form{
    position: relative;
    width: 95%;
    overflow: hidden;
    margin: auto;
    padding-top: .1rem;
  }
  .date{
    display:flex;
    justify-content:end;
    color: #f5f5f5ad;
    font-family:monospace;
    font-size: 0.8rem;
    font-weight: 900;
    margin: 0.2rem 0.2rem 0.2rem 0rem;
    padding: 0rem;
  }

  .textArea{
    font-family:monospace;
    position: relative;
    width:100%;
    padding: 0.4rem;
    height: 6rem;
   }
  .button{
    height: 2rem;
    width: 5rem;
    margin-top: 0rem;
    border-radius: 0.2rem;
    
  }
}
    `}</style>
    
  </>
  )
}

export default Noti
