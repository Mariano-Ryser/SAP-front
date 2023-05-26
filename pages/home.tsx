import Link from "next/link"

export default function Homee() {
  return (
    <>
<ul>
  <Link href="/posts/dopamina"><li>Desintoxicacion Dopaminica</li></Link>
  <Link href="/posts/pnl"><li>Principios de la PNL</li></Link>
  <Link href="/posts/conciencia"><li>La magia de la Conciencia</li></Link>
  <Link href="/posts/cinderella"><li>An Emancipated Cinderella</li></Link>
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
