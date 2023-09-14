import Link from 'next/link'
import { dateDay } from '../../components/date' //importo funcion de validacion
import BoxComentar from '../../components/comentarBox/BoxComentar' //importo funcion de validacion

export default function Page() {

  const QUESTIONS = [
    {id:"1", text:"Que es eso?"},
    {id:"2", text:"Que es esto?"}
  ] 
 
  return (
  <>
<div>
    <form>
      <input placeholder='me pregunto si...'></input>
      <br></br>
      <button type='submit'>press</button>
    </form>
  </div>

  <div>
    <article >

      {QUESTIONS.map((question)=>
      <div className='art' key={question.id}>
        <h1>Preguntonta</h1>
        <p>{question.text}</p>
      </div>)}

    </article>
  </div>


  <h1>Wala</h1>
  {dateDay()}


  <style jsx>{`
     .art{
      margin: 0.5rem;
      padding: 0.5rem;
      display: inline-block;
      height: 10rem;
      width: 10rem;
      border: solid rgb(0, 0, 0) 1px;

     }

    `}</style>
  </>
  )
}

