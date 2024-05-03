import Link from "next/link"
import Image from "next/image"
export default function About() {
   
  return (
    <>

    <div className="container">
      <div>
          <div className="img-container">
          <div className="img" 
              style={{backgroundImage: `url('/gitbook-color.svg')`}}
              >
              
          </div>
          </div>    

          <p>It started as a virtual curriculum which later transformed into a blog, and then a complete
             server in which I continue testing and working hard to expand my knowledge on the subject.</p>
          <p>This portfolio is built on Next.JS where my
            frontend runs, and the backend is deployed
            on Azure, the database interaction is
            created with NodeJs and Mongo DB.
          </p>

          <p>If you have any good comments or constructive criticism, they are always helpful to me. so I await your return!</p>

    
      </div>
    </div>


    <br></br>
    <br></br>
    <br></br>
    

    
  <style jsx>{`
    .container{
      padding: 5px 3rem 0px 3rem;
      background-color: rgb(25, 102, 56, 0.397);
      border-radius: 10px;
       margin: auto;
       margin-top: 20px;
        display:flex;
        justify-content:center;
        color: rgb(239, 239, 239);
        text-align:center;
       
    }
  
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
  
    p{
      font-family:monospace;
        font-size:1.6rem;
       
    }
 

@media (max-width: 600px) {
    .img{
        height:11rem;
        width:11rem;
        border-radius:50%;
        background-position: center;
        background-size:cover;
    }
    p{
        font-size:1.4rem;
       
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
