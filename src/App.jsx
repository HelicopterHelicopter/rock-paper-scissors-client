import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import {Route,Routes} from 'react-router-dom';
import GamesHome from './pages/GamesHome';
//import { socket } from './socket';
import { io } from 'socket.io-client';
import GameRoom from './pages/GameRoom';

const socket = io("http://localhost:5000");
function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<GamesHome socket={socket}/>}/>
        <Route path='/room/:roomId' element={<GameRoom socket={socket}/>}/>
      </Routes>
    </main>
  )
}

export default App
