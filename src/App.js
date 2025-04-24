import logo from './logo.svg';
import './App.css';
import { use, useEffect } from 'react';
import { useState } from 'react';
import { checkNotificationPermission } from './utils/Notification';
import LoginPage from './components/LoginPage';
import { set } from 'firebase/database';

function App() {
  useEffect(() => {
    const checkPermission = async () => {
      const permission = await checkNotificationPermission();
      console.log("Notification permission: ", permission);
    };
    checkPermission();
  }, []);

  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;
