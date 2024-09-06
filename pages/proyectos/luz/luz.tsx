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
    position:absolute;
    top:-2px;
    left:-2px;
    height:140vh;
    width:140%;
    transition:0.4s;
    border:solid red 1px;
    animation: logazo 2.5s infinite;
}

{/* entre foto y foto crear desaparicion de imagen y aparicion */}

@keyframes logazo{
    0%{
        background-color:rgb(255, 0, 157);
    }
    1%{
        background-color:rgb(233, 233, 233);
    }
 
    5%{
        background-color:rgb(179, 3, 233);
    }

    13%{
        background-color:rgb(231, 231, 231);
    }
    20%{
        background-color:rgb(13, 175, 49);
    }
    30%{
        background-color:rgb(0, 0, 0);
    }
    50%{
        background-color:rgb(5, 255, 255);
    }
    60%{
        background-color:rgb(255, 238, 1);
    }
    70%{
        background-color:rgb(50, 7, 206);
    }90%{
        background-color:rgb(237, 243, 237);
    }95%{
        background-color:rgb(153, 4, 4);
    }
    100%{
        background-color:rgb(157, 150, 253);
    }



}
@media (max-width: 600px) {
         
}
       
         `}</style>
    </>
  )
}
