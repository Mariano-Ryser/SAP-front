import React, { useState, useEffect } from 'react';


const Ulises = () => {
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
    <h1>Prueba de texto</h1>
    <p>  E     F#</p>

Te dijeron 

            Ebm                   G#m

que ando en una y que ya no te quiero

         E                      F#

que me vieron con otra en el club

      Ebm                G#m

pero eso solo son fake news



                   E              F#

Y que no digan mentiras sobre los dos

                 Ebm             G#m

No sé por qué se meten entre tú y yo

                  E  F#

Sé que también extrañas

              Ebm               G#m

Despertarte conmigo y hacer el amor



                   E              F#

Y que no digan mentiras sobre los dos

                 Ebm             G#m

No sé por qué se meten entre tú y yo

                  E  F#

Sé que también extrañas

              Ebm               G#m

Despertarte conmigo y hacer el amor



       E

Hoy es 14 de febrero 

         F#

y sin querer mande un "te quiero"

           Ebm                      G#m

es que sin vos no la estoy pasando bien

            E 

y aunque algunos te dijeron

          F#

que ahora solo fumo y bebo 

        Ebm             G#m

y es verdad pero pensandote



       E                     F# 

Miénteme pero no me hagas sufrir

                Ebm                      G#m

que todavia te quiero aunque ya no me seguís

      E                  F#

Miénteme pero decime que si

                  Ebm                    G#m

que vos no sos la misma desde que yo me fui



           E    F#

Y no te borré de mi

          Ebm          G#m

extraño besarte bajo la luna

           E     F#

y si estuvieras aquí

           Ebm              G#m

quisiera tenerte tocar tu cintura



                   E              F#

Y que no digan mentiras sobre los dos

                 Ebm             G#m

No sé por qué se meten entre tú y yo

                  E  F#

Sé que también extrañas

              Ebm               G#m

Despertarte conmigo y hacer el amor



                   E              F#

Y que no digan mentiras sobre los dos

                 Ebm             G#m

No sé por qué se meten entre tú y yo

                  E  F#

Sé que también extrañas

              Ebm               G#m

Despertarte conmigo y hacer el amor



    E                F#

Me duele que pasemos solos 

            Ebm                   G#m

otro frío invierno y de ti no me olvido

        E                   F#

como dejarte si te llevo conmigo

          Ebm

nunca he podido arrancarte



                E     F#

Porque no te borré de mi 

          Ebm           G#m

extraño besarte bajo la luna

           E     F#

y si estuvieras aquí

           Ebm              G#m

quisiera tenerte tocar tu cintura



                   E              F#

Y que no digan mentiras sobre los dos

                 Ebm             G#m

No sé por qué se meten entre tú y yo

                  E  F#

Sé que también extrañas

              Ebm               G#m

Despertarte conmigo y hacer el amor



                   E              F#

Y que no digan mentiras sobre los dos

                 Ebm             G#m

No sé por qué se meten entre tú y yo

                  E  F#

Sé que también extrañas

              Ebm               G#m

Despertarte conmigo y hacer el amor

Final sobre: E F# Ebm G#m

   
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

export default Ulises