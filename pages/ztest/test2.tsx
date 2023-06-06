import React from 'react'
import { useEffect, useState } from 'react';
function Test2() {


return (
  <>
<div className="pyramid">
  <div className="triangle front"></div>
  <div className="triangle back"></div>
  <div className="triangle left"></div>
  <div className="triangle right"></div>
</div>
   
   <style jsx>{`
   .pyramid {
  perspective: 800px;
  perspective-origin: 50% 50%;
  width: 200px;
  height: 200px;
  position: relative;
  margin: 100px auto;
  transform-style: preserve-3d;
  animation: rotate 6s infinite linear;
}

.triangle {
  width: 0;
  height: 0;
  position: absolute;
}

.front {
  border-bottom: 150px solid red;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  transform: translateZ(100px);
}

.back {
  border-top: 150px solid blue;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  transform: rotateY(180deg) translateZ(100px);
}

.left {
  border-left: 100px solid green;
  border-bottom: 150px solid transparent;
  border-top: 150px solid transparent;
  transform: rotateY(-90deg) translateZ(100px);
}

.right {
  border-right: 100px solid yellow;
  border-bottom: 150px solid transparent;
  border-top: 150px solid transparent;
  transform: rotateY(90deg) translateZ(100px);
}

@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
         `}</style>
   
 </>
  )
}

export default Test2

