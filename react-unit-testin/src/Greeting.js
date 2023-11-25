// Greeting.js
import React from 'react';

function Greeting({ name = 'Guest' }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;
