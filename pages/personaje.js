
import { useState, useEffect } from 'react'
function Personaje() {
    
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL
    const initialState = {
        name:'',
        surname:'',
        edad: 0,
        email:'',
        city:'',
    }

    const [personaje, setPersonaje] = useState(initialState)
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
            console.log("error aqui");
            setPersonajes(personajes);
    })
    }

    useEffect(()=>{
     fetchPersonajes();
    },[]) //<------ [] -- aqui va 

  return (
    <>

    <div className='container'>
        <form className="form">
            <h1>Cree su personaje </h1>
                <span>Name</span>
                <input
                    
                    type='text'
                    name='name'
                    value={personaje.name}
                    onChange={handleChange}
                  ></input>

                    <br></br>

                    <span>Surname</span><input               
                        type='text'
                        name='surname'
                        value={personaje.surname}
                        onChange={handleChange}
                  ></input>

                <br></br>                       
                <span>Number</span>
                <input
                    
                    type='number'
                    name='age'
                    value={personaje.age}
                    onChange={handleChange}
                 ></input>     

                <br></br>
                <span>Email</span><input
                    
                    type='text'
                    name='email'
                    value={personaje.email}
                    onChange={handleChange}
                  ></input>

                    <br></br>
                    <span>City</span>
                <input
                        type='text'
                        name='city'
                        value={personaje.city}
                        onChange={handleChange}
                  ></input>
                <br></br>
                {/* CREATE CHAR BUTTON */}
                <button
                    onClick={handleClick}
                    >Crear personaje
                </button>
</form>

        <div> 
            <div>  
             {personajes.map(({_id, name, surname, age, email, city,}) => (
                <div key={_id} className="listBoxP">
                    <div >
                        <span>Name:</span> <span>{name}</span> <br></br>
                        <span>Surname:</span> <span>{surname}</span><br></br>
                        <span>Age:</span> <span>{age}</span><br></br>
                        <span>Email:</span> <span>{email}</span><br></br>
                        <span>City:</span> <span>{city}</span><br></br>
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
                        >Eliminar
                    </button>
                    </div>
                </div>
            ))}
         </div> 
        </div> 
         
        <style jsx>{`
            span{
            }
            .img{
                background-image:url('/img/me.jpg');
                background-position: center;
                background-size:cover;
                height:6rem;
                width:4rem
            }
            h1{
                font-size:1.5rem;
            }
        .container{
}
.form{
    color:white;
    width: 75%;
    margin: auto;
    font-family:monospace;
    font-size:1.2rem;
    padding:1rem;
    border: solid white 2px;
}
.listBoxP{
    font-size:1.2rem;
    font-family:monospace;
    padding:1rem;
    color:white;
    width: 75%;
    margin: 3rem auto 3rem auto;
    border: solid white 2px;
}
.x{
}
      
@media (max-width: 600px) {
 
           
                 
}
       
         `}</style>

        

            
        </div>
       

       
    </>
  )
}

export default Personaje