import React from 'react'
import { useEffect, useState } from 'react';
// import BoxComentar from '../components/comentarBox/BoxComentar'

function Test() {
 const initialState = null;

  const [numer, setNumer] = useState(initialState)

  const handleClick = ()=> {
    for(let i = 0; i < 20; i++){
        var numer:number = Math.floor(Math.random() * 38)
        setNumer(numer)
        setTimeout(()=>{
        },1000);
        const para = document.createElement("p");
        if(numer === 10 ){
          para.style.color = "white"
          para.style.backgroundColor = "green"
          para.style.border = "solid black 1px"
          para.style.margin = "0.3rem"
          para.style.padding= "0.3rem"
          para.style.display = "inline-block"
          para.innerHTML = "Numer " + numer;
        }else{
          para.style.color = "red"
          para.style.border = "solid black 1px"
          para.style.margin = "0.3rem"
          para.style.padding= "0.3rem"
          para.style.display = "inline-block"
          para.innerHTML = "Numer " + numer;
    }
    document.getElementById("myDIV").appendChild(para);
    // document.getElementById("myDIV").appendChild(numer);
  }

}

var numero = "Numero Viejo"
return (
  <>
    
    <div className="box">
        <p className='p'>Aqui nueva pagina</p>
        <h1>{numero}</h1>
        <h1>{numer}</h1>
        <button
           className='button'
          onClick={handleClick}
        ></button>

     <div id='myDIV'></div>
     </div>

  

     <style jsx>{`
                .button{
                  position:fixed;
                  top:90%;
                  height:2rem;
                  width:4rem;
                }
                .box{
                    height: 100vh;
                    width: 100%;
                    background-color: rgb(221, 221, 221);
                  }
                
         `}</style>
   
 </>
  )
}

export default Test

