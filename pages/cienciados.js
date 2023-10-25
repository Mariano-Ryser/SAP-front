import Head from "next/head"
import Image from "next/image"

export default function Cienciados({asteroide}){
    return(
    <>
    <div className="tl">https://echo.jpl.nasa.gov/asteroids/</div>
    <div className="tl">
        {
            asteroide.map(as =>(
                <div className="box" key={as.id}>
                    <h4>{as.nombre}</h4>
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
   const res = await fetch("https://zap-front.vercel.app/api/asteroides")
//    const res = await fetch("https://tecdottir.herokuapp.com/stations")
   const asteroides = await res.json()
   return{
    props:{
        asteroide: asteroides
    }
   }
}

