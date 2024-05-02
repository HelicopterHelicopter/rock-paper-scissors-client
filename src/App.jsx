import './App.css';
import {Route,Routes} from 'react-router-dom';
import GamesHome from './pages/GamesHome';
//import { socket } from './socket';
import { io } from 'socket.io-client';
import GameRoom from './pages/GameRoom';
import { usePlayer } from './context/PlayerContext';

const socket = io("http://13.127.64.232:5000/");
function App() {
  const {playerId,Login,Logout} = usePlayer();
  socket.on("playerId",(playerId)=>{
    Login(playerId);
    console.log(playerId);
  });
  return (
    <main>
      <Routes>
        <Route path='/' element={<GamesHome socket={socket}/>}/>
        <Route path='/rooms'>
          <Route path=':roomId' element={<GameRoom socket={socket}/>}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App
