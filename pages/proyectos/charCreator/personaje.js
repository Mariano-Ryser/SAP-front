
import { useState, useEffect } from 'react'
import Link from 'next/link'
// CREAMOS LA FUNCION
function Personaje() {
    //CONEXION VARIABLE EN .env
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

    // ESTADO INICIAL PARA CREAR PERSONAJE
    const initialState = {
        name:'',
        surname:'',
        edad: 0,
        email:'',
        city:'',
        description:'',
    }
    // Almacenamos en la variable "personaje" las propiedades al guardar 
    const [personaje, setPersonaje] = useState(initialState)
    // Aqui se setean los personajes traidos de la base de datos...
    // que podemos en contrar mas abajo en el useEffect
    const [personajes, setPersonajes] = useState([])


    const handleChange = (e) =>{
        const inputValue = e.target.value
        const inputName = e.target.name
        setPersonaje({
            ...personaje,
            [inputName]: inputValue,
        })
        console.log(inputName)
        console.log(inputValue)
    }
    const handleClick = async(e)=> {
        e.preventDefault()
        try {
            const res = await fetch(`${baseURL}/personajes`,{  // <----- process.env.NEXT_PUBLIC_BACKEND_URL/products
                 method:'POST',
                 headers:{
                     'Content-Type': 'application/json'
                 },
                 body:JSON.stringify(personaje)
                })
                
             const data = await res.json()
             setPersonaje(initialState)
                 console.log(data)
                 console.log({data})
                 const newPersonajes = [data.personaje, ...personajes]
                 setPersonajes(newPersonajes) 
                 console.log("Personaje! creado con exito!")
                 console.log(newPersonajes)
        } catch (error) {
            console.log("Aqui algo anda mal")
            console.log({error})
        }
    }
    const fetchPersonajes = ()=>{
        fetch(`${baseURL}/personajes`)
        .then(res => res.json())
        .then( ({ personajes }) =>{
            console.log(personajes);
// se setean aqui los personajes traidos de la base de datos
            setPersonajes(personajes);
    })
    }

    useEffect(()=>{
     fetchPersonajes();
    },[]) //<------ [] -- aqui va 

  return (
    <>
<Link href="/proyectos/proyects"><li>/proyects..</li></Link>
    <div className='container'>
        <form className="form">
            <p>Cree su personaje </p>
                <span className='name'>Name</span>
                <input
                    type='text'
                    name='name'
                    value={personaje.name}
                    onChange={handleChange}
                  ></input>
                    <br></br>

                    <span className='surname'>Surname</span><input               
                        type='text'
                        name='surname'
                        value={personaje.surname}
                        onChange={handleChange}
                  ></input>

                <br></br>                       
                {/* <span className='age'>Number</span>
                <input
                    type='number'
                    name='age'
                    value={personaje.age}
                    onChange={handleChange}
                 ></input>     

                <br></br> */}
                <span className='email'>Email</span><input
                    type='text'
                    name='email'
                    value={personaje.email}
                    onChange={handleChange}
                  ></input>

                    <br></br>
                    <span className='city'>City</span>
                <input
                        type='text'
                        name='city'
                        value={personaje.city}
                        onChange={handleChange}
                  ></input>
                  <br></br>
                  <br></br>
                  <span className='city'>Description</span>
                  <br></br>
                  <textarea
                        className='textarea'
                        type='text'
                        name='description'
                        value={personaje.description}
                        onChange={handleChange}
                  ></textarea>
                <br></br>
                <br></br>
                {/* CREATE CHAR BUTTON */}
                <button
                    onClick={handleClick}
                    >Crear personaje
                </button>
</form>

        <div> 
            <div>  
             {personajes.map(({_id, name, surname, age, email, city,description}) => (
                <div key={_id} className="listBoxP">
                    <div >
                        <span className='name'>Name:</span> <span>{name}</span> <br></br>
                        <span className='surname'>Surname:</span> <span>{surname}</span><br></br>
                        {/* <span className='age'>Tel:</span> <span>{age}</span><br></br> */}
                        <span className='email'>Email:</span> <span>{email}</span><br></br>
                        <span className='city'>City:</span> <span>{city}</span><br></br>
                        <span className='description'>Description:</span> <span>{description}</span><br></br>
                        <br></br>
                        {/* <div className='img'></div> */}

                    </div>
                    
                <div className="x">
                    <button
                        onClick={()=>{
                            fetch(`${baseURL}/personajes/${_id}`, {method:'DELETE'})
                            .then((res) => res.json())
                            .then((data)  => {
                                console.log({data})
                                fetchPersonajes();
                            })
                        }}
                        >Deletear
                    </button>
                    </div>
                </div>
            ))}
         </div> 
        </div> 
         
        <style jsx>{`
           

            
            .listBoxP{
                background-color:rgba(10, 118, 73, 0.397);
                font-size:1rem;
                font-family:monospace;
                padding:0.6rem;
                color:white;
                margin: 0.3rem auto 0.3rem auto;
                border: solid 1px rgba(30, 138, 73, 0.897);
                
            }
            .img{
                background-image:url('/img/me.jpg');
                background-position: center;
                background-size:cover;
                height:6rem;
                width:4rem
            }
           
        .container{
}
.form{
    background-color:rgba(10, 138, 123, 0.397);
    color:white;
    margin: auto;
    font-family:monospace;
    padding:1rem;
    border: solid 1px rgb(92, 92, 92);
}
button{
    font-family:monospace;
}
.textarea{
    width: 15rem;
    height: 5rem;
}




      
@media (max-width: 600px) {
    
.listBoxP{
    font-size:1.03rem;
    font-family:monospace;
    padding:0.6rem;
    color:rgb(255, 116, 248);
    margin: 0.3rem auto 0.3rem auto;
    border: solid 1px rgb(92, 92, 92);
}
    .form{
    color:white;
    margin: auto;
    font-family:monospace;
    font-size:1rem;
    padding: 0.5rem;
    border: solid 1px rgb(92, 92, 92);
}
                       
}
       
         `}</style>

        

            
    </div>
        
    </>
  )
}

export default Personaje