import Link from 'next/link'
import DayCard from "../components/dayBox/DayCard"
export default function Home() {
  return (
    <>

  <Link href="/"><li>/home</li></Link>
  <Link href="/proyectos/proyects"><li>/home/proyects</li></Link>
  {/* <Link href="/proyectos/noti/noticias"><li>/home/noticias</li></Link> */}
  {/* <Link href="/proyectos/nasa/pictureOfTheDay"><li>/AstronomyInfoDay</li></Link> */}
  {/* <Link href="/test/test"><li>/home/test</li></Link> */}
<DayCard/>


  <style jsx>{`
    
         `}</style>
    </>
  )
}
