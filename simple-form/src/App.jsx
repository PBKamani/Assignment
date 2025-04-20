import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
    <div className="main-container">

      <div className="content-box">
        {/* Left: Form Inputs */}
        <div className="form-left">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='inp-name'
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='inp-email'
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='inp-msg'
          />
        </div>

        {/* Right: Live Preview */}
        <div className="preview-right">
          <div className="preview-name">
          <p>Name:{name}</p>
          
          </div>

          <div className="preview-Email">
            <p>Email:{email}</p>
          </div>

          <div className="preview-Msg">
            <strong></strong>
            <p style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            Message:{message}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Center Reset Button */}
      <div className="button-center">
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className='left-main-cont'>
        <h2 className='LMC-text'>Assignment-Form</h2>
      </div>
    </div>

    
    </>
  );
}

export default App;
