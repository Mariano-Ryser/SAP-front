import React from 'react'
import {useState} from 'react'
function create() {
 
    const initialState = {name:'',price:0}
    const [product, setProduct] = useState(initialState)

    const handleChange = (e) =>{
        const inputValue = e.target.value
        const inputName = e.target.name
        setProduct({
            ...product,
            [inputName]: inputValue,
        })
    }
    const handleClick = (e)=> {
        e.preventDefault()
        fetch('http://localhost:5000/api/v1/products',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res => res.json())
        .then((data) =>{
            setProduct(initialState)
            console.log("Producto creado con exito!")
        })
        .catch( err=> {
            console.log("Aqui algo anda mal")
            console.log({err})
        })
    }
    
  return (
    <>
        <div>
            <h1>Crear nuevo producto</h1>
            <form>
                <input
                 type='text'
                  name='name'
                  value={product.name}
                  onChange={handleChange}
                  ></input>
                <input
                 type='number'
                 name='price'
                 value={product.price}
                 onChange={handleChange}
                 ></input>
                <button
                onClick={handleClick}
                >Crear producto</button>
            </form>
        </div>
        <style jsx>
            {`
                form{
                    display:flex;
                    flex-direction:column;
                    width:20rem;
                    margin: 0 auto
                }
                input{
                    margin-bottom:0.5rem;
                }

                h1{
                    text-align:center;
                    background-color:rgb(241, 241, 241);
                }
                `}
        </style>
    </>
  )
}

export default create