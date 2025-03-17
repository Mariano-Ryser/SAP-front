import Link from "next/link";
import Image from "next/image";

export default function Fotos() {
  
    return (
        <>











        
            <Link href="/proyects">
                <li>/proyects..</li>
            </Link>
            <div className="container">
                <div className="gallery">
                    <div className="img" style={{ backgroundImage: `url('/img/me8.jpeg')` }}></div>
                    <div className="img" style={{ backgroundImage: `url('/img/me8.jpeg')` }}></div>
                    <div className="img" style={{ backgroundImage: `url('/img/me9.jpeg')` }}></div>
                    <div className="img" style={{ backgroundImage: `url('/img/me9.jpeg')` }}></div>
                    <div className="img" style={{ backgroundImage: `url('/img/me9.jpeg')` }}></div>
                    <div className="img" style={{ backgroundImage: `url('/img/me9.jpeg')` }}></div>
                    <div className="img" style={{ backgroundImage: `url('/img/me9.jpeg')` }}></div>
                    <div className="img" style={{ backgroundImage: `url('/img/me9.jpeg')` }}></div>
                    <div className="img" style={{ backgroundImage: `url('/img/me9.jpeg')` }}></div>
                    <div className="img" style={{ backgroundImage: `url('/img/me9.jpeg')` }}></div>
                </div>
            </div>

            <style jsx>{`
                .container {
                    padding-top: 2rem;
                    width: 100%;
                    max-width: 43rem;
                    margin: auto;
                    padding-bottom: 10rem;
                    color: rgb(210, 210, 210);
                    font-family: monospace;
                }
                .gallery {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1rem;
                }
                .img {
                    display: block;
                    height: 35rem;
                    width: 100%;
                    border-radius: 0.3rem;
                    background-position: center;
                    background-size: cover;
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                
                @media (max-width: 600px) {
                    .img {
                        height: 25rem;
                    }
                    .container {
                        padding-bottom: 3rem;
                    }
                }
            `}</style>
        </>
    );
}