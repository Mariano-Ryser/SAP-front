import Head from "next/head"
import Image from "next/image"
const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL2

export default function Movies({movie}){
    return(
    <>

    <div className="tl">
        {
            movie.map(as =>(
                <div className="box" key={as.id}>
                    <h4>{as.title}</h4>
                    <h4>{as.year}</h4>
                    <h4>{as.director}</h4>
                    <h4>{as.duration}</h4>
                    <h4>{as.genre}</h4>
                    <h4>{as.rate}</h4>
                </div>
            ))   
        }   
    </div> 
    </>
    )
}

export const getServerSideProps = async (context) =>{
   const res = await fetch(`${baseURL}/movies`)
   const movies = await res.json()
    console.log(movies)
   return{
    props:{
        movie: movies
        }
    }
}

