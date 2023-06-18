import Head from "next/head"
import Image from "next/image"

export default function Cienciados({asteroide}){
    return(
    <>
    <div>
        {
            asteroide.map(as =>(
                <div key={as.id}>
                    <h4>{as.nombre}</h4>
                    <p>{as.descripcion}</p>
                    <p>{as.distancia_tierra}</p>
                    <p>{as.descubridor}</p>
                    <a href={as.link}>{as.link}</a>
                </div>
            ))   
        }   
    </div>
    </>
    )
}

export const getServerSideProps = async (context) =>{
   const res = await fetch("https://zap-front.vercel.app/api/asteroides")
   const asteroides = await res.json()
   
   return{
    props:{
        asteroide: asteroides
    }
   }
}