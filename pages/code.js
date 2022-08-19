import Nav from '../components/NavRespon'
import Image from 'next/image' 
import style from '../styles/Code.module.css'

export default function code() {
  return (
    <>
    <div className={style.contain}>  
        <code className={style.boxCode}>
            {/* <span className={style.tags}>&#8249;div&#8250;</span><span className={style.tags}>&#8249;div&#8250;</span> */}
            <span className={style.fun}>function </span>
            <span className={style.nameFun}>cataFun</span>
            <span className={style.paren}>&#40;</span>
            <span className={style.params}>params</span>
            <span className={style.paren}>&#41;</span>

            <span className={style.brace}>&#123;</span><br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className={style.console}>console.</span><span className={style.log}>log</span>
            <span className={style.paren}>&#40;</span>
            <span className={style.string}>"hello Word"</span>
            <span className={style.paren}>&#41;</span>
            <br></br>&nbsp;
            <span className={style.brace}>&#125;</span>
        </code>

        <code className={style.boxCode}>
            <span className={style.tags}>&#8249;div&#8250;</span> <br></br>
            <span className={style.tags}>&#8249;div&#8250;</span> <br></br>
            <span className={style.fun}>function </span> <br></br>
            <span className={style.nameFun}>cataFun</span> <br></br>
            <span className={style.paren}>&#40;</span> <br></br>
            <span className={style.parenV}>&#40;</span> <br></br>
            <span className={style.parenV}>&#41;</span> <br></br>
            <span className={style.paren}>&#41;</span> <br></br>

            <span className={style.cor}>&#93;</span> <br></br>
            <span className={style.cor}>&#91;</span> <br></br>
            <span className={style.brace}>&#123;</span> <br></br>
            <span className={style.braceV}>&#123;</span> <br></br>
            <span className={style.braceV}>&#125;</span> <br></br>
            <span className={style.brace}>&#125;</span> <br></br>
        </code>
          
  
    </div>



    </>
  )
}
