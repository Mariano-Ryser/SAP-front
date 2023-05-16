import Link from "next/link"
import Image from "next/image"
export default function Homee() {
   
  return (
    <>
    <div className="container">
    <div>
        <div className="img-container">
        <div className="img" 
            style={{backgroundImage: `url('/img/me.jpg')`}}
            >
            
        </div>
        </div>    
        <p>
    My name is Mariano, actually live in Zurich,
    this is my humble portfolio where i can test
    and write code every day.
        </p>
        <p>
        This portfolio is built on Next.JS where my
         frontend runs, and the backend is deployed
          on Azure, the database interaction is
           created with NodeJs and Mongo DB.
        </p>
  
    </div>

    </div>

  <style jsx>{`
    .img{
        height:13rem;
        width:13rem;
        border-radius:50%;
        background-position: center;
        background-size:cover;
    }
    .img-container{
        margin-top:1rem;
        display:flex;
        justify-content:center;
    }
    .container{
        width:40rem;
      margin: auto;
      padding:0rem;
        display:flex;
        justify-content:center;
        color: rgb(210, 210, 210);
        text-align:center;
        font-family:monospace;
    }
  
    p{
        font-size:1.3rem;
       
    }
      
@media (max-width: 600px) {
    .img{
        height:8rem;
        width:8rem;
        border-radius:50%;
        background-position: center;
        background-size:cover;
    }
    p{
        font-size:1rem;
       
    }
    .container{
        width:95%;
      margin: auto;
      padding:0rem;
    }
           
                 
}
       
         `}</style>
    </>
  )
}
