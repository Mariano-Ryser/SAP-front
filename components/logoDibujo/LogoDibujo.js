import Image from "next/image"
import Link from 'next/link';
import styles from '../../styles/Logo.module.css'
function Logo(){
return (
    <>
      <div id="logo"className={styles.logoStart}></div>
      <div id="logo"className={styles.logoStart2}></div>
      <div id="logo"className={styles.logoStart3}></div>
      
      <Link href="https://nextjs.org/"><div id="logo"className={styles.nextJs}></div></Link>
  </>
  )
}

export default Logo
