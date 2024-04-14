import Link from 'next/link'


export default function Test1() {
  var text="Hola"
  var action = ()=>{
    var a = 2;
    var b = 4;

    if(a >= b){
      alert("Es igual")
      alert( a, b)
    }else{
    alert("not igual")
   
  }


  

  setTimeout(() => {
    alert("Finish");
  }, "1000");


}
  return (
    <>


  
  {/* <Pantallazo/> */}
 <h1>TEST1</h1>
 <h1>{text}</h1>
 <button onClick={action}>Button</button>
 <div className='test'>
    <p className='p'>
      Aqui va un texto de parrafo    
    </p>
  <pre className='pre'>
  <p className='pc'>
    aqui codigo
  </p>
  </pre>
  
 </div>
<div className='boxTest'>

</div>



  <style jsx>{`
.boxTest{
  border: solid 1px black;
  background-color: yellow;
  height: 8rem;
  width: 8rem;
}
  .pre{
    background-color: black;
  }
  .pc{
   color: rgb(30, 187, 67);
  }
  .p{
   color: rgb(70, 70, 70);
  }

  .test{
    height: 360px;
    width: 360px;
    background-color: rgb(182, 182, 182);
  }
  h3:hover{
    cursor: default;
    color: rgb(18, 221, 228);

  }
  
      
@media (max-width: 600px) {
 
                 
}
       
         `}</style>
    </>
  )
}
