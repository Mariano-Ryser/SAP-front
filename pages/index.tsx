import Link from 'next/link'

export default function Home() {
  return (
    <>

  <Link href="/"><h3>/home</h3></Link>
  <Link href="/proyectos/proyects"><h3>/home/proyects</h3></Link>


  <style jsx>{`
  
  h3:hover{
    cursor: default;
    color: rgb(18, 221, 228);

  }
      
@media (max-width: 600px) {
 
                 
}
       
         `}</style>
    </>
  )
}
