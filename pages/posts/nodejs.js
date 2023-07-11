import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const TestPagination = () => {
  const initialState = (1.3)
  const [gross, setGross] = useState(initialState)

  const grosse = ()=> {
      setGross(gross + 0.05)
  }

  const grosseOut = ()=>{
    setGross(gross - 0.05)
  }
  return (
    <>
  <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
    <h1>Hablemos de Node Js</h1>
    <p>Node.js es un entorno de tiempo de ejecución de JavaScript de código abierto que se basa en el motor V8 de Google Chrome. Fue creado por Ryan Dahl en 2009 con el objetivo de permitir la ejecución de JavaScript fuera del navegador, en el servidor. </p>
   <p>Antes de Node.js, JavaScript era principalmente utilizado en el lado del cliente para interactuar con páginas web en el navegador. Sin embargo, Dahl vio la necesidad de utilizar JavaScript en el servidor para manejar la lógica del lado del servidor y construir aplicaciones web más eficientes y escalables.</p>
   <p>La arquitectura de Node.js se basa en un modelo de E/S sin bloqueo y orientado a eventos. Esto significa que las operaciones de entrada y salida, como lectura o escritura de archivos o solicitudes a una base de datos, se realizan de manera asíncrona y no bloqueante. En lugar de esperar a que una operación se complete antes de continuar con la siguiente, Node.js permite que otras operaciones se ejecuten mientras se espera la respuesta, lo que aumenta la eficiencia y la capacidad de manejar grandes cantidades de solicitudes simultáneas.</p>
   <p>Node.js utiliza el motor V8 de Google Chrome, que es un intérprete de JavaScript de alto rendimiento, para ejecutar código JavaScript. Esto permite que las aplicaciones Node.js sean rápidas y eficientes.</p>
   <p>ha ganado popularidad rápidamente y se ha convertido en una opción popular para el desarrollo de servidores y aplicaciones web en JavaScript. Su ecosistema incluye un administrador de paquetes llamado npm, que es una de las mayores colecciones de módulos y bibliotecas de código abierto disponibles.</p>
  <p>En resumen, Node.js es un entorno de tiempo de ejecución de JavaScript en el lado del servidor que fue creado para permitir el desarrollo de aplicaciones web eficientes y escalables fuera del entorno del navegador. Su arquitectura orientada a eventos y sin bloqueo lo hace adecuado para manejar grandes cantidades de solicitudes simultáneas de manera eficiente.</p>
  
  <br></br>

  <h2>File Systems Node Js</h2>



  <p>En el contexto de Node.js, el módulo fs (file system) proporciona una API para interactuar con el sistema de archivos del sistema operativo. Este módulo permite realizar operaciones de lectura, escritura, manipulación y gestión de archivos y directorios.</p>
  <p>El módulo fs de Node.js ofrece una amplia gama de funciones para trabajar con archivos y directorios. Algunas de las operaciones más comunes que se pueden realizar son:</p>
  <ul>
    <li>Lectura y escritura de archivos: Puedes leer el contenido de un archivo o escribir datos en él utilizando funciones como fs.readFile(), fs.readFileSync(), fs.writeFile(), fs.writeFileSync(), entre otras.</li>
   <br></br>
    <li>Manipulación de directorios: Puedes crear, renombrar o eliminar directorios utilizando funciones como fs.mkdir(), fs.rename(), fs.rmdir(), fs.readdir(), entre otras.</li>
   <br></br>
    
    <li>Gestión de propiedades de archivos: Puedes obtener información sobre un archivo, como su tamaño, fecha de creación o permisos, utilizando funciones como fs.stat(), fs.chmod(), fs.utimes(), entre otras.</li>
   <br></br>
    
    <li>Flujo de archivos: Node.js también proporciona la capacidad de trabajar con flujos de archivos, lo que permite una manipulación eficiente de grandes archivos. Puedes utilizar flujos para leer y escribir datos de manera incremental en lugar de cargar todo el contenido en memoria.</li>
   <br></br>
  
  </ul>

  <p>Es importante destacar que las operaciones de archivo y directorio en Node.js son asíncronas de forma predeterminada, lo que significa que no bloquean la ejecución del programa mientras se realizan. Esto permite un mejor rendimiento y la capacidad de manejar múltiples solicitudes o tareas de manera eficiente. Sin embargo, también existen versiones sincrónicas de las funciones disponibles si se requiere una ejecución bloqueante.</p>
  <p>En resumen, el módulo fs de Node.js proporciona una API para interactuar con el sistema de archivos del sistema operativo, permitiendo realizar operaciones de lectura, escritura y manipulación de archivos y directorios. Esta funcionalidad es fundamental para muchas aplicaciones Node.js que necesitan acceder y gestionar archivos en el sistema.</p>
  

<p>En la pagina oficial de Node JS encontraras mas informacion acerca de <Link href="https://nodejs.org/dist/latest-v20.x/docs/api/fs.html">File Systems</Link> </p>
  
  
  </section>

  <button
     className='button2'
     onClick={grosse}
     >+</button>
      <button
     className='button3'
     onClick={grosseOut}
     >-</button>
          <style jsx>{`
          a{
  color:yellow;
 } 
h1,h2,h3{
  color:rgb(1, 179, 1);
}

section{
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
      font-size:1.3rem;
      line-height: 1.74;
        color: rgb(191, 191, 191);
        width:40rem;
        margin:auto;
        margin-bottom:1rem;
        margin-top: 1rem;
        padding:0rem;
    }
                  .button2{    
                    cursor: pointer;
                    font-size:2rem;
                    border-radius:10px;
                    position: fixed;
                    bottom:5rem;
                    left:1rem;
                    background-color: #2ada0cb9;
                    height: 2.4rem;
                    width: 2.5rem;
                    transition: 0.1s;
                    box-shadow: inset 0px 0px 5px 2px rgba(83, 83, 83, 0.443);
                }
                .button2:hover{
                    background-color: rgba(140, 250, 81, 0.873);
                }
                .button3{
                    cursor: all-scroll;
                    font-size:2rem;
                    border-radius:10px;
                    position: fixed;
                    bottom: 2rem;
                    left:1rem;
                    background-color: rgba(162, 131, 9, 0.717);
                    height: 2.4rem;
                    width: 2.5rem;
                    transition: 0.1s;
                    box-shadow: inset 0px 0px 5px 2px rgba(83, 83, 83, 0.443);
                }
                .button3:hover{
                    background-color: rgba(231, 209, 123, 0.873);
                }

    @media (max-width: 600px) {
               .button2{
                    font-size:2rem;
                    border-radius:10px;
                    position: fixed;
                    bottom:5rem;
                    left:1rem;
                    background-color: white;
                    height: 2.4rem;
                    width: 2.5rem;
                    box-shadow: inset 0px 0px 5px 2px rgba(83, 83, 83, 0.443);
                }
                .button3{
                    font-size:2rem;
                    border-radius:10px;
                    position: fixed;
                    bottom: 2rem;
                    left:1rem;
                    background-color: white;
                    height: 2.4rem;
                    width: 2.5rem;
                    box-shadow: inset 0px 0px 5px 2px rgba(83, 83, 83, 0.443);
                  }

                  section{
                  width:95%;
                  margin:auto;
                  margin-bottom:1rem;
                  margin-top: 1rem;
                  padding:0rem;
                      }   

            .img{
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin:auto;
                    height:20rem;
                    width: 95%;
                    {/* border: solid 1px black; */}
                  }
      }   
        `}</style>

  </>
  )
}

export default TestPagination