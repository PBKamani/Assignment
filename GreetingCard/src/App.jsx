import React from 'react';
import GreetingCard from './components/GreetingCard';
import GreetingCard_T2 from './components/GreetingCard_T2';
import './App.css'; // Import the App CSS file

const App = () => {
  return (
    <>
        <GreetingCard/>
    <div className="app">
      <div className="cards-container">
<GreetingCard_T2/>
      </div>
    </div>

    </>
  );
};

export default App;