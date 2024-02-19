import './App.css';
import LoginForm from "./Components/Login";
import HomePage from "./Components/Home";

import React, { useState } from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (userData) => {

    console.log('Logged in with:', userData);
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <HomePage />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
