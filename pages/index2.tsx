import { AnimatedText, AnimatedWords, AnimatedPhrases } from "../components/animations"

export default function HomePage() {
  const phrases = [
    "Innovación digital",
    "Experiencias interactivas",
    "Soluciones creativas",
    "Diseño Original"
  ];

  return (
    <main>
      <h1>
        <AnimatedText 
          text="Bienvenido" 
          animationType="bounce"
          delay={0.08}
          duration={0.7}
        />
      </h1>
      
      <div className="description">
        <AnimatedWords
          text="Creamos soluciones digitales a medida para tu negocio a medida, desde sitios web hasta aplicaciones móviles. Nuestro enfoque se centra en la innovación y la experiencia del usuario."
          animationType="swing"
          wordDelay={0.2}
          duration={0.8}
        />
      </div>
      
      <div className="slogan">
        <AnimatedPhrases
          phrases={phrases}
          animationType="zoom"
          duration={1.2}
          interval={4}
        />
      </div>

      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;
        }
        
        h1 {
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .description {
          max-width: 800px;
          margin: 0 auto 3rem;
          text-align: center;
        }
        
        .slogan {
          text-align: center;
        }
      `}</style>
    </main>
  );
}