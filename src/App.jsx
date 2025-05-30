import React from 'react'
import './index.css'
import NavBar from './components/NavBar';
import MainRoutes from './routes/MainRoutes';
import { useLocation } from 'react-router-dom';


const App = () => {
  const location = useLocation()
  let isHome = location.pathname === '/';

  return (
    <div className={isHome ? "parent parent2":"parent"}>
      <NavBar />
      <MainRoutes></MainRoutes>

    </div>
  )
}

export default App
