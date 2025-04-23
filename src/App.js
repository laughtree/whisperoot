import logo from './logo.svg';
import './App.css';
import { database } from './config.js';
import { get, ref, child } from 'firebase/database';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, 'test')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setData(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test database: {data ? data : "Loading..."}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
