import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AjaxRequests() {
  const [data, setData] = useState('Loading data...');

  useEffect(() => {
    axios.get('https://reqres.in/api/users/1') // replace with your API endpoint
      .then(response => {
        // Access the data property of the response
        const userData = response.data.data.first_name;
        setData(userData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      {/* AJAX Requests */}
      <div>{data}</div>
    </div>
  );
}

export default AjaxRequests;