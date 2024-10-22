import { useEffect } from 'react';
import { useState } from "react";

const palabras = [
 {
    palabra: "1 - Was ist der Unterschied zwischen einer ausbildung und einer Instruktion?",
    significado: "¿Cuál es la diferencia entre formación e instrucción?",
    frases: [
      "A-Die Institution ist nur praktisch, eine Ausbildung umfasst auch theoretische Teile und schlisst mit einer Prüfung ab. ",
      "b-Institution und Ausbildung finden immer bei Schulungsanbietern staff",
      "c-Eine Ausbildung ist immer nur theoretisch"
    ]
  },
  {
    "palabra": "2 - Welche Flurförderzeuge sind in der Kategorie R zusammengefasst?",
    "significado": "¿Qué vehículos industriales están agrupados en la categoría R?",
    "frases": [
      "a- Gegengewichtsstapler, Hochregalstapler, Kommissionierer und Seitenstapler",
      "B- Gegengewichtsstapler, Quersitzstapler, Seitenstapler und Teleskopstapler",
      "c- Vierwegestapler, Teleskopstapler und Hubwagen"
    ]
  },
  {
    "palabra": "3 - Wann gehören Flurförderzeuge zu Arbeitsmitteln mit besonderen Gefahren?",
    "significado": "¿Cuándo se consideran los vehículos industriales como herramientas de trabajo con riesgos especiales?",
    "frases": [
      "a- Wenn der Bediener mit dem Bedienstand 3 Meter hochfährt",
      "B- Wenn sie mit Fahrersitz oder Fahrerstand ausgerüstet sind und Lasten über Kopf heben können",
      "c- Wenn sie schneller als 5 km/h fahren können"
    ]
  },
  {
    "palabra": "4 - Aus was setzt sich eine Erstausbildung zusammen?",
    "significado": "¿De qué se compone una formación inicial?",
    "frases": [
      "A- Aus dem Basismodul und 1-2 Zusatzmodulen",
      "b- Aus dem Basismodul und 2-3 Zusatzmodulen",
      "c- Wenn eine interne Ausbildung stattgefunden hat, kann sofort mit Zusatzmodulen begonnen werden."
    ]
  },
  {
    "palabra": "5 - In welchem Gesetz/ welcher Verordnung steht der Artikel - Der Arbeitgeber darf Arbeiten mit besonderen Gefahren nur Arbeitnehmern übertragen, die dafür entsprechend ausgebildet sind?",
    "significado": "¿En qué ley o reglamento se establece que el empleador solo puede asignar trabajos con riesgos especiales a empleados debidamente capacitados?",
    "frases": [
      "A- VUV",
      "b- SVG",
      "c- ArG"
    ]
  },
  {
    "palabra": "6 - Welche Pflichten hat der Arbeitnehmer in Bezug auf die Arbeitssicherheit?",
    "significado": "¿Qué deberes tiene el empleado en relación con la seguridad en el trabajo?",
    "frases": [
      "a- Der Arbeitnehmer kann die persönliche Schutzausrüstung benutzen, wenn sie seiner Arbeit dienlich erscheint.",
      "B- Der Arbeitnehmer muss die Weisungen des Arbeitgebers befolgen und die allgemein anerkannten Sicherheitsregeln berücksichtigen.",
      "c- Der Arbeitnehmer muss jederzeit einen Helm, Sicherheitsschuhe und Schutzbrille tragen, auch wenn dies nicht vorgeschrieben ist."
    ]
  },
  {
    palabra: "7 - Darf die Hubladebühne zum Be- und Entladen mit einem Stapler befahren werden?",
    significado: "¿Se puede conducir un montacargas sobre una plataforma elevadora para cargar y descargar?",
    frases: [
      "a- nein",
      "B- ja, nur wenn die Tragfähigkeit nicht überschritten wird.",
      "c- ja, mit Erlaubnis des Chauffeurs"
    ]
  },
  {
    "palabra": "8 - Bei welchem Wert ist die Batterie voll geladen?",
    "significado": "¿A qué valor está completamente cargada la batería?",
    "frases": [
      "A- 1.28 kg / dm3",
      "b- 1.24 / dm3",
      "c- 1.20 / dm3"
    ]
  },
  {
    "palabra": "9 - Dürfen mit dem Stapler auf öffentlichen Straßen Lasten transportiert werden?",
    "significado": "¿Se permite transportar cargas con un montacargas en vías públicas?",
    "frases": [
      "a- Ja, sofern der Fahrer einen Führerausweis hat.",
      "b- Das ist verboten.",
      "C- Nur mit einer Sonderbewilligung der zuständigen Behörde, Polizei/Strassenverkehrsamt"
    ]
  },
  {
    "palabra": "10 - Dürfen Sie eine Europalette mit einem Gewicht von 5000kg längs aufnehmen?",
    "significado": "¿Se puede levantar un palet europeo de 5000 kg a lo largo?",
    "frases": [
      "A- Ja",
      "b- Nein"
    ]
  },
  {
    "palabra": "11 - Wie hoch dürfen Sie eine Last von 4500kg und einem Lastschwerpunktabstand von 900 mm maximal heben?",
    "significado": "¿Hasta qué altura se puede levantar una carga de 4500 kg con un centro de gravedad de 900 mm?",
    "frases": [
      "a- 500 cm",
      "B- 450 cm",
      "c- 400 cm"
    ]
  },
  {
    palabra: "12 - Was tun Sie, wenn eine Ladung transportiert werden muss, die Ihre Sicht auf die Fahrbahn Behindert?",
    significado: "¿Qué haces si una carga obstruye tu visión de la carretera?",
    frases: [
      "a- Ich hebe die Last soweit, bis ich genügend Sicht nach vorne habe.",
      "B- Rückwärts fahren.",
      "c- Vorsichtig vorwärts fahren und fortwährend hupen."
    ]
  },
  {
    palabra: "13 - Wie befahren Sie mit einem beladenen Stapler ein Gefälle (Talfahrt)?",
    significado: "¿Cómo desciende una pendiente con un montacargas cargado?",
    frases: [
      "a- Vorwärts (Last talseitig).",
      "B- Rückwärts (Last bergseitig) und in langsamer Fahrt.",
      "c- Mit einem beladenen Stapler darf kein Gefälle befahren werden."
    ]
  },
  {
    palabra: "14 - Welche Kontrollen führen Sie an Ihrem Stapler vor Arbeitsbeginn durch?",
    significado: "¿Qué controles realiza en su montacargas antes de comenzar el trabajo?",
    frases: [
      "a- Ich achte darauf, dass das Fahrzeug sauber ist.",
      "B- Ich prüfe den Ladezustand der Batterie und achte auf Ölflecken, die einen Defekt am Hydrauliksystem verraten würden.",
      "c- Ich prüfe nach, ob der Ladezustand der Batterie dem Eintrag im Kontrollheft entspricht."
    ]
  },
  {
    palabra: "15 - In welchen EKAS Richtlinien werden Flurförderzeuge behandelt?",
    significado: "¿En qué directrices de EKAS se tratan los vehículos industriales?",
    frases: [
      "a- 6503",
      "b- 6508",
      "C- 6518"
    ]
  },
  {
    palabra: "16 - Wie breit muss ein Fussweg neben Staplerverkehrswegen mindestens sein?",
    significado: "¿Qué ancho mínimo debe tener una acera junto a los caminos de tráfico de montacargas?",
    frases: [
      "A- 80 cm",
      "b- 60 cm",
      "c- 40 cm"
    ]
  },
  {
    palabra: "17 - Was wissen Sie über das Befahren öffentlicher Verkehrsflächen?",
    significado: "¿Qué sabe sobre circular por vías públicas?",
    frases: [
      "A- Man benötigt einen Führerausweis der Kategorie F.",
      "b- Sie sind ohne Nummernschild am Stapler befahrbar.",
      "c- Sie sind von jedermann ohne Hindernisse begehbar und befahrbar."
    ]
  },
  {
    palabra: "18 - Was ist bezüglich des Schwerpunkts einer Last zu beachten?",
    significado: "¿Qué se debe tener en cuenta respecto al centro de gravedad de una carga?",
    frases: [
      "A- Der Schwerpunkt der Last muss möglichst nahe an Gabelrücken liegen.",
      "b- Der Schwerpunkt beim Stapler sollte möglichst hoch angesetzt sein.",
      "c- Sie sind von jedermann ohne Hindernisse begehbar und befahrbar."
    ]
  },
  {
    palabra: "19 - Bei welchem Wert ist die Batterie fast leer?",
    significado: "¿A qué valor la batería está casi vacía?",
    frases: [
      "a- 1.26kg / dm3",
      "B- 1.15kg / dm3",
      "c- 1.20kg / dm3"
    ]
  },
  {
    palabra: "20 - Wann muss das destillierte Wasser bei den Batterien befüllt werden?",
    significado: "¿Cuándo debe rellenarse el agua destilada en las baterías?",
    frases: [
      "a- Vor dem Laden.",
      "B- Nach dem Laden.",
      "c- Während dem Laden."
    ]
  }


];

