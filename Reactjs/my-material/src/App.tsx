import React from 'react';
import './App.css';
import Button from './Atoms/Button';

function App() {
  return (
    <div className='App'>
      <Button title='Hello, world!' handleClick={(e) => alert(e)} />
    </div>
  );
}

export default App;
