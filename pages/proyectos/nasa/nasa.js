import Link from 'next/link'


export default function Nasa() {
  return (
    <>


  
  {/* <Pantallazo/> */}
  <Link href="/"><li>/home</li></Link>
  <Link href="marsRoverPhotos"><li>/mars</li></Link>
  <Link href="nearEarthObjects"><li>/nearObjects</li></Link>
  <Link href="pictureOfTheDay"><li>/pictureOfTheDay</li></Link>

  <style jsx>{`
 
  
    

       
         `}</style>
    </>
  )
}
