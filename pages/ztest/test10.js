import { useEffect, useRef } from 'react';

export default function Test10() {
  const cubeRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    const animationId = setInterval(() => {
      angle += 1;
      cubeRef.current.style.transform = `rotateX(${angle}deg) rotateY(${angle}deg)`;
    }, 30);

    return () => clearInterval(animationId);
  }, []);

  return (
    <div style={styles.container}>
      <div ref={cubeRef} style={styles.cube}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} style={{ ...styles.face, ...styles[`face${index + 1}`] }} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  cube: {
    position: 'relative',
    width: '200px',
    height: '200px',
    transformStyle: 'preserve-3d',
    transform: 'rotateX(0deg) rotateY(0deg)',
    transition: 'transform 1s',
  },
  face: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    border: '2px solid #000',
  },
  face1: { transform: 'rotateY(0deg) translateZ(100px)' },
  face2: { transform: 'rotateY(90deg) translateZ(100px)' },
  face3: { transform: 'rotateY(180deg) translateZ(100px)' },
  face4: { transform: 'rotateY(-90deg) translateZ(100px)' },
  face5: { transform: 'rotateX(90deg) translateZ(100px)' },
  face6: { transform: 'rotateX(-90deg) translateZ(100px)' },
};