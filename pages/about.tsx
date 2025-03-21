import Link from "next/link"
import Image from "next/image"

export default function About() {
  const generateRandomDivs = () => {
    const divs = [];
    const numberOfDivs = 33; // Cambia según cuántos divs quieras

    for (let i = 0; i < numberOfDivs; i++) {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Color aleatorio
      const randomX = Math.random() * 90; // Posición horizontal (%)
      const randomY = Math.random() * 170; // Posición vertical (%)
      const randomDelay = Math.random() * 1; // Retraso aleatorio entre 0 y 5 segundos

      divs.push(
        <div
        key={i}
        style={{
          position: "absolute",
          top: `${randomY}%`,
          left: `${randomX}%`,
          width: "7px",
          height: "9px",
          backgroundColor: randomColor,
          animation: `blink 3s infinite`, // Animación CSS
          animationDelay: `${randomDelay}s`, // Retraso aleatorio
          }}
        />
      );
    }

    return divs;
  };

  return (
    <>
 {/* {generateRandomDivs()}  */}

 {/*
 <div className="presentacion">
        <div className="foto-container">
          <img
            src="/img/me2.jpg" // Cambia esto por la ruta de tu foto
            alt="Tu nombre"
            className="foto"
            />
        </div>
        <h1 className="nombre">Mariano Ryser</h1>
        <h2 className="profesion">Softwareentwickler</h2>
        <p className="descripcion">
        Ich bin ein leidenschaftlicher Softwareentwickler mit Erfahrung
         in der Erstellung moderner und skalierbarer Webanwendungen.
          Ich bin spezialisiert auf Technologien wie Next.js, Node.js und MongoDB.
           Ich liebe es, Probleme zu lösen und neue Technologien zu lernen,
            um meine Fähigkeiten zu verbessern.
        </p>
        <div className="botones">

          <a href="https://github.com/Mariano-Ryser" target="_blank" rel="noopener noreferrer">
          </a>
            <button className="boton">Github</button> 
          <a href="https://www.linkedin.com/in/mariano-ryser-073731221/" target="_blank" rel="noopener noreferrer">
            <button className="boton">LinkedIn</button>
          </a>
         
        </div>
      </div> */}





    <div className="container">
      <div>
          <div className="img-container">
            <Image src="/img/oja.png" alt="Icon" width={240} height={190} />
          </div>    

          <p>It started as a virtual curriculum which later transformed into a blog, and then a complete
             server in which I continue testing and working hard to expand my knowledge on the subject.</p>
          <p>This portfolio is built on Next.JS where my
            frontend runs, and the backend is deployed
            on Azure, the database interaction is
            created with NodeJs and Mongo DB.
          </p>
    
        {/* <div className="divo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo, voluptas saepe tempora accusamus veritatis ab perspiciatis, quia repellendus ullam harum nobis facere optio! Recusandae quis, dignissimos pariatur rem maiores, placeat, sed vel hic explicabo consequatur doloremque. Quasi ducimus dolores adipisci impedit ipsa consequatur nisi id! Hic mollitia velit iusto.</div> */}
        <p>
        Confident, due to the lack of current development and the scarcity of information available to everyone. Monitoring, updates, careful development. Consistent with my progress. Grateful despite the constant hostility to new ideas and contagious collective impatience.
        I know I'm crazy, but nothing will change my destiny, only death.</p>
        <p>If you have any good comments or constructive criticism, they are always helpful to me. so I await your return!</p>
  
  </div>
  </div>

    <br></br>
    <br></br>
    <br></br>
<style jsx>{`
  .presentacion {
          text-align: center;
          padding: 2rem;
          color: white;
          border-radius: 10px;
          margin: 2rem auto;
          max-width: 800px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .foto-container {
          width: 150px;
          height: 150px;
          margin: 0 auto 1rem;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.22);
        }
        .foto {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .nombre {
          font-size: 2.5rem;
          margin: 0.5rem 0;
          font-family: 'Montserrat', sans-serif;
        }
        .profesion {
          font-size: 1.5rem;
          margin: 0.5rem 0;
          font-family: 'Montserrat', sans-serif;
          color:rgb(255, 251, 0)
        }
        .descripcion {
          font-size: 1.1rem;
          margin: 1rem auto;
          max-width: 600px;
          line-height: 1.6;
          font-family: 'Montserrat', sans-serif;
        }
        .botones {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        
        .boton {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 5px;
          background: linear-gradient(135deg,rgba(243, 239, 20, 0.88),rgba(255, 251, 38, 0.57));
          color: #1e3c72;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .boton:hover {
          background-color: #ffc107;
        } 
  @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        
  .divo{
    padding:1rem;
    border: solid 1px black ;
  }
    .container{
      padding: 5px 3rem 0px 3rem;
      border-radius: 10px;
       margin: auto;
       margin-top: 20px;
        display:flex;
        justify-content:center;
        text-align:center;
    }
    .img{
        height:15rem;
        width:13rem;
        background-position: center;
        background-size:contain;
        background-repeat: no-repeat;
        margin:0;
        padding:0;
    }
    .img-container{
        margin-top:1rem;
        display:flex;
        justify-content:center;
    }
    p{
        font-size:1.8rem;

    }
 

@media (max-width: 600px) {
    .img{
        height:12.5rem;
        width:11rem;
        background-position: center;
    }
    .container{
      padding: 5px 15px 0px 15px;
      margin: auto;
      margin-top: 20px;
    }
}
       
         `}</style>
    </>
  )
}
