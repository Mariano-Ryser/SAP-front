import React, { useEffect } from 'react';
import Prism from 'prismjs';

type CodeBlockProps = {
  code: string;
  language: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll(); // Resalta el código después de que el componente se renderiza
  }, []);

  return (
    <pre className="rounded-md p-4 bg-gray-100 dark:bg-gray-800">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default CodeBlock;
