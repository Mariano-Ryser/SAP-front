import Link from "next/link"
import Image from "next/image"

export default function Fotos() {
  return (
    <>
 <Link href="proyects"><li>/proyects..</li></Link>
    <div className="container">

 
       
        <div className="img" 
            style={{backgroundImage: `url('/img/me8.jpeg')`}}
            >
        </div> 
        <div className="img" 
            style={{backgroundImage: `url('/img/me9.jpeg')`}}
            >
        </div> 


    </div>

  <style jsx>{`
    .container{
        padding-top: 2rem;
        width:43rem;
      margin: auto;
      padding-bottom:10rem;
        color: rgb(210, 210, 210);
        font-family:monospace;
    }
    .img{
        display: block;
        height:35rem;
        width:90%;
        border-radius:0.3rem;
        background-position: center;
        background-size:cover;
        margin: auto;
        margin-bottom: 1rem;
        transition: 0.2s;
        border-radius:2px;

    }
    .img:hover{
       transform: rotateZ(1deg)scale(1.1) translateX(-0.1rem) translateY(-0.2rem);
       
       box-shadow: 0px 0px 10px 0px rgb(71, 71, 71);
       border-radius:2px;
    }
    
   
  
  

      
@media (max-width: 600px) {
    .img{
        display: block;
        height:25rem;
        width:90%;
        border-radius:0.3rem;
        background-position: center;
        background-size:cover;
        margin: auto;
        margin-bottom: 1rem;
    }
   
    .container{
        padding-top: 2rem;
        width:100%;
      margin: auto;
      padding-bottom:3rem;
        color: rgb(210, 210, 210);
        font-family:monospace;
    }
   
                 
}
       
         `}</style>
    </>
  )
}
