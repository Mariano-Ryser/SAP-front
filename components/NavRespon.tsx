import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Test5 from '../pages/ztest/test5';

export default function NavRespon() {
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el menú
  const [bgColor, setBgColor] = useState('url(/img/a0.jpg)'); // Estado para el fondo
  const [letterColor, setLetterColor] = useState('rgb(24, 24, 24)'); // Estado para el color de texto

  // Colores de fondo y texto
  const bgColors = ['url(/img/bBack.jpg)', 'url(/img/a1.png)', 'url(/img/a0.jpg)'];
  const letterColors = [
    'rgb(251, 255, 34)', // Amarillo
    'rgb(255, 255, 255)', // Blanco
    'rgb(124, 252, 0)', // Verde
    'rgb(0, 0, 0)', // Negro
  ];

  // Cambiar el color de fondo
  const changeBgColor = () => {
    const currentIndex = bgColors.indexOf(bgColor);
    const nextIndex = (currentIndex + 1) % bgColors.length;
    const newColor = bgColors[nextIndex];
    setBgColor(newColor);
    document.documentElement.style.setProperty('--bg-color', newColor);
  };

  // Cambiar el color de texto
  const changeLetterColor = () => {
    const currentIndex = letterColors.indexOf(letterColor);
    const nextIndex = (currentIndex + 1) % letterColors.length;
    const newColor = letterColors[nextIndex];
    setLetterColor(newColor);
    document.documentElement.style.setProperty('--letter-color', newColor);
  };

  // Abrir/cerrar el menú
  const openList = () => setIsOpen(!isOpen);

  // Cerrar el menú al hacer clic en un enlace
  const closeAsideOnLinkClick = () => setIsOpen(false);


  return (
    <>
      {/* Botones para cambiar colores */}
      <button className="buttonColor" onClick={changeBgColor}></button>
      <button className="buttonLetterColor" onClick={changeLetterColor}></button>

      {/* Barra de navegación */}
      <nav className="nav">
        <div className="img">
          <Link href="/home">
            <h1 className="logo"></h1>
          </Link>
        </div>

        {/* Botón de menú (hoja) */}
        <div id="burger" className="burger" onClick={openList}>
          <Image
            alt="Burger-Icon"
            src="/img/oja.png"
            height={90}
            width={95}
          />
        </div>
      </nav>

      {/* Menú desplegable */}
      <aside
        style={{
          transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)',
          display: isOpen ? 'block' : 'none',
        }}
        id="aside"
        className="asideBar"
      >
        <ul className="ul">
          <Test5 />
          <Link href="/">
            <li onClick={closeAsideOnLinkClick}>/Home</li>
          </Link>
          <Link href="/proyectos/noti">
            <li onClick={closeAsideOnLinkClick}>/Nota</li>
          </Link>
          <Link href="../about">
            <li onClick={closeAsideOnLinkClick}>/About</li>
          </Link>
          <Link href="/proyectos/proyects">
            <li onClick={closeAsideOnLinkClick}>/Proyects</li>
          </Link>
          <Link href="/proyectos/icons">
            <li onClick={closeAsideOnLinkClick}>/Icons</li>
          </Link>
          <Link href="../songs">
            <li onClick={closeAsideOnLinkClick}>/Songs</li>
          </Link>
          <Link href="../idiomas/DayCard">
            <li onClick={closeAsideOnLinkClick}>/Deutsch</li>
          </Link>
          <Link href="../idiomas/EnglishCard">
            <li onClick={closeAsideOnLinkClick}>/English</li>
          </Link>
          <Link href="/proyectos/msj">
            <li onClick={closeAsideOnLinkClick}>/ComentarBox</li>
          </Link>
          <Link href="/proyectos/personaje">
            <li onClick={closeAsideOnLinkClick}>/CreateChar</li>
          </Link>
          <Link href="/proyectos/productCreator">
            <li onClick={closeAsideOnLinkClick}>/ProductCreator</li>
          </Link>
          <Link href="/proyectos/logazo">
            <li onClick={closeAsideOnLinkClick}>/Logo</li>
          </Link>
          <Link href="/proyectos/musica">
            <li onClick={closeAsideOnLinkClick}>/MusicaProyect</li>
          </Link>
          <Link href="/proyectos/hb/sound/music">
            <li onClick={closeAsideOnLinkClick}>/GameSound</li>
          </Link>
          <Link href="/proyectos/posts/books">
            <li onClick={closeAsideOnLinkClick}>/BooksProyect</li>
          </Link>
          <Link href="../partners">
            <li onClick={closeAsideOnLinkClick}>/Partners</li>
          </Link>
        </ul>

    
      </aside>

      {/* Estilos */}
      <style jsx>{`
        /* Botones de cambio de color */
        .buttonColor,
        .buttonLetterColor {
          z-index: 2;
          position: fixed;
          left: 15px;
          background-color: rgba(8, 8, 8, 0.123);
          border-radius: 50%;
          height: 40px;
          width: 40px;
          border: 1px solid rgba(250, 235, 215, 0.308);
        }
        .buttonColor {
          bottom: 125px;
        }
        .buttonLetterColor {
          bottom: 175px;
        }

        /* Barra de navegación */
        .nav {
          position: fixed;
          bottom: 4rem;
          right: 1rem;
          width: 8rem;
          display: flex;
          align-items: center;
          z-index: 2;
        }

        /* Botón de menú (hoja) */
        .burger {
          position: absolute;
          bottom: 5rem;
          top: -1.6rem;
          transform: scale(1);
          transition: 0.05s;
          cursor: pointer;
        }
        .burger:active {
          transform: scale(0.95);
        }

        /* Menú desplegable */
        .asideBar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          backdrop-filter: blur(7px);
          overflow-y: scroll;
          transform: translateY(-100%);
          transition: transform 0.3s ease-in-out;
          z-index: 1;
          padding-top: 4.1rem;
          text-align: center;
        }
        .asideBar::-webkit-scrollbar {
          width: 0.4rem;
        }
        .asideBar::-webkit-scrollbar-thumb {
          background: rgb(0, 0, 0);
        }

        /* Lista de enlaces */
        .ul {
          max-width: 56rem;
          margin: 0 auto;
          padding: 0;
          list-style-type: none;
        }
        .ul li {
          font-size: 1.6rem;
          line-height: 1.9rem;
          margin: 0.5rem 0;
          border-bottom: 1px solid gray;
          cursor: pointer;
        }
        .ul li:hover {
          background-color: rgb(72, 199, 72);
          color: white;
        }

        /* Estilos responsivos */
        @media (max-width: 600px) {
          .nav {
            bottom: 2.9rem;
            right: 0.1rem;
            width: 10rem;
          }
          .burger {
            right: 1.5rem;
            top: -2.2rem;
            animation: alien alternate 1s 1;
          }
          @keyframes alien {
            1% {
              right: -10.3rem;
            }
            100% {
              right: 1.7rem;
            }
          }
          .asideBar {
            backdrop-filter: blur(14px);
          }
          .ul li {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}