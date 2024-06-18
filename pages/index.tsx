import Link from 'next/link'

export default function Home() {
  return (
    <>

  <Link href="/"><h3>/home</h3></Link>
  {/* <Link href="/proyectos/proyects"><h3>/home/proyects</h3></Link>
  <Link href="/test/test"><h3>/home/test</h3></Link> */}

    <div className='alert-construccion'>
    <h1 className='alertText'>🚧 Esta página está en construcción. 🚧</h1>
      </div>

  <style jsx>{`

    .alert-construccion{
      background-color: #ffcc00;
      color: #333;
      padding: 20px;
      text-align: center;
      border-radius: 5px;
      margin: 20px 0;
      font-family: Arial, sans-serif;
    }
    .alertText {
  font-size: 22px;
  font-weight: bold;
}
      
   
         `}</style>
    </>
  )
}
