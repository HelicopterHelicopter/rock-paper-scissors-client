import React, { useState } from "react";
import { io } from 'socket.io-client';
//import { socket } from "../socket";


const GamesHome = ({socket}) => {

    const [rooms,setRooms] = useState([]);

    const CreateGame = () => {
        socket.emit("createGame");
    }
    return(
        <div>
            <div>
                <ul>
                    {rooms.map((room)=>{
                        return <li>room.roomId</li>
                    })}
                </ul>
            </div>
            <button onClick={CreateGame}>Create Game</button>
            
        </div>
    );
}

export default GamesHome;