import Nav from '../components/NavRespon'
import Image from 'next/image' 
import style from '../styles/Code.module.css'

export default function code() {
  return (
    <>
    <div className={style.contain}>  
    <h1 className={style.h1}>Star </h1>
    <h2 className={style.h2}>We start by creating a test function with a simple Hello World console response.</h2>

          {/* BOX 1 */}
        <code className={style.boxCode}>
            <span className={style.fun}>function </span>
            <span className={style.nameFun}>cataFun</span>
            <span className={style.paren}>&#40;</span>
            <span className={style.params}>params</span>
            <span className={style.paren}>&#41;</span>

            <span className={style.brace}>&#123;</span><br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className={style.console}>console.</span><span className={style.log}>log</span>
            <span className={style.paren}>&#40;</span>
            <span className={style.string}>&quot;hello Word&quot;</span>
            <span className={style.paren}>&#41;</span>
            <br></br>&nbsp;
            <span className={style.brace}>&#125;</span>
        </code>

          {/* BOX 2 */}
        <code className={style.boxCode}>
            <span className={style.tags}>&#8249;div&#8250;</span> <br></br> {/*---- < -----*/}
            <span className={style.fun}>function </span> <br></br> {/*----- function ------*/}
            <span className={style.nameFun}>cataFun</span> <br></br> {/*-------- function Name ------*/} <br></br>
            <span className={style.paren}>&#40;</span> <br></br> {/*----- ( amarillo------*/}
            <span className={style.paren}>&#41;</span> <br></br> {/*------ ) amarillo------*/}
            <span className={style.parenV}>&#40;</span> <br></br> {/*----- ( violeta -----*/}
            <span className={style.parenV}>&#41;</span> <br></br> {/*----- ) violeta -----*/}
            <span className={style.cor}>&#93;</span> <br></br> {/*----- ] violeta -----*/}
            <span className={style.cor}>&#91;</span> <br></br> {/*----- [ violeta -----*/}
            <span className={style.brace}>&#123;</span> <br></br> {/*----- { amarillo -----*/}
            <span className={style.brace}>&#125;</span> <br></br> {/*----- } amarillo -----*/}
            <span className={style.braceV}>&#123;</span> <br></br> {/*----- { violeta -----*/}
            <span className={style.braceV}>&#125;</span> <br></br> {/*----- } violeta -----*/}
        </code>
          
  
    </div>



    </>
  )
}
