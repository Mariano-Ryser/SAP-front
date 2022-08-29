import Nav from '../components/NavRespon'
import Image from 'next/image' 
import style from '../styles/viventa.module.css'

export default function viventa() {
  return (
    <>
    <div className={style.vcontain}> 
    <h1>Math</h1> 
      <section className={style.section}>
        <h2>Zahlen</h2>
        <p>Die Zahlen 0.1.2.3... heissen naturliche Zahlen
          Um Zahlen darzustellen, verwenden wir das Zehnersystem. Die Bedeutung einer Ziffer in einer Zahl hangt davon ab, an welcher Stelle sie steht.
          <br></br>
          in einer Stellenwerttafel kann man grosse Zahlen ubersichtlich darstellen.
        </p>

<div className={style.boxTabele}>
    <table className={style.tabele}>
      <thead >
          <tr>
            <th className={style.th}>Milliarden</th>
            <th className={style.th}>Millionen</th>
            <th className={style.th}>Tausender</th>
            <th className={style.th}>Hundert</th>
          </tr>
      </thead>
      <tbody>
          <tr>
            <td className={style.td}>
              <div className={style.block}>0</div>
              <div className={style.block}>0</div>
              <div className={style.block}>0</div>
            </td>
            <td className={style.td}>
            <div className={style.block}>0</div>
              <div className={style.block}>0</div>
              <div className={style.block}>0</div>
            </td>
            <td className={style.td}>
            <div className={style.block}>0</div>
              <div className={style.block}>0</div>
              <div className={style.block}>3</div>
            </td>
            <td className={style.td}>
            <div className={style.block}>0</div>
              <div className={style.block}>7</div>
              <div className={style.block}>6</div>
            </td>
          </tr>
          
      </tbody>
      <tbody>
          <tr>
            <td className={style.td}>
              <div className={style.block}>0</div>
              <div className={style.block}>0</div>
              <div className={style.block}>3</div>
            </td>
            <td className={style.td}>
            <div className={style.block}>1</div>
              <div className={style.block}>2</div>
              <div className={style.block}>3</div>
            </td>
            <td className={style.td}>
            <div className={style.block}>1</div>
              <div className={style.block}>2</div>
              <div className={style.block}>3</div>
            </td>
            <td className={style.td}>
            <div className={style.block}>1</div>
              <div className={style.block}>2</div>
              <div className={style.block}>3</div>
            </td>
          </tr>
          
      </tbody>
      <tfoot>
          <tr>
            <td className={style.td}>
            <div className={style.block}>1</div>
              <div className={style.block}>2</div>
              <div className={style.block}>3</div>
            </td>
            <td className={style.td}>
            <div className={style.block}>1</div>
              <div className={style.block}>2</div>
              <div className={style.block}>3</div>
            </td>
            <td className={style.td}>
            <div className={style.block}>1</div>
              <div className={style.block}>2</div>
              <div className={style.block}>3</div>
            </td>
            <td className={style.td}>
            <div className={style.block}>1</div>
              <div className={style.block}>2</div>
              <div className={style.block}>3</div>
            </td>
          </tr>
      </tfoot>
  </table>
  </div>

  



        </section>
    
    </div>

    </>
  )
}
