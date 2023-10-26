import Head from "next/head"
import Image from "next/image"
const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

export default function Cienciados({asteroide}){
    return(
    <>

<div className="section">
    <div className="tl">
        {
            asteroide.map(as =>(
                <div className="box" key={as.id}>
                    <h4>{as.name}</h4>
                    <p>{as.descripcion}</p>
                    <p>{as.distancia_tierra}</p>
                    <p>{as.descubridor}</p>
                    <a className="link" href={as.link}>{as.link}</a>
                </div>
            ))   
        }   
    </div> 
</div> 

<style jsx>{`

.link{
    padding: 0.2rem;
   border: 1px solid rgba(131, 6, 6, 0.737);
   font-size: 0.7rem;
   transition: 0.2s;
}
.link:hover{
   border: 1px solid rgba(255, 5, 5, 0.737);
   font-size: 0.7rem;
}
.tl{
   border: 1px solid rgba(255, 0, 0, 0.098); 
}
.box{
   border: 1px solid rgba(255, 0, 0, 0.176); 
   padding: 0.4rem;
   padding-bottom: 1.4rem;
   margin: 0.4rem;
   transition: 0.5s;
}
.box:hover{
   border: 1px solid rgba(0, 216, 14, 0.227); 
   padding: 0.4rem;
   padding-bottom: 1.4rem;
   margin: 0.4rem;
}


.section{
  border: rgb(87, 87, 87) solid 2px;
  border-radius: 5px;
      font-family: monospace;
      font-size:1rem;
      line-height: 1.2;
        color: rgb(191, 191, 191);
        width:40rem;
        margin:auto;
        margin-bottom:1rem;
        margin-top: 1rem;
        padding:1rem;
        transition: 0.05s;
    }
    section:hover{background-color: rgba(28, 107, 102, 0.355);
      cursor: pointer;
    }
            
    @media (max-width: 600px) {
         
                  .section{
                  width:95%;
                  margin:auto;
                  margin-bottom:1rem;
                  margin-top: 1rem;
                  padding:1rem;
                      }   

          
      }   
        `}</style>
    </>
    )
}

export const getServerSideProps = async (context) =>{
   const res = await fetch(`${baseURL}/meteoros`)
   const asteroides = await res.json()
//    console.log(asteroides)
   return{
    props:{
        asteroide: asteroides
        }
    }
}

