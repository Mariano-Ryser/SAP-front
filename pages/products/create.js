import style from '../../styles/create.module.css'
import { useState, useEffect } from 'react'
function Create() {
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL
    const initialState = {name:'',price:0}
    const [product, setProduct] = useState(initialState)
    const [products, setProducts] = useState([])


    const handleChange = (e) =>{
        const inputValue = e.target.value
        const inputName = e.target.name
        // console.log("input Value: ", inputValue,
        // "input Name: ", inputName,
        // "Product: ", product
        // )
        setProduct({
            ...product,
            [inputName]: inputValue,
        })
    }
    const handleClick = async(e)=> {
        e.preventDefault()
        try {
            const res = await fetch(`${baseURL}/products`,{
                 method:'POST',
                 headers:{
                     'Content-Type': 'application/json'
                 },
                 body:JSON.stringify(product)
             })
             const data = await res.json()
                 setProduct(initialState)
                 console.log({data})
                 const newProducts = [data.product, ...products]
                 setProducts(newProducts) 
                //  fetchProducts()
                 console.log("Producto creado con exito!")
        } catch (error) {
            console.log({error})
        }
    }
    const fetchProducts = ()=>{
        fetch(`${baseURL}/products`)
        .then(res => res.json())
        .then( ({ products }) =>{
            console.log(products)
            setProducts(products);
    })
    }

    useEffect(()=>{
     fetchProducts();
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
             {products.map(({_id, name, price}) => (
                <div key={_id} className={style.prodBox}>
                    <div>
                    <span>Nombre:</span> <span>{name}</span>
                    <br></br>
                    <span>Precio:</span> <span>${price}</span>
                    </div>
                    <div>
                    <span
                    className={style.x}
                    onClick={()=>{
                        fetch(`${baseURL}/products/${_id}`, {method:'DELETE'})
                        .then((res) => res.json())
                        .then((data)  => {
                            console.log({data})
                        })
                    }}
                    >X</span>
                    </div>
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