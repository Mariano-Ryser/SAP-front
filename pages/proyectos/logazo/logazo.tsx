import Link from "next/link"
import Image from 'next/image'


export default function Homee() {
  return (
    <>
   <Link href="/proyectos/proyects"><li>/proyects..</li></Link> 
<div className="box">

    <div className="boxlogo">
        {/* <div className="caja1"></div>
        <div className="caja2"></div>
        <div className="caja3"></div>
        <div className="caja4"></div> */}
       <div >
        <Image
            className="alien"
            alt='Burger-Icon'
            src={'/img/Alienverde.gif'}
            height={280} width={200}>
        </Image> 
        </div> 
    </div>    

</div>

  <style jsx>{`

    {/* .s{
        transform: rotateZ(0deg);
        animation: caralogo 10s linear infinite;
       
    }

    @keyframes caralogo{
        0%{
            transform: rotateZ(0deg);
        }
       
        100%{
            transform: rotateZ(360deg);

        }
} */}
    
    .caja1{
        position:absolute;
        height:40px;
        width:40px;
        border: solid 1px black;
    }
    .caja2{
        position:absolute;
        height:40px;
        width:40px;
        border: solid 1px black;
    }
    .caja3{
        position:absolute;
        height:40px;
        width:40px;
        border: solid 1px black;
    }
    .caja4{
        position:absolute;
        height:40px;
        width:40px;
        border: solid 1px black;
    }

    .boxlogo{
        position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%, -50%);
    }

.box{
    height:100vh;
    width:100%;
    transition:0.4s;
    /* animation: logazo 5.5s infinite; */
}

{/* entre foto y foto crear desaparicion de imagen y aparicion */}

@keyframes logazo{
    0%{
        background-color:rgb(0, 0, 0);
    }
    25%{
        background-image: url('/img/qr.png');
    background-size:cover;
    }
 
    55%{
        background-image: url('/img/code.jpg');
    background-size:cover;
    }

    85%{
        background-image: url('/img/barriles.jpg');
    background-size:cover;
    }


}
@media (max-width: 600px) {
         
}
       
         `}</style>
    </>
  )
}