const palabrasTraducidas = [
  {
    palabra: "1 - ¿Cuál es la diferencia entre formación e instrucción?",
    frases: [
      "A-La instrucción es solo práctica, una formación incluye también partes teóricas y finaliza con un examen.",
      "b-La instrucción y la formación siempre se realizan en centros de capacitación.",
      "c-Una formación es siempre solo teórica."
    ]
  },
  {
    palabra: "2 - ¿Qué vehículos industriales están agrupados en la categoría R?",
    frases: [
      "a- Montacargas contrapesado, montacargas para estanterías altas, preparadores de pedidos y montacargas laterales.",
      "B- Montacargas contrapesado, montacargas de asiento transversal, montacargas laterales y montacargas telescópicos.",
      "c- Montacargas multidireccionales, montacargas telescópicos y transpaletas."
    ]
  },
  {
    palabra: "3 - ¿Cuándo se consideran los vehículos industriales como herramientas de trabajo con riesgos especiales?",
   frases: [
      "a- Cuando el operador eleva la plataforma de operación a una altura de 3 metros.",
      "B- Cuando están equipados con asiento o cabina y pueden levantar cargas por encima de la cabeza.",
      "c- Cuando pueden circular a más de 5 km/h."
    ]
  },
  {
    palabra: "4 - ¿De qué se compone una formación inicial?",
    frases: [
      "A- Del módulo básico y 1-2 módulos adicionales.",
      "b- Del módulo básico y 2-3 módulos adicionales.",
      "c- Si se ha realizado una formación interna, se puede comenzar inmediatamente con los módulos adicionales."
    ]
  },
  {
    palabra: "5 - ¿En qué ley o reglamento se establece que el empleador solo puede asignar trabajos con riesgos especiales a empleados debidamente capacitados?",
   frases: [
      "A- VUV",
      "b- SVG",
      "c- ArG"
    ]
  },
  {
    palabra: "6 - ¿Qué deberes tiene el empleado en relación con la seguridad en el trabajo?",
   frases: [
      "a- El empleado puede usar el equipo de protección personal si le parece conveniente para su trabajo.",
      "B- El empleado debe seguir las instrucciones del empleador y considerar las reglas de seguridad generalmente aceptadas.",
      "c- El empleado debe usar siempre casco, zapatos de seguridad y gafas de protección, incluso si no se exige."
    ]
  },
  {
    palabra: "7 - ¿Se puede conducir un montacargas sobre una plataforma elevadora para cargar y descargar?",
   frases: [
      "a- No",
      "B- Sí, solo si no se excede la capacidad de carga.",
      "c- Sí, con permiso del conductor."
    ]
  },
  {
    palabra: "8 - ¿A qué valor está completamente cargada la batería?",
   frases: [
      "A- 1.28 kg / dm3",
      "b- 1.24 kg / dm3",
      "c- 1.20 kg / dm3"
    ]
  },
  {
    palabra: "9 - ¿Se permite transportar cargas con un montacargas en vías públicas?",
   frases: [
      "a- Sí, siempre que el conductor tenga licencia.",
      "b- Está prohibido.",
      "C- Solo con un permiso especial de la autoridad competente, policía o departamento de tráfico."
    ]
  },
  {
    palabra: "10 - ¿Se puede levantar un palet europeo de 5000 kg a lo largo?",
  frases: [
      "A- Sí",
      "b- No"
    ]
  },
  {
    palabra: "11 - ¿Hasta qué altura se puede levantar una carga de 4500 kg con un centro de gravedad de 900 mm?",
   frases: [
      "a- 500 cm",
      "B- 450 cm",
      "c- 400 cm"
    ]
  },
  {
    palabra: "12 - ¿Qué haces si una carga obstruye tu visión de la carretera?",
    frases: [
      "a- Elevo la carga lo suficiente para tener una mejor vista hacia adelante.",
      "B- Conducir en reversa.",
      "c- Avanzar con cuidado y tocar el claxon continuamente."
    ]
  },
  {
    palabra: "13 - ¿Cómo desciende una pendiente con un montacargas cargado?",
   frases: [
      "a- Hacia adelante (carga cuesta abajo).",
      "B- Hacia atrás (carga cuesta arriba) y conduciendo lentamente.",
      "c- No se permite bajar una pendiente con un montacargas cargado."
    ]
  },
  {
    palabra: "14 - ¿Qué controles realiza en su montacargas antes de comenzar el trabajo?",
   frases: [
      "a- Me aseguro de que el vehículo esté limpio.",
      "B- Verifico el estado de carga de la batería y busco manchas de aceite que indiquen un defecto en el sistema hidráulico.",
      "c- Verifico si el estado de carga de la batería coincide con la entrada en el libro de control."
    ]
  },
  {
    palabra: "15 - ¿En qué directrices de EKAS se tratan los vehículos industriales?",
   frases: [
      "a- 6503",
      "b- 6508",
      "C- 6518"
    ]
  },
  {
    palabra: "16 - ¿Qué ancho mínimo debe tener una acera junto a los caminos de tráfico de montacargas?",
   frases: [
      "A- 80 cm",
      "b- 60 cm",
      "c- 40 cm"
    ]
  },
  {
    palabra: "17 - ¿Qué sabe sobre circular por vías públicas?",
   frases: [
      "A- Se necesita una licencia de conducir categoría F.",
      "b- Se puede circular sin matrícula en el montacargas.",
      "c- Son accesibles a cualquier persona sin obstáculos."
    ]
  },
  {
    palabra: "18 - ¿Qué se debe tener en cuenta respecto al centro de gravedad de una carga?",
   frases: [
      "A- El centro de gravedad de la carga debe estar lo más cerca posible de la parte trasera de las horquillas.",
      "b- El centro de gravedad en el montacargas debe estar lo más alto posible.",
      "c- Son accesibles a cualquier persona sin obstáculos."
    ]
  },
  {
    palabra: "19 - ¿A qué valor la batería está casi vacía?",
   frases: [
      "a- 1.26 kg / dm3",
      "B- 1.15 kg / dm3",
      "c- 1.20 kg / dm3"
    ]
  },
  {
    palabra: "20 - ¿Cuándo debe rellenarse el agua destilada en las baterías?",
   frases: [
      "a- Antes de cargar.",
      "B- Después de cargar.",
      "c- Durante la carga."
    ]
  }
];

