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

        <button className='button' onClick={Change}>Change</button>
    </div>

     <style jsx>
           {`
           .button{
            height:${valor}rem;
            width:5rem;
           }
            `}
       </style>
 </>
  )
}

export default test

