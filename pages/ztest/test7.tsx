import React from 'react'


function Test7() {
  class ProductoElectronico {
    nombre: string;
    precio: number;
    descripcion: string;
  
    constructor(nombre: string, precio: number, descripcion: string) {
      this.nombre = nombre;
      this.precio = precio;
      this.descripcion = descripcion;
    }

    mostrarInformacion(): void {
      console.log(`El producto ${this.nombre} tiene un precio de ${this.precio} y su descripción es: ${this.descripcion}`);
    }
  }
  const producto1 = new ProductoElectronico("Laptop", 1200, "Laptop ultraligera con procesador Intel Core i7 y pantalla de alta resolución.");
  const producto2 = new ProductoElectronico("Smartphone", 800, "Smartphone con cámara de alta resolución y batería de larga duración.");



return (
  <>
  <div className='box'>

    <p className="text">{producto1.nombre}</p>
    <p className="text">{producto1.precio}</p>
    <p className="text">{producto1.descripcion}</p>
    <p className="text"></p>

  </div>



 

   <style jsx>{`
                   .box{
                    background-color:white;
                    width:50%;
                    margin:auto;
                  } 
            
            @media (max-width: 600px) {
                 .box{
                  } 
}
         `}</style>
   
 </>
  )
}

export default Test7

