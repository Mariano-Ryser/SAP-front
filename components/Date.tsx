import { useEffect, useState } from 'react';
// import Image from "next/image"

function Datee(){
  const current = new Date();
  const datee = `${current.getDate()} / ${current.getMonth()+1} / ${current.getFullYear()}`;


  return (
    <>
      <p> {datee}</p>
  </>
  )
}

export default Datee
