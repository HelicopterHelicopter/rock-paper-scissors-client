import React, { useEffect, useState } from "react";
import { getRooms } from "../utils/api-communicator";

const GamesHome = ({socket}) => {

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
    })

    return(
        <div>
            <div>
                <ul>
                    {rooms.map((room)=>{
                        return <li key={room.roomId}>{room.roomId}</li>
                    })}
                </ul>
            </div>
            <button onClick={CreateGame}>Create Game</button>
            
        </div>
    );
}

export default GamesHome;