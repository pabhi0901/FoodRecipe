import React from 'react'
import './index.css'
import NavBar from './components/NavBar';
import MainRoutes from './routes/MainRoutes';


const App = () => {
  return (
    <div className='parent'>
      <NavBar />
      <MainRoutes></MainRoutes>

    </div>
  )
}

export default App
