import Footer from './Components/Footer.jsx';
import GameSphere from './Components/GameSphere.jsx';
import Navbar from './Components/Navbar';
import AboutMe from './Pages/AboutMe.jsx';
import MainPage from './Pages/MainPage.jsx';
import LoginRegister from './Pages/LoginRegister.jsx';
import { createBrowserRouter, RouterProvider,Navigate,Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarGame from './Pages/CarGame.jsx';
import { useState,useEffect } from 'react';
import { auth, db } from "./Components/Firebase";





function App() {


  const [user, setUser] = useState('');
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  const router = createBrowserRouter([
    {
      path: "/mainContent",
      element: (
        <>
          <MainPage />
        </>
      ),
    },
    {
      path: "/",
      element: user ? (
        <Navigate to="/mainContent" />
      ) : (
        <>
          <LoginRegister />
          <ToastContainer />
        </>
      ),
    },
    {
      path: "/aboutme",
      element: <AboutMe />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
