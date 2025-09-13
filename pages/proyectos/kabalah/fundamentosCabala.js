export default function FundamentosCabala() {
  return (
    <div className="container">
      <h1>Fundamentos de la Cábala</h1>

      <section>
        <h2>El Zóhar</h2>
        <p>
          El <strong>Zóhar</strong>, que significa "Esplendor", es el texto central de la Cábala. 
          Es una colección de comentarios místicos sobre la Torá que revela los niveles ocultos de la realidad. 
          A través de historias, alegorías y análisis de las letras y palabras bíblicas, el Zóhar enseña cómo la creación está impregnada de energías divinas.
        </p>
        <p>
          Según el Zóhar, las letras hebreas no son simples símbolos, sino códigos que reflejan la esencia de la creación. Cada letra y su combinación contienen fuerzas que interactúan con la conciencia humana y el cosmos.
        </p>
      </section>

      <section>
        <h2>Ein Sof: La Fuente Infinita</h2>
        <p>
          <strong>Ein Sof</strong> significa "lo Infinito" y representa la esencia de Dios más allá de toda forma y limitación. 
          Es la fuente de toda luz espiritual y energía creativa. Nada puede comprender plenamente a Ein Sof, pero sus emanaciones se manifiestan en el mundo a través de las Sefirot y las letras hebreas.
        </p>
      </section>

      <section>
        <h2>Las Diez Sefirot</h2>
        <p>
          Las <strong>Sefirot</strong> son diez atributos divinos a través de los cuales la luz infinita de Ein Sof se manifiesta. Cada Sefirá canaliza una energía específica que estructura tanto la realidad espiritual como la material.
        </p>
        <ul>
          <li><strong>Kéter</strong> – La Corona: voluntad divina y origen de la creación.</li>
          <li><strong>Jojmá</strong> – Sabiduría: chispa creativa y visión intuitiva.</li>
          <li><strong>Biná</strong> – Entendimiento: análisis, discernimiento y reflexión profunda.</li>
          <li><strong>Jesed</strong> – Misericordia: expansión, generosidad y amor incondicional.</li>
          <li><strong>Guevurá</strong> – Rigor: disciplina, límite y justicia.</li>
          <li><strong>Tiféret</strong> – Belleza: equilibrio entre misericordia y rigor, armonía universal.</li>
          <li><strong>Nétsaj</strong> – Victoria: persistencia, resistencia y acción efectiva.</li>
          <li><strong>Hod</strong> – Esplendor: gratitud, humildad y comunicación armoniosa.</li>
          <li><strong>Yesod</strong> – Fundamento: conexión, estabilización y transmisión de energía.</li>
          <li><strong>Maljut</strong> – Reino: manifestación, receptividad y realización en el mundo físico.</li>
        </ul>
      </section>

      <section>
        <h2>El alma humana</h2>
        <p>
          Según la Cábala, el alma humana tiene distintos niveles de conciencia:
        </p>
        <ul>
          <li><strong>Nefesh</strong>: la fuerza vital ligada al cuerpo físico.</li>
          <li><strong>Rúaj</strong>: emociones, carácter y espíritu cotidiano.</li>
          <li><strong>Neshamá</strong>: mente y conciencia superior, entendimiento espiritual.</li>
          <li><strong>Jaiá</strong>: vida trascendente, conexión con la luz divina más allá del tiempo y espacio.</li>
          <li><strong>Yejidá</strong>: unidad absoluta con lo divino, experiencia de la totalidad de la existencia.</li>
        </ul>
        <p>
          El objetivo espiritual es elevar estas capas del alma y reconectarlas con su fuente divina, transformando la vida física y espiritual.
        </p>
      </section>

      <section>
        <h2>Las letras hebreas como códigos de creación</h2>
        <p>
          Cada letra hebrea no solo representa un sonido, sino que posee un <strong>valor numérico</strong> y una <strong>energía específica</strong>. La combinación de letras forma palabras que se consideran <em>vehículos de poder divino</em>.
        </p>
        <p>
          La fonética es esencial: pronunciar correctamente las letras y sus combinaciones activa la energía contenida en ellas. Por ejemplo, el nombre de Dios <strong>יהוה (Yud-He-Vav-He)</strong> tiene un efecto espiritual profundo cuando se medita y pronuncia con conciencia.
        </p>
        <p>
          A través de la meditación con letras y palabras sagradas, se cree que se puede influir en la conciencia, la salud, la comprensión de la realidad y la conexión con lo divino.
        </p>
      </section>

      <section>
        <h2>Aplicación práctica</h2>
        <p>
          Los cabalistas usan estas enseñanzas para:
        </p>
        <ul>
          <li>Meditar sobre nombres sagrados y letras para activar energías específicas.</li>
          <li>Estudiar el Zóhar y reflexionar sobre su interpretación para elevar la conciencia.</li>
          <li>Observar las Sefirot en la vida diaria, equilibrando compasión, rigor y acción.</li>
          <li>Trabajar con la pronunciación de las letras hebreas para armonizar cuerpo, mente y espíritu.</li>
        </ul>
        <p>
          Así, la Cábala se convierte en un camino práctico de transformación y expansión de la conciencia, donde cada letra y cada palabra son puertas hacia la comprensión del universo y de uno mismo.
        </p>
      </section>

      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 2rem auto;
          padding: 2rem;
          color: #f5f5f5;
          line-height: 1.8;
        }

        h1 {
          font-size: 3rem;
          text-align: center;
          color: #ffd700;
          margin-bottom: 2rem;
        }

        h2 {
          font-size: 1.8rem;
          margin-top: 2rem;
          color: #ffcc70;
        }

        p {
          font-size: 1.15rem;
          margin-top: 0.7rem;
        }

        ul {
          margin-top: 0.5rem;
          padding-left: 1.5rem;
        }

        li {
          margin: 0.3rem 0;
        }

        @media (max-width: 600px) {
          .container {
            padding: 1rem;
          }

          h1 {
            font-size: 2rem;
          }

          h2 {
            font-size: 1.4rem;
          }

          p, li {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}