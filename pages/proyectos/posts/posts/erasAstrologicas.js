import React, { useState, useEffect } from 'react';


const Piramide = () => {
  const initialState = (1.3)
  const [gross, setGross] = useState(initialState)

  const grosse = ()=> {
      setGross(gross + 0.05)
  }

  const grosseOut = ()=>{
    setGross(gross - 0.05)
  }
  return (
    <>
  <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
    <h1>ERAS ASTROLÓGICAS Y EVOLUCIÓN DE LA CONSCIENCIA </h1>
    <h2>El Ciclo Cósmico y la Influencia de las Eras </h2>
   <p>La interacción entre las fuerzas gravitacionales del Sol y la Luna sobre la Tierra produce un movimiento oscilante en el eje polar terrestre. Este fenómeno, conocido como Precesión de los Equinoccios, marca el paso del eje a través de los signos del zodíaco a lo largo de un ciclo de aproximadamente 27,000 años, conocido como el Gran Año Sideral. Cada uno de los 12 signos zodiacales domina un periodo de poco más de 2,000 años, conocido como Era Astrológica, y determina las características energéticas que moldean la consciencia colectiva y arquetípica de la humanidad.</p>
   <p>En astrología, los signos opuestos en el zodíaco forman un sistema de polaridades complementarias, dos caras de una misma moneda que representan fuerzas opuestas pero integradoras. La evolución humana, según esta perspectiva, implica un proceso de integración consciente de estas polaridades. Carl Jung lo describiría como individuación, el camino hacia la plenitud a través del reconocimiento, aceptación e integración de los opuestos internos. Por el contrario, la negación o separación de estas polaridades genera distorsión, sufrimiento y un ciclo compulsivo de reivindicación inconsciente que afecta a la humanidad.</p>
   <p>Si bien no existe registro histórico, es de suponer que en la Era de Libra puede haber existido una humanidad con Consciencia de la Belleza, Justicia, Armonía y Ecuanimidad. Un total refinamiento. Aunque la historia no lo recuerda, esto si ha quedado registrado a nivel etérico en los denominados registros akhásicos y en el cuerpo de la humanidad como la memoria de la Raza. El libro “Orígenes de la Civilización Adámica” y otros hacen referencia a toda la organización social, justa y humanitaria aplicada por culturas de esta época –como la de los Kobdas-, y que luego pasó a los Dáctilos en Gracia. Según Vicente Beltrán Anglada, Libra es el Signo del Centro, refleja la Justicia, la Verdad y el Amor como real Sabiduría; características propias del cuarto chacra. Puede haber sido la época de gloria en la que han encarnado los Maestros Ascendidos como Sanat Kumara, donde ha existido la mítica ciudad de Shambala, etc..</p>
<br></br>
<p>A continuación, exploraremos cómo cada Era Astrológica ha influido en el desarrollo de la humanidad y las lecciones que nos ha dejado este ciclo cósmico.</p>

 <h2>Eras Pasadas y el Camino de la Consciencia </h2>
  <h3>Era de Virgo (12,000 - 10,000 a.C.): Perfección y Ruptura</h3>
<p>En esta era, asociada con la Atlántida y Lemuria, la humanidad alcanzó un alto grado de perfección tecnológica y pragmatismo. Virgo, un signo de tierra, simboliza eficiencia, perfección y estructura. Sin embargo, la desconexión de su polaridad espiritual, Piscis, llevó a una humanidad atrapada en las formas y el materialismo. Este desequilibrio culminó en la autodestrucción de civilizaciones avanzadas, marcando el fin de un ciclo y la necesidad de renacimiento.

</p>

<h3>Era de Leo (10,000 - 8,000 a.C.): Descubrimiento del Yo</h3>
<p>Leo representa la exploración del ego y la identidad, similar al despertar de un niño pequeño que descubre su individualidad. Durante esta era, la humanidad vivió un período egocéntrico y nómada, centrado en la supervivencia. La desconexión de la polaridad de Acuario, que representa la colectividad y la consciencia grupal, mantuvo a la humanidad aislada en su individualismo.</p>

<h3>Era de Cáncer (8,000 - 6,000 a.C.): El Nacimiento de la Comunidad</h3>
<p>Cáncer, signo del hogar y la familia, trajo consigo los primeros asentamientos sedentarios y un sentido de pertenencia al clan o tribu. Sin embargo, la falta de integración de Capricornio, su polaridad complementaria, impidió el desarrollo de la ambición colectiva y la responsabilidad social, limitando el progreso hacia estructuras más amplias y organizadas.</p>

<h3>Era de Géminis (6,000 - 4,000 a.C.): Comunicación y Conocimiento</h3>
<p>Bajo la influencia de Géminis, la humanidad experimentó un florecimiento cultural y tecnológico, con avances en escritura, lenguas y astronomía. Las grandes civilizaciones de Mesopotamia y Egipto encarnaron esta energía. Sin embargo, la desconexión de Sagitario, su opuesto, llevó a un enfoque fragmentado, incapaz de integrar una visión filosófica más amplia que evitara conflictos y separaciones.</p>


<h3>Era de Tauro (4,000 - 2,000 a.C.): Veneración de la Tierra</h3>
<p>Tauro, el signo de la materia y la estabilidad, marcó un período de conexión profunda con la naturaleza. Culturas como la egipcia y las minoicas veneraron la fertilidad y los recursos terrestres, pero la falta de la intensidad transformadora de Escorpio, su polaridad, generó un estancamiento en la búsqueda de verdades más profundas.</p>

<h3>Era de Aries (2,000 - 0 a.C.): El Guerrero y la Acción</h3>
<p>La humanidad, bajo el arquetipo del guerrero de Aries, vivió un período de conquista y guerra. Aquí emergieron deidades masculinas y una cultura orientada a la acción y la dominación. La separación de Libra, su opuesto, llevó a un descuido de la armonía y la justicia, desequilibrando las dinámicas sociales.</p>

<h3>Era de Piscis (0 - 2,000): Sacrificio y Redención</h3>
<p>Piscis introdujo un periodo marcado por el sacrificio, el sufrimiento y la espiritualidad, simbolizado por Jesús y la búsqueda de redención. No obstante, esta era estuvo acompañada de una desconexión de las cualidades terrenales de Virgo, como el pragmatismo y la integración de la materia con el espíritu, fomentando una repulsión hacia el plano físico y el mundo material.</p>


<h3>La Era de Acuario (2,000 - 4,000): Hacia la Consciencia Global</h3>
<p>Acuario representa el despertar de la humanidad hacia la colectividad, la integración y la fraternidad universal. Este signo está regido por Urano, asociado con la iluminación y el conocimiento superior. En esta era, la humanidad busca manifestar ideales elevados como la igualdad y la libertad. Sin embargo, el desafío acuariano radica en equilibrar la colectividad con la individualidad de su opuesto, Leo.</p>

<p>Si la humanidad olvida que cada individuo es una chispa única dentro del colectivo, corre el riesgo de ser absorbida por sistemas homogéneos y despersonalizados. La verdadera evolución consiste en integrar la consciencia grupal con el reconocimiento de la luz interna que brilla en cada ser, transformando la comunidad en un espacio de crecimiento mutuo y realización.</p>

<h2>La Gran Integración: Reconocer la Otra Parte</h2>
<p>A lo largo de las eras, el mayor obstáculo ha sido la separación de las polaridades. En cada época, la humanidad ha oscilado entre aspectos opuestos, olvidando que ambos son esenciales para alcanzar la unidad. El desafío de nuestra era es recordar que somos un todo integrado, un puente entre lo material y lo espiritual, lo individual y lo colectivo.

El camino hacia la plenitud no es escapar al mundo espiritual, ni perderse en la materialidad, sino vivir plenamente en ambos. Desde la oficina hasta el templo, cada acción humana es una contribución al Plan Divino, una oportunidad para crear un mundo donde la luz de cada individuo brille en armonía con el todo.

La gran búsqueda de Acuario no es sólo globalización, sino humanización: vernos a nosotros mismos y a los demás como seres completos, divinos y profundamente interconectados.

Continúa...</p>

  </section>

  <button
     className='button2'
     onClick={grosse}
     >+</button>
      <button
     className='button3'
     onClick={grosseOut}
     >-</button>
          <style jsx>{`
          a{
  color:yellow;
 } 
h1,h2,h3{
  color:white;
}

section{
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
      font-size:1.3rem;
      line-height: 1.74;
        color: rgb(191, 191, 191);
        width:40rem;
        margin:auto;
        margin-bottom:1rem;
        margin-top: 1rem;
        padding:0rem;
    }
                  .button2{    
                    font-size:2rem;
                    border-radius:10px;
                    position: fixed;
                    bottom:5rem;
                    left:1rem;
                    background-color: white;
                    height: 2.4rem;
                    width: 2.5rem;
                    box-shadow: inset 0px 0px 5px 2px rgba(83, 83, 83, 0.443);
                }
                .button3{
                    font-size:2rem;
                    border-radius:10px;
                    position: fixed;
                    bottom: 2rem;
                    left:1rem;
                    background-color: white;
                    height: 2.4rem;
                    width: 2.5rem;
                    box-shadow: inset 0px 0px 5px 2px rgba(83, 83, 83, 0.443);
                }

    @media (max-width: 600px) {
               .button2{
                    font-size:2rem;
                    border-radius:10px;
                    position: fixed;
                    bottom:5rem;
                    left:1rem;
                    background-color: white;
                    height: 2.4rem;
                    width: 2.5rem;
                    box-shadow: inset 0px 0px 5px 2px rgba(83, 83, 83, 0.443);
                }
                .button3{
                    font-size:2rem;
                    border-radius:10px;
                    position: fixed;
                    bottom: 2rem;
                    left:1rem;
                    background-color: white;
                    height: 2.4rem;
                    width: 2.5rem;
                    box-shadow: inset 0px 0px 5px 2px rgba(83, 83, 83, 0.443);
                  }

                  section{
                  width:95%;
                  margin:auto;
                  margin-bottom:1rem;
                  margin-top: 1rem;
                  padding:0rem;
                      }   

            .img{
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin:auto;
                    height:20rem;
                    width: 95%;
                    {/* border: solid 1px black; */}
                  }
      }   
        `}</style>

  </>
  )
}

export default Piramide