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
    <div className='container'>
    <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
    <h1>Hablemos de Node Js</h1>
    <p>Node.js es un entorno de tiempo de ejecución de JavaScript de código abierto que se basa en el motor V8 de Google Chrome. Fue creado por Ryan Dahl en 2009 con el objetivo de permitir la ejecución de JavaScript fuera del navegador, en el servidor. </p>
   <p>Antes de Node.js, JavaScript era principalmente utilizado en el lado del cliente para interactuar con páginas web en el navegador. Sin embargo, Dahl vio la necesidad de utilizar JavaScript en el servidor para manejar la lógica del lado del servidor y construir aplicaciones web más eficientes y escalables.</p>
   <p>La arquitectura de Node.js se basa en un modelo de E/S sin bloqueo y orientado a eventos. Esto significa que las operaciones de entrada y salida, como lectura o escritura de archivos o solicitudes a una base de datos, se realizan de manera asíncrona y no bloqueante. En lugar de esperar a que una operación se complete antes de continuar con la siguiente, Node.js permite que otras operaciones se ejecuten mientras se espera la respuesta, lo que aumenta la eficiencia y la capacidad de manejar grandes cantidades de solicitudes simultáneas.</p>
   <p>Node.js utiliza el motor V8 de Google Chrome, que es un intérprete de JavaScript de alto rendimiento, para ejecutar código JavaScript. Esto permite que las aplicaciones Node.js sean rápidas y eficientes.</p>
   <p>ha ganado popularidad rápidamente y se ha convertido en una opción popular para el desarrollo de servidores y aplicaciones web en JavaScript. Su ecosistema incluye un administrador de paquetes llamado npm, que es una de las mayores colecciones de módulos y bibliotecas de código abierto disponibles.</p>
  <p>En resumen, Node.js es un entorno de tiempo de ejecución de JavaScript en el lado del servidor que fue creado para permitir el desarrollo de aplicaciones web eficientes y escalables fuera del entorno del navegador. Su arquitectura orientada a eventos y sin bloqueo lo hace adecuado para manejar grandes cantidades de solicitudes simultáneas de manera eficiente.</p>
  
  <p>Sabias que la Nintendo Switch ejecuta Node JS?</p>
  

  <h2>te dare 5 razones de porque deberiamos aprenderlo !!</h2>
   
   <ul>
    <li>Popularidad y demanda en el mercado laboral: Node.js es una tecnología extremadamente popular y ampliamente adoptada, especialmente en el desarrollo web. Aprender Node.js te abrirá puertas en el mercado laboral, ya que muchas empresas buscan desarrolladores con experiencia en esta tecnología para construir aplicaciones rápidas y escalables.</li>
    <li>JavaScript en ambos lados: Node.js utiliza el mismo lenguaje de programación, JavaScript, tanto en el lado del cliente como en el del servidor. Esto facilita la transición de los desarrolladores que ya conocen JavaScript para construir aplicaciones de lado del servidor y aprovechar sus habilidades en ambos lados de la pila tecnológica.</li>
    <li>Alta velocidad y rendimiento: Node.js está diseñado para ser extremadamente rápido y eficiente. Utiliza el motor V8 de Google Chrome, que compila el código JavaScript en código de máquina altamente optimizado. Además, su modelo de operaciones no bloqueantes (event-loop) permite manejar múltiples solicitudes de manera eficiente, lo que lo convierte en una excelente opción para aplicaciones en tiempo real y de alto rendimiento.</li>
    <li>NPM (Node Package Manager): Node.js viene con NPM, que es el gestor de paquetes más grande y activo del mundo. Con NPM, puedes acceder a miles de módulos y bibliotecas gratuitas para agilizar tu desarrollo, lo que te permite construir aplicaciones complejas y robustas de manera más rápida y sencilla.</li>
    <li>Versatilidad y escalabilidad: Node.js es adecuado para una variedad de casos de uso, desde aplicaciones web y API hasta aplicaciones de tiempo real y servicios en la nube. Además, gracias a su enfoque en la asincronía y su capacidad para manejar grandes cantidades de solicitudes concurrentes, es una excelente opción para aplicaciones escalables que necesitan manejar un alto volumen de tráfico.</li>
   </ul>

  <p>Netflix, la Nasa, Trello, Paypal, Uber , etc cualquier compania que conozcas utiliza Node Js... </p>
    

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
  
  
  <h1>CORS!</h1>
  <p> que son los cors?? y para que sirven? </p>
  <h2>Hablemus de security </h2>
  <p>CORS o Cross-Origin Resource Sharing... es un mecanismo de seguridad implementado en los navegadores web para controlar las solicitudes de recursos, como datos, scripts, estilos, etc. realizadas desde un dominio u o Origen hacia otro dominio diferente. Esto es relevante cuando estás trabajando con aplicaciones web que se ejecutan en un dominio y necesitan acceder a recursos alojados en otro dominio o destino.

