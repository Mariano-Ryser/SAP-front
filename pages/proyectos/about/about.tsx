import Link from "next/link"
import Image from "next/image"
export default function About() {
   
  return (
    <>

    <div className="container"><div>


          <div className="img-container">
            <div className="img" style={{backgroundImage: `url('/img/g.gif'`}}></div>
          </div>    

          <p>It started as a virtual curriculum which later transformed into a blog, and then a complete
             server in which I continue testing and working hard to expand my knowledge on the subject.</p>
          <p>This portfolio is built on Next.JS where my
            frontend runs, and the backend is deployed
            on Azure, the database interaction is
            created with NodeJs and Mongo DB.
          </p>
          <p>If you have any good comments or constructive criticism, they are always helpful to me. so I await your return!</p>
       
        {/* <div className="divo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo, voluptas saepe tempora accusamus veritatis ab perspiciatis, quia repellendus ullam harum nobis facere optio! Recusandae quis, dignissimos pariatur rem maiores, placeat, sed vel hic explicabo consequatur doloremque. Quasi ducimus dolores adipisci impedit ipsa consequatur nisi id! Hic mollitia velit iusto.</div> */}
   
   
  </div></div>


    <br></br>
    <br></br>
    <br></br>
    


<style jsx>{`
  .divo{
    padding:1rem;
    border: solid 1px black ;
  }
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
        background-size:contain;
        background-repeat: no-repeat;
        margin:0;
        padding:0;
    }
    .img-container{
        margin-top:1rem;
        display:flex;
        justify-content:center;
    }
    p{
        font-size:1.8rem;
        font-family:  cursive;

    }
 

@media (max-width: 600px) {
    .img{
        height:12.5rem;
        width:11rem;
        background-position: center;
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
