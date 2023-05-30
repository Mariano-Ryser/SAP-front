import Link from "next/link"
import Image from 'next/image'


export default function Homee() {
  return (
    <>
    
<div className="box">

    <div className="boxlogo">
        {/* <div className="caja1"></div>
        <div className="caja2"></div>
        <div className="caja3"></div>
        <div className="caja4"></div> */}
        <Image
            alt='Burger-Icon'
            src={'/img/Alienverde.gif'}
            height={280} width={200}>
        </Image> 
    </div>    

</div>

  <style jsx>{`
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
    background-color:red;
    transition:0.4s;
    animation: logazo 1.5s infinite;
}
@keyframes logazo{
    0%{
        background-color:pink;
    }
    25%{
        background-image: url('/img/qr.png');
    background-size:cover;
    }
    30%{
        background: rgb(149,29,245);
background: radial-gradient(circle, rgba(149,29,245,1) 17%, rgba(11,11,11,1) 68%, rgba(0,0,0,1) 100%);
    }
    55%{
        background-image: url('/img/code.jpg');
    background-size:cover;
    }
    75%{
        background: rgb(204,55,42);
background: radial-gradient(circle, rgba(204,55,42,1) 36%, rgba(213,42,42,1) 52%, rgba(177,93,41,1) 70%, rgba(201,29,146,1) 81%);
    }
    85%{
        background-image: url('/img/barriles.jpg');
    background-size:cover;
    }

    100%{
        background: rgb(213,42,42);
background: radial-gradient(circle, rgba(213,42,42,1) 0%, rgba(41,177,70,1) 85%, rgba(11,11,11,1) 96%);
    }
}
@media (max-width: 600px) {
         
}
       
         `}</style>
    </>
  )
}
