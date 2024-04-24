import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import {Route,Routes} from 'react-router-dom';
import GamesHome from './pages/GamesHome';

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<GamesHome/>}/>
      </Routes>
    </main>
  )
}

export default App
