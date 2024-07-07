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
   font-size: 0.8rem;
   transition: 0.2s;
}

.box{
   border: 1px solid rgba(21, 171, 197, 0.959); 
   padding: 0.4rem;
   padding-bottom: 1.4rem;
   transition: 0.5s;
}




            
    @media (max-width: 600px) {
         
            

          
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

