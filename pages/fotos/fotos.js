import Link from "next/link"
import Image from "next/image"
export default function Fotos() {
   
  return (
    <>

    <div className="container">
    
       
        <div className="img" 
            style={{backgroundImage: `url('/img/me.jpg')`}}
            >
        </div>    

        <div className="img" 
            style={{backgroundImage: `url('/img/me2.jpg')`}}
            >
        </div> 
         <div className="img" 
            style={{backgroundImage: `url('/img/me4.jpg')`}}
            >
        </div>  
       
   
    </div>

  <style jsx>{`
  
    .img{
        display: block;
        height:40rem;
        width:90%;
        border-radius:0.3rem;
        background-position: center;
        background-size:cover;
        margin: auto;
    }
   
    .container{
        padding-top: 2rem;
        width:43rem;
      margin: auto;
      padding-bottom:10rem;
        color: rgb(210, 210, 210);
        font-family:monospace;
    }
  

      
@media (max-width: 600px) {
    .img{
        display: block;
        height:15rem;
        width:90%;
        border-radius:0.3rem;
        background-position: center;
        background-size:cover;
        margin: auto;
        margin-bottom: 1rem;
    }
   
    .container{
        padding-top: 2rem;
        width:90%;
      margin: auto;
      padding-bottom:10rem;
        color: rgb(210, 210, 210);
        font-family:monospace;
    }
   
                 
}
       
         `}</style>
    </>
  )
}
