import Link from "next/link"

export default function Homee() {
  return (
    <>
   <ul>
  {/* <Link href="/posts/dopamina"><li>Desintoxicacion Dopaminica</li></Link> */}

  <Link href="/posts/nodejs"><li>A bit of Node js and File systems please.</li></Link>
  <Link href="/posts/elmagomartin"><li>El mago Martincito.</li></Link>
  <Link href="/posts/lieyourself"><li>Lie to yourself.</li></Link>
  <Link href="/posts/bloqueoprogramacion"><li>Bloqueado en la programacion?</li></Link>
  <Link href="/posts/pnl"><li>Principios de la PNL</li></Link>
  <Link href="/posts/conciencia"><li>La magia de la Conciencia</li></Link>
  <li className="bloqued">Invierte en ti mismo - Equilibrate</li>
  <li className="bloqued">An Emancipated Cinderella</li>
  <li className="bloqued">Desintoxicacion Dopaminica</li>
  <li className="bloqued">Sedentary condition</li>
  <li className="bloqued">List - Fetch - Apis</li>
  <li className="bloqued">Great events</li>
  <li className="bloqued">NLP Professional guide</li>
  <li className="bloqued">Create the time</li>
  
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
    .working{

      color:white;
      width:40rem;
      height:14rem;
      margin:auto;
      border:solid 1px green;
      margin-bottom:2rem;
    }
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
      background-color:green;
      cursor:pointer;
      font-family: 'Courier New', Courier, monospace;
      line-height: 1.7rem;
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
      
@media (max-width: 600px) {
  .working{
color:white;
width:90%;
height:14rem;
margin:auto;
margin-top:1rem;
margin-bottom:1rem;
}
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
