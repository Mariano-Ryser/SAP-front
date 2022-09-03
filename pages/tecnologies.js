import Nav from '../components/NavRespon'
import Image from 'next/image' 
import Link from 'next/link';
// import style from '../styles/Tecnologies.module.css'


export default function Tecnologies() {
  return (
    <>
    <div className='entrada'>
      <h1>
          This site is created with the aim of being able to test my knowledge and be able to develop it over time.
      </h1>
     <h1>I am currently developing in an ecosystem in which I feel quite comfortable and I continue to learn.</h1>
      <h1>
      The technologies that I use today are the following.
      </h1>
    </div>
                    {/* VISUAL STUDIO CODE */}
    <article>
      <h2><Link href="https://code.visualstudio.com/"><a className='a'>Visual Studio Code</a></Link></h2>
      <h2>is a free source code editor from Microsoft. Visual Studio Code is available across platforms for Windows, macOS and Linux operating systems. Visual Studio Code is based on the Electron framework and enables e.g.</h2>
      <div className='footerArticle'>
          <Link 
          href="https://code.visualstudio.com/">
          <Image
            src="/visual.gif"
            alt="Visual Studio"
            width={50}
            height={50}
            />
            </Link>
        </div>
    </article>
                          {/* HTML*/}
    <article>
      <h2><Link href="https://www.w3schools.com/html/"><a className='a'> Hypertext Markup Language (HTML)</a></Link></h2>
      <h2>
          The Hypertext Markup Language is a text-based markup 
          language for structuring electronic documents such as text
          with hyperlinks, images and other content. HTML documents
          are the basis of the World Wide Web and are displayed by
          web browsers.
      </h2>
      <div className='footerArticle'>
          <Link 
          href="https://www.w3schools.com/html/">
          <Image
            src="/html.gif"
            alt="HTML"
            width={60}
            height={60}
            />
            </Link>
        </div>
    </article>
                    {/* CSS */}
    <article>
      <h2><Link href="https://www.w3schools.com/css/"><a className='a'>Cascading Style Sheets (CSS)</a></Link></h2>
      <h2>
          The Hypertext Markup Language is a text-based markup 
          language for structuring electronic documents such as 
          text with hyperlinks, images and other content. HTML 
          documents are the basis of the World Wide Web and are 
          displayed by web browsers.
        </h2>
      <div className='footerArticle'>
          <Link 
          href="https://www.w3schools.com/css/">
          <Image
            src="/css.gif"
            alt="CSS"
            width={60}
            height={60}
            />
            </Link>
        </div>
    </article>
              {/* JAVA SCRIPT */}
    <article>
      <h2><Link href="https://www.w3schools.com/js/">
        <a className='a'>Java Script</a>
        </Link>
      </h2>
      <h2>
          JavaScript is a script language that was originally
          developed by Netscape in 1995 for dynamic HTML in web 
          browsers to evaluate user interactions, change content, 
          reload or generate it and thus expand the possibilities 
          of HTML.
      </h2>
      <div className='footerArticle'>
          <Link 
          href="https://www.w3schools.com/js/">
          <Image
            src="/js.png"
            alt="Java Script"
            width={60}
            height={60}
            />
          </Link>
        </div>
    </article>

                  {/* Node JS */}
                  <article>
      <h2><Link href="https://nodejs.org/en/">
        <a className='a'>Node JS</a>
        </Link>
      </h2>
      <h2>       
        Node.js is an open-source, cross-platform JavaScript runtime environment
        that can run JavaScript code outside of a web browser. This can be used,
        for example, to operate a web server.
      </h2>
      <div className='footerArticle'>
          <Link 
          href="https://nodejs.org/en/">
          <Image
            src="/node.png"
            alt="Node JS"
            width={70}
            height={70}
            />
            </Link>
        </div>
    </article>

                {/* GIT */}
    <article>
      <h2><Link href="https://git-scm.com/">
        <a className='a'>GIT</a>
        </Link>
      </h2>
      <h2>          
            Git is free software for distributed file versioning, 
          initiated by <Link 
              href="https://de.wikipedia.org/wiki/Linus_Torvalds">
            <a className='personajes'>Linus Torvalds</a></Link>
      </h2>
      <div className='footerArticle'>
          <Link 
          href="https://nodejs.org/en/">
          <Image
            src="/git.png"
            alt="GIT"
            width={70}
            height={70}
            />
            </Link>
        </div>
    </article>

    <article>
      <h2><Link href="https://github.com/Mariano-Ryser">
        <a className='a'>GitHub</a>
        </Link>
      </h2>
      <h2>          
        GitHub is a web-based version control service 
        for software development projects. The Git version
         control system gave its name. The company GitHub, 
         Inc. is based in San Francisco, USA. The company 
         has belonged to Microsoft since December 26, 2018.
         
      </h2>
      <div className='footerArticle'>
          <Link 
          href="https://github.com/Mariano-Ryser">
          <Image
            src="/github.png"
            alt="GIT"
            width={70}
            height={70}
            />
            </Link>
        </div>
    </article>


                     {/* REACT - Next JS */}
    <article>
      <h2><Link href="https://nextjs.org/">
        <a className='a'>Next JS </a>
        </Link> 
        <Link href="https://nextjs.org/">
        <a className='a'> - React</a>
        </Link>
        
      </h2>
      <h2>      
      The React Framework for Production. <br></br>
      Next.js gives you the best developer experience with all the features 
      you need for production: hybrid static and server rendering, TypeScript 
      support, smart bundling, route pre-fetching, and more. No config needed.
      </h2>
      <div className='footerArticle'>
            <Link 
          href="https://reactjs.org/">
          <Image
            src="/react.gif"
            alt="NEXT"
            width={80}
            height={80}
            />
            </Link>
          <Link 
          href="https://nextjs.org/">
          <Image
            className='img'
            src="/nextjs.jpg"
            alt="Node JS"
            width={160}
            height={80}
            />
            </Link>
        </div>
    </article>


    </>
  )
}
