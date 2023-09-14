

export default function Segmento() {
   
  return (
  <>
  <div className='seg'>
    <h1></h1>
    <p>if there are etwas que no puedo negar, es la necesidad de pushear a produccion, informacion innesesarea.. callendo profundamente en el paradigma del testing y auto analisis.</p>
          {/* MAPEO DE ELEMENTOS */}
          <div>
                {comentars.map(({_id, author}) => (
                    <div key={_id} >
                        <span className="author">-{author}...</span> 
                   
        </div>
               
            ))}
         </div> 
    </div>
    
  <style jsx>
  
  {`
    .seg{
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            font-size:1.3rem;
            line-height: 1.74;
            border-radius: 1rem;
            border: 5px rgb(65, 167, 245) dashed;
            color: rgb(7, 7, 7);
            width:40rem;
            margin:auto;
            margin-bottom:1rem;
            margin-top: 1rem;
            padding:2rem;
    }
    .seg:hover{
        border: 5px rgb(35, 70, 96) dashed;
        cursor: pointer;
    }
    @media (max-width: 600px) {
        .seg{
            width:98%;

    }
      }   
    `}</style>
  </>
  )
}

