import React, { useState, useEffect } from 'react';


const Cinderella = () => {
  const initialState = (1)
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
    <h1>Jane Eyre: An Emancipated Cinderella</h1>
    
    <p>The Cinderella story is a folk tale that has been transmitted orally –and later on through literature–across generations, of which exist many versions all over the world. It tells the story of an abandoned orphan, who lives a subjugated and miserable life in a cruel family, and whose situation in life improves considerably with the help of an older woman –by means of magical or supernatural interventions– and a wealthy male savior who rescues and marries her. The story is structured on the motif of rising from rags to riches and the concept of being rescued by a prince, and some of the archetypes included are the princess, the hero, the mentor –or fairy godmother– and an evil stepmother. In Jane Eyre, Charlotte Brontë draws upon the Cinderella motif while adding a few realistic twists to the story.</p>
   
   
    <p>The main outline of the Cinderella story can be seen in Jane Eyre and in particular, the motif of rising from rags to riches, however there are many differences and no supernatural elements. The novel follows the story of an ostracized orphan –the princess– who lives unhappily with an unpleasant aunt –the evil stepmother– but will be happy and wealthy at the end of the story. Jane will meet her mentors during the course of the novel. One of them is Helen Burns, who is her spiritual and intellectual friend, second one is Miss Temple, the first positive role model of compassion and ladylike behavior for Jane and thirdly, Mrs. Fairfax, the most experienced of her mentors. Unlike the Cinderella tale, Jane is not saved nor rescued by any prince. She escapes Thornfield Manor after being fooled into marrying Mr. Edward Rochester without knowing his wife was still living in the house, and refuses the hand of St John when he invites her to go to India. The wealth she inherits does not come from any prince, nor hero, but from an uncle who had no heirs. It is then when Jane feels completely free to choose the path she wants in her life.</p>
    

    <p>The characters in Bronte's novel are much more realistic than in the Cinderella story. Take Jane, for example, cannot boast a stunning beauty and has had a complicated life. Nevertheless, she is sensible, intelligent and has high values and a clear idea of her place in society. Jane wants independence, wants to travel the world and have the freedom that only men possess, unlike the passive and submissive princess who awaits to be rescued. Jane values truth and justice and that is the reason why she refuses to be Edward’s mistress. She wants to be with him, but she also wants to do what is right, and that situation is not fair to her. Mr. Rochester is the opposite of prince charming; he is neither handsome nor brave. He is not a conventional gentleman, his manners are sometimes rude, has an impulsive behavior and can be seen as disrespectful. He had a reckless and careless youth and is now paying the price of his past errors. Although Jane and Edward are intellectually equal, when Bertha Mason appears on the scene Jane has the moral high ground and will not stand such humiliation and therefore leaves Rochester. When she inherits wealth she is finally financially independent and has the kind of power no Cinderella ever had, which allows her to be completely free and decide who to be with, and that is why she returns to Thornfield to be with Mr. Rochester.</p>
    

    <p>Charlotte Brontë creates a more genuine and convincing Cinderella story, one that we can still relate to, without the repeated use of stereotypes. Jane Eyre is not only about real life and all its complications, but also about real people who have suffered, people with real problems, doubts and fears. Brontë did not want to create a perfect fairy tale where the only drawbacks are obstacles that can be easily overcome by a magic spell or a brave hero. On the contrary, her characters are plain, flawed, and messed up just like everybody else. Jane Eyre gives a twist to the Cinderella tale because the protagonist is an emancipated woman with clear ideas who goes against of what was expected of Victorian women. Jane is a determined, passionate and outspoken character who constantly pushes the boundaries and challenges society and sets a milestone for generations to come, opening new possibilities to achieve the longed gender equality we are still fighting for today.</p>
    

    <p>M. Acosta</p>

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
      font-family: monospace;
      font-size:1.3rem;
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

export default Cinderella