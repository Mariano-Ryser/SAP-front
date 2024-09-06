import { useState } from 'react';

export default function Calculadora() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); // Nota: eval tiene riesgos de seguridad, úsalos con precaución
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="container">
      <h1>Calculadora</h1>
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
          <p className='result'>{result}</p>
        </div>
        <div className="buttons">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>

          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>

          <button onClick={clearInput}>C</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>
      </div>

      <style jsx>{`
      .result{
        font-size:2rem;
        color: white;
      }
        .container {
          margin-bottom:9rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .calculator {
          background: black;
          border-radius: 10px;
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
          padding: 20px;
          width: 300px;
        }

        .display {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          color: white;
          padding: 10px;
          font-size: 24px;
          border-radius: 5px;
          margin-bottom: 20px;
        }

        .display input {
          width: 100%;
          background: none;
          border: none;
          color: white;
          text-align: right;
          font-size: 24px;
        }

        .buttons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 10px;
        }

        button {
          background-color: #1caf55;
          color: white;
          padding: 20px;
          font-size: 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #45a049;
        }

        button:nth-child(4n) {
          background-color: #f44336;
        }

        button:nth-child(4n):hover {
          background-color: #e53935;
        }

        button:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
}