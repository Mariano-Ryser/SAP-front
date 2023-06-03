
import React, {useEffect, useState} from "react";
import Link from "next/link";


export default function Ciencia() {

const [posts, setPosts] = useState([]); //useState having intial value as null array.
 

async function fetchData(){

   fetch("/api/asteroides").then((response)=> {

        return response.json();//after fetch data from url it return data as json format
    }).then((data) => {
        setPosts(data) // After that we have the data in json format we are ready to use and track the states also
        console.log({data})
    })
 } 

    useEffect(() =>{
        fetchData(); //used to render data after loading
    },[]);

  return (
    <>
    <div className="box">
        <h1 className="h1">Asteroides</h1>
        {
            posts.length > 0 && (
            <div className="p">
                    <div>
                        {
                            posts.map((post) =>(
                            
                              
                            <div  key={post.id} className="posts">
                                        <h3 className="nombre" >{post.nombre}</h3>
                                        <h3 className="descripcion" >{post.descripcion}</h3>
                                        <h3 className="distancia" >{post.distancia_tierra}</h3>
                                        <h3 className="descubridor" >{post.descubridor}</h3>

                             <Link href={`${post.link}`}> 
                                 <h2>Link</h2>
                            </Link>  

                                </div>
                            
                            ))
                        }
                    </div>
            </div>
            )
        }
    </div>


  <style jsx>{`
        .box{color:white}

        .h1{
            text-align:center;
            color:white;
         }
        .posts{
            font-family:monospace;
            width:40rem;
            border:solid 2px green;
            padding:1rem;
            margin: auto;
            margin-bottom:1rem;
            transition:0.2s;
        }
        .posts:hover{
            background-color:black;
            border:solid 2px green;
        }
        .titulo{
            color:Pink
            }
        .poema{
            color:Pink
            }
        .author{
            color:Pink
            }
    
   
@media (max-width: 600px){
    .h1{
            text-align:center;
            color:white;
            font-family:monospace;
         }
    .posts{
        font-family:monospace;
            width:95%;
            border:solid 2px green;
            padding:1rem;
            margin: auto;
            margin-bottom:1rem;
            transition:0.2s;
        }
}
         `}</style>
    </>
  )
}
