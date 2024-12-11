import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function ModalComponent({
  content,
  onClose,
  fontSize = "1.2rem",
  previewFontSize = "1rem",
  showPreview = true,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [speed, setSpeed] = useState(70);
  const scrollTimeout = useRef(null);
  const modalContentRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    stopScrolling();
    setIsModalOpen(false);
    onClose && onClose(); // Llamar a onClose si está definido
  };

  const toggleScrolling = () => {
    if (isScrolling) {
      stopScrolling();
    } else {
      startScrolling();
    }
  };

  const startScrolling = () => {
    setIsScrolling(true);
    const scrollStep = () => {
      if (modalContentRef.current) {
        modalContentRef.current.scrollBy({
          top: 1,
          left: 0,
          behavior: "smooth",
        });
        scrollTimeout.current = setTimeout(scrollStep, 220 - speed);
      }
    };
    scrollStep();
  };

  const stopScrolling = () => {
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = null;
    }
    setIsScrolling(false);
  };

  useEffect(() => {
    return () => stopScrolling();
  }, []);

  return (
    <>
      {/* Letra Previa */}
      {showPreview && (
        <div className="container">
          <pre
            className="song-preview"
            onClick={openModal}
            style={{ fontSize: previewFontSize }}
          >
            {content}
          </pre>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <pre className="song-modal" ref={modalContentRef}>
            {content}
          </pre>
            <button className="scroll-button-modal" onClick={toggleScrolling}>
              {isScrolling ? "Detener" : "Bajar"}
            </button>
            <label className="speed-label">
             
              <input
                type="range"
                min="50"
                max="200"
                step="10"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
              />
            </label>
          
          <button className="close-button" onClick={closeModal}>
            X
          </button>
        </div>
      )}

      <style jsx>{`
        .container {
          backdrop-filter: blur(20px);
          padding: 0px 0rem 0px 1rem;
          border-radius: 10px;
        }
        .song-preview {
          font-family: "Roboto Mono", monospace;
          cursor: pointer;
          line-height: 1.5;
          color: white;
          border-radius: 5px;
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
        }
        .song-modal {
          font-family: "Roboto Mono", monospace;
          font-size: ${fontSize};
          line-height: 1.5;
          color: black ;
          width: 96%;
          height: 100%;
          overflow-y: auto;
          margin: 0 auto;
        }
        .controls {
          display: flex;
          flex-direction: column;
          position: fixed;
          bottom: 20px;
          left: 20px;
          z-index: 10000;
        }
        .scroll-button-modal {
          position:absolute;
          bottom:0.7rem;
          left:0.7rem;
          padding: 10px 20px;
          font-size: 16px;
          background-color: ${isScrolling ? "#ff0000" : "#0070f3"};
          background-color: rgba(22, 22, 10, 0.158);
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        } 
        .speed-label{
          position:absolute;
          bottom:1rem;
          right:0.7rem;
          margin-top: 10px;
          font-size: 14px;
          color: black;
        }
        .speed-label input {
          margin-left: 10px;
        }
        .close-button {
          position: fixed;
          top: 10px;
          right: 10px;
          background-color: rgba(8, 8, 8, 0.158);
          color: white;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
          z-index: 10000;
        }
      `}</style>
    </>
  );
}