// pages/index.js
import { useEffect, useRef } from 'react';

export default function Home() {
  const cylinderRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    const animationId = setInterval(() => {
      angle += 1;
      cylinderRef.current.style.transform = `rotateX(10deg) rotateY(${angle}deg)`;
    }, 30);

    return () => clearInterval(animationId);
  }, []);

  return (
    <div className="container">
      <div ref={cylinderRef} className="cylinder">
        <div className="top" />
        <div className="bottom" />
        <div className="side" />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f0f0;
        }
        .cylinder {
          position: relative;
          width: 200px;
          height: 300px;
          transform-style: preserve-3d;
          transform: rotateX(0deg) rotateY(0deg);
        }
        .top, .bottom {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background-color: rgba(0, 150, 0, 0.7);
        }
        .top {
          transform: rotateX(90deg) translateZ(150px);
        }
        .bottom {
          background-color: rgba(0, 100, 0, 0.7);
          transform: rotateX(90deg) translateZ(-150px);
        }
        .side {
          position: absolute;
          width: 200px;
          height: 300px;
          background-color: rgba(0, 200, 0, 0.5);
          transform: rotateY(0deg) translateZ(100px);
          border-radius: 100px;
        }
      `}</style>
    </div>
  );
}