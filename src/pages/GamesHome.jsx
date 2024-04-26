import React, { useEffect, useState } from "react";
import { getRooms } from "../utils/api-communicator";
import { useNavigate } from 'react-router-dom';
import { usePlayer } from "../context/PlayerContext";

const GamesHome = ({ socket }) => {

    const navigate = useNavigate();
    const {playerId,Login,Logout} = usePlayer();

    const [rooms, setRooms] = useState([]);

    useEffect(() => {

        getRoomsList();
    }, []);

    const getRoomsList = async () => {
        const data = await getRooms();
        if (data) {
            setRooms(data);
        }
    }

    const CreateGame = async () => {
        socket.emit("createGame",playerId);
    }

    const JoinGame = async (roomId) => {
        socket.emit("joinGame",roomId,playerId);
        return navigate(`/rooms/${roomId}`);
    }

    socket.on("createGame", (room) => {
        console.log(room);
        setRooms([...rooms, room]);
        console.log(rooms);
        return navigate(`/rooms/${room.roomId}`);
    })

    return (
        <div className="container mx-auto">
            <div className="flex">
                <div className="flex flex-col">
                    <img src="rcp.jpg" height={"500px"} width={"500px"}/>
                    <button className="pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500" onClick={CreateGame}>Create Game</button>
                </div>
                <div className="border-solid border-black">
                    <h3>Available Games</h3>
                    <ul className="divide-y divide-gray-100 pointer-events-auto w-[21rem] rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 hover:bg-slate-50 ring-2 ring-indigo-600">
                        {rooms.map((room) => {
                            return <li key={room.roomId} onClick={()=>JoinGame(room.roomId)}>{room.roomId} 1/2</li>
                        })}
                    </ul>
                </div>
            </div>



        </div>
    );
}

export default GamesHome;