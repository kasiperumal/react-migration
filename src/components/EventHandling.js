import React from 'react';

function EventHandling() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      {/* Event Handling */}
      <button onClick={handleClick}>Click for Alert</button>
    </div>
  );
}

export default EventHandling;