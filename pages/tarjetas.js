import Link from 'next/link'

import Image from 'next/image' 
// import Link from 'next/link';


export default function Tarjetas() {
  return (
    <>
<div className='box'>

   <div className='card-container'>


        <div className='card'>
        <div className='img'>
            {/* <Image
                src="/chispero.png"
                width={100}
                height={100}
                alt="Picture of the author"
            /> */}
        </div>
        <div className='description'></div>
            <p>p</p>
            <p>d</p>
            <p>c</p>
        </div>
      
        <div className='card'>
        <div className='img'>
            {/* <Image
                src="/chispero.png"
                width={100}
                height={100}
                alt="Picture of the author"
            /> */}
        </div>
        <div className='description'></div>
            <p>p</p>
            <p>d</p>
            <p>c</p>
        </div>

        <div className='card'>
        <div className='img'>
            {/* <Image
                src="/chispero.png"
                width={100}
                height={100}
                alt="Picture of the author"
            /> */}
        </div>
        <div className='description'></div>
            <p>p</p>
            <p>d</p>
            <p>c</p>
        </div>

        <div className='card'>
        <div className='img'>
            {/* <Image
                src="/chispero.png"
                width={100}
                height={100}
                alt="Picture of the author"
            /> */}
        </div>
        <div className='description'></div>
            <p>p</p>
            <p>d</p>
            <p>c</p>
        </div>


   </div>
</div>




  <style jsx>{`
            .box{
                  font-family:monospace;
                    margin: auto;
                    width: 100%;
                    background-color: rgb(0, 0, 0);
                  }
        .card-container{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            border: solid 1px red;
            height: 20rem;
            transition: 0.2s;

        }
        .card{
            color: rgb(20, 20, 20);
            background-color: rgb(255, 255, 255);
            width: 325px;
            margin: 20px;
            transition: 0.2s;
        }
        .img{
            height: 10rem;
            width: 6rem;
            background-image: url('/chispero.png');
            background-position: center;
            background-size: cover;
            transition: 0.2s;
        }
        .description{
            border: solid rgba(170, 170, 170, 0.445) 1px;
            transition: 0.2s;
        }
      
@media (max-width: 600px) {
 
                 
}
       
         `}</style>
    </>
  )
}
