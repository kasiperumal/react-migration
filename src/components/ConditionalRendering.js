import React, { useState } from 'react';

function ConditionalRendering() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {/* Conditional Rendering */}
      {isVisible && <div id="conditionalMessage">This is a message</div>}
      <button onClick={toggleVisibility}>Toggle Message</button>
    </div>
  );
}

export default ConditionalRendering;