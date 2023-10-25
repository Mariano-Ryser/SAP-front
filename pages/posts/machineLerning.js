import React, { useState, useEffect } from 'react';


const TestPagination = () => {
  const initialState = (1.3)
  const [gross, setGross] = useState(initialState)

  const grosse = ()=> {
      setGross(gross + 0.05)
  }

  const grosseOut = ()=>{
    setGross(gross - 0.05)
  }
  return (
    <>
  <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
    <h1>10 Machine Learning Examples in JavaScript</h1>
    <p>Machine learning libraries are becoming faster and more accessible with each passing year, showing no signs of slowing down. While traditionally Python has been the go-to language for machine learning, nowadays neural networks can run in any language, including JavaScript!

       </p>
    <p>The web ecosystem has made a lot of progress in recent times and although JavaScript and Node.js are still less performant than Python and Java, they are now powerful enough to handle many machine learning problems. Web languages also have the advantage of being super accessible - all you need to run a JavaScript ML project is your web browser.


    </p>
    <p>Most JavaScript machine learning libraries are fairly new and still in development, but they do exist and are ready for you to try them. In this article we will look at some of these libraries, as well as a number of cool AI web app examples to get you started.


    </p>
    <h2>1. Brain</h2>
    <p>Brain is a library that lets you easily create neural networks and then train them based on input/output data. Since training takes up a lot of resources, it is preferred to run the library in a Node.js environment, although a CDN browser version can also be loaded directly onto a web page. There is a tiny demo on their website that can be trained to recognize color contrast.
       </p>
    <p>ejemplo parrafo lorem
       </p>
    <p>ejemplo parrafo lorem
       </p>
    <p>ejemplo parrafo lorem 

    </p>
    <p>ejemplo parrafo lorem 

    </p>
    <p>ejemplo parrafo lorem
       </p>
    <p>ejemplo parrafo lorem
       </p>
   
  </section>

  <button
     className='button2'
     onClick={grosse}
     >+</button>
      <button
     className='button3'
     onClick={grosseOut}
     >-</button>
          <style jsx>{`
          a{
  color:yellow;
 } 
h1,h2,h3{
  color:white;
}

section{
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
      font-size:1.3rem;
      line-height: 1.74;
        color: rgb(191, 191, 191);
        width:40rem;
        margin:auto;
        margin-bottom:1rem;
        margin-top: 1rem;
        padding:0rem;
    }
                  .button2{    
                    font-size:2rem;
                    border-radius:10px;
                    position: fixed;
                    bottom:5rem;
                    left:1rem;
                    background-color: white;
                    height: 2.4rem;
                    width: 2.5rem;
                    box-shadow: inset 0px 0px 5px 2px rgba(83, 83, 83, 0.443);
                }
                .button3{
                    font-size:2rem;
                    border-radius:10px;
                    position: fixed;
                    bottom: 2rem;
                    left:1rem;
                    background-color: white;
                    height: 2.4rem;
                    width: 2.5rem;
                    box-shadow: inset 0px 0px 5px 2px rgba(83, 83, 83, 0.443);
                }

    @media (max-width: 600px) {
               .button2{
                    font-size:2rem;
                    border-radius:10px;
                    position: fixed;
                    bottom:5rem;
                    left:1rem;
                    background-color: white;
                    height: 2.4rem;
                    width: 2.5rem;
                    box-shadow: inset 0px 0px 5px 2px rgba(83, 83, 83, 0.443);
                }
                .button3{
                    font-size:2rem;
                    border-radius:10px;
                    position: fixed;
                    bottom: 2rem;
                    left:1rem;
                    background-color: white;
                    height: 2.4rem;
                    width: 2.5rem;
                    box-shadow: inset 0px 0px 5px 2px rgba(83, 83, 83, 0.443);
                  }

                  section{
                  width:95%;
                  margin:auto;
                  margin-bottom:1rem;
                  margin-top: 1rem;
                  padding:0rem;
                      }   

            .img{
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin:auto;
                    height:20rem;
                    width: 95%;
                    {/* border: solid 1px black; */}
                  }
      }   
        `}</style>

  </>
  )
}

export default TestPagination