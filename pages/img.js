

import Image from 'next/image' 
import style from '/styles/img.module.css'

export default function viventa() {
  
  return (
    <>
    {/* <div className={style.img}>
      <Image alt='team' src={'/me/teamVivent1.jpeg'}
      height={1300} width={1000}
       ></Image>
    </div> */}
     <div className={style.img}>
      <Image alt='me' src={'/fw/me.jpg'}
      height={1500} width={1500}
       ></Image>
    </div>
    
    <div className={style.img}>
      <Image alt='Book' src={'/fw/book.jpg'}
      height={1500} width={1500}
       ></Image>
    </div>

    <div className={style.img}>
      <Image alt='kirche' src={'/fw/kirche.jpg'}
      height={1500} width={1500}
       ></Image>
    </div>

    <div className={style.img}>
      <Image alt='himmel' src={'/fw/himmel.jpg'}
      height={1500} width={1500}
       ></Image>
    </div>
    
    <div className={style.img}>
      <Image alt='Burger-Icon' src={'/fw/momie.jpg'}
      height={1500} width={1500}
       ></Image>
    </div>

    <div className={style.img}>
      <Image alt='Burger-Icon' src={'/fw/momie2.jpg'}
      height={1500} width={1500}
       ></Image>
    </div>

    <div className={style.img}>
      <Image alt='Burger-Icon' src={'/fw/mundo.jpg'}
      height={1500} width={1500}
       ></Image>
    </div>

    <div className={style.img}>
      <Image alt='Burger-Icon' src={'/fw/rave.jpg'}
      height={1500} width={1500}
       ></Image>
    </div>

    <div className={style.img}>
      <Image alt='Burger-Icon' src={'/fw/santuar.jpg'}
      height={1500} width={1500}
       ></Image>
    </div>
    <div className={style.img}>
      <Image alt='Burger-Icon' src={'/fw/steine.jpg'}
      height={1500} width={1500}
       ></Image>
    </div>

    <div className={style.img}>
      <Image alt='Burger-Icon' src={'/fw/cancha.jpg'}
      height={1500} width={1500}
       ></Image>
    </div>
    </>
  )
}
