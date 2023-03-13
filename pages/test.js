import React from 'react'
import style from '../styles/test.module.css'
import Image from 'next/image' 
import Link from 'next/link'
// import BoxComentar from '../components/comentarBox/BoxComentar'

function test() {
  return (
    <>
    <div className={style.box}>

        <p>Aqui nueva pagina</p>
        <div className={style.item}
            style={{backgroundImage: `url('/img/Dagger.png')`}}
            
            >
          </div>
       
       
      
     
     </div>

     
   
 </>
  )
}

export default test

