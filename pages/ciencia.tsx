
import React, {useEffect, useState} from "react";
import Link from "next/link";


export default function Ciencia() {

const [posts, setPosts] = useState([]); //useState having intial value as null array.
 const fetchData = ()=> {

    //fetch is used to fetch data from external source like url etc.
    fetch("/api/asteroides").then((response)=> {
// https://jsonplaceholder.typicode.com/posts


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
        <h1 className="h1">Poems</h1>
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
            color:pink;
         }
        .posts{
            border:solid 2px pink;
            padding:1rem;
            margin: 1rem;
            transition:0.2s;
        }
        .posts:hover{
            background-color:red;
            border:solid 2px pink;
            padding:1rem;
            margin: 1rem;
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
    
}
         `}</style>
    </>
  )
}
