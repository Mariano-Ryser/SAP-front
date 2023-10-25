import Head from "next/head"
import Image from "next/image"
const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

export default function Cienciados({asteroide}){
    return(
    <>

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