En el contexto de Node.js, CORS se vuelve importante cuando estás construyendo APIs o servicios web que pueden ser consumidos por aplicaciones front-end alojadas en dominios diferentes. Sin CORS, los navegadores bloquearían automáticamente las solicitudes realizadas desde un origen diferente por razones de seguridad.

Para permitir solicitudes entre orígenes diferentes de manera controlada, puedes configurar CORS en tu servidor Node.js. Aquí hay un ejemplo de cómo podrías hacerlo usando el paquete cors:</p>
  <p>se utiliza como un middleware de Express para habilitar CORS en todas las rutas de tu aplicación. Puedes configurar opciones más avanzadas para restringir los dominios permitidos, los métodos HTTP, las cabeceras, etc., según tus necesidades.</p>
  
  <p>En resumen, CORS es una parte importante cuando se trabaja con aplicaciones web que requieren que distintos dominios se comuniquen entre sí de manera segura. Node.js proporciona herramientas, como el paquete cors, para gestionar estas restricciones y permitir que las solicitudes entre orígenes sean manejadas adecuadamente.</p>
  </section>

    </div>
 

  <button
     className='button2'
     onClick={grosse}
     >+</button>
      <button
     className='button3'
     onClick={grosseOut}
     >-</button>


          <style jsx>{`
li{

}
ul{
  padding: 0px 0px 0px 20px;
}

.container{
  display: flex;
            justify-content: center;
            flex-wrap: wrap;
          width: 90%;
          margin: auto;
}

          a{
  color:yellow;
 } 
h1,h2,h3{
  padding-top: 1rem;
  padding-bottom: 0rem;
  margin-top: 0rem;
  margin-bottom: 0rem;
  color:rgb(89, 200, 89);
}

section{
  
      border-radius: 10px;
      background-color: rgba(24, 24, 24, 0.89);
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
      font-size:1.3rem;
      line-height: 1.74;
        color: rgba(254, 254, 254, 0.884);
        width:85%;
        margin:auto;
        margin-bottom:1rem;
        margin-top: 0.4rem;
        padding:0rem 1rem 0rem 1rem;
    }
                  .button2{    
                    cursor: pointer;
                    font-size:2rem;
                    border-radius:10px;
                    border: none;
                    position: fixed;
                    bottom:5rem;
                    left:1rem;
                    background-color: #f8f8f8bf;
                    height: 2.4rem;
                    width: 2.5rem;
                    transition: 0.1s;
                    box-shadow: inset 0px 0px 5px 2px rgba(83, 83, 83, 0.443);
                }
                .button2:hover{
                    background-color: rgba(140, 250, 81, 0.678);
                }
                .button3{
                    cursor: all-scroll;
                    font-size:2rem;
                    border-radius:10px;
                    position: fixed;
                    bottom: 2rem;
                    left:1rem;
                    background-color: rgba(219, 219, 219, 0.717);
                    height: 2.4rem;
                    width: 2.5rem;
                    border: none;
                    transition: 0.1s;
                    box-shadow: inset 0px 0px 5px 2px rgba(83, 83, 83, 0.443);
                }
                .button3:hover{
                  background-color: rgba(140, 250, 81, 0.733);
                }

    @media (max-width: 600px) {

      .container{
    display: flex;
              justify-content: center;
              flex-wrap: wrap;
            width: 100%;
            margin: auto;
}
               .button2{
                    font-size:2rem;
                    border-radius:10px;
                    position: fixed;
                    bottom:5rem;
                    left:1rem;
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
                    height: 2.4rem;
                    width: 2.5rem;
                    box-shadow: inset 0px 0px 5px 2px rgba(83, 83, 83, 0.443);
                  }

                  section{
                  width:95%;
                  margin:auto;
                  margin-bottom:1rem;
                  margin-top: 0.3rem;
                  padding:0px 10px 0px 10px;
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