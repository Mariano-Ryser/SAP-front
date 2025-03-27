import React, { useState } from 'react';
import Link from 'next/link';

const Cabezera = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { href: "/proyectos", text: "Proyectos" },
    { href: "/about", text: "About Me" },
    { href: "/notis", text: "Noticias" },
    { href: "/adminDash", text: "Admin" }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="home-link">HOME</Link>
        
        {/* Menú desktop (solo visible en pantallas grandes) */}
        <nav className="desktop-nav">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href} className="nav-link">
              {item.text}
            </Link>
          ))}
        </nav>

        {/* Botón hamburguesa (solo móvil) */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>

      {/* Menú móvil (aparece desde la derecha) */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {menuItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              className="mobile-link"
              onClick={toggleMenu}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>

      {/* Fondo borroso cuando el menú está abierto */}
      {isMenuOpen && <div className="backdrop" onClick={toggleMenu}></div>}

      <style jsx>{`
        /* Variables */
        :root {
          --neon-blue: rgba(10, 175, 255, 0.8);
          --glass-dark: rgba(20, 30, 40, 0.95);
          --transition: all 0.3s ease-out;
        }

        /* Header principal */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: var(--glass-dark);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(10, 175, 255, 0.2);
          z-index: 1000;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 4rem;
          padding: 0 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .home-link {
          color: white;
          font-size: 1.3rem;
          font-weight: 600;
          text-decoration: none;
          text-shadow: 0 0 8px var(--neon-blue);
        }

        /* Menú desktop */
        .desktop-nav {
          display: none;
          gap: 1.5rem;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 1rem;
          transition: var(--transition);
          padding: 0.5rem 0;
          position: relative;
        }

        .nav-link:hover {
          color: var(--neon-blue);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--neon-blue);
          transition: var(--transition);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* Botón hamburguesa */
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
        }

        .line {
          height: 2px;
          width: 100%;
          background: white;
          transition: var(--transition);
        }

        .hamburger.active .line:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }

        .hamburger.active .line:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active .line:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }

        /* Menú móvil */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -260px;
          width: 250px;
          height: 100vh;
          background: var(--glass-dark);
          backdrop-filter: blur(10px);
          border-left: 1px solid rgba(10, 175, 255, 0.2);
          z-index: 1000;
          transition: var(--transition);
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-menu-content {
          padding: 5rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-link {
          color: white;
          text-decoration: none;
          font-size: 1.1rem;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: var(--transition);
        }

        .mobile-link:hover {
          background: rgba(10, 175, 255, 0.1);
          color: var(--neon-blue);
        }

        /* Fondo borroso */
        .backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(2px);
          z-index: 999;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .hamburger {
            display: none;
          }

          .desktop-nav {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
};

export default Cabezera;