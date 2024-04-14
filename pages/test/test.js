import Link from 'next/link'


export default function Test() {
  return (
    <>


  
  {/* <Pantallazo/> */}
  <Link href="/"><h3>/home ..</h3></Link>
  <Link href="/test/1"><h3>/1 ..</h3></Link>


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
