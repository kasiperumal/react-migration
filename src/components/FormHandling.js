import React, { useState } from 'react';

function FormHandling() {
  const [inputVal, setInputVal] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You submitted: ${inputVal}`);
  };

  const handleChange = (event) => {
    setInputVal(event.target.value);
  };

  return (
    <div>
      {/* Form Handling */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputVal} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormHandling;