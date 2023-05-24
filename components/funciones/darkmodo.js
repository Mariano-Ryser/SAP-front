import React, { useState, useEffect } from 'react';

const Dark = () => {
  const initialState = ("white")
  const [color, setColor] = useState(initialState)

  const colorChange = ()=> {
    if(color == "white"){
        setColor("black")
    }
  }


  return (
    <>

  

  </>
  )
}

export default Dark