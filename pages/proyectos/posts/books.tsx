import Link from "next/link"
import Test5 from "../../ztest/test5"
export default function Books() {


  return (
    <>
    <Link href="/proyectos/proyects"><h3>/proyects..</h3></Link>
   <ul>
  {/* <Link href="/posts/dopamina"><li>Desintoxicacion Dopaminica</li></Link> */}

  <Link href="posts/nodejs"><li>A bit of Node js and File systems please.</li></Link>
  <Link href="posts/lieyourself"><li>Lie to yourself.</li></Link>
  <Link href="posts/pnl"><li>Principios de la PNL</li></Link>
  <Link href="posts/conciencia"><li>La magia de la Conciencia</li></Link>
  <li className="bloqued">Equilibrate</li>
  <li className="bloqued">An Emancipated Cinderella</li>
  <li className="bloqued">Desintoxicacion Dopaminica</li>
  <li className="bloqued">Sedentary condition</li>
  <li className="bloqued">List - Fetch - Apis</li>
  <li className="bloqued">Great events</li>
  <li className="bloqued">NLP Professional guide</li>
  <li className="bloqued">Create the time</li> 
  <li className="bloqued">------</li>
  <li className="bloqued">------</li>
  <li className="bloqued">------</li>

</ul> 

{/* <div className="working">
</div>
<div className="working">
</div>
<div className="working">
</div> */}

  <style jsx>{`
 
    .bloqued{
      color: red;
    }
    .bloqued:hover{
      color: red;
    }
    .link{
      color:red;
    }
    ul{
      margin: auto;
      padding:0rem;
      
    }
    li{
      font-size: 1.6rem;
      font-family: 'Courier New', Courier, monospace;
      line-height: 1.9rem;
      list-style:none;
      color: yellow;
      margin: 0.5rem 0.5rem 0.5rem 0.5rem;
      border-bottom:solid gray 1px;
    }
    li:hover{
      background-color:green;
      cursor:pointer;
      font-family: 'Courier New', Courier, monospace;
      line-height: 1.9rem;
      list-style:none;
      color:white;
      animation:6s lis infinite alternate;
    }
    @keyframes lis{
      0%{
      background-color:green;
      }
      100%{
      background-color:black;
      }
    }
   
@media (max-width: 900px) {
  
    ul{
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
