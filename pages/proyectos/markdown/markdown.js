import Link from 'next/link'


export default function Markdown() {
  return (
    <>


  
  {/* <Pantallazo/> */}
  <Link href="/"><h3>/proyects ..</h3></Link>
  <Link href="cancionero/cancionero"><h3>/markdown/cancionero </h3></Link>
  <Link href="example"><h3>/markdown/testMarkD =D </h3></Link>
  <Link href=""><h3>/markdown/ </h3></Link>
  <Link href=""><h3>/markdown/ </h3></Link>



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
