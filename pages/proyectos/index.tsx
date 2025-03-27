import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "CALCULADORA AVANZADA",
    description: "Herramienta de cálculo con funciones científicas y diseño interactivo",
    image: "/img/a1.png",
    url: "/proyectos/calculadora",
    tags: ["React", "Algoritmos", "UI/UX"]
  },
  {
    id: 2,
    title: "CRONÓMETRO PRECISO",
    description: "Temporizador con lapsos, cuenta regresiva y registro de tiempos",
    image: "/img/AlienChill.png",
    url: "/proyectos/cronometro",
    tags: ["Performance", "Precision", "Web Workers"]
  },
  {
    id: 3,
    title: "RULETA INTERACTIVA",
    description: "Sistema de ruleta personalizable para sorteos y decisiones",
    image: "/img/AlienChill.png",
    url: "/proyectos/ruleta",
    tags: ["Animaciones", "Física", "Canvas"]
  },
  {
    id: 4,
    title: "COLECCIÓN DE ICONS",
    description: "Librería de iconos vectoriales para desarrollo web",
    image: "/img/AlienChill.png",
    url: "/proyectos/icons",
    tags: ["SVG", "Design System", "React"]
  },
  {
    id: 5,
    title: "Quiz Game",
    description: "Juego de pregunta y respuestas",
    image: "/img/AlienChill.png",
    url: "/proyectos/icons",
    tags: ["SVG", "Design System", "React"]
  },
  {
    id: 6,
    title: "BUSCADOR DE PALABRAS",
    description: "busca palabras apartir de letras",
    image: "/img/AlienChill.png",
    url: "/proyectos/buscaPalabra",
    tags: ["SVG", "Design System", "React"]
  }
];

export default function ProjectsPage() {
  return (
    <div className="cyber-container">
      <div className="cyber-header">
        <h1 className="cyber-title">ARCHIVO DE PROYECTOS</h1>
        <p className="cyber-subtitle">Selecciona un proyecto para acceder al sistema</p>
        <div className="cyber-grid"></div>
      </div>

      <div className="cyber-projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="cyber-project-card">
            <div className="cyber-project-image-container">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="cyber-project-image"
              />
              <div className="cyber-project-overlay"></div>
            </div>
            
            <div className="cyber-project-content">
              <h2 className="cyber-project-title">{project.title}</h2>
              <p className="cyber-project-description">{project.description}</p>
              
              <div className="cyber-project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="cyber-tag">{tag}</span>
                ))}
              </div>
              
              
              <Link className="cyber-project-link" href={project.url} passHref>
                  <span>ACCEDER AL SISTEMA</span>
              </Link>
               
            </div>
            
            <div className="cyber-project-corner cyber-corner-tl"></div>
            <div className="cyber-project-corner cyber-corner-tr"></div>
            <div className="cyber-project-corner cyber-corner-bl"></div>
            <div className="cyber-project-corner cyber-corner-br"></div>
          </div>
        ))}
      </div>

      <style jsx>{`
        :root {
          --neon-blue: rgba(10, 175, 255, 0.8);
          --neon-pink: rgba(255, 10, 175, 0.8);
          --neon-green: rgba(0, 255, 100, 0.8);
          --cyber-dark: rgba(10, 15, 25, 0.95);
          --cyber-border: 1px solid rgba(10, 175, 255, 0.3);
          --cyber-glow: 0 0 15px rgba(10, 175, 255, 0.5);
        }
        
        .cyber-container {
          min-height: 100vh;
          padding: 2rem;
          background: var(--cyber-dark);
          font-family: 'Courier New', monospace;
        }
        
        .cyber-header {
          position: relative;
          text-align: center;
          margin-bottom: 3rem;
          padding: 2rem;
          border-bottom: var(--cyber-border);
        }
        
        .cyber-title {
          color: var(--neon-green);
          font-size: 2.5rem;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          text-shadow: 0 0 10px rgba(0, 255, 100, 0.3);
        }
        
        .cyber-subtitle {
          color: rgba(200, 220, 255, 0.7);
          font-size: 1.2rem;
          margin: 0;
        }
        
        .cyber-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(10, 175, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10, 175, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0.1;
          z-index: -1;
        }
        
        .cyber-projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .cyber-project-card {
          position: relative;
          background: rgba(20, 25, 35, 0.7);
          border: var(--cyber-border);
          border-radius: 5px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .cyber-project-card:hover {
          transform: translateY(-0px);
          box-shadow: var(--cyber-glow);
        }
        
        .cyber-project-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .cyber-project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .cyber-project-card:hover .cyber-project-image {
          transform: scale(1.05);
        }
        
        .cyber-project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(10, 15, 25, 0.9), transparent);
        }
        
        .cyber-project-content {
          padding: 1.5rem;
        }
        
        .cyber-project-title {
          color: var(--neon-blue);
          margin: 0 0 1rem 0;
          font-size: 1.3rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .cyber-project-description {
          color: rgba(200, 220, 255, 0.8);
          margin: 0 0 1.5rem 0;
          line-height: 1.5;
          font-size: 0.95rem;
        }
        
        .cyber-project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .cyber-tag {
          padding: 0.3rem 0.8rem;
          background: rgba(10, 175, 255, 0.1);
          border: 1px solid rgba(10, 175, 255, 0.3);
          border-radius: 3px;
          color: rgba(10, 175, 255, 0.9);
          font-size: 0.8rem;
        }
        
        .cyber-project-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem;
          background: rgba(10, 50, 80, 0.5);
          border: 1px solid rgba(10, 175, 255, 0.3);
          border-radius: 3px;
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .cyber-project-link:hover {
          background: rgba(10, 80, 120, 0.7);
          box-shadow: 0 0 10px rgba(10, 175, 255, 0.3);
        }
        
        .cyber-link-arrow {
          transition: transform 0.3s ease;
        }
        
        .cyber-project-link:hover .cyber-link-arrow {
          transform: translateX(5px);
        }
        
        .cyber-project-corner {
          position: absolute;
          width: 15px;
          height: 15px;
          border-color: var(--neon-blue);
          border-style: solid;
          border-width: 0;
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        
        .cyber-corner-tl {
          top: 0;
          left: 0;
          border-top-width: 2px;
          border-left-width: 2px;
        }
        
        .cyber-corner-tr {
          top: 0;
          right: 0;
          border-top-width: 2px;
          border-right-width: 2px;
        }
        
        .cyber-corner-bl {
          bottom: 0;
          left: 0;
          border-bottom-width: 2px;
          border-left-width: 2px;
        }
        
        .cyber-corner-br {
          bottom: 0;
          right: 0;
          border-bottom-width: 2px;
          border-right-width: 2px;
        }
        
        .cyber-project-card:hover .cyber-project-corner {
          width: 25px;
          height: 25px;
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          .cyber-container {
            padding: 1rem;
          }
          
          .cyber-header {
            padding: 1rem;
          }
          
          .cyber-title {
            font-size: 1.8rem;
          }
          
          .cyber-projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}