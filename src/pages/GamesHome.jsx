import React, { useEffect, useState } from "react";
import { getRooms } from "../utils/api-communicator";
import {useNavigate} from 'react-router-dom';

const GamesHome = ({socket}) => {

    const navigate = useNavigate();

    const [rooms,setRooms] = useState([]);

    useEffect(()=>{
        
        getRoomsList();
    },[]);

    const getRoomsList = async () => {
        const data = await getRooms();
        if(data){
            setRooms(data);
        }
    }

    const CreateGame = async () => {
        socket.emit("createGame");
    }

    socket.on("createGame",(room)=>{
        console.log(room);
        setRooms([...rooms,room]);
        console.log(rooms);
        return navigate(`/room/${room.roomId}`);
    })

    return(
        <div>
            <div>
                <ul>
                    {rooms.map((room)=>{
                        return <li key={room.roomId}>{room.roomId} 1/2</li>
                    })}
                </ul>
            </div>
            <button className="pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500" onClick={CreateGame}>Create Game</button>
            
        </div>
    );
}

export default GamesHome;