import Link from "next/link"

export default function Homee() {
  return (
    <>
 
  <ul>
  <Link href="/posts/cinderella"><li>An Emancipated Cinderella</li></Link>
  <Link href="/posts/dopamina"><li>Desintoxicacion Dopaminica</li></Link>
  <Link href="/posts/pnl"><li>Principios de la PNL</li></Link>
  <Link href="/posts/conciencia"><li>La magia de la Conciencia</li></Link>
  <Link href="/posts/inteligencia"><li>Die Intelligenz</li></Link>
  <Link href="/posts/pagination"><li>No todo es tan facil</li></Link>
  <Link href="/posts/pagination"><li>Si tu supieras!</li></Link>
  <Link href="/posts/pagination"><li>Conjugaciones Astronomicas</li></Link>
  <Link href="/posts/pagination"><li>Einfach lectura</li></Link>
  <Link href="/posts/pagination"><li>Worterbuch</li></Link>
  <Link href="/posts/pagination"><li>YaTuSabes</li></Link>
  

  
  </ul> 

  <style jsx>{`
    .link{
      color:red;
    }
    ul{
      width:40rem;
      margin: auto;
      padding:0rem;
    }
    li{
      font-family: 'Courier New', Courier, monospace;
      line-height: 1.7rem;
      list-style:none;
      color: yellow;
      margin: 0.5rem 0.5rem 0.5rem 0.5rem;
      border-bottom:solid gray 1px;
    }
    li:hover{
      cursor:pointer;
      font-family: 'Courier New', Courier, monospace;
      line-height: 1.7rem;
      list-style:none;
      color:white;
    }
      
@media (max-width: 600px) {
    ul{
      width:95%;
      margin: auto;
      padding:0rem;
    }
  li{
      font-family: 'Courier New', Courier, monospace;
      line-height: 1.7rem;
      list-style:none;
      color: rgb(191, 191, 191);
      margin: 0.5rem 0.5rem 0.5rem 0.5rem;
      border-bottom:solid gray 1px;
    }
    li:hover{
      cursor:pointer;
      font-family: 'Courier New', Courier, monospace;
      line-height: 1.7rem;
      list-style:none;
      color:white;
    }
           
                 
}
       
         `}</style>
    </>
  )
}
