import React from 'react'
import style from '../styles/Msj.module.css'
import Image from 'next/image' 
import Link from 'next/link'
import BoxComentar from '../components/comentarBox/BoxComentar'

function msj() {
  return (
    <>
    <article className={style.box}>
 
       <BoxComentar/>
       
       <br></br>
     
     </article>
 </>
  )
}

export default msj


