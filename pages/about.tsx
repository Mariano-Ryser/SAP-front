import Link from "next/link"
import Image from "next/image"
import Test8 from "../pages/ztest/test8"
export default function Homee() {
    const icons = [
        {img: "insta.png"},
        {img: "linkedin.png"},
        {img: "github.png"},
        {img: "twiter.png"},
      ]
  return (
    <>

    <div className="container">
    <div>
        <div className="img-container">
        <div className="img" 
            style={{backgroundImage: `url('/img/me2.jpg')`}}
            >
            
        </div>
        </div>    
        <p>My name is Mariano
    {/* ,
     currently live in Zurich,
    this is my humble portfolio on which i can test
    and write code every day. */}
        </p>
        {/* <p>totally grateful and happy for the opportunities and daily learning.
I amm not going to stop for a second, it just takes a bit of order with the times. Well, 
you can t do everything.
</p> */}
        {/* <p>
        This portfolio is built on Next.JS where my
         frontend runs, and the backend is deployed
          on Azure, the database interaction is
           created with NodeJs and Mongo DB.
        </p> */}

  
    </div>
    
    </div>
    <br></br>
    <br></br>
    <br></br>
    

    
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
        display:flex;
        justify-content:center;
        color: rgb(210, 210, 210);
        text-align:center;
        font-family:monospace;
    }
  
    p{
        font-size:1.3rem;
       
    }
    .boxIcons{
    display: none;
    overflow: hidden;
    gap: 0.5rem; 
    grid-auto-rows: 8rem;
    grid-auto-columns: repeat(auto-fill, minmax(0.2rem, 4fr));
    grid-template-columns: repeat(12,1fr);
    padding-top: 1.4rem;
    padding-bottom: 22px;
    
  }
  .icon{
    display: inline-block;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 130px;
    width: 130px;
   grid-column: span 2;
   filter: blur(0.4px);
   margin: auto;
   transition:0.3s 
  }
  .icon:hover{
    cursor: pointer;
    transform: scale(105%) rotateZ(1.5deg);
    filter: blur(0.0px); 
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
    .boxIcons{
      display: none;
      /* height: 240px; */
      overflow: hidden;
      gap: 0.4rem; 
      grid-auto-rows: 5rem;
      grid-auto-columns: repeat(auto-fill, minmax(0.2rem, 5fr));
      padding-top: 0.3rem;
      padding-bottom: 12px;
    }
    .icon{
      display: inline-block;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      height: 70px;
      width: 70px;
     grid-column: span 3;
     filter: blur(0.4px);
     margin: auto;
     transition:0.3s 
    }
    .icon:hover{
      cursor: pointer;
      transform: scale(105%) rotateZ(1.5deg);
       filter: blur(0.0px); 
    }
                 
}
       
         `}</style>
    </>
  )
}
