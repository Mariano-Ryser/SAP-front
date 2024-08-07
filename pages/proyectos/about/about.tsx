import Link from "next/link"
import Image from "next/image"
export default function About() {
   
  return (
    <>

    <div className="container">
      <div>
          <div className="img-container">
          <div className="img" 
              style={{backgroundImage: `url('/img/robote.gif'`}}
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
      border-radius: 10px;
       margin: auto;
       margin-top: 20px;
        display:flex;
        justify-content:center;
        text-align:center;
       
    }
  
    .img{
        height:15rem;
        width:13rem;
        background-position: center;
        background-size:cover;
    }
    .img-container{
        margin-top:1rem;
        display:flex;
        justify-content:center;
    }
  
    p{color:black;
      font-family:monospace;
        font-size:1.6rem;
       
    }
 

@media (max-width: 600px) {
    .img{
        height:12.5rem;
        width:11rem;
        background-position: center;
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
