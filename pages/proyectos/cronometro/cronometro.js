import React, { useState, useRef } from 'react';

const Cronometro = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const intervalRef = useRef(null);

  const iniciarCronometro = () => {
    if (!activo) {
      intervalRef.current = setInterval(() => {
        setSegundos((segundos) => segundos + 1);
      }, 1000);
      setActivo(true);
    }
  };

  const pausarCronometro = () => {
    clearInterval(intervalRef.current);
    setActivo(false);
  };

  const reiniciarCronometro = () => {
    clearInterval(intervalRef.current);
    setSegundos(0);
    setActivo(false);
  };

  return (
    <>
    <div className='cronometro'>
      <h1>CR0N0</h1>
      <div >
        <span >{Math.floor(segundos / 3600).toString().padStart(2, '0')}:</span>
        <span>{Math.floor((segundos % 3600) / 60).toString().padStart(2, '0')}:</span>
        <span>{(segundos % 60).toString().padStart(2, '0')}</span>
      </div>
      <div>
        {!activo ? (
          <button onClick={iniciarCronometro}>Iniciar</button>
        ) : (
          <button onClick={pausarCronometro}>Pausar</button>
        )}
        <button onClick={reiniciarCronometro}>Reiniciar</button>
      </div>
    </div>



   
    
    <style jsx>{`
      
      .cronometro{
        background-color:black;
        border: inset rgb(62, 232, 130) 7px;
        margin:1rem;
        padding-bottom:1rem;
      }
 
        span{
          font-family:monospace;
          font-size:6rem;
        }
        button{
          color: white;
          border: inset rgb(62, 232, 130) 7px;
          font-family:monospace;
          font-size:1.2rem;
          height:3rem;
          width:8rem;
          background-color:black;
          margin-left:1rem;
        }
@media (max-width: 600px) {
 
                 
}
         `}</style>
    </>
  );
};

export default Cronometro;