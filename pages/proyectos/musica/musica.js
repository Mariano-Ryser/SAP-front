import { useState } from 'react';
import Link from "next/link"
import Image from "next/image"


export default function Music() {



const notes = ["C","D","E","F","G","A","B"]

// Acordes Mayores Equivalentes 

const C = ["C-", "Dm-", "Em-", "F-", "G-", "Am-", "Bmd"];
const D = ["D-", "Em-", "F#m-", "G-", "A-", "Bm-", "C#md"];
const E = ["E-", "F#m-", "G#m-", "A-", "B-", "C#m-", "D#md"];
const F = [" F-","Gm-","Am-","Bbm-","Dm-","Eb-","Emd"]
const G = ["G-", "Am-", "Bm-", "C-", "D-", "Em-", "F#md"];
const A = ["A-", "Bm-", "C#m-", "D-", "E-", "F#m-", "G#md"];
const B = ["B-", "C#m-", "D#m-", "E-", "F#-", "G#m-", "A#md"];

// Acordes Mayores Equivalentes (Sostenidos)

const CSharp = ["C#-", "D#m-", "Fm-", "F#-", "G#-", "A#m-", "Cmd"];
const DSharp = ["D#-", "Fm-", "F#m-", "G#-", "A#-", "Cm-", "C#md"];
const FSharp = ["F#-", "G#m-", "A#m-", "B-", "C#-", "D#m-", "Fmd"];
const GSharp = ["G#-", "A#m-", "Cm-", "C#-", "D#-", "Fm-", "F#md"];
const ASharp = ["A#-", "Cm-", "C#m-", "D#-", "F-", "F#m-", "G#md"];

// Acordes Menores Equivalentes
const Cm = ["Cm-", "Ddim-", "Ebm-", "Fm-", "Gm-", "Ab-", "Bbmd"];
const Dm = ["Dm-", "Edim-", "Fm-", "Gm-", "Am-", "Bb-", "Cmd"];
const Em = ["Em-", "F#dim-", "Gm-", "Am-", "Bm-", "C-", "Dmd"];
const Fm = ["Fm-", "Gdim-", "Abm-", "Bbm-", "Cm-", "Db-", "Ebm-"];
const Gm = ["Gm-", "Adim-", "Bbm-", "Cm-", "Dm-", "Eb-", "Fmd"];
const Am = ["Am-", "Bdim-", "Cm-", "Dm-", "Em-", "F-", "Gmd"];
const Bm = ["Bm-", "C#dim-", "Dm-", "Em-", "F#m-", "G-", "Amd"];

// Acordes Menores Equivalentes (Sostenidos)
const CSharpMin = ["C#m-", "D#dim-", "E-", "F#m-", "G#m-", "A-", "Bmd"];
const DSharpMin = ["D#m-", "Fdim-", "F#-", "G#m-", "A#m-", "B-", "Cmd"];
const FSharpMin = ["F#m-", "G#dim-", "A-", "B-", "C#m-", "D-", "Emd"];
const GSharpMin = ["G#m-", "A#dim-", "B-", "C#m-", "D#m-", "E-", "F#md"];
const ASharpMin = ["A#m-", "Cdim-", "C#-", "D#m-", "Fm-", "F#-", "G#md"]; 

// Construccion de Acorde !

const CChord = ["C", "E", "G"];
const DChord = ["D", "F#", "A"];
const EChord = ["E", "G#", "B"];
const FChord = ["F", "A", "C"];
const GChord = ["G", "B", "D"];
const AChord = ["A", "C#", "E"];
const BChord = ["B", "D#", "F#"];

const CSharpChord = ["C#", "F", "G#"];
const DSharpChord = ["D#", "F#", "A#"];
const FSharpChord = ["F#", "A#", "C#"];
const GSharpChord = ["G#", "C", "D#"];
const ASharpChord = ["A#", "C#", "F"];

const CmChord = ["C", "D#", "G"];
const DmChord = ["D", "F", "A"];
const EmChord = ["E", "G", "B"];
const FmChord = ["F", "G#", "C"];
const GmChord = ["G", "A#", "D"];
const AmChord = ["A", "C", "E"];
const BmChord = ["B", "D", "F#"];

const CSharpMinChord = ["C#", "E", "G#"];
const DSharpMinChord = ["D#", "F#", "A#"];
const FSharpMinChord = ["F#", "A", "C#"];
const GSharpMinChord = ["G#", "B", "D#"];
const ASharpMinChord = ["A#", "C#", "F"];


// Escalas de Mayores
const CScale = ["C", "D", "E", "F", "G", "A", "B"];
const DScale = ["D", "E", "F#", "G", "A", "B", "C#"];
const EScale = ["E", "F#", "G#", "A", "B", "C#", "D#"];
const FScale = ["F", "G", "A", "Bb", "C", "D", "E"];
const GScale = ["G", "A", "B", "C", "D", "E", "F#"];
const AScale = ["A", "B", "C#", "D", "E", "F#", "G#"];
const BScale = ["B", "C#", "D#", "E", "F#", "G#", "A#"];

// Escalas Menores 

const CmScale = ["C", "D", "Eb", "F", "G", "Ab", "Bb"];
const DmScale = ["D", "E", "F", "G", "A", "Bb", "C"];
const EmScale = ["E", "F#", "G", "A", "B", "C", "D"];
const FmScale = ["F", "G", "Ab", "Bb", "C", "Db", "Eb"];
const GmScale = ["G", "A", "Bb", "C", "D", "Eb", "F"];
const AmScale = ["A", "B", "C", "D", "E", "F", "G"];
const BmScale = ["B", "C#", "D", "E", "F#", "G", "A"];


////////////////////////////////////
// Escalas Mayores (Sostenidos)
////////////////////////////////////

const CSharpScale = ["C#", "D#", "F", "F#", "G#", "A#", "C"];
const DSharpScale = ["D#", "F", "F#", "G#", "A#", "C", "C#"];
const FSharpScale = ["F#", "G#", "A#", "B", "C#", "D#", "F"];
const GSharpScale = ["G#", "A#", "C", "C#", "D#", "F", "F#"];
const ASharpScale = ["A#", "C", "C#", "D#", "F", "F#", "G#"];

////////////////////////////////////
// Escalas Menores (Sostenidos)

const CSharpMinScale = ["C#", "D#", "E", "F#", "G#", "A", "B"];
const DSharpMinScale = ["D#", "F", "F#", "G#", "A#", "B", "C#"];
const FSharpMinScale = ["F#", "G#", "A", "B", "C#", "D", "E"];
const GSharpMinScale = ["G#", "A#", "B", "C#", "D#", "E", "F#"];
const ASharpMinScale = ["A#", "C", "C#", "D#", "F", "F#", "G#"];


// ["-1-","-3-","-5-","-7-","-6-","-4-","-2--"]

function rearrangeChords(chords) {
  // Crear un nuevo arreglo con las posiciones cambiadas
  const newChords = [];
  // 
  // newChords[0] = chords[3]; // El acorde en la posición 3 pasa a la posición 0
  // newChords[1] = chords[6]; // El acorde en la posición 6 pasa a la posición 1
  // newChords[2] = chords[2]; // El acorde en la posición 2 queda en la posición 2
  // newChords[3] = chords[5]; // El acorde en la posición 5 pasa a la posición 3
  // newChords[4] = chords[1]; // El acorde en la posición 1 pasa a la posición 4
  // newChords[5] = chords[4]; // El acorde en la posición 4 pasa a la posición 5
  // newChords[6] = chords[0]; // El acorde en la posición 0 pasa a la posición 6

  newChords[0] = chords[1]; // El acorde en la posición 3 pasa a la posición 0
  newChords[1] = chords[4]; // El acorde en la posición 6 pasa a la posición 1
  newChords[2] = chords[0]; // El acorde en la posición 2 queda en la posición 2
  newChords[3] = chords[5]; // El acorde en la posición 5 pasa a la posición 3
  return newChords;
}
const rearranged = rearrangeChords(C);

console.log(rearranged);

  return (
    <>
 <div className="container">
    <div>
  
      <p>GmSharpScale = {GSharpMinScale}</p>
      <p>Progrecion = {rearranged}</p>

      <p>Dm= E-F-A-C-E</p>
      <p>G= </p>
      
    </div>
    
    <br></br>
  </div>

<div>

</div>



  
 <div className="container">
      <div className="img" style={{backgroundImage: `url('/img/circuloQuintas.jpg`}}></div>
  </div> 




      <style jsx>{`
  .divo{
    padding:1rem;
    border: solid 1px black ;
  }
    .container{
      padding: 5px 3rem 0px 3rem;
      border-radius: 10px;
       margin: auto;
       margin-top: 20px;
        display:flex;
        justify-content:center;
        text-align:center;
    }
    .img{
      border:solid black 1px;
        height:25rem;
        width:25rem;
        background-position: center;
        background-size:cover;
    }
    .img-container{
        margin-top:1rem;
        display:flex;
        justify-content:center;
    }
   
 

@media (max-width: 600px) {
    .img{
      height:27rem;
      width:100%;
        background-position: center;
    }
   
    .container{
      padding: 5px 15px 0px 15px;
      margin: auto;
      margin-top: 20px;
    }
}
       
         `}</style>
   

    </>
  
  );
}