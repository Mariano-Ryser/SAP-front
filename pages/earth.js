import Nav from '../components/NavRespon'
import Icons from '../pages/icons'
import Image from 'next/image' 
import Link from 'next/link';
import BoxComentar from '../components/comentarBox/BoxComentar'
import Products from '../pages/products/create'


export default function Earth
() {
  return (
    <>
    <div className='boxFotos'>
        <div>
        <Image alt='groenlandia' src={'/earth/01.png'}
        height={700} width={1500}
        ></Image>

        </div>
        <div
        >
          
        <Image alt='groenlandia' src={'/earth/02.png'}
        height={700} width={1500}
        ></Image>

        </div>
        <div
        >
        <Image alt='groenlandia' src={'/earth/03.png'}
        height={700} width={1500}
        ></Image>

      
        </div>
    </div>
    
    </>
  )
}
