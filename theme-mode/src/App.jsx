import React, { useState } from 'react';
import './App.css';

function App() {
  const [mode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!mode);
  };

  let className = 'app light'; 
  if (mode === true) {
    className = 'app dark';
  }

  return (
    <>
      <div className={className}>
        <button className="toggle-button" onClick={toggleMode}>
          Toggle Theme
        </button>
      </div>
    </>
  );
}

export default App;
