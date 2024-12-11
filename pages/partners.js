// pages/partners.js
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const directoryPath = path.join(process.cwd(), 'public/img/partners');
  const filenames = fs.readdirSync(directoryPath);
  const images = filenames.map(name => `/img/partners/${name}`);
  return {
    props: {
      images,
    },
  };
}

export default function Partners({ images }) {
  return (
  <>
  <div>
      <div className='container'>
        {images.map((src, index) => (
          <img
            className='img'
            key={index}
            src={src}
            alt={`Partner ${index}`}
          />
        ))}
      </div>


    </div>
    <style jsx>{`
    .container{
        padding-top: 2rem;
        width:43rem;
      margin: auto;
      padding-bottom:10rem;
        color: rgb(210, 210, 210);
        font-family:monospace;
        
    }
    .img{
      width:50%;
     
    }
    .img:hover{
      animation:brillo 3s alternate infinite linear;

      filter: drop-shadow(0px 0px 5px 	#CDA434);
       transform: rotateZ(1deg) translateX(-0.1rem) translateY(-0.2rem);
    }
    @keyframes brillo{
  from {
    filter: drop-shadow(0px 0px 5px 	#CDA434);
  }

  to {
    filter: drop-shadow(0px 0px 20px 	#CDA434);
  }
}
   
  
  

      
@media (max-width: 600px) {
  
   
    .container{
        padding-top: 2rem;
        width:100%;
      margin: auto;
      padding-bottom:3rem;
        color: rgb(210, 210, 210);
        font-family:monospace;
    }
    .img{
      width:100%;
     
    }

   
   
                 
}
       
         `}</style>
</>

  );
}