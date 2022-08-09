import style from '../../styles/create.module.css'
import { useState, useEffect } from 'react'
function Create() {
    const initialState = {name:'',price:0}
    const [product, setProduct] = useState(initialState)
    const [products, setProducts] = useState([])

    console.log('Productos: ', products)

    const handleChange = (e) =>{

        const inputValue = e.target.value
        const inputName = e.target.name

        console.log("input Value: ", inputValue,
        "input Name: ", inputName,
        "Product: ", product

        )
        setProduct({
            ...product,
            [inputName]: inputValue,
        })
    }
    const handleClick = (e)=> {
        e.preventDefault()
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`,{
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

    useEffect(()=>{
     fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`)
        .then(res => res.json())
        .then( ({ products }) =>{
            setProducts(products);
    })
    },[])

  return (
    <>
        <div className={style.container}>
            <form className={style.form}>
            <h1 
            className={style.h1}
            >Nuevo producto y su precio </h1>
                <input
                className={style.input}
                 type='text'
                  name='name'
                  value={product.name}
                  onChange={handleChange}
                  ></input>
                <input
                className={style.input}
                 type='number'
                 name='price'
                 value={product.price}
                 onChange={handleChange}
                 ></input>
                <button
                className={style.button}
                onClick={handleClick}
                >Crear producto</button>

             <div>
             {products.map(({name, price}) => (
                <div key={products} className={style.prodBox}>
                    <span>Nombre:</span> <span>{name}</span>
                    <br></br>
                    <span>Precio:</span> <span>{price}</span>
                </div>
            ))}
           
         </div> 
            </form>
            <style jsx> 
           {
           `
             
            `
           }

            </style>

        

            
        </div>
       
    </>
  )
}

export default Create