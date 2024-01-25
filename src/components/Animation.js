import React, { useState } from 'react';
import '../App.css'; // import your CSS file

function Animation() {
  const [isHidden, setIsHidden] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const toggleMessage = () => {
    setIsHidden(!isHidden);
  };

  const animateElement = () => {
    setIsAnimated(!isAnimated);
  };

  return (
    <div>

      {/* Animations */}
      <div
        id="animatedElement"
        className={isAnimated ? 'fadeIn' : 'hidden'}
      >
        This is an animated element
      </div>
      <button id="animateButton" onClick={animateElement}>
        Animate Element
      </button>
    </div>
  );
}

export default Animation;