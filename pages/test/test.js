import Link from 'next/link'


export default function Test() {
  return (
    <>


  
  {/* <Pantallazo/> */}
  <Link href="/"><h3>/home ..</h3></Link>
  
  <Link href="/test/1"><h3>/tests/1 ..</h3></Link>
  <Link href="/test/2"><h3>/tests/2 ..</h3></Link>
  <Link href="/test/3"><h3>/tests/3 ..</h3></Link>
  <Link href="/test/4"><h3>/tests/4 ..</h3></Link>
  <Link href="/test/5"><h3>/tests/5 ..</h3></Link>
  <Link href="/test/6"><h3>/tests/6 ..</h3></Link>


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
