import React, { useState } from 'react';

function RenderingLists() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  return (
    <div>
      {/* Rendering Lists */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default RenderingLists;