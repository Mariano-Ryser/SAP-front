import Link from "next/link";

export default function KabalaIndex() {
  return (
    <div className="container-kabala">
      <h1 className="titulo">Kabala</h1>
      <ul className="menu">
        <li>
          <Link href="/proyectos/kabalah/abecedario">Abecedario / 72 Nombre de Dios / Matrix</Link>
        </li>
        <li>
          <Link href="/proyectos/kabalah/fundamentosCabala">Fundamentos de la Kabala</Link>
        </li>
       
      </ul>

      <style jsx>{`
        .container-kabala {
          min-height: 100vh;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background: black;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .titulo {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
          font-family: 'Alef', sans-serif;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #e0e0e0;
          border-bottom: 2px solid #444;
          padding-bottom: 0.5rem;
          width: 100%;
        }

        .menu {
          list-style: none;
          padding: 0;
          margin: 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .menu li {
          background: linear-gradient(180deg, #111, #1f1f1f);
          padding: 1.5rem;
          text-align: center;
          font-size: 1.2rem;
          font-family: 'Alef', sans-serif;
          letter-spacing: 2px;
          border: 1px solid #333;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .menu li:hover {
          background: linear-gradient(180deg, #222, #333);
          transform: translateY(-2px);
        }

        .menu a {
          color: #f5f5f5;
          text-decoration: none;
          display: block;
        }

        .menu a:hover {
          color: #c0a0ff;
        }
      `}</style>
    </div>
  );
}
