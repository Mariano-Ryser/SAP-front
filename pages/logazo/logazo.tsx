import Link from "next/link"
import Image from 'next/image'


export default function Homee() {
  return (
    <>
    
<div className="box">

    <div className="boxlogo">
        <Image
            alt='Burger-Icon'
            src={'/img/Alienverde.gif'}
            height={280} width={200}>
        </Image> 
    </div>    

</div>

  <style jsx>{`
    .boxlogo{
        position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%, -50%)
    }
.box{
    height:100vh;
    width:100%;
    background-color:red;
    animation: logazo 0.7s infinite alternate;
}
@keyframes logazo{
    0%{
        background-color:red;
    }
    25%{
        background-color:green;
    }
    50%{
        background-color:yellow;
    }
    75%{
        background-color:pink;
    }
    100%{
        background-color:blue;
    }
}
@media (max-width: 600px) {
         
}
       
         `}</style>
    </>
  )
}
