import React, { useState } from 'react';
import './GreetingCard_T2.css';

const GreetingCard_T2 = () => {
  const [userType, setUserType] = useState('guest');
  const [timeOfDay, setTimeOfDay] = useState('morning');

  const getMessage = () => {
    switch (userType) {
      case 'guest':
        return 'Hello! Welcome to Perminant.';
      case 'returning':
        return 'Welcome back to Perminant!';
      case 'admin':
        return 'Admin access granted.';
      default:
        return '';
    }
  };

  return (
    <div className={`card ${timeOfDay}`}>
      <h1 className='getmsg'>{getMessage()}</h1>
      <p className='tod'>Have a great {timeOfDay}!</p>

      <div className="dropdowns">
        <label className='User-Type'>
          User Type:
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="guest">Guest</option>
            <option value="returning">Returning</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <label className='t-o-d'>
          Time of Day:
          <select value={timeOfDay} onChange={(e) => setTimeOfDay(e.target.value)}>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default GreetingCard_T2;
