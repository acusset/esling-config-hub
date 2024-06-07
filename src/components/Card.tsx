import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Card = ({
  name,
  description,
  config,
}: {
  name?: string;
  description?: string;
  config?: string;
}) => {
  return (
    <div className="card max-w-96 min-w-48 bg-primary-content shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        {config && (
          <SyntaxHighlighter style={docco} language="javascript">
            {config}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  );
};

export default Card;
