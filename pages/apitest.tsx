
import React, {useEffect, useState} from "react";

export default function Apitest() {

const [posts, setPosts] = useState([]); //useState having intial value as null array.
 const fetchData = ()=> {

    //fetch is used to fetch data from external source like url etc.
    fetch("/api/articulos").then((response)=> {
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
        <h1 className="h1">My Articles</h1>
        {
            posts.length > 0 && (
            <div className="p">
                    <div>
                        {
                            posts.map((post) =>(
                                <div className="posts">
                                        <h3 key={post.id}>{post.title}</h3>
                                        <p>{post.titulo}</p>
                                        <p>{post.body}</p>
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
    .h1{ text-align:center}
    .posts{
        border:solid 1px red;
        margin: 2rem;
        }
    
   
@media (max-width: 600px) {
}
         `}</style>
    </>
  )
}
