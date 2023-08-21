import Head from "next/head"
import Image from "next/image"

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL2

export default function Movies({comentar}){
    return(
    <>

    <div className="tl">
        {
            comentar.map(as =>(
                <div className="box" key={as.id}>
                    <h4>{as.user}</h4>
                    <h4>{as.text}</h4>
                </div>
            ))   
        }   
    </div> 
    </>
    )
}

export const getServerSideProps = async () =>{
    
   const res = await fetch(`${baseURL}/comentars`)
   const comentars = await res.json()
    console.log(comentars)
   return{
    props:{
        comentar: comentars
        }
    }
}

