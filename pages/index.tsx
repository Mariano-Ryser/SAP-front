import Link from 'next/link'
import DayCard from "../components/dayBox/DayCard"
export default function Home() {
  return (
    <>

  <Link href="/"><li>/home</li></Link> 
  <Link href="about"><li>/about</li></Link> 
  <Link href="/proyectos/proyects"><li>/proyects</li></Link> 
  <Link href="songs"><li>/songs</li></Link> 
  {/* <Link href="/stapler"><li>/home/StaplerBasis</li></Link> */}
  {/* <Link href="/stapler1"><li>/home/StaplerR1</li></Link>
  <Link href="/stapler2"><li>/home/StaplerR2</li></Link> */}
  {/* <Link href="/proyectos/noti/noticias"><li>/home/noticias</li></Link> */}
  {/* <Link href="/proyectos/nasa/pictureOfTheDay"><li>/AstronomyInfoDay</li></Link> */}
  {/* <Link href="/test/test"><li>/home/test</li></Link> */}
<DayCard/>


  <style jsx>{`
    
         `}</style>
    </>
  )
}
