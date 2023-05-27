
import React, {useEffect, useState} from "react";

export default function Poemas() {

const [posts, setPosts] = useState([]); //useState having intial value as null array.
 const fetchData = ()=> {

    //fetch is used to fetch data from external source like url etc.
    fetch("/api/poemas").then((response)=> {
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
        <h1 className="h1">Poe</h1>
        {
            posts.length > 0 && (
            <div>
                    <div className="grid-container">
                        {
                            posts.map((post) =>(
                                <div  key={post.id} className="posts">
                                        <h3 className="titulo" >{post.title}</h3>
                                        <p className="poema">{post.poem}</p>
                                        <p className="author">{post.author}</p>
                                </div>
                            ))
                        }
                    </div>
            </div>
            )
        }
    </div>


  <style jsx>{`
  .grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 0.1rem;
}
    .box{color:white}
    .h1{
        text-align:center;
        color:white;
        font-family:monospace;
         }
    .posts{
        overflow: auto;
        display:inline-block;
        border:solid 2px green;
        padding:1rem;
        margin: 0.5rem;
        height:auto;
        }
        .titulo{
            color:white;
            font-family:monospace;

        }
        .poema{
            font-family:monospace;
            color:green;
            }
        .author{
            font-family:monospace;
            color:Pink;
            }
    
   
@media (max-width: 600px){
    
}
         `}</style>
    </>
  )
}
