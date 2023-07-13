import React from 'react'
// import Image from "next/image"
import { useEffect, useState } from 'react';

import Test3 from '../ztest/test3'
import Test4 from '../ztest/test4'
import Test5 from '../ztest/test5'
import Test6 from '../ztest/test6'
import Test8 from '../ztest/test8'

function Lectura() {
    const initialState = (1)
    const [gross, setGross] = useState(initialState)

    const grosse = ()=> {
        setGross(gross + 0.05)
    }

    const grosseOut = ()=>{
      setGross(gross - 0.05)
    }

    const tipografia = ()=> {
        var section = document.querySelectorAll<HTMLElement>("section")
           for (let i = 0; i < section.length; i++) {
            section[i].style.fontSize = "1.3rem"
          }
    }

    const img = "javaScript.jpeg"
    const img1 = "htmlDomain.jpeg"
    const img2 = "inputSystem.jpeg"
    const img3 = "js1.jpeg"

return (
  <>
    <div className="box">

        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        Ahora escribimos un texto cualquiera para ver como se ve a la hora de leer en la 
        pantalla del celular, los textos siguientes son sin sentido, solamente para rellenar
        los <b>componentes futuros</b> futuros.
    
        </section>
        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        <h1>Web Errors</h1>
        <li>400 : Bad request</li>
        <li>401 : Unauthorized Error</li>
        <li>402 : Payment Required</li>
        <li>403 : Farbbidden</li>
        <li><b>404 : Not Found</b></li>
        <li>405 : Method not allowed</li>
        </section>
       
        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        <h1>JavaScript Array methods</h1>
        <span>[4, 5, 6, 7].at(1)    // 5</span><br></br>
        <span>[4, 5, 6, 7].push(8)  // [4, 5, 6, 7, 8]</span><br></br>
        <span>[4, 5, 6, 7].pop()    // [4, 5, 6, 7]</span><br></br>
        <span>[4, 5, 6, 7].fill()  // [1, 1, 1, 1]</span><br></br>
        </section>

        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        <h1>JavaScript Array methods</h1>
        {/* <div className='img' 
              style={{backgroundImage: `url('/img/${img}')`}}
        ></div> */}
        </section>

       
        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        Lorem ipsum dolor sit amet,
         conse
      
                dolore magna aliquyam erat, sed diam voluptua.
                 At vero eos et accusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata
                  {/* <div className='img' 
              style={{backgroundImage: `url('/img/${img1}')`}}
        ></div> */}
                   sanctus est Lorem ipsum dolor sit amet.
        </section>
        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        Lorem ipsum dolor sit amet,
         consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor 
                dolore magna aliquyam erat, sed diam voluptua.
                 At vero eos et accusam et justo duo dolores et ea rebum.
                 {/* <div className='img' 
              style={{backgroundImage: `url('/img/${img2}')`}}
              ></div> */}
                  Stet clita kasd gubergren, no sea takimata
                   sanctus est Lorem ipsum dolor sit amet.
        </section>
        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        Lorem ipsum dolor sit amet,
         consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor 
    
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
               sed diam nonumy eirmod tempor invidunt ut labore et
               {/* <div className='img' 
              style={{backgroundImage: `url('/img/${img3}')`}}
              ></div> */}
                dolore magna aliquyam erat, sed diam voluptua.
                 At vero eos et accusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata
                   sanctus est Lorem ipsum dolor sit amet.
        </section>
        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
       {/* CUBO MAGICO */}
       <Test5/>
        <h3>With background-color</h3>
        <Test3/>
       <h3>With out background-color</h3>
        <Test4/>
        magna aliquyam erat, sed diam voluptua.
                 At vero eos et accusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata
                   sanctus est Lorem ipsum dolor sit amet.
        </section>
       

        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
       {/* CUBO MAGICO */}
       <h3> How to make Tetrahedron in css.</h3>
        
       
      
        <Test6/>
        imposible jeje.
        <h1>Days of the week</h1>

        <p>There are seven days of the week,
         or uniquely named 24-hour periods designed to 
         provide scheduling context and make time more easily 
         measureable. Each of these days is identifiable by specific 
         plans, moods, and tones.</p>

        <p>Monday is viewed by many to be the worst day of the week, as it marks the return to work following the weekend,
         when most full-time employees are given two days off. Most students attend school in the morning and return 
         home in the afternoon usually from about eight until three or seven until two, and most workers go to work in the 
         morning and return home in the evening.
         </p>
        
        <p>Tuesday is the second day of the week, and is in many ways similar
         to Monday. Not a whole lot of changes, schedule-wise, between Tuesday and Monday;
          most individuals go to school or work and return home to watch television, play video games,
           make plans with friends, spend time with family, read, or engage in a similar leisure-related activity.
           </p>
        
        <p> Wednesday is the third day of the week, and serves as the middle of the work week; 
        some individuals refer to Wednesday as hump day, as once its workday is complete, 
        employees will have passed the work-week hump,
         and will be on the downturn, as only two days on the job will remain in the week.
         </p>
       
        <p>Thursday is the fourth day of the week, and is viewed favorably by many,
         as it is rather close to the end of the work week.
         </p>
        
        <p>Friday is the fifth day of the week, and marks the end of the workweek and school-week for the vast majority 
        of employees and students. By Friday afternoon/evening, most students/workers cannot wait to leave and go home,
         as they won not have to report back to school/work until Monday.
         </p>
        
        <p> Saturday is perhaps the most highly regarded day of the week. Because Sunday follows it 
       , everyone is free to stay out until late at night, having fun with plans or other leisure-related activities.
        To be sure, Saturday is generally thought of as a day to partake in hobbies that could nott otherwise be enjoyed during the regular week.
       </p>
        <p> Sunday is the final day of the week, 
        and is used by most as a day of rest. Fewer late-night 
        plans are made on Sundays, compared to Saturdays, as most
        individuals have to wake up for work or school on Monday morning.
        </p>
       
        </section>
        <Test8/>
        <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
        <h1>Nodeee</h1>
        <p>
          over the yearss i hav found that node.js is kind of strange in
          the world of back-end development let s  say you wrote some code
          for a backend API server and you deploy that code to a machine with four gigs of memory and 
          two CPUs then you start reciving traffic to your server over the internet now
          this is a node.js server which means welll... whatts does that mean???
          <br></br>
         
        </p>
        </section>
       
    </div>

    {/* BOTONES GROSSE BUCHSTABE*/}
    {/* <button
     className='button'
     onClick={tipografia}
     >Tipograf</button> */}

     <button
     className='button2'
     onClick={grosse}
     >+</button>
      <button
     className='button3'
     onClick={grosseOut}
     >-</button>
    
     <style jsx>{`
      h1{
        margin:0.5rem;
      }
                .img{ 
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin:0 auto 0 auto;
                    height:28rem;
                    width: 30rem;
                  }


                .button{
                    position: fixed;
                    top: 2rem;
                    left:0.4rem;
                    background-color: white;
                    height:40px;
                    width:70px;
                }
                .button2{
                    font-size:2rem;
                    border-radius:4px;
                    position: fixed;
                    top: 5rem;
                    left:0.4rem;
                    background-color: rgba(60, 192, 37, 0.616);
                    height:40px;
                    width:70px;
                }
                .button3{
                    font-size:2rem;
                    border-radius:4px;
                    position: fixed;
                    top: 8rem;
                    left:0.4rem;
                    background-color: rgba(144, 55, 55, 0.495);
                    height:40px;
                    width:70px;
                }
                .box{
                  font-family:monospace;
                    margin: auto;
                    width: 100%;
                    background-color: rgb(31, 31, 31);
                  }
                  .section{
                    font-family: monospace;
                    font-size: 1.2em;
                    color: #ffffff;
                    display:block;
                    margin:auto;
                    width: 31rem;
                  }

                  
@media (max-width: 600px) {
                 .box{
                    margin: auto;
                    width: 100%;
                    background-color: rgb(55, 55, 55);
                  }
                  .section{
                    font-size: 1.1em;
                    color: #bcbcbc;
                    display:block;
                    margin: auto;
                    width: 95%;
                  }
                  .img{
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin:0 auto 0 auto;
                    width: 95%;
                    {/* border: solid 1px black; */}
                  }
}

         `}</style>
   
 </>
  )
}

export default Lectura

