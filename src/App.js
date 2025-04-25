import './App.css';
import { useEffect, useState } from 'react';
import { checkNotificationPermission } from './utils/Notification';
import LoginPage from './components/LoginPage';
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import HomePage from './components/HomePage';
import { auth } from './config';
import ChatPage from './components/ChatPage';
import NavBar from './components/NavBar';
import { onAuthStateChanged } from "firebase/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
  {
    path: "/chat/:roomCode",
    element: <ChatPage />,
  }
]);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkPermission = async () => {
      const permission = await checkNotificationPermission();
      console.log("Notification permission: ", permission);
    };
    checkPermission();
  });

  useEffect(()=>{
    const checkLoggedIn = () => {
        onAuthStateChanged(auth, (user) => {
            console.log("User state changed: ", user);
            setLoggedIn(user);
            if (user && window.location.pathname === "/login") {
                window.location.href = "/chat";
            }

            if (!user && window.location.pathname === "/chat") {
              window.location.href = "/login";
            }
        })
    }

    return () => {
        checkLoggedIn();
    }
})

  return (
    <div className="App">
      <NavBar loggedIn={loggedIn} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