const Stapler = () => {

   // Función para verificar si una frase es la correcta (la que tiene la letra mayúscula)
   const esCorrecta = (frase) => {
    // Verifica si la primera letra de la frase está en mayúscula
    return /^[A-Z]-/.test(frase);
  };

  return (
    <div className="container">
      {palabras.map((item, index) => (
        <div key={index} className="card">
          <h3>{item.palabra}</h3>
          <p>{item.significado}</p>
          <ul>
            {item.frases.map((frase, i) => (
              <li
                key={i}
                className={esCorrecta(frase) ? "correcta" : ""}
              >
                {frase}
              </li>
            ))}
          </ul>
        </div>
      ))}

{palabrasTraducidas.map((item, index) => (
        <div key={index} className="card">
          <h3>{item.palabra}</h3>
          <p>{item.significado}</p>
          <ul>
            {item.frases.map((frase, i) => (
              <li
                key={i}
                className={esCorrecta(frase) ? "correcta" : ""}
              >
                {frase}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <style jsx>{`
        .container {
          width: 100%;
          margin: 0 auto;
        }

        .card {
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 15px;
          margin-bottom: 20px;
          background-color: #f9f9f9;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }

        h3 {
          font-size: 1.3rem;
          margin-bottom: 3px;
        }

        ul {
          list-style-type: none;
          padding-left: 0;
        }

        li {
          margin-bottom: 5px;
          font-size: 1rem;
        }

        /* Estilo para la respuesta correcta */
        .correcta {
          background-color: #d4edda; /* Verde claro */
          padding: 5px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default Stapler;