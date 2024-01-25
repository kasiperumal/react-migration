import React, { useState } from 'react';

function DomManipulation() {
  const [content, setContent] = useState('Original Content');

  const changeContent = () => {
    setContent('New Content');
  };

  return (
    <div>
      {/* DOM Manipulation */}
      <div>{content}</div>
      <button onClick={changeContent}>Change Content</button>
    </div>
  );
}

export default DomManipulation;