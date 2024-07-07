import Link from 'next/link'


export default function Markdown() {
  return (
    <>


  
  {/* <Pantallazo/> */}
  <Link href="/"><li>/proyects ..</li></Link>
  <Link href="cancionero/cancionero"><li>/markdown/cancionero </li></Link>
  <Link href="example"><li>/markdown/testMarkD =D </li></Link>
  <Link href="english/english"><li>/markdown/english/</li></Link> 



  <style jsx>{`
  li:hover{
    cursor: default;
    color: rgb(18, 221, 228);

  }
  
      
@media (max-width: 600px) {
 
                 
}
       
         `}</style>
    </>
  )
}
