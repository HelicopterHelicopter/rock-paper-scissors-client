import React from "react";
import { usePlayer } from "../context/PlayerContext";

const ChoiceButton = ({text,callback}) => {
    const {playerId,Login,Logout} = usePlayer();
    // const choiceMade = () => {
    //     console.log(text);
    //     console.log(roomId);
    //     socket.emit("choiceMade",roomId,playerId,text);
    // }
    return (
        <button onClick={callback} className="pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">{text}</button>
    );
}

export default ChoiceButton;